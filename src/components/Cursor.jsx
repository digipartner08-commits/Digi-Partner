import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    const ring = document.createElement("div");

    cursor.className = "cursor-dot";
    ring.className = "cursor-ring";

    document.body.appendChild(cursor);
    document.body.appendChild(ring);

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });

    function animate() {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;

      ring.style.left = rx + "px";
      ring.style.top = ry + "px";

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return null;
}