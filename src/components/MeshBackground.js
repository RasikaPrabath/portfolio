import React, { useEffect, useRef } from "react";

// Colors defined at module level — no stale closure issues
const DARK = {
  nodePrimary: "139, 92, 246",  // #8B5CF6 violet
  nodeAccent: "59, 130, 246",  // #3B82F6 blue
  nodeGlow: "167, 139, 250", // #A78BFA light violet
  line: "124, 58, 237",  // #7C3AED
  lineAlpha: 0.4,
};
const LIGHT = {
  nodePrimary: "124, 58, 237",  // #7C3AED violet
  nodeAccent: "59, 130, 246",  // #3B82F6 blue
  nodeGlow: "139, 92, 246",  // #8B5CF6
  line: "139, 92, 246",  // #8B5CF6
  lineAlpha: 0.18,
};

const MAX_DIST = 150;
const NODE_COUNT = 50;

const MeshBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let nodes = [];

    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      document.body.classList.contains("dark");

    const makeNodes = (w, h) => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 0.8 + 0.6,
        type: Math.random() > 0.45 ? 0 : 1,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      makeNodes(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking
    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      const t = performance.now() / 1000;
      const dark = isDark();
      const C = dark ? DARK : LIGHT;

      ctx.clearRect(0, 0, W, H);

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > W) { n.x = W; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > H) { n.y = H; n.vy *= -1; }

        // Mouse repulsion
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130 && d > 0) {
          const f = ((130 - d) / 130) * 0.05;
          n.vx += (dx / d) * f;
          n.vy += (dy / d) * f;
          const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
          if (spd > 2) { n.vx = (n.vx / spd) * 2; n.vy = (n.vy / spd) * 2; }
        }
      });

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * C.lineAlpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${C.line}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(t * 1.6 + n.pulse) * 0.5 + 0.5;
        const col = n.type === 0 ? C.nodePrimary : C.nodeAccent;
        const nodeAlpha = dark
          ? 0.5 + pulse * 0.25
          : 0.35 + pulse * 0.2;
        const glowR = n.r * (dark ? 5 : 3.5) * (0.6 + pulse * 0.4);
        const glowA = dark
          ? 0.07 + pulse * 0.08
          : 0.03 + pulse * 0.05;

        // Glow halo
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        grad.addColorStop(0, `rgba(${C.nodeGlow}, ${glowA})`);
        grad.addColorStop(1, `rgba(${C.nodeGlow}, 0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col}, ${nodeAlpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Solid bg base */}
      <div
        className="fixed inset-0 pointer-events-none bg-light-bg dark:bg-dark-bg transition-colors duration-300"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Plexus canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1, opacity: 1 }}
        aria-hidden="true"
      />

      {/* Violet ambient glow — top left */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-10%", left: "-5%",
          width: "50%", height: "50%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.09) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Blue ambient glow — bottom right */}
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "-10%", right: "-5%",
          width: "50%", height: "50%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Violet glow — center right */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "30%", left: "60%",
          width: "30%", height: "30%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Subtle dot grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none bg-dot-matrix opacity-50 dark:opacity-25"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />
    </>
  );
};

export default MeshBackground;
