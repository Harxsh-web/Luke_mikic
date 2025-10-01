import React from 'react';
import { ArrowRightIcon, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const QuestionSection = ({ questionsSection = {} }) => {
  const {
    title = "Questions?",
    subtitle = "Still not sure or just want to chat?",
    contactText = "Contact us at",
    contactEmail = "lukemikic888@gmail.com",
    description = "If you've got any questions about whether the course is right for you, drop us an email and we'll get back to you as soon as possible.",
    backgroundColor = "bg-white"
  } = questionsSection;

  return (
    <>
      <section id="contact" className={`py-20 ${backgroundColor}`}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <Mail className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
            <p className="text-xl text-gray-700 mb-2">{subtitle}</p>
            <p className="text-lg">
              {contactText}{' '}
              <a
                href={`mailto:${contactEmail}`}
                className="text-cyan-600 font-semibold hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </div>
          {description && (
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-700">{description}</p>
            </div>
          )}
        </div>

      </section>
      <section id="book-section" class="py-20 bg-gray-100 text-center">
        <h2 class="text-3xl font-bold mb-4">Book Your Discovery Call with Luke Now</h2>
        <p class="mb-6">
          Click below to book your session.
        </p>
        <a href="stripe-payment-link">
          <Button
            onClick={() => window.open("https://buy.stripe.com/8x200ibyab4W10v4lIgEg00", "_blank")}
            className="bg-[#4fc6e0] hover:bg-black hover:text-white text-black px-10 py-8 rounded-full text-lg font-semibold shadow-md cursor-pointer"
          >
            Book Now
            {/* <ArrowRightIcon className="ml-2 h-6 w-6" /> */}
          </Button>
        </a>
      </section>
    </>
  );
};

export default QuestionSection;