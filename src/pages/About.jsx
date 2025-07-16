
import { TbHeartHandshake } from "react-icons/tb";
import React, { useRef, useState, useEffect } from 'react'
import LukeImage from '../assets/image/luke.jpg';
import videoFile from '../assets/video/YouTube_LandingPage_1.webm'
export const About = () => {
    const videoRef = useRef(null);
    const [showControls, setShowControls] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [autoplayEnded, setAutoplayEnded] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Start autoplay for 5 seconds
            video.play();
            setIsPlaying(true);
            
            const autoplayTimer = setTimeout(() => {
                setAutoplayEnded(true);
            }, 5000);

            const handleTimeUpdate = () => {
                setCurrentTime(video.currentTime);
            };

            const handleLoadedMetadata = () => {
                setDuration(video.duration);
            };

            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);

            video.addEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);

            return () => {
                clearTimeout(autoplayTimer);
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('pause', handlePause);
            };
        }
    }, []);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
        }
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        if (video) {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * duration;
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleVideoClick = () => {
        setShowControls(true);
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

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
                <div className="max-w-2xl mx-auto flex items-center justify-center text-center relative mt-10 px-6">
                    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        <video
                            ref={videoRef}
                            src={videoFile}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={handleVideoClick}
                            loop
                            muted
                        />
                        
                        {/* Custom Controls Overlay */}
                        {showControls && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                {/* Progress Bar */}
                                <div className="mb-3">
                                    <div 
                                        className="w-full h-2 bg-gray-600 rounded-full cursor-pointer"
                                        onClick={handleSeek}
                                    >
                                        <div 
                                            className="h-2 bg-red-500 rounded-full"
                                            style={{ width: `${(currentTime / duration) * 100}%` }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Controls */}
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={togglePlayPause}
                                            className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full hover:bg-white hover:text-black transition-colors"
                                        >
                                            {isPlaying ? (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                            )}
                                        </button>
                                        
                                        <span className="text-sm">
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </span>
                                        
                                        <button
                                            onClick={toggleMute}
                                            className="flex items-center justify-center w-8 h-8 hover:bg-gray-700 rounded transition-colors"
                                        >
                                            {isMuted ? (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    
                                    <button
                                        onClick={() => setShowControls(false)}
                                        className="text-white/70 hover:text-white transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        {/* Click to show controls overlay */}
                        {!showControls && (
                            <div 
                                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                                onClick={handleVideoClick}
                            >
                                <div className="text-white text-center">
                                    <div className="w-16 h-16 mx-auto mb-2 bg-red-500/80 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                    {/* <p className="text-sm">Click to show controls</p> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

