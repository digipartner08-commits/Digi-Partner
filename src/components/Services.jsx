import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    title: "Digital Marketing",
    desc: "Strategic campaigns, content systems, and audience growth.",
    icon: "📣",
  },
  {
    title: "Creative Design",
    desc: "Modern UI, branding, and visual identity systems.",
    icon: "🎨",
  },
  {
    title: "Website Development",
    desc: "Fast, responsive, production-ready web experiences.",
    icon: "💻",
  },
  {
    title: "Content Creation",
    desc: "Brand storytelling, identity, and visual communication.",
    icon: "🧠",
  },
];

function Services() {
  const { scrollYProgress } = useScroll();
  const lineScale = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section className="relative pt-24 pb-12 px-6 bg-transparent text-white overflow-hidden" id="service">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">

        <div className="flex items-center justify-center gap-6">

          <motion.div
            style={{ scaleX: lineScale }}
            className="h-[1px] w-24 origin-right bg-orange-500/80"
          />

          <h2 className="text-5xl font-semibold tracking-tight">
            Our Expertise
          </h2>

          <motion.div
            style={{ scaleX: lineScale }}
            className="h-[1px] w-24 origin-left bg-orange-500/80"
          />
        </div>

        <p className="text-white/50 mt-4 text-lg">
          Premium digital solutions crafted for modern brands
        </p>
      </div>

      {/* 🔥 ONE ROW ONLY (NO GRID BREAK) */}
      <div className="max-w-6xl mx-auto flex gap-6 justify-between">

        {services.map((item, i) => (
          <div
            key={i}
            className="flex-1 min-w-[220px] p-6 rounded-xl border border-white/10 bg-white/[0.03]"
          >
            <div className="text-2xl mb-4">{item.icon}</div>

            <h3 className="text-lg font-medium mb-2">
              {item.title}
            </h3>

            <p className="text-white/50 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;