import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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

// Direct data yahan daal diya
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
    github: "",
    live: "#",
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
    live: "",
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
    status: "In Progress"
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

export function generateStaticParams() {
  return projectsData.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p: Project) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        <div className="mb-12">
          <span className="text-sm font-semibold tracking-wider text-[var(--accent)] uppercase mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text)]">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center mb-8">
             <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] transition-colors text-[var(--text)]">
                    <GithubIcon size={16} /> Source Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[var(--text)] text-[var(--bg)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
             </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-[var(--surface-muted)] border border-[var(--border)] text-[var(--text-muted)]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">Project Overview</h2>
          <p className="text-[var(--text-muted)] leading-relaxed text-lg mb-8">
            {project.longDescription}
          </p>

          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-8">
            <h3 className="text-xl font-bold mb-4 text-[var(--text)]">My Role & Challenges</h3>
            <p className="text-[var(--text-muted)] mb-4">
              As the primary developer for this project, I handled everything from database architecture to frontend implementation.
            </p>
            <ul className="list-disc pl-5 text-[var(--text-muted)] space-y-2">
              <li>Designed the relational database schema and optimized queries.</li>
              <li>Implemented secure authentication and data validation logic.</li>
              <li>Built a responsive and accessible user interface.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}