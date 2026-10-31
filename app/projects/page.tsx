"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Search, ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Type define kar diya taaki TypeScript ko error na aaye
type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  techStack: string[];
  github: string;
  live: string;
  featured: boolean;
  status: string;
};

const projectsData: Project[] = [
  {
    slug: "smart-career-assistance",
    title: "Smart Career Assistance",
    description: "A career assistance application combining Android development, Firebase services, and Gemini AI.",
    longDescription: "An intelligent application designed to help users navigate their career paths using AI-driven insights and real-time database management.",
    category: "Android & AI",
    techStack: ["Java", "Android", "Firebase", "Gemini AI"],
    github: "https://github.com/The-Anwar-Official/smart-career-assistant",
    live: "",
    featured: true,
    status: "Completed"
  },
  {
    slug: "pottery-crockery-website",
    title: "Pottery & Crockery Website",
    description: "A product-focused website built to present pottery and crockery through a responsive web interface.",
    longDescription: "A fully responsive e-commerce style showcase website for a local pottery business, focusing on clean UI and smooth user experience.",
    category: "Frontend",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/The-Anwar-Official/POTTERY-CROCKERY-BY-ALI",
    live: "",
    featured: true,
    status: "Completed"
  },
  {
    slug: "anwar-learner",
    title: "Anwar Learner",
    description: "A WordPress website and blog focused on publishing content through a website that works across different screen sizes.",
    longDescription: "A content management system built on WordPress, heavily customized for performance and mobile-first reading experience.",
    category: "WordPress",
    techStack: ["WordPress", "Blogging", "Responsive Design"],
    github: "https://anwarlearner.blog/",
    live: "https://anwarlearner.blog/",
    featured: false,
    status: "Live"
  },
  {
    slug: "refrigerator-management-system",
    title: "Refrigerator Management System",
    description: "An inventory and status monitoring system for managing refrigerator stock, developed in Java to apply core object-oriented design principles.",
    longDescription: "A Java-based desktop application that demonstrates encapsulation, inheritance, and practical database management for inventory tracking.",
    category: "Java Core",
    techStack: ["Java", "OOP", "MySQL"],
    github: "https://github.com/The-Anwar-Official",
    live: "https://anwarlearner.blog/",
    featured: false,
    status: "Completed"
  },
  {
    slug: "tracer-scam-safety",
    title: "TRACER Scam Safety Web",
    description: "A web platform designed to detect and spread awareness about online scams and fraudulent activities.",
    longDescription: "A safety-first web application built to help users verify suspicious links and report scam activities.",
    category: "Web App",
    techStack: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/The-Anwar-Official/TRACER-Scam-Safety-Web",
    live: "",
    featured: false,
    status: "Completed"
  },
  {
    slug: "nexus-gaming",
    title: "NEXUS Gaming",
    description: "A gaming-focused web project showcasing immersive UI and interactive elements.",
    longDescription: "Built to practice advanced CSS animations and responsive layout techniques for gaming communities.",
    category: "Frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/The-Anwar-Official/NEXUS-Gaming",
    live: "",
    featured: false,
    status: "Completed"
  }
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map((p: Project) => p.category)))];

  const filteredProjects = projectsData.filter((project: Project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.techStack.some((t: string) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = filter === "All" || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text)]">My Projects</h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl">
            A collection of backend systems, web applications, and experiments I've built.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? "bg-[var(--accent)] text-black" 
                    : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
            <input 
              type="text" 
              placeholder="Search projects or tech..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:border-[var(--accent)] text-[var(--text)]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
                    {project.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Live" ? "bg-green-500/10 text-green-500" : 
                    project.status === "In Progress" ? "bg-yellow-500/10 text-yellow-500" : 
                    "bg-gray-500/10 text-gray-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-[var(--surface-muted)] text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-[var(--border)] flex items-center justify-between bg-[var(--bg)]/50">
                <Link href={`/projects/${project.slug}`} className="text-sm font-semibold flex items-center gap-1 hover:text-[var(--accent)] transition-colors text-[var(--text)]">
                  View Case Study <ArrowRight size={16} />
                </Link>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            <p className="text-lg">No projects found matching your criteria.</p>
            <button onClick={() => {setSearch(""); setFilter("All");}} className="mt-4 text-[var(--accent)] hover:underline">
              Clear filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}