

import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaGlobe } from "react-icons/fa";
import './WebStyle.css'
import { Select } from "@/components/ui/select";
export default function Schedule() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeZones, setTimeZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [selectedTime, setSelectedTime] = useState(null);
  const [localTime, setLocalTime] = useState("");
  const [email, setEmail] = useState("");
  const [employees, setEmployees] = useState("");
  const [bookingEmployees, setBookingEmployees] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success");

  const generateTimeSlots = () => {
    const slots = [];
    const now = DateTime.now().setZone(selectedZone);
    const isToday = selectedDate
      ? DateTime.fromJSDate(selectedDate).hasSame(now, "day")
      : false;

    const startTime = isToday
      ? now.plus({ minutes: 15 - (now.minute % 15) }) // next 15-min slot
      : DateTime.fromObject({ hour: 0, minute: 0 });

    const endTime = DateTime.fromObject({ hour: 23, minute: 59 });

    let current = startTime;
    while (current <= endTime) {
      slots.push(current.toFormat("h:mm a"));
      current = current.plus({ minutes: 15 });
    }

    return slots;
  };

  useEffect(() => {
    const zones = Intl.supportedValuesOf("timeZone");
    const now = DateTime.now();

    const formattedZones = zones
      .map((zone) => {
        try {
          const dt = now.setZone(zone);
          return {
            label: `${zone} (${dt.toFormat("ZZZZ")}, ${dt.toFormat("h:mm a")})`,
            value: zone,
          };
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    setTimeZones(formattedZones);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = DateTime.now().setZone(selectedZone);
      setLocalTime(now.toFormat("h:mm a"));
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedZone]);

  const startDate = DateTime.now().startOf("day");
  const endDate = startDate.plus({ days: 30 }).endOf("day");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCalendar(true);
  };

  const sendBookingEmail = async (bookingData) => {
    try {
      const userEmailResponse = await fetch(
        "https://neweyemastr-1d5aea0f3ae9.herokuapp.com/user/dynamicEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: bookingData.email,
            subject: "Your MaxPOD Demo Booking Confirmation",
            html: `
            <h3>Thank you for booking a demo!</h3>
            <p>Your demo is scheduled for:</p>
            <p><strong>Date:</strong> ${DateTime.fromJSDate(selectedDate).toFormat("cccc, dd LLL yyyy")}</p>
            <p><strong>Time:</strong> ${selectedTime} (${selectedZone})</p>
            <p>We're excited to show you how MaxPOD can help your team!</p>
          `,
          }),
        }
      );

      const adminEmailResponse = await fetch(
        "https://neweyemastr-1d5aea0f3ae9.herokuapp.com/user/dynamicEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "lukemikic888@gmail.com",
            subject: "New Demo Booking",
            html: `
            <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    
    <h1 style="color: #333; text-align: center; border-bottom: 2px solid #4fc6e0; padding-bottom: 10px;">
      📅 New Demo Booking
    </h1>

    <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${bookingData.name}</p>
    <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${bookingData.email}</p>
    <p style="font-size: 16px; color: #555;"><strong>Phone:</strong> ${bookingData.phone}</p>

    <p style="font-size: 16px; color: #555; background: #f1faff; padding: 10px; border-radius: 6px;">
      <strong>Demo Time:</strong> 
      ${DateTime.fromJSDate(selectedDate).toFormat("cccc, dd LLL yyyy")} 
      at ${selectedTime} (${selectedZone})
    </p>

    ${bookingData.message ? `
      <p style="font-size: 16px; color: #555;"><strong>Message:</strong> ${bookingData.message}</p>
    ` : ''}

    <div style="text-align: center; margin-top: 20px;">
      <a href="mailto:${bookingData.email}" 
         style="display: inline-block; padding: 12px 24px; background-color: #4fc6e0; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;">
        Reply to ${bookingData.name}
      </a>
    </div>

  </div>
</div>

          `,
          }),
        }
      );

      const userResult = await userEmailResponse.json();
      const adminResult = await adminEmailResponse.json();

      if (!userEmailResponse.ok || !adminEmailResponse.ok) {
        console.error("Email sending failed:", {
          userError: userResult,
          adminError: adminResult,
        });
        throw new Error("Failed to send confirmation emails");
      }

      return true;
    } catch (error) {
      console.error("Error sending emails:", error);
      return false;
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const bookingData = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      employees: formData.get("employees"),
      message: formData.get("message"),
      date: selectedDate,
      time: selectedTime,
      timeZone: selectedZone,
    };

    const emailSuccess = await sendBookingEmail(bookingData);

    if (emailSuccess) {
      setModalMessage("Demo booked successfully! Check your email for confirmation.");
      setModalType("success");
      setShowModal(true);
      setShowCalendar(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setEmail("");
    } else {
      setModalMessage("Demo booked, but we couldn't send confirmation emails. Please contact support.");
      setModalType("error");
      setShowModal(true);
    }
  };
  return (
    <div className="WebSiteStyle">

      {/* section first */}
      <div className="  px-4  py-12">
        {/* Top Section */}
        <h1 className="font-semibold mb-4 text-center">
          “Let’s Book Demo with {" "}
          <strong className="text-blue-500 font-semibold">Luke</strong>
          ”
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-center">
          Discover the proven strategies and blueprints I’ve developed, that will allow you to quit your
          without 9-5 and succeed on YouTube.
        </p>



        {/* Form Section */}
        {!showCalendar ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left mt-10">
            <label className="block font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            />



            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-300 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto mt-10 border-t pt-10 text-center items-center flex flex-col ">
            <h2 className="text-2xl font-bold mb-2">Luke Appointment</h2>
            <p className="flex items-center justify-center text-gray-500 text-sm mb-4">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 2a1 1 0 000 2h1v1H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-1V4h1a1 1 0 000-2h-1V0h-2v2H8V0H6v2H5zM6 6h8v10H6V6z" />
              </svg>
              30 min
            </p>
            <p className="text-gray-600 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
              Thanks for booking a meeting with us! We may reach out beforehand to connect quickly and
              make our time together even more productive. Feel free to reach out anytime with additional
              comments or questions. Chat soon!
            </p>

            {/* Show date/time selection OR booking form */}
            {!selectedDate || !selectedTime ? (
              <>
                {/* Dynamic Date Picker */}
                <div className="mb-6 text-center">
                  <h2 className="text-xl font-semibold mb-4">Select a Day</h2>
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}

                    // 2) Date bounds: only these dates are selectable
                    fromDate={startDate.toJSDate()}
                    toDate={endDate.toJSDate()}
                    disabled={[
                      { before: startDate.toJSDate() },
                      { after: endDate.toJSDate() }
                    ]}

                    // 3) Month bounds: only months in your window are navigable
                    fromMonth={startDate.toJSDate()}
                    toMonth={endDate.toJSDate()}

                    className=""
                  />
                </div>

                {/* Time Zone Dropdown */}
                <div className="mb-6 text-left w-full">
                  <h2 className="text-xl font-semibold mb-2">Time Zone</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <FaGlobe className="text-gray-500" />
                    <select
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      value={selectedZone}
                      onChange={(e) => setSelectedZone(e.target.value)}
                    >
                      {timeZones.length === 0 ? (
                        <option value="">Loading timezones...</option>
                      ) : (
                        timeZones.map((tz) => (
                          <option key={tz.value} value={tz.value}>
                            {tz.label}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                  <p className="text-sm text-gray-600">
                    Current time: <strong>{localTime}</strong>
                  </p>
                </div>

                {selectedDate && (
                  <div className="mt-6 text-left">
                    <h2 className="text-xl font-semibold mb-2">Select a Time</h2>
                    <p className="text-sm text-gray-500 mb-4">Duration: 30 min</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
                      {generateTimeSlots().map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(time)}
                          className={`border px-4 py-2 rounded text-sm text-left ${selectedTime === time
                            ? "bg-blue-50 border-blue-500 text-blue-700 font-medium"
                            : "border-gray-300 hover:border-blue-400"
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Booking Form - shown in place of date/time selection */
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">You're Booking a Demo</h3>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedDate(undefined);
                    setSelectedTime(null);
                  }}
                  className="text-sm text-blue-500 hover:text-blue-600 underline mb-4"
                >
                  ← Back to Date/Time Selection
                </button>

                <p className="text-gray-700 mb-4">
                  📅 <strong>{DateTime.fromJSDate(selectedDate).toFormat("cccc, dd LLL yyyy")}</strong><br />
                  🕓 <strong>{selectedTime}</strong><br />
                  🌐 <strong>{selectedZone}</strong>
                </p>

                {/* Demo Booking Form */}
                <form className="space-y-4 max-w-md flex flex-col" onSubmit={handleBookingSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      required
                    />
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Your phone number"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Any specific questions?"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 transition"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        )}







      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 modal flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="text-center">
              {modalType === 'success' ? (
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              ) : (
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
              )}

              <h3 className={`text-lg font-medium mb-2 ${modalType === 'success' ? 'text-green-900' : 'text-red-900'}`}>
                {modalType === 'success' ? 'Booking Confirmed!' : 'Booking Issue'}
              </h3>

              <p className="text-gray-600 mb-6">
                {modalMessage}
              </p>

              <button
                onClick={() => setShowModal(false)}
                className={`w-full px-4 py-2 rounded-md text-white font-medium transition-colors ${modalType === 'success'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
                  }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
