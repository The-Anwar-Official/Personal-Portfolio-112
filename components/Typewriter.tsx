"use client";

import { useState, useEffect } from "react";

const skills = [
  "Java",
  "C",
  "C++",
  "PHP",
  "JavaScript",
  "TypeScript",
  "VB.NET",
  "React",
  "Next.js",
  "Node.js",
  "Android",
  "MySQL",
  "Firebase"
];

export default function Typewriter() {
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
        setTypingSpeed(40); // Deleting speed
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100); // Typing speed
      }

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1200); // Pause before delete
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
    <span className="text-[var(--text)] border-r-2 border-[#39FF14] pr-1">
      {text}
    </span>
  );
}