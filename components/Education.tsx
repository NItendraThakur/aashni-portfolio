"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-blue-400 tracking-[0.3em] uppercase">Background</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-blue-500/30 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-blue-400/70 text-xs font-medium mb-1">{edu.institution}</p>
                  <p className="text-white/30 text-xs">{edu.dates}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
              Certifications
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.25 }}
                className="px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-300/80 text-xs font-medium"
              >
                {cert.title}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
