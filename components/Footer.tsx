import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail,  
  ChevronRight,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Company History", href: "/history" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Company", href: "/company" },
    { name: "Our Team", href: "/team" },
    { name: "Certifications", href: "/certifications" },
    { name: "Shop", href: "/shop" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 px-4 font-sans relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Column 1: About Us */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">About Us</h3>
              <div className="w-12 h-1 bg-primary"></div>
              
            </div>

            <div className="mb-6 p-4 border border-dashed border-gray-600 inline-block">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-1.5 rounded-sm">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="text-2xl font-black tracking-tighter">VERTEX<span className="text-primary"> </span></span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 outfit">
              Bangladesh&apos;s trusted construction partner since 1995. We specialize in residential, commercial, and industrial projects across Dhaka, Chittagong, and beyond.
            </p>

            {/* Social Icons */}
            {/* <div className="flex gap-2">
              {[Facebook, Twitter, Dribbble, Instagram].map((Icon, i) => (
                <div key={i} className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all cursor-pointer">
                  <Icon size={16} />
                </div>
              ))}
              <div className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all cursor-pointer">
                <span className="text-sm font-bold italic">v</span>
              </div>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <div className="w-12 h-1 bg-primary"></div>
              
            </div>

            <div className="grid grid-cols-2 gap-y-4">
              {quickLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href} 
                  className="flex items-center text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <ChevronRight size={14} className="mr-2 text-gray-600" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Keep in Touch */}
          <div className="relative">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Keep in Touch</h3>
              <div className="w-12 h-1 bg-primary"></div>
              
            </div>

            <div className="space-y-4 mb-10 relative z-10">
              <div className="flex gap-4 items-start">
                <MapPin className="text-primary mt-1" size={18} />
                <p className="text-sm text-gray-400">House 45, Road 7, Gulshan-1, Dhaka-1212, Bangladesh</p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-primary" size={18} />
                <p className="text-sm text-gray-400">+880 2-988-4847</p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-primary" size={18} />
                <p className="text-sm text-gray-400">info@buildingbd.com</p>
              </div>
            </div>

            {/* Map Image Background */}
            <div className="absolute right-0 bottom-[-20px] w-full h-40 opacity-40 pointer-events-none">
              <Image 
                src="https://www.themesindustry.com/html/buildingx/images/footer-map.png"
                alt="World Map"
                fill
                className="object-contain object-right"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 outfit">
            Copyright © 1995 - 2024 <span className="text-primary">BuildingBD</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {/* <button  
        className="absolute bottom-10 right-10 bg-primary p-3 rounded-sm hover:bg-white hover:text-black transition-colors shadow-lg"
      >
        <ArrowUp size={20} />
      </button> */}
    </footer>
  );
};

export default Footer;