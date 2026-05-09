import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,   
  ChevronDown 
} from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full font-sans">
      {/* TOP STRIP */}
      <div className="bg-secondary text-white py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p className="font-medium outfit">Leading Construction Company in Bangladesh Since 1995.</p>
          <div className="flex gap-4 border-l border-white/20 pl-4"> 
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">g+</span>
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">t</span>
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">in</span>
            <span className="font-bold cursor-pointer hover:text-yellow-500 outfit">f</span>
          </div>
        </div>
      </div>

      {/* MIDDLE INFO SECTION */}
      <div className="bg-secondary text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3 border-2 border-dashed border-gray-500 p-2">
            <div className="bg-primary p-2 rounded-sm">
              {/* Simple House Icon Mockup */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h1 className="text-4xl font-black tracking-tighter">
              Building<span className="text-primary">BD</span>
            </h1>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center gap-10">
            {/* Phone & Email */}
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={28} />
              <div className="text-sm">
                <p className="font-bold text-lg leading-none">+880 2-988-4847</p>
                <p className="text-gray-300 outfit">info@buildingbd.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={28} />
              <div className="text-sm">
                <p className="font-bold leading-tight">House 45, Road 7,</p>
                <p className="text-gray-300 outfit">Gulshan-1, Dhaka-1212, Bangladesh</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <Clock className="text-primary" size={28} />
              <div className="text-sm">
                <p className="font-bold leading-tight">Mon - Sat 8.00 - 18.00</p>
                <p className="text-gray-300 outfit">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-primary text-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center md:justify-start font-bold uppercase tracking-wide text-sm">
            <li className="px-6 py-3 bg-secondary text-white cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-6 py-3 hover:bg-secondary/10 cursor-pointer flex items-center gap-1">
              Services <ChevronDown size={14} />
            </li>
            <li className="px-6 py-3 hover:bg-secondary/10 cursor-pointer">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="px-6 py-3 hover:bg-secondary/10 cursor-pointer flex items-center gap-1">
              Pages <ChevronDown size={14} />
            </li>
            <li className="px-6 py-3 hover:bg-secondary/10 cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="px-6 py-3 hover:bg-secondary/10 cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="px-6 py-3 hover:bg-secondary/10 cursor-pointer">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;