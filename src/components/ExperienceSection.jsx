import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Happy Clients" },
  { number: "500+", label: "Campaigns Delivered" },
  { number: "10M+", label: "Total Reach" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ResultsSection = () => {
  const { scrollYProgress } = useScroll();

  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section className="relative bg-[#0b0b0b] text-white py-28 px-6 md:px-24 overflow-hidden">
      {/* 🌈 BACKGROUND GLOW (unchanged) */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-25%] left-[-15%] w-[650px] h-[650px] bg-orange-500 blur-[240px] opacity-10" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[600px] h-[600px] bg-blue-500 blur-[260px] opacity-10" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Experience That <span className="text-orange-500">Feels Proven</span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 mt-5 max-w-xl mx-auto"
        >
          Built through consistent execution, strategic thinking, and measurable
          results.
        </motion.p>

        {/* 💎 PREMIUM GRADIENT STATS CONTAINER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap md:flex-nowrap justify-center gap-16
          relative rounded-3xl px-10 py-12
          bg-gradient-to-br from-white/10 via-white/5 to-transparent
          border border-white/10 backdrop-blur-xl"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative text-center group cursor-default"
            >
              {/* soft glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 bg-orange-500 blur-3xl opacity-20" />
              </div>

              {/* 🔥 PREMIUM NUMBER STYLE */}
              <div
                className="
  text-4xl md:text-5xl
  font-serif
  font-light
  italic
  text-orange-500
  tracking-wide
  drop-shadow-[0_0_18px_rgba(249,115,22,0.22)]
"
              >
                {item.number}
              </div>

              {/* LABEL */}
              <div className="mt-2 text-[10px] tracking-[0.35em] uppercase text-gray-400 font-light">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
