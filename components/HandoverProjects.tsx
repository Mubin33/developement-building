"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Calendar, MapPin, User, CheckCircle } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  location: string;
  completedDate: string;
  description: string;
  value: string;
  area: string;
  client: string;
  features: string[];
}

const HandoverProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const result = await response.json();
        if (result.success) {
          setProjects(result.data.handoverProjects);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Handover Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Handover Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto outfit">
            Successfully completed projects delivered on time with exceptional quality standards
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#f4f7f9] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
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
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase">
                  {project.category}
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
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    <span className="outfit">{project.completedDate}</span>
                  </div>
                </div>
                
                {/* View Details Button */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-secondary text-white px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-primary transition-colors duration-300"
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
                <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase mb-3 inline-block">
                  {selectedProject.category}
                </span>
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
              <div className="grid grid-cols-3 gap-4 my-4">
                <div className="bg-secondary/20 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Project Value</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.value}</p>
                </div>
                <div className="bg-secondary/20 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Total Area</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.area}</p>
                </div>
                <div className="bg-secondary/20 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">Completed</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.completedDate}</p>
                </div>
              </div>

              {/* Client & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
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

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-gray-600 text-sm outfit">{feature}</span>
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

export default HandoverProjects;
