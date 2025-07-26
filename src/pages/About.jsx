
import { TbHeartHandshake } from "react-icons/tb";
import React from 'react'
import LukeImage from '../assets/image/luke.jpg';

export const About = () => {

    return (
        <>
            <section id="author-section" className="pb-5 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-10">
                        <TbHeartHandshake className="text-cyan-500 text-4xl mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">About The Author</h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
                        <div className="md:w-1/3 relative">
                            {/* Circular background with accent */}
                            <div className="absolute w-full h-full rounded-full bg-[#5DCDF1] transform translate-x-2 translate-y-2">
                                {/* Curved accent line */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[10%]">
                                    <svg width="20" height="80" viewBox="0 0 20 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2C8 2 2 20 2 40C2 60 8 78 18 78" stroke="#5DCDF1" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                </div>
                                {/* Curved accent for bottom right */}
                                <div className="absolute right-0 bottom-5 transform translate-x-[30%]">
                                    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 38C15 38 35 32 48 2" stroke="#5DCDF1" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            {/* Author image */}
                            <div className="relative z-10 overflow-hidden rounded-full aspect-square">
                                <img
                                    src={LukeImage}
                                    alt="Luke Mikic"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 text-justify px-5">
                            <h3 className="text-3xl font-bold mb-4">
                                For Those who don’t know me, Hi, my name is Luke.
                            </h3>
                            <div className="text-gray-700 space-y-4 text-lg ">
                                <p>
                                    I started making YouTube videos part time in 2024, after working behind the scenes for dozens of different YouTubers between 2021 - 2023. <br />
                                    I started off 2024 with <b>0 views, under 900 subscribers on both channels I begun making content for, and $0 of revenue.</b><br />
                                    12 months later, my 2 YouTube channels both grew to over <b>15,000 subscribers</b>, both generated more than <b>1.5M long form views in 2024</b>, and are both making more than <b>5 figures of revenue per month.</b><br />
                                    Thanks to YouTube, I’ve left the 9-5 grind behind me, forever, and I've even found my dream job.<br />
                                    I’ve now been able to travel to over 70 different cities, and +30 countries since I escaped Australia forever in 2021, all while working online, doing what I love.<br />
                                    The past 3 years have been a whirlwind, and I’m now thankful enough to have a team of incredible creatives who work with me, to create inspiring and educational content that helps people build a life they love.<br />
                                    I genuinely look forward to waking up everyday, and getting to do what I love,  with <b>freedom, fun and flexibility, and creating content that has a tangible impact on people.</b><br />
                                    I get messages every day saying how my <b>videos have changed someone’s life and I want to continue having that impact into the future with everything that we do as a company.</b><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video Section */}
            
            </section>

        </>
    )
}

