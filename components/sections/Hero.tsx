"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Inline SVG for Github
const GithubIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Inline SVG for Linkedin
const LinkedinIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const skills = ["Java", "C", "C++", "PHP", "JavaScript", "TypeScript", "VB.NET", "React", "Node.js", "Android", "MySQL"];

function Typewriter() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const i = loopNum % skills.length;
      const fullText = skills[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(40);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="text-[#e6edf3] border-r-2 border-[#39FF14] pr-1">
      {text}
    </span>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] as const } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--accent)] opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-muted)] border border-[var(--border)] text-sm font-medium mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for collaborations
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              <span className="whitespace-nowrap">
                Hi, I'm <span className="text-[var(--text)]">Anwar.</span>
              </span>
              <br/>
              <span className="text-[var(--accent)] text-4xl md:text-5xl mt-2 block">Backend Focus Developer.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
              BCA student at Star Infotech College. I build scalable backends, 
              design robust databases, and solve real-world problems using Java, 
              Node.js, and modern web technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link href="/projects" className="flex items-center gap-2 bg-[var(--text)] text-[var(--bg)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Projects <ArrowRight size={18} />
              </Link>
              
              {/* AAPKA RESUME LINK YAHAN HAI */}
              <a href="/Anwar-Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--surface-muted)] transition-colors">
                Download Resume <Download size={18} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 mt-10 text-[var(--text-muted)]">
              {/* AAPKA GITHUB LINK YAHAN HAI */}
              <a href="https://github.com/The-Anwar-Official" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">
                <GithubIcon size={24} />
              </a>
              
              {/* AAPKA LINKEDIN LINK YAHAN HAI (Apna asli LinkedIn URL yahan daalein agar alag hai) */}
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">
                <LinkedinIcon size={24} />
              </a>
              
              {/* AAPKA EMAIL LINK YAHAN HAI (Apna asli email yahan daalein) */}
              <a href="mailto:mr.an.rough@gmail.com" className="hover:text-[var(--accent)] transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] as const }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[#0d1117] shadow-[0_0_50px_rgba(57,255,20,0.1)] overflow-hidden">
              
              <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-[var(--border)]">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs text-[var(--text-muted)] font-mono">anwar@backend:~</span>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed">
                <p className="text-[#39FF14]">$ whoami</p>
                <p className="text-[var(--text-muted)] mb-2">backend_developer</p>
                
                <p className="text-[#39FF14]">$ cat skills.txt</p>
                <p className="text-[var(--text-muted)] mb-2">
                  ["Java", "Node.js", "MySQL", "PHP"]
                </p>

                <p className="text-[#39FF14]">$ status</p>
                <p className="text-[var(--text-muted)] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Available for collaborations
                </p>

                <p className="text-[#39FF14] mt-2">$ skills --list</p>
                <div className="text-[var(--text-muted)] flex items-center min-h-[24px] mt-1">
                  <Typewriter />
                </div>

                <p className="text-[#39FF14] mt-4 flex items-center">
                  $ <span className="w-2 h-4 bg-[#39FF14] ml-1 animate-pulse"></span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}