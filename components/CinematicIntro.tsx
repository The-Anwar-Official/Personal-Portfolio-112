"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let particles: any[] = [];
    let bolts: any[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Lightning generator
    const makeBolt = (start: any, end: any) => {
      const pts = [start];
      const segments = 12;
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        pts.push({
          x: start.x + (end.x - start.x) * t + (Math.random() - 0.5) * 40,
          y: start.y + (end.y - start.y) * t + (Math.random() - 0.5) * 40,
        });
      }
      pts.push(end);
      return { pts, life: 1 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn Bolts
      if (Math.random() < 0.3) {
        const ang = Math.random() * Math.PI * 2;
        bolts.push(makeBolt(
          { x: cx + Math.cos(ang) * 50, y: cy + Math.sin(ang) * 50 },
          { x: cx + Math.cos(ang) * 200, y: cy + Math.sin(ang) * 200 }
        ));
      }

      // Draw Bolts
      bolts.forEach((b, index) => {
        b.life -= 0.05;
        if (b.life <= 0) bolts.splice(index, 1);
        else {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(57, 255, 20, ${b.life})`;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#39FF14";
          ctx.moveTo(b.pts[0].x, b.pts[0].y);
          b.pts.forEach((p: any) => ctx.lineTo(p.x, p.y));
          ctx.stroke();
        }
      });

      // Spawn Particles
      if (Math.random() < 0.5) {
        const ang = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        particles.push({
          x: cx, y: cy,
          vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed,
          life: 1
        });
      }

      // Draw Particles
      particles.forEach((p, index) => {
        p.x += p.vx; p.y += p.vy;
        p.life -= 0.02;
        if (p.life <= 0) particles.splice(index, 1);
        else {
          ctx.beginPath();
          ctx.fillStyle = `rgba(216, 255, 208, ${p.life})`;
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 3500);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black overflow-hidden"
        >
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="relative z-10"
          >
            <h1 
              className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#D8FFD0] via-[#39FF14] to-[#008F32]"
              style={{ textShadow: "0 0 40px rgba(57,255,20,0.5), 0 0 80px rgba(57,255,20,0.3)" }}
            >
              AR
            </h1>
          </motion.div>
          
          {/* Flash effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="absolute inset-0 bg-white mix-blend-screen pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}