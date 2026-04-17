"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const sections = ["Hero", "Impact", "Experience", "Skills", "Education", "Contact"];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [active, setActive] = useState("Hero");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > lastY && y > 100);
    setLastY(y);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 inset-x-0 z-40 flex justify-center pt-4"
    >
      <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl shadow-lg shadow-blue-500/5">
        {/* Logo */}
        <span className="text-sm font-black mr-4 text-white">
          <span className="text-blue-400">A</span>K
        </span>
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
              active === s
                ? "bg-blue-600 text-white"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
