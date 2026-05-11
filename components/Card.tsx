"use client";

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, CheckCircle, Wrench, Ruler, HardHat, Clock } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
  process: string[];
}

const Card = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // 1. Initialize Embla with 3 slides per view on desktop
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    loop: true,
    slidesToScroll: 1
  });

  // 2. Navigation Functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const services = [
    {
      id: 1,
      title: "General Contracting",
      description: "We offer the most complete house renovating services in the country, from kitchen design to bathroom remodeling.",
      image: "https://www.themesindustry.com/html/buildingx/images/do1.jpg",
      fullDescription: "Our general contracting services encompass the full spectrum of construction management. From initial planning and permit acquisition to final inspections, we handle every aspect of your renovation project with precision and care.",
      features: [
        "Complete Project Management",
        "Licensed & Insured Team",
        "Quality Material Sourcing",
        "On-Time Delivery Guarantee"
      ],
      process: [
        "Initial Consultation & Quote",
        "Design & Planning Phase",
        "Permit Acquisition",
        "Construction Execution",
        "Final Inspection & Handover"
      ]
    },
    {
      id: 2,
      title: "Construction Management",
      description: "Expert oversight ensuring your projects are delivered on time and within budget.",
      image: "https://www.themesindustry.com/html/buildingx/images/do3.jpg",
      fullDescription: "Our construction management services provide expert oversight for projects of any scale. We coordinate all stakeholders, manage timelines, control costs, and ensure quality standards are met throughout the project lifecycle.",
      features: [
        "Schedule & Budget Control",
        "Subcontractor Coordination",
        "Risk Management",
        "Real-time Progress Reporting"
      ],
      process: [
        "Project Feasibility Study",
        "Resource Planning",
        "Team Assembly",
        "Execution & Monitoring",
        "Project Closeout"
      ]
    },
    {
      id: 3,
      title: "Design & Build",
      description: "Seamless integration of architectural design and quality construction.",
      image: "https://www.themesindustry.com/html/buildingx/images/do3.jpg",
      fullDescription: "Our design-build approach streamlines the construction process by integrating design and construction services under one contract. This reduces risk, accelerates timelines, and ensures cohesive project delivery.",
      features: [
        "Single Point of Accountability",
        "Accelerated Project Delivery",
        "Cost-effective Solutions",
        "Integrated Team Collaboration"
      ],
      process: [
        "Conceptual Design",
        "Schematic Development",
        "Design Documentation",
        "Construction Integration",
        "Final Delivery"
      ]
    },
    {
      id: 4,
      title: "Interior Design",
      description: "Modern interior solutions tailored to your construction style and personal preferences.",
      image: "https://www.themesindustry.com/html/buildingx/images/do1.jpg",
      fullDescription: "Transform your spaces with our comprehensive interior design services. We blend functionality with aesthetics to create environments that reflect your vision while maximizing space utilization and comfort.",
      features: [
        "3D Visualization & Rendering",
        "Custom Furniture Design",
        "Material & Finish Selection",
        "Lighting Design Solutions"
      ],
      process: [
        "Space Assessment",
        "Concept Development",
        "Material Selection",
        "Implementation Planning",
        "Final Styling"
      ]
    },
  ];

  return (
    <section className="py-20 bg-[#f4f7f9] px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Navigation Arrows */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What We Do</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 bg-white border border-gray-200 text-gray-400 hover:text-primary transition-colors rounded-sm shadow-sm active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 bg-white border border-gray-200 text-gray-400 hover:text-primary transition-colors rounded-sm shadow-sm active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-8"> {/* Negative margin to handle card gaps */}
            {services.map((service) => (
              <div key={service.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-8 group flex flex-col">
                {/* Image Container */}
                <div className="relative h-[250px] w-full overflow-hidden rounded-md mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 outfit">
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="w-fit bg-primary text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm shadow-md hover:bg-secondary transition-colors duration-300"
                  >
                    Service Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left - Image */}
              <div className="relative h-[300px] md:h-full min-h-[300px]">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-t md:from-black/60 md:to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:hidden">
                  <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase mb-3 inline-block">
                    Our Service
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-6 md:p-8">
                <div className="hidden md:block mb-6">
                  <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase mb-3 inline-block">
                    Our Service
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedService.title}
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedService.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Wrench size={18} className="text-primary" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Ruler size={18} className="text-primary" />
                    Our Process
                  </h4>
                  <div className="space-y-3">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary text-white rounded-sm flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-600 text-sm">{step}</span>
                        {index < selectedService.process.length - 1 && (
                          <div className="hidden md:block flex-1 h-px bg-gray-200 ml-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-primary text-white px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                    <HardHat size={18} />
                    Get a Quote
                  </button>
                  <button className="flex-1 border-2 border-secondary text-secondary px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Clock size={18} />
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Card;