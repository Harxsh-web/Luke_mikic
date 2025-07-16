import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn ui button
import { HiOutlineDocument, HiOutlineBookOpen, HiOutlineVideoCamera } from "react-icons/hi";
import { BiPodcast } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsLightningCharge, BsYoutube, BsBook, BsLaptop, BsTools } from "react-icons/bs";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId, event) => {
    if (event) event.preventDefault();
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSections = [
    { id: "author-section", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "bonus-section", label: "Bonuses" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white  ${
        scrolled ? "shadow-sm py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (location === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.href = "/";
              }
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M8.5 32.5L27.5 8M20 8L32 27.5M8.5 14.5L14 8"
                stroke="#38BDF8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-2xl">Luke Mikic</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xl">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={(e) => scrollToSection(section.id, e)}
                className="font-medium text-gray-700  hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer"
              >
                {section.label}
              </button>
            ))}
            <a
              href="https://youtube.com/@lukemikic21?si=9MqveJLGr8HNhApV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">
                Join 15k+ Subscribers
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full pt-5 px-6 bg-white ">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => {
                        setIsSheetOpen(false);
                        setTimeout(() => {
                          if (location === "/") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            window.location.href = "/";
                          }
                        }, 300);
                      }}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <path
                          d="M8.5 32.5L27.5 8M20 8L32 27.5M8.5 14.5L14 8"
                          stroke="#38BDF8"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-lg font-bold">Luke Mikic</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-0 space-y-6">
                  {navSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={(e) => {
                        setIsSheetOpen(false);
                        setTimeout(() => scrollToSection(section.id, e), 300);
                      }}
                      className="w-full text-left font-medium py-1 text-xl text-gray-800 dark:text-gray-200 hover:text-cyan-500 cursor-pointer"
                    >
                      {section.label}
                    </button>
                  ))}
                  <a
                    href="https://youtube.com/@lukemikic21?si=9MqveJLGr8HNhApV"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Button className="w-full rounded-full bg-cyan-400 hover:bg-cyan-500 text-white">
                      Join 15k+ Subscribers
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};