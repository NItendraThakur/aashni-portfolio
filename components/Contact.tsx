"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Mail, ExternalLink, MapPin, Download } from "lucide-react";

export default function Contact() {
  const { basics } = resumeData;

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs text-blue-400 tracking-[0.3em] uppercase">Get in touch</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto mb-12">
            Currently seeking full-time roles in Analytical Development and Research. If you are
            hiring or know someone who is, I would love to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <a
            href={`mailto:${basics.email}`}
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40"
          >
            <Mail className="w-4 h-4" />
            {basics.email}
          </a>
          <a
            href={basics.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:border-blue-500/50 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-white/25 text-xs mb-10"
        >
          <MapPin className="w-3.5 h-3.5" />
          {basics.location}
        </motion.div>

        <motion.a
          href="/Aashni_Khurana_Resume.pdf"
          download="Aashni_Khurana_Resume.pdf"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-blue-500/40 text-white/40 hover:text-white/70 text-xs font-medium transition-all duration-200"
        >
          <Download className="w-3.5 h-3.5" />
          Download Resume (PDF)
        </motion.a>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 text-white/15 text-xs"
        >
          © {new Date().getFullYear()} Aashni Khurana · Research Scientist
        </motion.p>
      </div>
    </section>
  );
}
