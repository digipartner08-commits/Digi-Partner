import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo1 from "../assets/PNG/1.png";
import logo2 from "../assets/PNG/2.png";
import logo3 from "../assets/PNG/3.png";
import logo4 from "../assets/PNG/4.png";
import logo5 from "../assets/PNG/5.png";
import logo6 from "../assets/PNG/6.png";
import logo7 from "../assets/PNG/7.png";
import logo8 from "../assets/PNG/8.png";
import logo9 from "../assets/PNG/9.png";
import logo10 from "../assets/PNG/10.png";
import logo11 from "../assets/PNG/11.png";
import logo13 from "../assets/PNG/13.png";
import logo14 from "../assets/PNG/14.png";
import logo15 from "../assets/PNG/15.png";
import logo16 from "../assets/PNG/16.png";
import logo19 from "../assets/PNG/19.png";
import logo20 from "../assets/PNG/20.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo13,
  logo14, logo15, logo16, logo19, logo20,
];

const GRID_SIZE = 18;

/* unique frame (NO duplicates per frame) */
function getFrame() {
  return [...logos]
    .sort(() => Math.random() - 0.5)
    .slice(0, GRID_SIZE);
}

/* random slide direction */
const dirs = [
  { x: 0, y: 60 },
  { x: 0, y: -60 },
  { x: 60, y: 0 },
  { x: -60, y: 0 },
];

function randomDir() {
  return dirs[Math.floor(Math.random() * dirs.length)];
}

export default function Clients() {
  const [items, setItems] = useState(getFrame());
  const [cycle, setCycle] = useState(0);

  const [direction, setDirection] = useState(
    Array.from({ length: GRID_SIZE }, () => randomDir())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(getFrame()); // new clean set
      setDirection(
        Array.from({ length: GRID_SIZE }, () => randomDir())
      );
      setCycle((c) => c + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="clients-section">
      <div className="container">
       <h2 className="title">
  Trusted By <span className="text-orange-500">Brands</span>
</h2>
       <p className="subtitle">
  Powering growth for modern brands
</p>

        <div className="grid">
          {items.map((logo, i) => (
            <div className="card" key={i}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${logo}-${cycle}`}  // force proper transition
                  src={logo}

                  /* ENTER (incoming image) */
                  initial={{
                    opacity: 0,
                    x: direction[i].x,
                    y: direction[i].y,
                    scale: 1,
                  }}

                  /* CENTER (visible) */
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}

                  /* EXIT (old stays but moves out smoothly) */
                  exit={{
                    opacity: 0,
                    x: -direction[i].x,
                    y: -direction[i].y,
                    scale: 1,
                  }}

                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                />
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}