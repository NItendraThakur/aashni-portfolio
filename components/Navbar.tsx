"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Hero", "Impact", "Experience", "Skills", "Education", "Contact"];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [active, setActive] = useState("Hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > lastY && y > 100);
    setLastY(y);
    if (menuOpen) setMenuOpen(false);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-40 px-4 pt-4"
      >
        {/* Desktop pill nav */}
        <div className="hidden md:flex justify-center">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-black/70 border border-white/10 backdrop-blur-xl shadow-lg shadow-blue-500/5">
            <button
              onClick={() => scrollTo("Hero")}
              className="text-sm font-black mr-3 text-white hover:text-blue-400 transition-colors"
            >
              <span className="text-blue-400">A</span>K
            </button>
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
        </div>

        {/* Mobile top bar */}
        <div className="flex md:hidden items-center justify-between px-2 py-2 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => scrollTo("Hero")}
            className="text-lg font-black text-white pl-2"
          >
            <span className="text-blue-400">A</span>K
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white hover:border-blue-500/50 transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-40 rounded-2xl bg-black/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-500/10 overflow-hidden md:hidden"
          >
            {sections.map((s, i) => (
              <motion.button
                key={s}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(s)}
                className={`w-full text-left px-5 py-4 text-sm font-medium transition-all duration-150 border-b border-white/5 last:border-0 ${
                  active === s
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {s}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
