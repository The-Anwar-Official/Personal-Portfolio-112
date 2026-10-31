"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setStatus("loading");

    try {
      // TODO: Yahan apni EmailJS keys daalein
      await emailjs.sendForm(
        'service_xbbh0uw', 
        '__ejs-test-mail-service__', 
        formRef.current, 
        'uO9qdIraTR-H2Omzb'
      );

      // Demo ke liye 1.5s ka delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus("success");
      setMessage("Message sent successfully! I'll get back to you soon.");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send message. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--surface-muted)]/30 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text)]">Get In Touch</h2>
          <div className="w-20 h-1 bg-[var(--accent)] rounded-full mx-auto mb-6"></div>
          <p className="text-[var(--text-muted)] text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 shadow-xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--text)]">Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  id="name" 
                  required
                  className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] text-[var(--text)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--text)]">Email</label>
                <input 
                  type="email" 
                  name="reply_to"
                  id="email" 
                  required
                  className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] text-[var(--text)]"
                  placeholder="your.email@gmail.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--text)]">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] text-[var(--text)] resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center text-sm font-medium">{message}</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center text-sm font-medium">{message}</p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}