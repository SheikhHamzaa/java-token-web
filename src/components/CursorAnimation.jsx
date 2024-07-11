import React, { useRef, useEffect } from 'react';

const CanvasSmoke = () => {
  const canvasRef = useRef(null);
  let ctx = null;
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Event listener for mouse movements
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Add particles on mouse move
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: clientX,
          y: clientY,
          size: Math.random() * 10 + 5, // random size between 5 and 15
          opacity: 1, // initial opacity
          speedX: (Math.random() - 0.5) * 2, // random horizontal speed
          speedY: (Math.random() - 0.5) * 2, // random vertical speed
        });
      }
    };

    // Update particles and draw smoke
    const animateSmoke = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.opacity -= 0.01; // reduce opacity over time
        particle.x += particle.speedX; // move horizontally
        particle.y += particle.speedY; // move vertically

        // Warm color variations (e.g., orange, red, yellow)
        const warmColor = `rgba(${Math.random() * 50 + 200}, ${Math.random() * 50}, 0, ${particle.opacity})`;
        ctx.fillStyle = warmColor;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove faded particles
        if (particle.opacity <= 0) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animateSmoke);
    };

    animateSmoke();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-smoke" />;
};

export default CanvasSmoke;
