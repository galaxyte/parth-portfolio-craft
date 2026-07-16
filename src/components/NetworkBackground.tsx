import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
};

/**
 * Lightweight connected-network background (constellation style).
 * Canvas-based for performance — soft blue nodes + links on a light canvas.
 */
export const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(55, Math.max(28, Math.floor((width * height) / 28000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 2.2 + Math.random() * 2.8,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const drawHex = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // soft atmospheric washes
      const g1 = ctx.createRadialGradient(width * 0.15, height * 0.2, 0, width * 0.15, height * 0.2, width * 0.55);
      g1.addColorStop(0, "rgba(37, 99, 235, 0.12)");
      g1.addColorStop(1, "rgba(37, 99, 235, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(width * 0.85, height * 0.75, 0, width * 0.85, height * 0.75, width * 0.5);
      g2.addColorStop(0, "rgba(113, 113, 122, 0.1)");
      g2.addColorStop(1, "rgba(113, 113, 122, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      const linkDist = Math.min(170, width * 0.17);

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.45;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            // small mid-link dots (constellation accents)
            if (dist < linkDist * 0.55 && (i + j) % 5 === 0) {
              ctx.fillStyle = `rgba(100, 116, 139, ${alpha * 0.95})`;
              ctx.beginPath();
              ctx.arc((a.x + b.x) / 2, (a.y + b.y) / 2, 1.3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // nodes
      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += 0.02;

          // soft mouse parallax pull
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const md = Math.hypot(mdx, mdy);
          if (md < 180) {
            n.vx += (mdx / md) * 0.008;
            n.vy += (mdy / md) * 0.008;
          }

          // damping + bounds
          n.vx *= 0.995;
          n.vy *= 0.995;
          const speed = Math.hypot(n.vx, n.vy);
          if (speed > 0.55) {
            n.vx *= 0.55 / speed;
            n.vy *= 0.55 / speed;
          }

          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;
        }

        const glow = 0.55 + Math.sin(n.pulse) * 0.2;

        // outer soft glow
        ctx.fillStyle = `rgba(37, 99, 235, ${0.12 * glow})`;
        drawHex(n.x, n.y, n.r * 2.4);
        ctx.fill();

        // hex body
        ctx.fillStyle = `rgba(96, 165, 250, ${0.45 * glow})`;
        drawHex(n.x, n.y, n.r * 1.15);
        ctx.fill();
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.35 * glow})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // center dot
        ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    draw();
    if (reduceMotion) {
      // one static frame already drawn
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#f8fafc_0%,#eef4ff_45%,#f4f4f5_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* readability veil so content stays crisp */}
      <div className="absolute inset-0 bg-white/20" />
    </div>
  );
};
