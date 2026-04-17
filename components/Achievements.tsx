"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Trophy, BarChart3, Users, Award } from "lucide-react";

const typeConfig: Record<string, { icon: typeof Trophy; color: string; bg: string }> = {
  award: { icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
  scholarship: { icon: Award, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  metric: { icon: BarChart3, color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
  leadership: { icon: Users, color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
};

export default function Achievements() {
  const { achievements } = resumeData;

  const grouped = achievements.reduce<Record<string, typeof achievements>>((acc, item) => {
    (acc[item.type] = acc[item.type] || []).push(item);
    return acc;
  }, {});

  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-blue-400 tracking-[0.3em] uppercase">Recognition</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Achievements</h2>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(grouped).map(([type, items], gi) => {
            const cfg = typeConfig[type] || typeConfig.metric;
            const Icon = cfg.icon;

            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${cfg.bg}`}>
                    <Icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                  </div>
                  <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                    {type === "metric" ? "Key Metrics" : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.35 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      className={`group relative rounded-xl border p-5 overflow-hidden transition-all duration-200 cursor-default ${cfg.bg}`}
                    >
                      {/* Spotlight */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent" />

                      <p className="text-white font-semibold text-sm leading-tight mb-2">
                        {item.title}
                      </p>
                      <p className="text-white/40 text-xs leading-relaxed">{item.context}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
