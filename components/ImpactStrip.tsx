"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { resumeData } from "@/lib/data";
import { Trophy, FlaskConical, Users } from "lucide-react";

const icons = [Trophy, FlaskConical, Users];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const step = Math.ceil(target / 40);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactStrip() {
  const { topImpact } = resumeData;

  return (
    <section id="impact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs text-blue-400 tracking-[0.3em] uppercase">By the numbers</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Top 3 Impact</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {topImpact.map((item, i) => {
            const Icon = icons[i];
            const numericPart = parseInt(item.stat.replace(/\D/g, ""), 10);
            const suffix = item.stat.replace(/[0-9]/g, "");

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative group rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm p-8 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Icon className="w-7 h-7 text-blue-400 mb-6" />

                <div className="text-5xl font-black text-white mb-2">
                  <Counter target={numericPart} suffix={suffix} />
                </div>

                <p className="text-white/70 font-medium text-sm mb-1">{item.label}</p>
                <p className="text-white/30 text-xs">{item.context}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
