import React, { useEffect, useRef } from "react";

// ── COLOR PALETTES ────────────────────────────────────────────────────────────
const COLORS_DARK = {
  stars: ["#ffffff", "#e2e8f0", "#cbd5e1", "#a5b4fc", "#fde047"], // soft whites, slates, light lavender, soft warm yellow
  nebulae: [
    { r: 17, g: 24, b: 39 },   // gray-900 (deep slate)
    { r: 30, g: 27, b: 75 },   // indigo-950 (deep indigo)
    { r: 88, g: 28, b: 135 },  // purple-900 (subtle deep violet)
    { r: 15, g: 118, b: 110 },  // teal-700 (deep sea teal)
  ],
  stardust: ["#a78bfa", "#60a5fa", "#818cf8", "#fde047"],
  constellation: "rgba(165, 180, 252, 0.08)", // very subtle line
};

const COLORS_LIGHT = {
  stars: ["#64748b", "#94a3b8", "#cbd5e1", "#e2e8f0", "#94a3b8"], // monochrome slate grays
  nebulae: [
    { r: 243, g: 244, b: 246 },  // very soft gray-100
    { r: 238, g: 242, b: 255 },  // very soft indigo-50
    { r: 245, g: 243, b: 255 },  // very soft purple-50
    { r: 240, g: 253, b: 250 },  // very soft teal-50
  ],
  stardust: ["#cbd5e1", "#94a3b8", "#e2e8f0"], // very soft slate particles
  constellation: "rgba(148, 163, 184, 0.04)", // extremely faint connections
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────
const MeshBackground = () => {
  const canvasRef = useRef(null);

  // Track mouse coordinates and scroll position without triggering re-renders
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    // State arrays for animations
    let stars = [];
    let nebulae = [];
    let shootingStars = [];
    let stardust = [];
    let lastWidth = 0;
    let lastHeight = 0;

    // Helper: Determine if dark mode is active
    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      document.body.classList.contains("dark");

    // Initialize/Reset Background Elements
    const initElements = (W, H) => {
      // 1. Star layers (Layer 0 = background, Layer 1 = midground, Layer 2 = foreground)
      stars = [];
      const isMobile = W < 768;

      const countL0 = isMobile ? 35 : 90;
      const countL1 = isMobile ? 20 : 50;
      const countL2 = isMobile ? 6 : 15;

      // Layer 0: Background stars (Small, slow/static, dense)
      for (let i = 0; i < countL0; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 0.3 + Math.random() * 0.5,
          layer: 0,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
          phase: Math.random() * Math.PI * 2,
          colorIdx: Math.floor(Math.random() * 5),
          vx: (Math.random() - 0.5) * 0.004,
          vy: -(0.004 + Math.random() * 0.008),
        });
      }

      // Layer 1: Midground stars (Medium, drift, constellation-capable)
      for (let i = 0; i < countL1; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 0.8 + Math.random() * 0.6,
          layer: 1,
          twinkleSpeed: 0.03 + Math.random() * 0.03,
          phase: Math.random() * Math.PI * 2,
          colorIdx: Math.floor(Math.random() * 5),
          vx: (Math.random() - 0.5) * 0.015,
          vy: -(0.01 + Math.random() * 0.02),
        });
      }

      // Layer 2: Foreground stars (Larger, glowing aura, drift faster)
      for (let i = 0; i < countL2; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 1.5 + Math.random() * 1.0,
          layer: 2,
          twinkleSpeed: 0.05 + Math.random() * 0.05,
          phase: Math.random() * Math.PI * 2,
          colorIdx: Math.floor(Math.random() * 5),
          vx: (Math.random() - 0.5) * 0.03,
          vy: -(0.02 + Math.random() * 0.04),
        });
      }

      // 2. Cosmic Nebulae (smooth drifting gradients)
      nebulae = Array.from({ length: 4 }, (_, i) => ({
        x: W * (0.15 + i * 0.25),
        y: H * (0.2 + (i % 2) * 0.5),
        r: Math.min(W, H) * (0.35 + Math.random() * 0.2),
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        phase: Math.random() * Math.PI * 2,
        speed: 0.05 + Math.random() * 0.05,
        colorIdx: i,
      }));
    };

    // Resize Handler
    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;

      // On mobile, scrolling triggers resize due to address bar toggling.
      // We only recreate elements if the width changes, or if the height changes substantially.
      const widthChanged = W !== lastWidth;
      const heightSubstantiallyChanged = Math.abs(H - lastHeight) > 120;

      if (widthChanged || heightSubstantiallyChanged) {
        canvas.width = W;
        canvas.height = H;
        initElements(W, H);
        lastWidth = W;
        lastHeight = H;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Track scroll events
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // Track mouse events
    const handleMouseMove = (e) => {
      const prevX = mouseRef.current.x;
      const prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;

      // Generate interactive stardust sparkles if the mouse has moved enough
      const dist = Math.hypot(e.clientX - prevX, e.clientY - prevY);
      if (dist > 6) {
        const dark = isDark();
        const colors = dark ? COLORS_DARK.stardust : COLORS_LIGHT.stardust;
        const count = dark ? 2 : 1;
        for (let i = 0; i < count; i++) {
          stardust.push({
            x: e.clientX,
            y: e.clientY,
            vx: (Math.random() - 0.5) * (dark ? 1.5 : 0.8),
            vy: (Math.random() - 0.5) * (dark ? 1.5 : 0.8) - 0.2, // float upward slightly
            r: dark ? (1.0 + Math.random() * 2.0) : (0.5 + Math.random() * 1.0),
            alpha: dark ? 1.0 : 0.6,
            decay: dark ? (0.015 + Math.random() * 0.02) : (0.04 + Math.random() * 0.04),
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Animation Tick Loop
    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      const dark = isDark();
      const palette = dark ? COLORS_DARK : COLORS_LIGHT;
      const t = performance.now() / 1000;

      // Clean screen
      ctx.clearRect(0, 0, W, H);

      // ── 1. RENDER CELESTIAL NEBULAE (BACKGROUND GLOWS) ──────────────────────
      ctx.globalCompositeOperation = dark ? "screen" : "source-over";
      nebulae.forEach((n) => {
        // Drift movement
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -n.r) n.x = W + n.r;
        if (n.x > W + n.r) n.x = -n.r;
        if (n.y < -n.r) n.y = H + n.r;
        if (n.y > H + n.r) n.y = -n.r;

        // Radial scale pulsing
        const pulse = Math.sin(t * n.speed + n.phase) * 0.08 + 1.0;
        const currentR = n.r * pulse;

        // Apply scroll parallax to nebulae (Layer 2 speed)
        const scrollOffset = scrollRef.current * 0.22;
        const drawY = (n.y - scrollOffset + H * 5) % (H + n.r * 2) - n.r;

        const rgb = palette.nebulae[n.colorIdx % palette.nebulae.length];
        const nebulaAlpha = dark ? 0.05 : 0.035;

        const grad = ctx.createRadialGradient(n.x, drawY, 0, n.x, drawY, currentR);
        grad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nebulaAlpha})`);
        grad.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nebulaAlpha * 0.4})`);
        grad.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, drawY, currentR, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";

      // ── 2. RANDOM METEORS / SHOOTING STARS ─────────────────────────────────
      // Trigger new shooting star occasionally (dark mode only)
      if (dark && Math.random() < 0.0005 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * W * 0.8,
          y: Math.random() * H * 0.4,
          dx: 8 + Math.random() * 7,
          dy: 4 + Math.random() * 4,
          len: 80 + Math.random() * 120,
          speed: 1.2 + Math.random() * 0.8,
          life: 1.0,
          decay: 0.015 + Math.random() * 0.01,
          thickness: 1.2 + Math.random() * 1.0,
        });
      }

      // Draw and update meteors
      shootingStars.forEach((m, idx) => {
        m.x += m.dx * m.speed;
        m.y += m.dy * m.speed;
        m.life -= m.decay;

        if (m.life <= 0 || m.x > W || m.y > H) {
          shootingStars.splice(idx, 1);
          return;
        }

        // Draw fading trail
        const trailGrad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - m.dx * m.len * 0.1,
          m.y - m.dy * m.len * 0.1
        );
        const starColor = dark ? "255, 255, 255" : "217, 119, 6"; // white or golden trail
        trailGrad.addColorStop(0, `rgba(${starColor}, ${m.life})`);
        trailGrad.addColorStop(0.5, `rgba(${starColor}, ${m.life * 0.4})`);
        trailGrad.addColorStop(1, `rgba(${starColor}, 0)`);

        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = m.thickness;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.dx * 12, m.y - m.dy * 12);
        ctx.stroke();
      });

      // ── 3. UPDATE & DRAW STARS WITH PARALLAX ──────────────────────────────
      stars.forEach((s) => {
        // Drift stars upward/laterally
        s.x += s.vx;
        s.y += s.vy;

        // Wrap stars around boundaries
        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        // Scroll Parallax offset calculation per layer
        let parallaxFactor = 0.04; // Layer 0
        if (s.layer === 1) parallaxFactor = 0.12;
        if (s.layer === 2) parallaxFactor = 0.24;

        const scrollOffset = scrollRef.current * parallaxFactor;
        const renderY = (s.y - scrollOffset + H * 5) % H;

        // Mouse attraction/repulsion logic (only for midground & foreground layers)
        let drawX = s.x;
        let drawY = renderY;
        if (s.layer > 0 && mouseRef.current.active) {
          const dx = mouseRef.current.x - s.x;
          const dy = mouseRef.current.y - renderY;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            // Subtle pull towards mouse
            const force = (120 - dist) / 120 * 8;
            drawX += (dx / dist) * force;
            drawY += (dy / dist) * force;
          }
        }

        // Twinkle pulsing
        const twinkle = Math.sin(t * s.twinkleSpeed * 10 + s.phase) * 0.45 + 0.55;
        const baseAlpha = s.layer === 0 ? 0.35 : s.layer === 1 ? 0.7 : 0.95;
        const alpha = twinkle * baseAlpha * (dark ? 1.0 : 0.38);
        const starColor = palette.stars[s.colorIdx % palette.stars.length];

        // Foreground star Glow (Layer 2 only)
        if (s.layer === 2 && dark) {
          const glowGrad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, s.r * 4.5);
          glowGrad.addColorStop(0, `rgba(167, 139, 250, ${alpha * 0.45})`);
          glowGrad.addColorStop(1, "rgba(167, 139, 250, 0)");
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(drawX, drawY, s.r * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Star Core
        ctx.fillStyle = starColor;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Store current calculated screen positions on the star object for constellation lookup
        s.screenX = drawX;
        s.screenY = drawY;
      });

      // ── 4. DRAW CONSTELLATION CONNECTION LINES (LAYER 1 MIDGROUND ONLY) ──
      ctx.strokeStyle = palette.constellation;
      const maxDistance = 95;
      const layer1Stars = stars.filter((s) => s.layer === 1);

      for (let i = 0; i < layer1Stars.length; i++) {
        for (let j = i + 1; j < layer1Stars.length; j++) {
          const s1 = layer1Stars[i];
          const s2 = layer1Stars[j];

          const dx = s1.screenX - s2.screenX;
          const dy = s1.screenY - s2.screenY;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            // Stronger opacity when closer
            const lineAlpha = (1.0 - dist / maxDistance);
            ctx.strokeStyle = dark
              ? `rgba(165, 180, 252, ${lineAlpha * 0.08})`
              : `rgba(148, 163, 184, ${lineAlpha * 0.12})`;
            ctx.lineWidth = 0.45;
            ctx.beginPath();
            ctx.moveTo(s1.screenX, s1.screenY);
            ctx.lineTo(s2.screenX, s2.screenY);
            ctx.stroke();
          }
        }
      }

      // ── 5. DRAW INTERACTIVE STARDUST DUST PARTICLES ────────────────────────
      stardust.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.r = Math.max(0.2, p.r - 0.015);

        if (p.alpha <= 0 || p.r <= 0.2) {
          stardust.splice(idx, 1);
          return;
        }

        // Draw sparkling star dust
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        // Radial shimmer glow around stardust particles
        if (dark) {
          const dustGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
          dustGlow.addColorStop(0, p.color);
          dustGlow.addColorStop(1, "transparent");
          ctx.fillStyle = dustGlow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core sparkle
        ctx.fillStyle = dark ? "#ffffff" : p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    // CLEANUP
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Dynamic Base Background */}
      <div
        className="fixed inset-0 pointer-events-none bg-[#030508] dark:bg-[#07090e] transition-colors duration-300"
        style={{
          zIndex: -2,
          background: "linear-gradient(180deg, var(--bg-start) 0%, var(--bg-end) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Set CSS custom properties for start and end backgrounds dynamically so transition looks stellar */}
      <style>{`
        :root {
          --bg-start: #f4f6fc;
          --bg-end: #e6e9f6;
        }
        .dark {
          --bg-start: #030509;
          --bg-end: #07090e;
        }
      `}</style>

      {/* Primary Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      />
    </>
  );
};

export default MeshBackground;
