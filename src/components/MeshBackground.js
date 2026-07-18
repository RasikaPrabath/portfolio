import React, { useEffect, useRef } from "react";

// ── Palette (matches theme) ───────────────────────────────────────────────────
const COLORS = [
  [139, 92, 246],   // #8B5CF6 violet
  [99, 102, 241],  // #6366F1 indigo
  [59, 130, 246],  // #3B82F6 blue
  [124, 58, 237],  // #7C3AED deep violet
  [167, 139, 250],  // #A78BFA light violet
];
const rgba = ([r, g, b], a) => `rgba(${r},${g},${b},${a})`;

// ── Blob factory (large drifting aurora orbs) ─────────────────────────────────
function makeBlobs(W, H) {
  return Array.from({ length: 6 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 160 + Math.random() * 180,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    col: COLORS[i % COLORS.length],
    phase: Math.random() * Math.PI * 2,
    speed: 0.18 + Math.random() * 0.2,
    scaleX: 0.9 + Math.random() * 0.6,
    scaleY: 0.9 + Math.random() * 0.6,
  }));
}

// ── Particle factory (tiny floating stars) ────────────────────────────────────
function makeParticles(W, H) {
  return Array.from({ length: 55 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 0.4 + Math.random() * 1.1,
    vy: -(0.08 + Math.random() * 0.22), // float upward
    vx: (Math.random() - 0.5) * 0.12,
    alpha: 0.2 + Math.random() * 0.5,
    col: COLORS[Math.floor(Math.random() * COLORS.length)],
    phase: Math.random() * Math.PI * 2,
    speed: 0.4 + Math.random() * 0.6,
  }));
}

// ── Ring factory (subtle animated rings) ─────────────────────────────────────
function makeRings(W, H) {
  return Array.from({ length: 3 }, (_, i) => ({
    x: W * (0.2 + i * 0.3),
    y: H * (0.25 + (i % 2) * 0.5),
    r: 60 + i * 40,
    col: COLORS[i * 2 % COLORS.length],
    phase: (i * Math.PI * 2) / 3,
    speed: 0.12 + i * 0.06,
  }));
}

// ── Component ─────────────────────────────────────────────────────────────────
const MeshBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let blobs = [], particles = [], rings = [];

    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      document.body.classList.contains("dark");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      blobs = makeBlobs(canvas.width, canvas.height);
      particles = makeParticles(canvas.width, canvas.height);
      rings = makeRings(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      const t = performance.now() / 1000;
      const dark = isDark();

      ctx.clearRect(0, 0, W, H);

      // ── 1. Aurora blobs ─────────────────────────────────────────────────────
      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        // Soft bounce
        if (b.x < -b.r * 1.5) b.x = W + b.r;
        if (b.x > W + b.r * 1.5) b.x = -b.r;
        if (b.y < -b.r * 1.5) b.y = H + b.r;
        if (b.y > H + b.r * 1.5) b.y = -b.r;

        const pulse = Math.sin(t * b.speed + b.phase) * 0.15 + 0.85;
        const rx = b.r * b.scaleX * pulse;
        const ry = b.r * b.scaleY * (2 - pulse);
        const blobAlpha = dark ? 0.055 : 0.04;

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.scale(rx / b.r, ry / b.r);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, b.r);
        grad.addColorStop(0, rgba(b.col, blobAlpha));
        grad.addColorStop(0.5, rgba(b.col, blobAlpha * 0.5));
        grad.addColorStop(1, rgba(b.col, 0));
        ctx.beginPath();
        ctx.arc(0, 0, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      });

      // ── 2. Subtle dot grid ──────────────────────────────────────────────────
      const step = 48;
      const dotCol = dark ? COLORS[0] : COLORS[3];
      const dotA = dark ? 0.07 : 0.06;
      ctx.fillStyle = rgba(dotCol, dotA);
      for (let x = step; x < W; x += step) {
        for (let y = step; y < H; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── 3. Animated rings ───────────────────────────────────────────────────
      rings.forEach((ring) => {
        const pulse = Math.sin(t * ring.speed + ring.phase);
        const rScale = 1 + pulse * 0.08;
        const rAlpha = dark
          ? 0.07 + pulse * 0.04
          : 0.05 + pulse * 0.03;

        ctx.save();
        ctx.translate(ring.x + Math.sin(t * 0.1 + ring.phase) * 20,
          ring.y + Math.cos(t * 0.08 + ring.phase) * 16);
        // Outer ring
        ctx.beginPath();
        ctx.arc(0, 0, ring.r * rScale, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(ring.col, rAlpha);
        ctx.lineWidth = 0.8;
        ctx.stroke();
        // Inner ring
        ctx.beginPath();
        ctx.arc(0, 0, ring.r * rScale * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(ring.col, rAlpha * 0.6);
        ctx.lineWidth = 0.5;
        ctx.stroke();
        // Center dot
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI * 2);
        ctx.fillStyle = rgba(ring.col, rAlpha * 2.5);
        ctx.fill();
        ctx.restore();
      });

      // ── 4. Floating particles ───────────────────────────────────────────────
      particles.forEach((p) => {
        p.x += p.vx + Math.sin(t * p.speed + p.phase) * 0.08;
        p.y += p.vy;
        // Wrap: when particle floats off top, respawn at bottom
        if (p.y < -10) { p.y = H + 5; p.x = Math.random() * W; }
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;

        const twinkle = Math.sin(t * p.speed * 2 + p.phase) * 0.3 + 0.7;
        const a = p.alpha * twinkle * (dark ? 0.9 : 0.6);

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grd.addColorStop(0, rgba(p.col, a * 0.5));
        grd.addColorStop(1, rgba(p.col, 0));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(p.col, a);
        ctx.fill();
      });

      // ── 5. Particle connections (only nearby, very subtle) ──────────────────
      const maxD = 90;
      const lineA = dark ? 0.08 : 0.05;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pa = particles[i], pb = particles[j];
          const dx = pa.x - pb.x, dy = pa.y - pb.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.strokeStyle = rgba(pa.col, lineA * (1 - d / maxD));
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Solid base */}
      <div
        className="fixed inset-0 pointer-events-none bg-light-bg dark:bg-dark-bg transition-colors duration-300"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Violet soft ambient — top left */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-15%", left: "-10%",
          width: "55%", height: "60%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Blue ambient — bottom right */}
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "-15%", right: "-10%",
          width: "55%", height: "60%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.065) 0%, transparent 65%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Indigo center glow */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "35%", left: "50%",
          transform: "translateX(-50%)",
          width: "40%", height: "35%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.045) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default MeshBackground;
