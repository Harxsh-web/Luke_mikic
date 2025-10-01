import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTiktok, 
  FaTwitter
} from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Static social links data
  const socialLinks = [
    { id: 1, url: "https://youtube.com/@lukemikic21", icon: <FaYoutube className="text-gray-700" /> },
    { id: 2, url: "https://instagram.com/lukemikic21", icon: <FaInstagram className="text-gray-700" /> },
    { id: 3, url: "https://linkedin.com/in/lukemikic", icon: <FaLinkedin className="text-gray-700" /> },
    { id: 4, url: "https://tiktok.com/@lukemikic21", icon: <FaTiktok className="text-gray-700" /> },
    { id: 5, url: "https://twitter.com/lukemikic21", icon: <FaTwitter className="text-gray-700" /> },
    { id: 6, url: "https://facebook.com/lukemikic21", icon: <FaFacebook className="text-gray-700" /> },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200 mx-6">
      <div className="container mx-auto px-4 max-w-6xl text-left">
        <div className="mb-10">
          <div className="flex flex-col items-start mb-6">
            <div className="flex items-center mb-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M8.5 32.5L27.5 8M20 8L32 27.5M8.5 14.5L14 8" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-2xl font-bold">Luke Mikic</span>
            </div>
            <p className="text-gray-500 text-sm">
              © Luke Mikic {currentYear}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-3 mb-8">
            {socialLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 hover:scale-125 transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Free Content</h3>
            <ul className="space-y-2">
              <li><a href="#bonus-section" className="text-gray-600 hover:text-gray-900 transition">Free Bonuses</a></li>
            </ul>
          </div>
          
          <div >
            <h3 className="font-semibold text-gray-800 mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.skool.com/digital-soveriegnity-academy-6579/about" target="_blank" className="text-gray-600 hover:text-gray-900 transition flex items-center">
                  <span className="font-medium text-[#F9966B]">Join my Skool for $1.63 / day</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@lukemikic21" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  YouTuber Academy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-700 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}