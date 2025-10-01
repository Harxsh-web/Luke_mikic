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
   <section
  id="book-section"
  className="py-24 bg-gray-100 text-center flex flex-col items-center justify-center"
>
  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
    Book Your Discovery Call with Luke Now
  </h2>
  <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
    Click below to book your session and secure your spot with Luke.
  </p>
  <a
    href="https://buy.stripe.com/6oUeVc6dQ1umgZt4lIgEg03"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#4fc6e0] hover:bg-black hover:text-white text-black px-12 py-4 md:px-16 md:py-6 rounded-full text-lg md:text-xl font-semibold shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
  >
    Book Now
    {/* Uncomment if you want an icon */}
    {/* <ArrowRightIcon className="ml-2 h-6 w-6" /> */}
  </a>
</section>

    </>
  );
};

export default QuestionSection;