import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ===== IMAGES ===== */

// OM
import om1 from "../assets/clients/NITYAANΤΑ/1.jpeg";
import om2 from "../assets/clients/OM/6.jpg";
import om3 from "../assets/clients/OM/1.jpg";

// CYGNI
import cygni1 from "../assets/clients/Cygni-Realty/2.jpeg";
import cygni2 from "../assets/clients/Cygni-Realty/6.jpg";
import cygni3 from "../assets/clients/Saundarya-Group/3.jpg";

// AKSHAY
import akshay1 from "../assets/clients/AkshayPatra-Dreams/7.jpeg";
import akshay2 from "../assets/clients/AkshayPatra-Dreams/8.jpeg";
import akshay3 from "../assets/clients/AkshayPatra-Dreams/9.jpeg";

// GANESH
import ganesh1 from "../assets/clients/Ganesh-Developers/1.jpeg";
import ganesh2 from "../assets/clients/Ganesh-Developers/2.jpeg";

// RAMA
import rama1 from "../assets/clients/RAMA-REGENCY/1.jpg";
import rama2 from "../assets/clients/Summer-Seasons/2.jpg";

// ATMESHEAR
import atm1 from "../assets/clients/Atmeshear-Devlopers/3.jpg";
import atm2 from "../assets/clients/Atmeshear-Devlopers/9.jpeg";

// JATKI
import jtk1 from "../assets/clients/Jatki-Group/1.jpg";
import jtk2 from "../assets/clients/Jatki-Group/4.jpg";

// POOJA
import pj1 from "../assets/clients/pooja-iconic/3.jpeg";

/* ===== LOOP (NO GAP FIX) ===== */
const loop = (arr) => [...arr, ...arr, ...arr, ...arr, ...arr];

export default function Portfolio() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* ===== PARALLAX ===== */
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  /* ===== ROW DATA ===== */
  const row1 = [om1, cygni1, pj1, akshay1, ganesh1, atm1, jtk1];
  const row2 = [cygni2, om2, akshay2, rama1, atm2, ganesh2];
  const row3 = [om3, pj1, akshay3, cygni1, rama2, cygni3, jtk2];

  return (
    <section className="pf-section" ref={ref} id="portfolio">
      {/* 🔥 HEADER */}
      <div className="pf-header">
        <h2 className="pf-title">
          Selected <span>Work</span>
        </h2>
      </div>

      <div className="pf-wrapper">
        {/* ROW 1 */}
        <motion.div className="pf-row" style={{ x: x1 }}>
          {loop(row1).map((img, i) => (
            <div className="pf-card" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </motion.div>

        {/* ROW 2 */}
        <motion.div className="pf-row" style={{ x: x2 }}>
          {loop(row2).map((img, i) => (
            <div className="pf-card" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </motion.div>

        {/* ROW 3 */}
        <motion.div className="pf-row" style={{ x: x3 }}>
          {loop(row3).map((img, i) => (
            <div className="pf-card" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
