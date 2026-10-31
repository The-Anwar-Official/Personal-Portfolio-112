"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C", "C++", "PHP", "JavaScript", "TypeScript", "VB.NET"]
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "Firebase"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firestore"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Android Studio", "WordPress", "Vercel", "VS Code", "Postman"]
  },
  {
    title: "Currently Learning",
    skills: ["Docker", "AWS", "Redis", "System Design"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-[var(--accent)] rounded-full mb-6"></div>
          <p className="text-[var(--text-muted)] max-w-2xl">
            Technologies and tools I use to build scalable applications and solve problems.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors duration-300 group"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform duration-300" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[var(--surface-muted)] text-[var(--text-muted)] border border-transparent hover:border-[var(--border)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}