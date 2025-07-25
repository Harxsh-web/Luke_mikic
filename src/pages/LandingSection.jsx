import LukeImage from '../assets/image/luke.jpg';

export default function LandingSection() {
  return (
    <section
      style={{ backgroundColor: "#F9F7F4" }}
      className="pt-20 pb-2  md:pt-30 px-4 md:px-8 mt-0 mb-0"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join The 9–5 Escape Artist
            <div className="relative inline-block">
              Academy
              <div
                className="absolute bottom-1 left-0 right-0 h-1.5 -mb-1 transform translate-y-1 mx-auto"
                style={{
                  background:
                    "linear-gradient(to right, rgba(182, 153, 255, 0.3) 0%, rgba(182, 153, 255, 0.9) 50%, rgba(182, 153, 255, 0.3) 100%)",
                  borderRadius: "9999px",
                  width: "106%",
                  marginLeft: "-3%",
                }}
              ></div>
            </div>
          </h1>

          {/* Image container */}
          {/* <div className="relative flex justify-center w-full mb-8 ">
            <div className="absolute w-full h-full bg-yellow-300 rounded-full max-w-md transform translate-x-4 translate-y-4"></div>
       
            <div className="relative z-10 w-full max-w-md">
              <div className=" rounded-full overflow-hidden">
                <img
                  src={
                    LukeImage
                  }
                  alt="Luke Mikic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div> */}

          <div className="max-w-2xl mx-auto flex items-center justify-center text-center relative my-10 px-6">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
              {/* Vimeo embed with autoplay */}
              <video
                className="w-full h-full rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src="https://res.cloudinary.com/dgtxtdias/video/upload/v1752769036/YouTube_LandingPage_1_ziqiog.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Discover the proven strategies and blueprints I’ve developed, that will allow you to quit your
            <br />
            without <span className="font-bold"> 9-5 and succeed on YouTube.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 mb-4">
            <a
              className="bg-[#FF9B76] hover:bg-[#FF855A] text-black font-medium 
              rounded-full px-6 md:px-8 py-2 md:py-4 h-auto text-md md:text-lg w-50 
               md:w-auto flex items-center justify-center "
              href="https://buy.stripe.com/8x200ibyab4W10v4lIgEg00"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Join my skool for 0.90 cents a day
            </a>

            <a
              className="border-2 font-medium rounded-full px-6 md:px-8 py-2 md:py-4 h-auto text-sm md:text-lg w-50 md:w-auto flex items-center justify-center"
              href="https://www.youtube.com/@lukemikic21"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Join YouTube
            </a>
          </div>

          {/* Animated down arrow */}
          <div className="flex justify-center mb-10">
            <div className="animate-bounce">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5L12 19M12 19L18 13M12 19L6 13"
                  stroke="#FF9B76"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}