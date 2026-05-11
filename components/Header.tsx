"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,   
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const baseClass = "px-6 py-3 cursor-pointer transition-colors";
    const activeClass = "bg-secondary text-white";
    const inactiveClass = "hover:bg-secondary/10";
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* TOP STRIP */}
      {/* <div className="bg-secondary text-white py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p className="font-medium outfit">Leading Construction Company in Bangladesh Since 1995.</p>
          <div className="flex gap-4 border-l border-white/20 pl-4"> 
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">g+</span>
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">t</span>
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">in</span>
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">f</span>
          </div>
        </div>
      </div> */}

      {/* MIDDLE INFO SECTION */}
      <div className="bg-secondary text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3 border-2 border-dashed border-gray-500 p-2">
            <div className="bg-primary p-2 rounded-sm">
              {/* Simple House Icon Mockup */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
              VERTE<span className="text-primary">X</span> <span className='hidden sm:inline text-sm outfit font-normal'>t e s t i n g</span>
            </h1>
          </div>

          {/* Contact Details - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex flex-wrap justify-center gap-6 lg:gap-10">
            {/* Phone & Email */}
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={24} />
              <div className="text-sm">
                <p className="font-bold text-lg leading-none">+880 2-988-4847</p>
                <p className="text-gray-300 outfit">info@buildingbd.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={24} />
              <div className="text-sm">
                <p className="font-bold leading-tight">House 45, Road 7,</p>
                <p className="text-gray-300 outfit">Gulshan-1, Dhaka-1212, Bangladesh</p>
              </div>
            </div>

            {/* Hours */}
            <div className="hidden lg:flex items-center gap-3">
              <Clock className="text-primary" size={24} />
              <div className="text-sm">
                <p className="font-bold leading-tight">Mon - Sat 8.00 - 18.00</p>
                <p className="text-gray-300 outfit">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-primary text-secondary relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Nav */}
          <ul className="hidden md:flex flex-wrap items-center justify-center lg:justify-start font-bold uppercase tracking-wide text-sm">
            <li className={navLinkClass('/') }>
              <Link href="/">Home</Link>
            </li>
            <li className={navLinkClass('/services')}>
              <Link href="/services">Services</Link>
            </li>
            <li className={navLinkClass('/projects')}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={navLinkClass('/blog')}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={navLinkClass('/shop')}>
              <Link href="/shop">Shop</Link>
            </li>
            <li className={navLinkClass('/contact-us')}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between py-3">
            <span className="font-bold uppercase tracking-wide text-sm">Menu</span>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-secondary/10 rounded-sm transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {mobileMenuOpen && (
            <ul className="md:hidden flex flex-col font-bold uppercase tracking-wide text-sm border-t border-secondary/20">
              <li className={navLinkClass('/')} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/" className="block">Home</Link>
              </li>
              <li className={navLinkClass('/services')} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/services" className="block">Services</Link>
              </li>
              <li className={navLinkClass('/projects')} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/projects" className="block">Projects</Link>
              </li>
              <li className={navLinkClass('/blog')} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/blog" className="block">Blog</Link>
              </li>
              <li className={navLinkClass('/shop')} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/shop" className="block">Shop</Link>
              </li>
              <li className={navLinkClass('/contact-us')} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact-us" className="block">Contact Us</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;