"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { resumeData } from "@/lib/data";
import { ChevronDown, MapPin, Calendar, Zap } from "lucide-react";

const metrics = [/\d+\+?/g];

function highlightMetrics(text: string): React.ReactNode {
  const parts = text.split(/(\d+\+?\s*(?:batches|samples|students|platforms|researchers|scientists|place)?)/gi);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="text-blue-400 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function isImpactBullet(bullet: string): boolean {
  return /\d+|zero|1st place|novel|validated|developed|led|authored/i.test(bullet);
}

export default function Experience() {
  const { experience } = resumeData;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs text-blue-400 tracking-[0.3em] uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

          <div className="space-y-4 pl-8 sm:pl-20">
            {experience.map((job, i) => {
              const isOpen = openIdx === i;
              const impactBullets = job.bullets.filter(isImpactBullet);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 sm:-left-20 top-6 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${isOpen ? "border-blue-400 bg-blue-400 shadow-lg shadow-blue-400/50" : "border-white/20 bg-black"}`} />
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen
                        ? "border-blue-500/30 bg-blue-500/5"
                        : "border-white/8 bg-white/[0.02] hover:border-white/15"
                    }`}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    {/* Header row */}
                    <div className="p-6 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                            {job.role}
                          </h3>
                          {i === 0 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-blue-400/80 font-semibold text-sm mb-2">
                          {job.company}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/30 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {job.dates}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-white/30 flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-400" : ""}`}
                      />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-white/5 pt-4">
                            {/* Impact highlights */}
                            {impactBullets.length > 0 && (
                              <div className="mb-5 p-4 rounded-xl bg-blue-500/5 border border-blue-500/15">
                                <div className="flex items-center gap-2 mb-3">
                                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                                  <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                                    Impact Highlights
                                  </span>
                                </div>
                                <ul className="space-y-1.5">
                                  {impactBullets.map((b, j) => (
                                    <li key={j} className="text-white/60 text-xs leading-relaxed">
                                      {highlightMetrics(b)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* All bullets */}
                            <ul className="space-y-3">
                              {job.bullets.map((bullet, j) => (
                                <li key={j} className="flex gap-3 text-white/50 text-sm leading-relaxed">
                                  <span className="w-1 h-1 rounded-full bg-blue-500/60 mt-2 flex-shrink-0" />
                                  {highlightMetrics(bullet)}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
