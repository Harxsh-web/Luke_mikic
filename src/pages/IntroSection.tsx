import React from 'react'
import img from '../assets/bg.png'
export const IntroSection = () => {
  return (
    <>
      <div className='mt-10'>
        <h2 className="text-4xl md:text-5xl font-medium text-center leading-snug text-[#1a1325]">
          A YouTube Channel can completely change <br />
          your life –{' '}
          <span className="relative inline-block font-bold text-[#1a1325]">
            it changed mine.
            <svg
              viewBox="0 0 400 20"
              className="absolute -bottom-2 left-0 w-full h-4"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M5 15 C100 25, 300 0, 395 10"
                stroke="#f87171"  // Tailwind's red-400
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </span>
        </h2>

      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-8 gap-8 mt-5'>
        <div className='flex-1 max-w-md lg:max-w-lg'>
          <img
            src={img}
            alt="Background"
            className='w-full h-auto rounded-lg shadow-md object-cover'
          />
        </div>
        <div className='flex-1 max-w-2xl'>
          <div className='prose prose-lg max-w-none'>
            <div className='text-gray-700 leading-relaxed space-y-4'>
              <p className='text-left text-lg'>
                9–5 Escape Artist Academy <br /><br />


                The Part-Time Creator Academy<br /><br />
                From 9–5 to Full-Time Creator
                <br /><br />

                The 9 - 5 Escape: YouTube Edition<br /><br />

                The YouTube Escape Plan <br /><br />

                9 - 5 Escape Artist: The YouTube Blueprint
                <br /><br />
                <b>
                  The Escape Artist: Build Your Exit with YouTube
                </b>

                <br /><br />
                <b>
                  9–5 Escape Artist: YouTube Freedom Formula
                </b>
                <br /><br />

                I’ve been lucky enough to learn from, and work with, some of
                the biggest names in YouTube, AAANNNDDDD the good news is…. <br /><br />

                If you’re watching this video, you’re going to learn the secrets,
                I’ve used to make my first million dollars with YouTube in under 4 Years… <br /><br />

                Welcome, my names Luke, and YouTube has changed my life since I made my first video
                in 2020, which as you can see, was TERRIBLE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
