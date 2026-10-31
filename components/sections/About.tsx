"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, Target } from "lucide-react";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-[var(--surface-muted)]/30 border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[var(--accent)] rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              I am currently pursuing my Bachelor of Computer Applications (BCA) at 
              <strong> Star Infotech College</strong>, graduating in under progress. My journey 
              into software engineering started with a curiosity about how systems work 
              behind the scenes, which naturally led me to focus heavily on backend architecture.
            </p>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              I enjoy working with databases, designing APIs, and writing clean, efficient code. 
              I believe that a strong backend is the backbone of any great application. 
              When I'm not coding, I'm usually exploring new technologies or working on personal projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <MapPin className="text-[var(--accent)] mb-2" size={24} />
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-[var(--text-muted)]">Ajmer, Rajasthan</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <GraduationCap className="text-[var(--accent)] mb-2" size={24} />
                <h4 className="font-semibold">Education</h4>
                <p className="text-sm text-[var(--text-muted)]">BCA (2024)</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <Code className="text-[var(--accent)] mb-2" size={24} />
                <h4 className="font-semibold">Focus</h4>
                <p className="text-sm text-[var(--text-muted)]">Backend & Databases</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <Target className="text-[var(--accent)] mb-2" size={24} />
                <h4 className="font-semibold">Goal</h4>
                <p className="text-sm text-[var(--text-muted)]">Scalable Systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative flex justify-center items-center"
          >
            {/* Profile Image Placeholder ko is code se replace karein */}
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeUp}
  className="relative flex justify-center items-center"
>
  {/* Box styling */}
  <div className="w-full max-w-md aspect-square rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--surface)] shadow-[0_0_40px_rgba(57,255,20,0.15)] overflow-hidden relative group">
    
    {/* Image Tag */}
    <img 
      src="/profile.jpeg" 
      alt="Anwar - Backend Developer" 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
    />

    {/* Optional: Hover par ek subtle green glow overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
  </div>
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}