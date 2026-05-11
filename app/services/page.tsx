"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Building,
  Hammer,
  Palette,
  ClipboardList,
  Ruler,
  Zap,
  ArrowLeft,
  Check,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  icon: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  Building: <Building size={24} />,
  Hammer: <Hammer size={24} />,
  Palette: <Palette size={24} />,
  ClipboardList: <ClipboardList size={24} />,
  Ruler: <Ruler size={24} />,
  Zap: <Zap size={24} />,
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services");
        const result = await response.json();
        if (result.success) {
          setServices(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const categories = ["All", ...Array.from(new Set(services.map((s) => s.category)))];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f7f9] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      {/* Hero Section */}
      <div className="bg-[#111] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            Comprehensive construction solutions tailored to your needs. From building 
            construction to interior design, we deliver excellence in every project.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-sm w-full focus:outline-none focus:border-primary text-lg"
            />
          </div>
          <div className="relative sm:w-56">
            <Filter
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-12 pr-8 py-3 bg-white border border-gray-200 rounded-sm w-full focus:outline-none focus:border-primary appearance-none cursor-pointer text-lg"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Count */}
        <p className="text-gray-500 mb-6 outfit">
          Showing {filteredServices.length} of {services.length} services
        </p>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-sm">
            <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary/10 p-2 rounded-sm text-secondary">
                      {iconMap[service.icon] || <Building size={24} />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 text-sm outfit mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative bg-white rounded-sm shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="relative h-[300px]">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-sm text-white">
                    {iconMap[selectedService.icon] || <Building size={24} />}
                  </div>
                  <div>
                    <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase">
                      {selectedService.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed outfit text-lg mb-8">
                {selectedService.description}
              </p>

              {/* Features */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Check size={20} className="text-primary" />
                  What&apos;s Included
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm">
                      <div className="bg-primary p-1 rounded-full">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700 outfit">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact-us"
                  className="flex-1 bg-primary text-white px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors text-center"
                  onClick={() => setSelectedService(null)}
                >
                  Get a Quote
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold uppercase tracking-wider rounded-sm hover:border-secondary hover:text-secondary transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
