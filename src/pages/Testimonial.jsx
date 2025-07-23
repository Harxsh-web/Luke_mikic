import img from '../assets/growth_chart1.png';
import test2 from '../assets/testimonial2.png';
import growthchart from '../assets/growth_chart2.png';
import test from '../assets/testimonial1.png';
import test4 from '../assets/img4.png';
import test3 from '../assets/testimonial3.png';
import growth1 from '../assets/chart3.png';
import test5 from '../assets/img-5.png';

// VideoPlayer component with YouTube-style controls
function VideoPlayer({ name = "Testimonial", videoSrc }) {
  if (!videoSrc) {
    return null;
  }

  const isYouTubeVideo = videoSrc &&
    (videoSrc.includes('youtube.com') ||
      videoSrc.includes('youtu.be') ||
      videoSrc.includes('youtube') ||
      videoSrc.includes('shorts'));

  const isImage = videoSrc &&
    (videoSrc.endsWith('.jpg') ||
      videoSrc.endsWith('.jpeg') ||
      videoSrc.endsWith('.png') ||
      videoSrc.endsWith('.gif') ||
      videoSrc.endsWith('.webp') ||
      videoSrc.startsWith('/uploads/'));

  const isRegularVideo = videoSrc &&
    (videoSrc.endsWith('.mp4') ||
      videoSrc.endsWith('.webm') ||
      videoSrc.endsWith('.ogg') ||
      videoSrc.includes('cloudinary.com/') ||
      videoSrc.includes('.mp4'));

  const getYouTubeId = (url) => {
    if (!url) return '';
    if (url.includes('youtu.be')) {
      return url.split('youtu.be/')[1]?.split('?')[0];
    }
    if (url.includes('/shorts/')) {
      return url.split('/shorts/')[1]?.split('?')[0];
    }
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
    return match && match[1] ? match[1] : '';
  };

  const youtubeEmbedUrl = isYouTubeVideo ?
    `https://www.youtube.com/embed/${getYouTubeId(videoSrc)}?autoplay=0&rel=0` :
    '';

  if (isYouTubeVideo) {
    return (
      <div className="bg-black relative w-full h-full aspect-video">
        <iframe
          src={youtubeEmbedUrl}
          title={`${name} Testimonial Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }

  if (isImage) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#f8f6f3]">
        <img
          src={videoSrc}
          alt={`${name} testimonial image`}
          className="w-full h-full object-contain max-h-[400px]"
        />
      </div>
    );
  }

  if (isRegularVideo) {
    return (
      <div className="bg-black relative w-full h-full aspect-video">
        <video
          src={videoSrc}
          controls
          className="w-full h-full"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return null;
}

function GrowthChart({ imageUrl = "/attached_assets/image_1746469561985.png", alt = "YouTube Growth Analytics" }) {
  return (
    <div className="w-full">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-auto rounded-md shadow-md border border-gray-200"
      />
    </div>
  );
}

// STATIC testimonials data with dynamic stats configuration
const STATIC_TESTIMONIALS = [
  {
    id: 1,
    name: "",
    title: "",
    quote: "Brandon's channel has since grown from 700 subs to over 10,000 subs in past 18 months we've been working together. Brandon saw a 6300% increase in views OVERNIGHT, in the first 12 weeks working together, most importantly, without doing any extra work. In the 12 weeks before working with us he was averaging around 90 views per video. In the first 12 weeks working together, we averaged 5,700 views per video. Yes, that's a 6300% increase in views, overnight.",
    headline: "Brandon was about to give up on YouTube before working with us.",
    subheadline: "It took Brandon 379 videos, and 3 years to grow to 700 subscribers before working with us in September 2023...",
    imageUrl: test,
    videoUrl: "https://res.cloudinary.com/dgtxtdias/video/upload/v1753035152/Brandon_GreenCandle_Testimonial_pouxcd.mp4",
    mediaType: "video",
    growthChartUrl: img,
    hasGrowthChart: true,
    // Dynamic stats configuration
    stats: [
      { value: "600k+", label: "Subscribers within 24 months", bgColor: "bg-[#FDD36B]" },
      { value: "$5k+", label: "Monthly revenue", bgColor: "bg-[#FD976D]" },
      { value: "87+", label: "Video posted", bgColor: "bg-[#c8b3fc]" }
    ]
  },
  {
    id: 2,
    name: "",
    title: "Youtuber Creator",
    quote: "In the 12 weeks before working with us he was averaging around 172 views per video. In the first 8 weeks working together, we averaged 13,000 views per video.",
    headline: "Sean Was Able To Monetise His YouTube Channel Working With Us.",
    subheadline: " ",
    imageUrl: test2,
    videoUrl: "https://res.cloudinary.com/dgtxtdias/video/upload/v1753035371/SimplyBitcoin_Nico_Testimonial._zuytbq.mp4",
    mediaType: "video",
    hasGrowthChart: false,
    // Dynamic stats configuration
    stats: [
      { value: "13k", label: "Avg views per video", bgColor: "bg-[#FDD36B]" },
      { value: "8 weeks", label: "To achieve results", bgColor: "bg-[#FD976D]" },
      { value: "172 → 13k", label: "View increase", bgColor: "bg-[#c8b3fc]" }
    ]
  },
  {
    id: 3,
    name: "",
    title: "",
    quote: "After working together again in early 2025, Brandon is now consistently getting 10,000 views per interview and recently passed 5,000 subscribers. We've grown from 1,200 subscribers since beginning together in August, while only posting 1 interview every 2 weeks.",
    headline: "Brandon's Become One of The Fastest Growing Channels In His Niche.",
    subheadline: "Brandon had been grinding for 2 years before we did a 90 day accelerator course with him in September 2024.",
    imageUrl: test3,
    videoUrl: "https://youtu.be/9bZkp7q19f0",
    mediaType: "image",
    growthChartUrl: growthchart,
    hasGrowthChart: true,
    // Dynamic stats configuration
    stats: [
      { value: "10k+", label: "Views per interview", bgColor: "bg-[#FDD36B]" },
      { value: "5k+", label: "Subscribers gained", bgColor: "bg-[#FD976D]" },
      { value: "1 every 2 weeks", label: "Posting frequency", bgColor: "bg-[#c8b3fc]" }
    ]
  },
  {
    id: 4,
    name: "",
    title: "",
    quote: "Brandon now is getting the most view per interview in the Bitcoin space, despite being 20x smaller than other competitors in the space.",
    headline: " ",
    subheadline: " ",
    imageUrl: test4,
    videoUrl: "https://youtu.be/9bZkp7q19f0",
    mediaType: "image",
    hasGrowthChart: false,
    // Dynamic stats configuration
    stats: [
      { value: "#1", label: "In Bitcoin niche", bgColor: "bg-[#FDD36B]" },
      { value: "20x", label: "Smaller than competitors", bgColor: "bg-[#FD976D]" },
      { value: "Top", label: "Per-interview views", bgColor: "bg-[#c8b3fc]" }
    ]
  },
  {
    id: 5,
    name: "",
    title: "",
    headline: " ",
    subheadline: "",
    mediaType: "image",
    growthChartUrl: growth1,
    hasGrowthChart: true,
    // Dynamic stats configuration
    stats: [
      { value: "12 months", label: "Growth timeline", bgColor: "bg-[#FDD36B]" },
      { value: "700 → 10k", label: "Subscriber growth", bgColor: "bg-[#FD976D]" },
      { value: "6300%", label: "View increase", bgColor: "bg-[#c8b3fc]" }
    ]
  },
  {
    id: 6,
    name: "",
    title: "",
    headline: "Simply Bitcoin Came To Me in August 2024, wanting to jump from the 4th to biggest creator in their space.",
    subheadline: "I began working with Simply Bitcoin in August of 2024, and at the time they were getting around 350,000 views per month, and 700 subscribers for the month.",
    mediaType: "image",
    growthChartUrl: test5,
    hasGrowthChart: true,
    // Dynamic stats configuration
    stats: [
      { value: "350k", label: "Monthly views", bgColor: "bg-[#FDD36B]" },
      { value: "700", label: "Monthly subscribers", bgColor: "bg-[#FD976D]" },
      { value: "4th → 1st", label: "Niche ranking goal", bgColor: "bg-[#c8b3fc]" }
    ]
  },
  // {
  //   id: 7,
  //   name: "Simply Bitcoin",
  //   title: "YouTube Creator",
  //   quote: "Working with this team has completely transformed my YouTube channel. The results speak for themselves - from struggling with low views to consistently hitting thousands of views per video. The strategies they provided were game-changing.",
  //   headline: "",
  //   subheadline: "",
  //   videoUrl: "https://res.cloudinary.com/dgtxtdias/video/upload/v1753035152/Brandon_GreenCandle_Testimonial_pouxcd.mp4",
  //   mediaType: "video",
  //   hasGrowthChart: false,
  //   // Dynamic stats configuration
  //   stats: [
  //     { value: "6300%", label: "View increase", bgColor: "bg-[#FDD36B]" },
  //     { value: "700 → 10k", label: "Subscriber growth", bgColor: "bg-[#FD976D]" },
  //     { value: "18 months", label: "Transformation time", bgColor: "bg-[#c8b3fc]" }
  //   ]
  // },
];

// Static section data
const STATIC_SECTION_TITLE = "We've helped Beginners shortcut their YouTube learning curve";

function Testimonial() {
  const testimonials = STATIC_TESTIMONIALS;
  const sectionTitle = STATIC_SECTION_TITLE;

  return (
    <div className="py-16 md:py-24 bg-white w-full" id="testimonials">
      
      <div className="bg-[#F9F6F3] w-full py-1">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
          {sectionTitle} <span className="text-amber-500">✋</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mt-10 space-y-24">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-5xl font-serif font-bold">
                  {testimonial?.headline || ""}
                </h3>
                <p className="text-lg mt-6 max-w-3xl mx-auto">
                  {testimonial?.subheadline}
                </p>
              </div>
              
              {testimonial.hasGrowthChart && (
                <div className="mb-16">
                  <GrowthChart
                    imageUrl={testimonial.growthChartUrl}
                    alt={`${testimonial.name}'s YouTube channel growth`}
                  />
                </div>
              )}
              
              {(testimonial.quote || testimonial.imageUrl || testimonial.videoUrl) && (
                <div className="mt-8">
                  <div className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-lg bg-[#f8f6f3]">
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-full md:w-1/2 bg-[#f8f6f3]">
                          <div className="p-8 md:p-10 flex flex-col justify-center h-full">
                            {testimonial.quote && (
                              <p className="text-lg md:text-xl leading-relaxed mb-8">
                                {testimonial.quote}
                              </p>
                            )}
                            <div>
                              {testimonial.name && (
                                <p className="font-bold text-lg">{testimonial.name}</p>
                              )}
                              {(testimonial.title) && (
                                <p className="text-gray-600">
                                  {testimonial.title || ""}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        {(testimonial.imageUrl || testimonial.videoUrl) && (
                          <div className="w-full md:w-1/2">
                            <VideoPlayer
                              name={testimonial.name}
                              videoSrc={testimonial.mediaType === 'image'
                                ? testimonial.imageUrl
                                : testimonial.videoUrl}
                            />
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {(testimonial.imageUrl || testimonial.videoUrl) && (
                          <div className="w-full md:w-1/2">
                            <VideoPlayer
                              name={testimonial.name}
                              videoSrc={testimonial.mediaType === 'image'
                                ? testimonial.imageUrl
                                : testimonial.videoUrl}
                            />
                          </div>
                        )}
                        <div className="w-full md:w-1/2 bg-[#f8f6f3]">
                          <div className="p-8 md:p-10 flex flex-col justify-center h-full">
                            {testimonial.quote && (
                              <p className="text-lg md:text-xl leading-relaxed mb-8">
                                {testimonial.quote}
                              </p>
                            )}
                            <div>
                              {testimonial.name && (
                                <p className="font-bold text-lg">{testimonial.name}</p>
                              )}
                              {(testimonial.title) && (
                                <p className="text-gray-600">
                                  {testimonial.title || ""}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Dynamic Stats Section */}
                  {testimonial.stats && testimonial.stats.length > 0 && (
                    <div className='flex flex-col md:flex-row gap-8 justify-center mt-6 text-lg font-semibold w-full'>
                      {testimonial.stats.map((stat, statIndex) => (
                        <div 
                          key={statIndex} 
                          className={`${stat.bgColor} px-4 py-6 rounded-md flex flex-col items-center flex-1 min-w-[150px]`}
                        >
                          <span className='text-3xl md:text-4xl font-bold'>
                            {stat.value}
                          </span>
                          <span className='text-xs md:text-sm text-center mt-2'>
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-16 text-center">
            <a
              href="https://buy.stripe.com/8x200ibyab4W10v4lIgEg00"
              target='_blank'
              rel="noopener noreferrer"
              className="bg-[#4fc6e0] hover:bg-black hover:text-white text-black px-10 py-3 rounded-full text-lg font-semibold shadow-md inline-block cursor-pointer transition-colors duration-300"
            >
              Enrol Now For $995
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
export { Testimonial };