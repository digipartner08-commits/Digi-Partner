import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ================= SCENE =================
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.appendChild(renderer.domElement);

    // ================= PARTICLES =================
    const particlesCount = 1800;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const originalPositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      const v = (Math.random() - 0.5) * 12;
      positions[i] = v;
      originalPositions[i] = v;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.015,
        color: "#ffffff",
        transparent: true,
        opacity: 0.75,
      })
    );

    scene.add(points);

    // ================= LINES (BALANCED NETWORK) =================
    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: 0.08,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // ================= MOUSE =================
    const mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // ================= SCROLL =================
    let scrollProgress = 0;

    window.addEventListener("scroll", () => {
      const maxScroll = window.innerHeight * 2;
      scrollProgress = Math.min(window.scrollY / maxScroll, 1);
    });

    // ================= ANIMATION =================
    const animate = () => {
      requestAnimationFrame(animate);

      const pos = points.geometry.attributes.position.array;
      const linePositions = [];

      const connectionDistance = 2.2; // balanced network feel

      for (let i = 0; i < particlesCount; i++) {
        let ix = i * 3;

        // 🌌 SCROLL SPREAD EFFECT
        pos[ix] =
          originalPositions[ix] +
          originalPositions[ix] * scrollProgress * 2;

        pos[ix + 1] =
          originalPositions[ix + 1] +
          originalPositions[ix + 1] * scrollProgress * 2;

        pos[ix + 2] =
          originalPositions[ix + 2] +
          originalPositions[ix + 2] * scrollProgress * 2;

        // 🔗 BALANCED CONNECTIONS (FIXED)
        for (let j = i + 1; j < i + 18 && j < particlesCount; j++) {
          let jx = j * 3;

          const dx = pos[ix] - pos[jx];
          const dy = pos[ix + 1] - pos[jx + 1];
          const dz = pos[ix + 2] - pos[jx + 2];

          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            linePositions.push(pos[ix], pos[ix + 1], pos[ix + 2]);
            linePositions.push(pos[jx], pos[jx + 1], pos[jx + 2]);
          }
        }
      }

      points.geometry.attributes.position.needsUpdate = true;

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      // ✨ smooth fade on scroll
      lineMaterial.opacity = 0.08 - scrollProgress * 0.05;

      // 🌌 slow luxury drift
      points.rotation.y += 0.00025;
      lineMesh.rotation.y += 0.00012;

      // 🎯 subtle parallax movement
      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 1.2 - camera.position.y) * 0.02;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // ================= RESIZE =================
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}