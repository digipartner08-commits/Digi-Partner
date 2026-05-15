import React, { useEffect, useState } from "react";
import "../App.css";

import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.jpeg";

function About() {
  const founders = [
    { name: "Meet Ramani", role: "Founder & CTO", img: f1 },
    { name: "Deep Ramani", role: "Founder & CEO", img: f2 },
    { name: "Ravi Savaliya", role: "Founder & Clint Coordinator", img: f3 },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % founders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-content">
          <span className="about-badge">Award Winning Digital Agency</span>

          <h2>
            Meet Our <span>Founding Partners</span>
          </h2>

          <p>
            A powerful team of visionaries building premium digital experiences
            with strategy, design, and engineering excellence.
          </p>

          {/* SMALL LIST */}
          <div className="founder-list">
            {founders.map((f, i) => (
              <div
                key={i}
                className={`founder-tab ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {f.name}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SHOWCASE */}
        <div className="founder-showcase">

          <div className="founder-image-box">
            <img src={founders[active].img} alt="founder" />
          </div>

          <div className="founder-info">
            <h3>{founders[active].name}</h3>
            <p>{founders[active].role}</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;