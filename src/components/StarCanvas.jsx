import { useEffect, useRef } from "react";
import "./StarCanvas.css";

export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const stars = [];
    const STAR_COUNT = 220;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    }

    function createStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2,
          opacity: Math.random() * 0.7 + 0.1,
          twinkleSpeed: Math.random() * 0.008 + 0.003,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const flicker =
          star.opacity +
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.25;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 210, 255, ${Math.max(0, Math.min(1, flicker))})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    }

    resize();
    createStars();
    animationId = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      createStars();
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="star-canvas" aria-hidden="true" />;
}
