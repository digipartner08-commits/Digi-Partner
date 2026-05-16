import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Performance Marketing",
    desc:
      "Growth campaigns engineered to increase traffic, leads, and measurable revenue.",
    type: "marketing",
  },
  {
    title: "Brand Identity",
    desc:
      "Luxury visual systems crafted to build trust, authority, and premium positioning.",
    type: "branding",
  },
  {
    title: "Web Experiences",
    desc:
      "Cinematic websites with smooth interactions and modern user experiences.",
    type: "web",
  },
  {
    title: "Content Creation",
    desc:
      "High-impact visual storytelling built for attention and engagement.",
    type: "content",
  },
];

function AnimatedVisual({ type }) {
  if (type === "marketing") {
    return (
      <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-8">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-orange-500/20" />

        <div className="absolute bottom-0 left-2 flex items-end gap-2">
          <motion.div
            animate={{ height: [12, 30, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 rounded-full bg-orange-700"
          />

          <motion.div
            animate={{ height: [18, 45, 18] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="w-2 rounded-full bg-orange-500"
          />

          <motion.div
            animate={{ height: [25, 60, 25] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="w-2 rounded-full bg-orange-300"
          />
        </div>

        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 text-orange-400 text-xl md:text-3xl"
        >
          ↗
        </motion.div>
      </div>
    );
  }

  if (type === "branding") {
    return (
      <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-8 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-16 h-16 md:w-24 md:h-24 border border-orange-500/30 rounded-full"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-10 h-10 md:w-16 md:h-16 border border-orange-300/40 rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-orange-500"
        />
      </div>
    );
  }

  if (type === "web") {
    return (
      <div className="relative w-20 h-14 md:w-28 md:h-20 mx-auto mb-4 md:mb-8">
        <div className="absolute inset-0 rounded-xl border border-orange-500/20 bg-black overflow-hidden">

          <div className="p-2 space-y-1">
            <motion.div
              animate={{ width: ["20%", "80%", "20%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1 rounded-full bg-orange-500"
            />

            <motion.div
              animate={{ width: ["70%", "30%", "70%"] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="h-1 rounded-full bg-orange-300"
            />

            <motion.div
              animate={{ width: ["40%", "90%", "40%"] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="h-1 rounded-full bg-orange-400"
            />
          </div>
        </div>

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-2 bg-orange-500/30 rounded-full" />
      </div>
    );
  }

  if (type === "content") {
    return (
      <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-8 flex items-center justify-center">

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute w-14 h-14 md:w-20 md:h-20 rounded-full border border-orange-500/30"
        />

        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center"
        >
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-lg md:text-3xl text-orange-400"
          >
            ▶
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return null;
}

function Services() {
  return (
    <section
      id="service"
      className="relative bg-[#050505] text-white py-20 px-3 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-2 h-2 rounded-full bg-orange-500"
            />

            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs text-orange-300">
              Premium Digital Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Crafted For{" "}
            <span className="text-orange-500">
              Modern Brands
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-white/50 text-sm md:text-lg leading-relaxed">
            We design premium digital experiences that combine creativity,
            strategy, and technology to elevate ambitious brands.
          </p>
        </motion.div>

        {/* FINAL WORKING MOBILE GRID */}
        <div className="services-grid">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group relative overflow-hidden
                rounded-[22px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl

                p-3 md:p-6

                h-[250px] md:h-[380px]

                text-center
              "
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />

              {/* Visual */}
              <AnimatedVisual type={item.type} />

              {/* Text */}
              <div className="relative z-10">

                <h3 className="text-[14px] md:text-2xl font-semibold mb-2 md:mb-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-white/55 text-[11px] md:text-[15px] leading-relaxed">
                  {item.desc}
                </p>

              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;