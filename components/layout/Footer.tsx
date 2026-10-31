"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

// Inline SVG for Github and Linkedin
const GithubIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [year, setYear] = useState(2024); // Default fallback

  // Yeh client side par current year set karega
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl tracking-tighter mb-4 block text-[var(--text)]">
              ANWAR<span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="text-[var(--text-muted)] max-w-sm mb-6">
              Backend Focus Developer building scalable systems and modern web applications. 
              BCA Student at Star Infotech College.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/The-Anwar-Official" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[var(--surface-muted)] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[var(--surface-muted)] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:mr.an.rough@gmail.com" className="p-2 rounded-lg bg-[var(--surface-muted)] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[var(--text)]">Quick Links</h4>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li><Link href="/#home" className="hover:text-[var(--accent)] transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-[var(--accent)] transition-colors">About</Link></li>
              <li><Link href="/#skills" className="hover:text-[var(--accent)] transition-colors">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--accent)] transition-colors">Projects</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {year} Anwar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/Anwar-Resume.pdf" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">Resume</a>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--accent)] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}