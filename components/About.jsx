import React from 'react';
import Image from 'next/image';
import { Handshake, Settings, Smile, Home } from 'lucide-react';

const About = () => {
  const priorities = [
    {
      title: "Earthquake Resistant",
      desc: " seismic-safe construction",
      icon: <Handshake className="text-gray-700" size={24} />,
    },
    {
      title: "Quality Maintenance",
      desc: "Long-term building care",
      icon: <Settings className="text-gray-700" size={24} />,
    },
    {
      title: "Client Satisfaction",
      desc: "Serving with excellence",
      icon: <Smile className="text-gray-700" size={24} />,
    },
    {
      title: "Modern Architecture",
      desc: "Contemporary Bangladeshi design",
      icon: <Home className="text-gray-700" size={24} />,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Text Content */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              About Us and Our Priorities
            </h2>
            {/* The Yellow Accent Line */}
            <div className="w-12 h-1 bg-primary"></div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
            <p className="font-semibold text-gray-800">
              BuildingBD is one of Bangladesh&apos;s premier construction companies, delivering excellence 
              in residential, commercial, and infrastructure projects since 1995.
            </p>
            <p className="text-sm outfit">
              With over 28 years of experience in the Bangladeshi construction industry, we have successfully 
              completed 500+ projects across Dhaka, Chittagong, Sylhet, and other major cities. Our team of 
              200+ engineers and architects specializes in earthquake-resistant construction, sustainable 
              building practices, and modern architectural designs that reflect Bangladesh&apos;s rich heritage 
              while embracing contemporary innovation.
            </p>
          </div>

          {/* Priorities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            {priorities.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Icon Box */}
                <div className="bg-gray-100 p-4 rounded-sm flex-shrink-0">
                  {item.icon}
                </div>
                {/* Text */}
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{item.title}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide outfit">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[450px] w-full shadow-xl">
          <Image
            src="https://www.themesindustry.com/html/buildingx/images/about.jpg" // Replace with your image path
            alt=""
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;