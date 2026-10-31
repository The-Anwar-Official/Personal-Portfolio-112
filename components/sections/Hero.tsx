"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight, Download, Code2 } from "lucide-react";
import Link from "next/link";

// Inline SVG for Github (lucide-react v1 se hata diya gaya hai)
const GithubIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Inline SVG for Linkedin (lucide-react v1 se hata diya gaya hai)
const LinkedinIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] as const}
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--accent)] opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-muted)] border border-[var(--border)] text-sm font-medium mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for collaborations
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              Hi, I'm <br/>
              <span className="text-[var(--text)]">Anwar.</span> <br/>
              <span className="text-[var(--accent)] text-4xl md:text-5xl">Backend Focus Developer.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
              BCA student at Star Infotech College. I build scalable backends, 
              design robust databases, and solve real-world problems using Java, 
              Node.js, and modern web technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link href="#projects" className="flex items-center gap-2 bg-[var(--text)] text-[var(--bg)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Projects <ArrowRight size={18} />
              </Link>
              <a href="/Anwar-Resume.pdf" className="flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--surface-muted)] transition-colors">
                Download Resume <Download size={18} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 mt-10 text-[var(--text-muted)]">
              <a href="https://github.com/The-Anwar-Official" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="mailto:mr.an.rough@gmail.com" className="hover:text-[var(--accent)] transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden flex items-center justify-center group">
              <Code2 size={64} className="text-[var(--text-muted)] opacity-20 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--surface-muted)] border border-[var(--border)] rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[var(--surface-muted)] border border-[var(--border)] rounded-full shadow-lg animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}