"use client";
import { motion } from "framer-motion";
import { Mail, ExternalLink, ChevronDown, Download } from "lucide-react";
import { resumeData } from "@/lib/data";

export default function Hero() {
  const { basics } = resumeData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Available for full-time roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-4"
        >
          {basics.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "text-blue-400" : ""}>
              {word}{i === 0 ? " " : ""}
            </span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-lg sm:text-2xl text-white/60 font-light tracking-wide mb-6"
        >
          {basics.title} &nbsp;·&nbsp; {basics.currentOrg}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="max-w-2xl mx-auto text-white/40 text-sm sm:text-base leading-relaxed mb-10"
        >
          4+ years across the full analytical pipeline — GMP batch release, federally funded method
          development, and cutting-edge nanoparticle therapeutics research. I build methods, validate
          them to ICH standards, and make data that holds up under scrutiny.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
          >
            View Experience
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="/Aashni_Khurana_Resume.pdf"
            download="Aashni_Khurana_Resume.pdf"
            className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/15 hover:border-blue-500/50 text-white/70 hover:text-white text-sm font-semibold transition-all duration-200 backdrop-blur-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href={`mailto:${basics.email}`}
            className="flex items-center gap-2 text-white/30 hover:text-blue-400 text-xs transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            {basics.email}
          </a>
          <a
            href={basics.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-blue-400 text-xs transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-blue-500/50 to-transparent"
        />
        <span className="text-white/20 text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
