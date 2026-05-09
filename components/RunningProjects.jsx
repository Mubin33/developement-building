"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Calendar, MapPin, User, Clock, TrendingUp, HardHat } from 'lucide-react';

const RunningProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dhaka IT Park Tower",
      category: "Commercial",
      location: "Uttara, Dhaka",
      client: "Bangladesh Computer Council",
      startDate: "January 2024",
      expectedCompletion: "December 2025",
      progress: 65,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      description: "A 15-story modern IT hub designed to host tech companies and startups with state-of-the-art facilities in Uttara.",
      area: "95,000 sq ft",
      value: "৳280 Crore",
      team: "180 Workers",
      milestones: [
        { name: "Foundation & Structure", status: "completed" },
        { name: "Exterior Facade", status: "completed" },
        { name: "Interior Framework", status: "in-progress" },
        { name: "Systems Installation", status: "pending" },
        { name: "Final Finishing", status: "pending" }
      ]
    },
    {
      id: 2,
      title: "Sylhet Shopping Complex",
      category: "Retail",
      location: "Zindabazar, Sylhet",
      client: "Al-Hamra Group",
      startDate: "March 2024",
      expectedCompletion: "June 2025",
      progress: 42,
      image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80",
      description: "Modern multi-level shopping mall featuring retail outlets, food court, cinema, and parking for Sylhet city.",
      area: "150,000 sq ft",
      value: "৳165 Crore",
      team: "220 Workers",
      milestones: [
        { name: "Site Preparation", status: "completed" },
        { name: "Foundation Work", status: "completed" },
        { name: "Steel Structure", status: "in-progress" },
        { name: "MEP Installation", status: "pending" },
        { name: "Interior Fit-out", status: "pending" }
      ]
    },
    {
      id: 3,
      title: "Padma River Bridge Approach",
      category: "Infrastructure",
      location: "Mawa, Munshiganj",
      client: "Bangladesh Bridge Authority",
      startDate: "August 2023",
      expectedCompletion: "March 2026",
      progress: 38,
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
      description: "Road infrastructure and service area construction connecting to the Padma Multipurpose Bridge.",
      area: "12 km approach roads",
      value: "৳420 Crore",
      team: "350 Workers",
      milestones: [
        { name: "Land Acquisition", status: "completed" },
        { name: "Earthworks", status: "completed" },
        { name: "Bridge Approach", status: "in-progress" },
        { name: "Service Area", status: "pending" },
        { name: "Road Paving", status: "pending" }
      ]
    },
    {
      id: 4,
      title: "Baridhara Heights",
      category: "Residential",
      location: "Baridhara, Dhaka",
      client: "Assure Developers Ltd",
      startDate: "February 2024",
      expectedCompletion: "October 2025",
      progress: 55,
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
      description: "Premium residential complex with 120 luxury apartments, modern amenities, and diplomatic zone proximity.",
      area: "85,000 sq ft",
      value: "৳195 Crore",
      team: "160 Workers",
      milestones: [
        { name: "Foundation", status: "completed" },
        { name: "Core Structure", status: "completed" },
        { name: "Floor Construction", status: "in-progress" },
        { name: "Window Installation", status: "pending" },
        { name: "Interior Works", status: "pending" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#f4f7f9] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Running Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto outfit">
            Current projects in progress, delivering excellence through every phase of construction
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-xs font-bold uppercase">
                  {project.category}
                </div>
                
                {/* Progress Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-xs font-bold flex items-center gap-1">
                  <TrendingUp size={12} />
                  {project.progress}%
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin size={14} />
                  <span className="line-clamp-1 outfit">{project.location}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-bold text-secondary">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-primary" />
                    <span className="outfit">{project.expectedCompletion}</span>
                  </div>
                </div>
                
                {/* View Details Button */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-primary text-white px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-sm shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="relative h-[300px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-secondary text-white px-3 py-1 text-xs font-bold uppercase">
                    {selectedProject.category}
                  </span>
                  <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase flex items-center gap-1">
                    <TrendingUp size={12} />
                    {selectedProject.progress}%
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed outfit">
                {selectedProject.description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
                <div className="bg-secondary/20 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Project Value</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.value}</p>
                </div>
                <div className="bg-secondary/20 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Total Area</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.area}</p>
                </div>
                <div className="bg-secondary/20 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Team Size</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.team}</p>
                </div>
                <div className="bg-secondary/20 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Completion</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.expectedCompletion}</p>
                </div>
              </div>

              {/* Client & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-sm">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Client</p>
                    <p className="font-semibold text-gray-900 outfit">{selectedProject.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-sm">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Location</p>
                    <p className="font-semibold text-gray-900 outfit">{selectedProject.location}</p>
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <HardHat size={20} className="text-primary" />
                  Project Milestones
                </h4>
                <div className="space-y-3">
                  {selectedProject.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        milestone.status === 'completed' ? 'bg-green-500' :
                        milestone.status === 'in-progress' ? 'bg-primary' :
                        'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <span className={`text-sm ${
                          milestone.status === 'completed' ? 'text-gray-900' :
                          milestone.status === 'in-progress' ? 'text-gray-900 font-semibold' :
                          'text-gray-400'
                        }`}>
                          {milestone.name}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-sm uppercase font-medium ${
                        milestone.status === 'completed' ? 'bg-green-100 text-green-700' :
                        milestone.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RunningProjects;
