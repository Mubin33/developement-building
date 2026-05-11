"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Construction Management",
    description: "We offer the most complete house renovating services in the country, from kitchen design to bathroom remodeling.",
    bgImage: "https://www.themesindustry.com/html/buildingx/images/banner2.jpg", // Replace with your actual image path
  },
  {
    title: "Quality Engineering",
    description: "Building the future with precision and dedication to every architectural detail.",
    bgImage: "https://www.themesindustry.com/html/buildingx/images/banner.jpg",
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="relative w-full h-[190px] lg:h-[900px] overflow-hidden group">
      {/* Carousel Viewport */}
      <div className="overflow-hidden lg:h-150 h-[190px]" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center text-center"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform "
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                {/* <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" /> */}
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-3xl px-6">
                <h2 className="text-3xl font-orbitron md:text-6xl font-black text-[#111] mb-4 tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-sm lg:text-lg text-gray-800 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="hidden lg:flex flex-wrap justify-center gap-4">
                  <button className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#e6a200] transition-colors rounded-sm shadow-lg">
                    Our Services
                  </button>
                  <button className="bg-secondary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#001f3f] transition-colors rounded-sm shadow-lg">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/3 -translate-y-1/2 z-20 bg-primary p-2 text-white hover:bg-secondary transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/3 -translate-y-1/2 z-20 bg-primary p-2 text-white hover:bg-secondary transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom Service Cards Mockup */}
      {/* Bottom Service Cards */}
      <div className="hidden lg:block absolute bottom-12 z-30 w-full px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-end">
          
          {/* Left Card */}
          <div className="relative h-64 bg-secondary overflow-hidden flex flex-col items-center justify-center p-8 text-center text-white border-r border-white/10">
            <div className="absolute inset-0 z-0 opacity-30 bg-[url('/path-to-image1.jpg')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10">
              <svg className="mb-4 mx-auto text-primary" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <h3 className="text-xl font-bold uppercase mb-2">General Contracting</h3>
              <p className="text-sm text-gray-300 outfit">Professional construction services for residential and commercial projects.</p>
            </div>
          </div>

          {/* Middle Card (Taller & Shifted Up) */}
          <div className="relative h-80 bg-primary -translate-y-8 flex flex-col items-center justify-center p-8 text-center text-secondary shadow-2xl overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-10 bg-[url('/path-to-image2.jpg')] bg-cover bg-center grayscale"></div>
             <div className="relative z-10">
              <svg className="mb-4 mx-auto" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <h3 className="text-xl font-black uppercase mb-2">Construction Management</h3>
              <p className="text-sm font-medium outfit">Expert oversight ensuring your projects are delivered on time and budget.</p>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative h-64 bg-secondary overflow-hidden flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="absolute inset-0 z-0 opacity-30 bg-[url('/path-to-image3.jpg')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10">
              <svg className="mb-4 mx-auto text-primary" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="text-xl font-bold uppercase mb-2">Design and Build</h3>
              <p className="text-sm text-gray-300 outfit">Seamless integration of architectural design and quality construction.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}