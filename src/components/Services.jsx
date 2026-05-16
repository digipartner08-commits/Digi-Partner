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

  /* MARKETING */
  if (type === "marketing") {
    return (
      <div className="relative w-28 h-28 mx-auto mb-10">

        {/* Graph Base */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-orange-500/20" />

        {/* Bars */}
        <div className="absolute bottom-0 left-4 flex items-end gap-3">

          <motion.div
            animate={{ height: [20, 55, 20] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-3 rounded-full bg-orange-700"
          />

          <motion.div
            animate={{ height: [35, 80, 35] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.2,
            }}
            className="w-3 rounded-full bg-orange-500"
          />

          <motion.div
            animate={{ height: [50, 105, 50] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.4,
            }}
            className="w-3 rounded-full bg-orange-300"
          />
        </div>

        {/* Floating Arrow */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute top-2 right-2 text-orange-400 text-3xl"
        >
          ↗
        </motion.div>
      </div>
    );
  }

  /* BRANDING */
  if (type === "branding") {
    return (
      <div className="relative w-28 h-28 mx-auto mb-10 flex items-center justify-center">

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-28 h-28 border border-orange-500/30 rounded-full"
        />

        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-20 h-20 border border-orange-300/40 rounded-full"
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-8 h-8 rounded-full bg-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.8)]"
        />
      </div>
    );
  }

  /* WEB */
  if (type === "web") {
    return (
      <div className="relative w-32 h-24 mx-auto mb-10">

        {/* Laptop */}
        <div className="absolute inset-0 rounded-2xl border border-orange-500/20 bg-black overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.15)]">

          {/* Top Code Lines */}
          <div className="p-4 space-y-2">

            <motion.div
              animate={{
                width: ["20%", "80%", "20%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 rounded-full bg-orange-500"
            />

            <motion.div
              animate={{
                width: ["70%", "30%", "70%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="h-2 rounded-full bg-orange-300"
            />

            <motion.div
              animate={{
                width: ["40%", "90%", "40%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="h-2 rounded-full bg-orange-400"
            />
          </div>
        </div>

        {/* Laptop Bottom */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-2 bg-orange-500/30 rounded-full" />
      </div>
    );
  }

  /* CONTENT */
  if (type === "content") {
    return (
      <div className="relative w-28 h-28 mx-auto mb-10 flex items-center justify-center">

        {/* Outer Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute w-24 h-24 rounded-full border border-orange-500/30"
        />

        {/* Main Box */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-20 h-20 rounded-[28px] bg-orange-500/10 border border-orange-500/20 flex items-center justify-center backdrop-blur-xl"
        >
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-4xl text-orange-400"
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
      className="relative bg-[#050505] text-white py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[200px] rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-7">

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-2 h-2 rounded-full bg-orange-500"
            />

            <span className="uppercase tracking-[0.3em] text-xs text-orange-300">
              Premium Digital Solutions
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Crafted For{" "}
            <span className="text-orange-500">
              Modern Brands
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-white/50 text-lg leading-relaxed">
            We design premium digital experiences that combine creativity,
            strategy, and technology to elevate ambitious brands.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -14,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 min-h-[430px] transition-all duration-500 text-center"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />

              {/* Animated Visual */}
              <AnimatedVisual type={item.type} />

              {/* Text */}
              <div className="relative z-10">

                <h3 className="text-2xl font-semibold mb-5 group-hover:text-orange-400 transition duration-300">
                  {item.title}
                </h3>

                <p className="text-white/55 leading-relaxed text-[15px]">
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