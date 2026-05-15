import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const steps = [
  {
    title: "Research",
    desc: "We deeply analyze your business, audience, and competitors.",
  },
  {
    title: "Strategy & Design",
    desc: "We craft modern UI/UX systems with premium direction.",
  },
  {
    title: "Development",
    desc: "We build fast, scalable, high-performance products.",
  },
  {
    title: "Launch & Scale",
    desc: "We deploy and optimize for maximum growth.",
  },
];

function Process() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 text-white bg-transparent overflow-hidden" id="process"
    >
      {/* 🔶 ONLY ORANGE GLOW (transparent, no background fill) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-orange-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-180px] right-0 w-[520px] h-[520px] bg-orange-600/20 blur-[160px] rounded-full" />
      </div>

      {/* Heading */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
            Process
          </span>
        </h2>
        <p className="text-gray-400 mt-4">
          Fully transparent section with scroll-based premium flow
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* base line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2" />

        {/* animated line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-orange-400 via-orange-500 to-yellow-400 shadow-[0_0_25px_rgba(255,140,0,0.6)]"
        />

        <div className="space-y-28 relative z-10">
          {steps.map((step, i) => {
            const itemRef = useRef(null);

            const { scrollYProgress } = useScroll({
              target: itemRef,
              offset: ["0.8 1", "0.2 0.5"],
            });

            const smoothItem = useSpring(scrollYProgress, {
              stiffness: 120,
              damping: 25,
            });

            const opacity = useTransform(smoothItem, [0, 1], [0, 1]);

            const x =
              i % 2 === 0
                ? useTransform(smoothItem, [0, 1], [-80, 0])
                : useTransform(smoothItem, [0, 1], [80, 0]);

            const scale = useTransform(smoothItem, [0, 1], [0.9, 1]);

            return (
              <motion.div
                key={i}
                ref={itemRef}
                style={{ opacity, x, scale }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg shadow-orange-500/40" />

                {/* card (semi-transparent only, NO background layer) */}
                <div className="w-[45%]">
                  <div className="p-6 rounded-2xl border border-white/10 bg-black/10 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">
                      {String(i + 1).padStart(2, "0")}. {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;