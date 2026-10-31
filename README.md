# 🚀 Anwar - Professional Portfolio

A premium, modern, and highly interactive personal developer portfolio. Designed with a strong dark-first visual identity, cinematic animations, and a focus on performance and accessibility.

![Portfolio Preview](/public/Profile.jpeg)

## ✨ Features

- **Cinematic Intro:** A custom canvas-based neon green "AR" lightning intro.
- **Modern Tech Stack:** Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.
- **Smooth Animations:** Powered by Framer Motion for scroll reveals and interactive elements.
- **Dynamic Projects:** Dedicated `/projects` route with search, filters, and dynamic case-study pages (`/projects/[slug]`).
- **Fully Functional Contact Form:** Integrated with EmailJS for direct email delivery without a backend.
- **Dark/Light Mode:** Seamless theme switching with saved user preferences.
- **Responsive & Accessible:** Optimized for mobile, tablet, and desktop with semantic HTML.
- **SEO Ready:** Dynamic metadata, sitemap, and robots.txt included.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (now `motion/react`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
anwar-portfolio/
├── app/                  # Next.js App Router pages
│   ├── projects/         # Projects list and dynamic [slug] pages
│   ├── globals.css       # Tailwind config and CSS variables
│   ├── layout.tsx        # Root layout with ThemeProvider
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── layout/           # Navbar, Footer, ScrollProgress
│   ├── sections/         # Hero, About, Skills, Contact
│   └── CinematicIntro.tsx# The AR intro animation
├── lib/                  # Data and utilities
└── public/               # Static assets (images, resume)