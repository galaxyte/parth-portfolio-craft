import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  angle: number;
  turn: number;
};

/**
 * Connected-network background with clear, continuous node motion.
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
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(48, Math.max(26, Math.floor((width * height) / 32000)));
      nodes = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.55 + Math.random() * 0.75;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 2.4 + Math.random() * 3.2,
          pulse: Math.random() * Math.PI * 2,
          angle,
          turn: (Math.random() - 0.5) * 0.02,
        };
      });
    };

    const drawHex = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + size * Math.cos(a);
        const py = y + size * Math.sin(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const updateNode = (n: Node) => {
      // gentle wandering turn so paths feel alive
      n.angle += n.turn + (Math.random() - 0.5) * 0.01;
      const targetSpeed = 0.7 + Math.sin(n.pulse) * 0.15;
      n.vx += Math.cos(n.angle) * 0.04;
      n.vy += Math.sin(n.angle) * 0.04;

      // mouse attraction / push for interactive motion
      const mdx = mouse.x - n.x;
      const mdy = mouse.y - n.y;
      const md = Math.hypot(mdx, mdy);
      if (md < 220 && md > 1) {
        const force = (1 - md / 220) * 0.12;
        n.vx += (mdx / md) * force;
        n.vy += (mdy / md) * force;
      }

      // keep speed in a visible range (never freeze)
      let speed = Math.hypot(n.vx, n.vy);
      if (speed < 0.45) {
        n.vx = Math.cos(n.angle) * targetSpeed;
        n.vy = Math.sin(n.angle) * targetSpeed;
        speed = targetSpeed;
      }
      if (speed > 1.6) {
        n.vx *= 1.6 / speed;
        n.vy *= 1.6 / speed;
      }

      n.x += n.vx;
      n.y += n.vy;
      n.pulse += 0.045;

      // bounce off edges so movement stays on screen
      const pad = 24;
      if (n.x < pad) {
        n.x = pad;
        n.vx = Math.abs(n.vx);
        n.angle = Math.atan2(n.vy, n.vx);
      } else if (n.x > width - pad) {
        n.x = width - pad;
        n.vx = -Math.abs(n.vx);
        n.angle = Math.atan2(n.vy, n.vx);
      }
      if (n.y < pad) {
        n.y = pad;
        n.vy = Math.abs(n.vy);
        n.angle = Math.atan2(n.vy, n.vx);
      } else if (n.y > height - pad) {
        n.y = height - pad;
        n.vy = -Math.abs(n.vy);
        n.angle = Math.atan2(n.vy, n.vx);
      }
    };

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // soft atmospheric washes (slow drift)
      const ox = Math.sin(time * 0.004) * 40;
      const oy = Math.cos(time * 0.003) * 30;
      const g1 = ctx.createRadialGradient(
        width * 0.18 + ox,
        height * 0.22 + oy,
        0,
        width * 0.18 + ox,
        height * 0.22 + oy,
        width * 0.55
      );
      g1.addColorStop(0, "rgba(37, 99, 235, 0.14)");
      g1.addColorStop(1, "rgba(37, 99, 235, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(
        width * 0.82 - ox,
        height * 0.78 - oy,
        0,
        width * 0.82 - ox,
        height * 0.78 - oy,
        width * 0.5
      );
      g2.addColorStop(0, "rgba(113, 113, 122, 0.12)");
      g2.addColorStop(1, "rgba(113, 113, 122, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      if (!reduceMotion) {
        for (const n of nodes) updateNode(n);
      }

      const linkDist = Math.min(190, width * 0.18);

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist >= linkDist) continue;

          const alpha = (1 - dist / linkDist) * 0.5;
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.lineWidth = 1.15;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          // traveling accent dots along links
          if ((i + j) % 4 === 0) {
            const t = (Math.sin(time * 0.03 + i * 0.7 + j) + 1) / 2;
            const px = a.x + (b.x - a.x) * t;
            const py = a.y + (b.y - a.y) * t;
            ctx.fillStyle = `rgba(37, 99, 235, ${alpha * 0.95})`;
            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const glow = 0.6 + Math.sin(n.pulse) * 0.35;

        ctx.fillStyle = `rgba(37, 99, 235, ${0.16 * glow})`;
        drawHex(n.x, n.y, n.r * 2.6);
        ctx.fill();

        ctx.fillStyle = `rgba(96, 165, 250, ${0.55 * glow})`;
        drawHex(n.x, n.y, n.r * 1.2);
        ctx.fill();
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.45 * glow})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.35, 0, Math.PI * 2);
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
      <div className="absolute inset-0 bg-white/15" />
    </div>
  );
};
