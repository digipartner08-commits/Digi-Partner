import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    text: "The website transformation completely upgraded our digital presence.",
    name: "Akshay Patra Dreams",
    role: "Real Estate Brand",
  },
  {
    text: "Our project presentation now feels extremely premium and trustworthy.",
    name: "Atmeshwar Developers",
    role: "Luxury Developer",
  },
  {
    text: "We now look like a top-tier real estate company online.",
    name: "Cygni Realty",
    role: "Realty Brand",
  },
  {
    text: "Our leads improved immediately after redesign.",
    name: "Ganesh Developers",
    role: "Construction Firm",
  },
  {
    text: "Our brand now feels global and premium.",
    name: "Jatki Group",
    role: "Infrastructure Group",
  },
];

function Testimonials() {
  const controls = useAnimation();
  const isHovered = useRef(false);

  const looped = [...testimonials, ...testimonials];

  useEffect(() => {
    let animation;

    const startAnimation = () => {
      animation = controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    if (!isHovered.current) {
      startAnimation();
    }

    return () => animation;
  }, [controls]);

  const handleMouseEnter = () => {
    isHovered.current = true;
    controls.stop(); // stop scroll
  };

  const handleMouseLeave = () => {
    isHovered.current = false;

    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 18,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden text-white">

      {/* glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[160px] rounded-full"></div>
      </div>

      {/* title */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl font-bold">
          Client <span className="text-orange-500">Reviews</span>
        </h2>
      </div>

      {/* carousel */}
      <div
        className="relative w-full overflow-hidden px-6 md:px-16 lg:px-24"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={controls}
        >
          {looped.map((item, i) => (
            <div
              key={i}
              className="w-[320px] h-[250px] p-6 rounded-2xl
              bg-white/5 border border-white/10 backdrop-blur-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10"></div>

              <div className="relative z-10">
                <div className="text-orange-500 text-4xl">“</div>

                <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                  {item.text}
                </p>

                <div className="mt-6 border-t border-white/10 pt-3">
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>
                  <span className="text-orange-400 text-xs">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;