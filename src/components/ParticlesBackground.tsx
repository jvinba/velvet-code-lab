import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export function ParticlesBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const colors = ['#a855f7', '#ec4899', '#06b6d4'];
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;
        
        // Wrap around screen
        if (newX < 0) newX = window.innerWidth;
        if (newX > window.innerWidth) newX = 0;
        if (newY < 0) newY = window.innerHeight;
        if (newY > window.innerHeight) newY = 0;
        
        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-fuchsia/20 rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan/20 rounded-full" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        {particles.map((particle, index) => (
          <circle
            key={index}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.color}
            opacity={particle.opacity}
            className="transition-all duration-300"
          />
        ))}
        {/* Connection lines */}
        {particles.map((particle, i) => 
          particles.slice(i + 1).map((otherParticle, j) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="#a855f7"
                  strokeWidth="1"
                  opacity={0.1 * (1 - distance / 150)}
                />
              );
            }
            return null;
          })
        )}
      </svg>
    </div>
  );
}