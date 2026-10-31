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

          {/* Profile Image Placeholder */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative flex justify-center items-center"
          >
            <div className="w-full max-w-md aspect-square rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--surface)] flex flex-col items-center justify-center p-8 text-center">
              <div className="w-full h-full relative overflow-hidden rounded-2xl">
                <img src="/profile.png" alt="Anwar" className="object-cover w-full h-full" />
              </div>
              {/* <h3 className="font-medium text-lg mb-2">Your Photo Here</h3> */}
              {/* <p className="text-sm text-[var(--text-muted)]">
                Replace this placeholder with your professional portrait in the code.
              </p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}