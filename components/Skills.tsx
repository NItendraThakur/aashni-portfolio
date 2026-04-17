"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-blue-400 tracking-[0.3em] uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Skills</h2>
        </motion.div>

        <div className="space-y-10">
          {skills.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.4 }}
            >
              <h3 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.06 + i * 0.03, duration: 0.25 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.6)" }}
                    className="px-3 py-1.5 rounded-full text-xs text-white/60 border border-white/10 bg-white/[0.03] hover:text-white hover:bg-blue-500/10 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
