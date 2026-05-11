"use client";

import React, { useState, ReactNode } from 'react';
import { 
  Cpu, 
  Code2, 
  Shield, 
  Cloud, 
  Database, 
  Wifi, 
  Layers, 
  Zap,
  Server,
  GitBranch,
  Box,
  Workflow,
  X,
  ArrowRight
} from 'lucide-react';

interface Tech {
  id: number;
  name: string;
  category: string;
  icon: ReactNode;
  shortDesc: string;
  description: string;
  features: string[];
  projects: string;
}

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  const technologies = [
    {
      id: 1,
      name: "BIM 360",
      category: "Design & Planning",
      icon: <Layers size={40} />,
      shortDesc: "Building Information Modeling",
      description: "Advanced BIM software for 3D modeling, collaboration, and project visualization. Enables real-time coordination between architects, engineers, and contractors.",
      features: [
        "3D Model Coordination",
        "Clash Detection",
        "Cloud Collaboration",
        "Document Management",
        "Progress Tracking"
      ],
      projects: "Used in 85% of our major projects"
    },
    {
      id: 2,
      name: "IoT Sensors",
      category: "Smart Construction",
      icon: <Wifi size={40} />,
      shortDesc: "Real-time Site Monitoring",
      description: "Internet of Things sensors deployed across construction sites for real-time monitoring of safety, equipment, and environmental conditions.",
      features: [
        "Equipment Tracking",
        "Safety Monitoring",
        "Environmental Alerts",
        "Energy Optimization",
        "Predictive Maintenance"
      ],
      projects: "Deployed on 45 active sites"
    },
    {
      id: 3,
      name: "Drone Surveying",
      category: "Survey & Mapping",
      icon: <Zap size={40} />,
      shortDesc: "Aerial Site Documentation",
      description: "Advanced drone technology for site surveying, progress documentation, and 3D terrain mapping. Reduces survey time by 80%.",
      features: [
        "Topographic Mapping",
        "Progress Photography",
        "Volume Calculations",
        "Safety Inspections",
        "Thermal Imaging"
      ],
      projects: "2,500+ flights completed"
    },
    {
      id: 4,
      name: "AI Analytics",
      category: "Data Intelligence",
      icon: <Cpu size={40} />,
      shortDesc: "Predictive Construction AI",
      description: "Artificial intelligence platform that analyzes project data to predict delays, optimize schedules, and prevent cost overruns.",
      features: [
        "Schedule Optimization",
        "Risk Prediction",
        "Cost Forecasting",
        "Resource Allocation",
        "Quality Control"
      ],
      projects: "Managing $2B in project value"
    },
    {
      id: 5,
      name: "Cloud Platform",
      category: "Infrastructure",
      icon: <Cloud size={40} />,
      shortDesc: "Enterprise Cloud Systems",
      description: "Secure cloud infrastructure powering all our digital operations, data storage, and real-time collaboration tools.",
      features: [
        "99.99% Uptime SLA",
        "Global CDN",
        "Auto Scaling",
        "Disaster Recovery",
        "End-to-End Encryption"
      ],
      projects: "Supporting 1,200+ users daily"
    },
    {
      id: 6,
      name: "Blockchain Ledger",
      category: "Security",
      icon: <Shield size={40} />,
      shortDesc: "Immutable Project Records",
      description: "Blockchain-based system for transparent contract management, supply chain tracking, and payment verification.",
      features: [
        "Smart Contracts",
        "Supply Chain Tracking",
        "Payment Verification",
        "Document Notarization",
        "Audit Trails"
      ],
      projects: "500+ contracts secured"
    },
    {
      id: 7,
      name: "AutoCAD Suite",
      category: "Engineering",
      icon: <Code2 size={40} />,
      shortDesc: "Precision Engineering Design",
      description: "Industry-standard CAD software for detailed architectural and engineering drawings with automated compliance checking.",
      features: [
        "2D/3D Drafting",
        "Structural Analysis",
        "MEP Design",
        "Code Compliance",
        "Auto Documentation"
      ],
      projects: "All projects use CAD standards"
    },
    {
      id: 8,
      name: "Data Warehouse",
      category: "Analytics",
      icon: <Database size={40} />,
      shortDesc: "Centralized Data Hub",
      description: "Enterprise data warehouse consolidating project data, financials, and operational metrics for business intelligence.",
      features: [
        "Real-time Reporting",
        "Data Visualization",
        "Custom Dashboards",
        "API Integration",
        "Historical Analysis"
      ],
      projects: "25+ years of project data"
    }
  ];

  return (
    <section className="py-20 bg-[#111] px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFB400 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Server size={16} />
            Technology Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Tech Stack
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto outfit">
            Cutting-edge technology powering modern construction. We leverage industry-leading tools to deliver precision, efficiency, and innovation.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.id}
              onClick={() => setSelectedTech(tech)}
              className="group bg-[#1a1a1a] border border-[#333] hover:border-primary rounded-sm p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {tech.icon}
              </div>

              {/* Content */}
              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                {tech.category}
              </p>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              <p className="text-gray-500 text-sm outfit">
                {tech.shortDesc}
              </p>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center gap-2 text-gray-600 group-hover:text-primary transition-colors">
                <span className="text-xs font-semibold uppercase">Learn More</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Digital Projects", value: "150+" },
            { label: "Tech Partners", value: "25+" },
            { label: "Data Points/Day", value: "10M+" },
            { label: "Efficiency Gain", value: "40%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTech(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#1a1a1a] border border-[#333] rounded-sm shadow-2xl max-w-2xl w-full animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 z-10 bg-[#333] p-2 rounded-sm hover:bg-primary hover:text-white text-gray-400 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-0">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center text-white flex-shrink-0">
                  {selectedTech.icon}
                </div>
                <div>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-1">
                    {selectedTech.category}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedTech.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="text-gray-400 leading-relaxed mb-6 outfit">
                {selectedTech.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Box size={18} className="text-primary" />
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedTech.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-400">
                      <GitBranch size={14} className="text-primary shrink-0" />
                      <span className="text-sm outfit">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Stat */}
              <div className="bg-primary/10 border border-primary/30 rounded-sm p-4">
                <div className="flex items-center gap-2 text-primary">
                  <Workflow size={18} />
                  <span className="font-semibold">{selectedTech.projects}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;
