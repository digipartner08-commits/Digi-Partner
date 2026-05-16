import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  useEffect(() => {
    const canvas = document.getElementById("hero-canvas");
    const ctx = canvas.getContext("2d");

    let particles = [];
    let mouse = { x: 0, y: 0 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          p.x -= dx / 60;
          p.y -= dy / 60;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249,115,22,0.6)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleMove = (e) => {
      const el = document.querySelector(".hero-content");
      if (!el) return;

      let x = (window.innerWidth / 2 - e.clientX) / 60;
      let y = (window.innerHeight / 2 - e.clientY) / 60;

      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas id="hero-canvas"></canvas>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="hero-kicker">DIGITAL GROWTH STUDIO</p>

        <h1 className="hero-title">
          Results that speaks <br />
          for themselves
        </h1>

        <p className="hero-subtitle">
          Performance marketing. Branding. Systems that convert attention into
          revenue.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Start Growth
          </a>

          <a href="#portfolio" className="btn-secondary">
            View Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
