"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Calendar,
  MapPin,
  User,
  Clock,
  TrendingUp,
  HardHat,
  CheckCircle,
  ArrowLeft,
  Filter,
  Search,
} from "lucide-react";
import Link from "next/link";

interface RunningProject {
  id: number;
  title: string;
  category: string;
  location: string;
  client: string;
  startDate: string;
  expectedCompletion: string;
  progress: number;
  image: string;
  description: string;
  area: string;
  value: string;
  team: string;
  milestones: { name: string; status: string }[];
}

interface HandoverProject {
  id: number;
  title: string;
  category: string;
  location: string;
  client: string;
  completedDate: string;
  image: string;
  description: string;
  area: string;
  value: string;
  features: string[];
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"running" | "handover">("running");
  const [runningProjects, setRunningProjects] = useState<RunningProject[]>([]);
  const [handoverProjects, setHandoverProjects] = useState<HandoverProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<
    RunningProject | HandoverProject | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const result = await response.json();
        if (result.success) {
          setRunningProjects(result.data.runningProjects);
          setHandoverProjects(result.data.handoverProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const currentProjects =
    activeTab === "running" ? runningProjects : handoverProjects;

  const categories = [
    "All",
    ...Array.from(new Set(currentProjects.map((p) => p.category))),
  ];

  const filteredProjects = currentProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isRunningProject = (
    project: RunningProject | HandoverProject
  ): project is RunningProject => {
    return "progress" in project;
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            Explore our portfolio of construction excellence. From ongoing developments to
            successfully completed landmarks, discover how we are shaping Bangladesh&apos;s
            infrastructure.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex gap-2 bg-white p-1 rounded-sm shadow-sm">
            <button
              onClick={() => setActiveTab("running")}
              className={`px-6 py-3 font-bold uppercase tracking-wider text-sm rounded-sm transition-all ${
                activeTab === "running"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Running Projects ({runningProjects.length})
            </button>
            <button
              onClick={() => setActiveTab("handover")}
              className={`px-6 py-3 font-bold uppercase tracking-wider text-sm rounded-sm transition-all ${
                activeTab === "handover"
                  ? "bg-secondary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Handover Projects ({handoverProjects.length})
            </button>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-sm w-full sm:w-64 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2.5 bg-white border border-gray-200 rounded-sm w-full sm:w-48 focus:outline-none focus:border-primary appearance-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div
                    className={`absolute top-4 left-4 text-white px-3 py-1 text-xs font-bold uppercase ${
                      isRunningProject(project) ? "bg-secondary" : "bg-primary"
                    }`}
                  >
                    {project.category}
                  </div>

                  {isRunningProject(project) && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-xs font-bold flex items-center gap-1">
                      <TrendingUp size={12} />
                      {project.progress}%
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin size={14} />
                    <span className="line-clamp-1 outfit">{project.location}</span>
                  </div>

                  {isRunningProject(project) ? (
                    <>
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
                    </>
                  ) : (
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        <span className="outfit">{project.completedDate}</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`w-full px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-colors duration-300 ${
                      isRunningProject(project)
                        ? "bg-primary text-white hover:bg-secondary"
                        : "bg-secondary text-white hover:bg-primary"
                    }`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative bg-white rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="relative h-[350px]">
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
                  <span
                    className={`text-white px-3 py-1 text-xs font-bold uppercase ${
                      isRunningProject(selectedProject) ? "bg-secondary" : "bg-primary"
                    }`}
                  >
                    {selectedProject.category}
                  </span>
                  {isRunningProject(selectedProject) && (
                    <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase flex items-center gap-1">
                      <TrendingUp size={12} />
                      {selectedProject.progress}%
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed outfit text-lg mb-6">
                {selectedProject.description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-secondary/10 p-4 text-center rounded-sm">
                  <p className="text-xs text-gray-500 uppercase mb-1">Project Value</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.value}</p>
                </div>
                <div className="bg-secondary/10 p-4 text-center rounded-sm">
                  <p className="text-xs text-gray-500 uppercase mb-1">Total Area</p>
                  <p className="text-lg font-bold text-secondary">{selectedProject.area}</p>
                </div>
                {isRunningProject(selectedProject) ? (
                  <>
                    <div className="bg-secondary/10 p-4 text-center rounded-sm">
                      <p className="text-xs text-gray-500 uppercase mb-1">Team Size</p>
                      <p className="text-lg font-bold text-secondary">{selectedProject.team}</p>
                    </div>
                    <div className="bg-secondary/10 p-4 text-center rounded-sm">
                      <p className="text-xs text-gray-500 uppercase mb-1">Completion</p>
                      <p className="text-lg font-bold text-secondary">
                        {selectedProject.expectedCompletion}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-secondary/10 p-4 text-center rounded-sm">
                      <p className="text-xs text-gray-500 uppercase mb-1">Client</p>
                      <p className="text-sm font-bold text-secondary">{selectedProject.client}</p>
                    </div>
                    <div className="bg-secondary/10 p-4 text-center rounded-sm">
                      <p className="text-xs text-gray-500 uppercase mb-1">Completed</p>
                      <p className="text-lg font-bold text-secondary">
                        {selectedProject.completedDate}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Client & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm">
                  <div className="bg-primary p-2 rounded-sm">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Client</p>
                    <p className="font-semibold text-gray-900 outfit">
                      {selectedProject.client}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm">
                  <div className="bg-primary p-2 rounded-sm">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Location</p>
                    <p className="font-semibold text-gray-900 outfit">
                      {selectedProject.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Milestones or Features */}
              {isRunningProject(selectedProject) ? (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <HardHat size={20} className="text-primary" />
                    Project Milestones
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            milestone.status === "completed"
                              ? "bg-green-500"
                              : milestone.status === "in-progress"
                                ? "bg-primary"
                                : "bg-gray-300"
                          }`}
                        />
                        <div className="flex-1">
                          <span
                            className={`text-sm ${
                              milestone.status === "completed"
                                ? "text-gray-900"
                                : milestone.status === "in-progress"
                                  ? "text-gray-900 font-semibold"
                                  : "text-gray-400"
                            }`}
                          >
                            {milestone.name}
                          </span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-sm uppercase font-medium ${
                            milestone.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : milestone.status === "in-progress"
                                ? "bg-primary/20 text-primary"
                                : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {milestone.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-primary" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-sm">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        <span className="text-gray-600 text-sm outfit">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
