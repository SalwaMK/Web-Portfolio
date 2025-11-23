import { motion } from "motion/react";

export function BackgroundEffects() {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.3, 1.1, 1],
          opacity: [0.3, 0.5, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-20 w-[600px] h-[600px] bg-purple-400 rounded-full blur-3xl opacity-30"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.4, 1.2, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-pink-400 rounded-full blur-3xl opacity-20"
      />
      
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 70, 0],
          scale: [1, 1.2, 1.15, 1],
          opacity: [0.2, 0.35, 0.25, 0.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-3xl opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -60, 90, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.25, 1.1, 1],
          opacity: [0.15, 0.3, 0.2, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-300 rounded-full blur-3xl opacity-15"
      />

      {/* Floating particles with varying sizes */}
      {particles.map((particle) => {
        const size = Math.random() * 4 + 1;
        const duration = 3 + Math.random() * 6;
        const delay = Math.random() * 8;
        
        return (
          <motion.div
            key={particle}
            className="absolute bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Rising bubbles (larger, translucent circles that flow upward) */}
      {Array.from({ length: 24 }).map((_, i) => {
        const size = 28 + Math.random() * 120; // px (increased)
        const left = Math.random() * 100; // percent
        const rise = 800 + Math.random() * 800; // px to rise (increased)
        const duration = 12 + Math.random() * 14; // seconds (longer)
        const delay = Math.random() * 8; // seconds
        const drift = Math.random() * 80 - 40; // horizontal drift (more)

        return (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `${-60 - Math.random() * 160}px`,
              width: `${size}px`,
              height: `${size}px`,
              background: 'linear-gradient(135deg, rgba(139,92,246,0.20), rgba(236,72,153,0.16))',
              border: '1px solid rgba(255,255,255,0.45)',
              boxShadow: '0 20px 60px rgba(139,92,246,0.12)',
              backdropFilter: 'blur(6px)',
              opacity: 0.92,
              mixBlendMode: 'screen',
            }}
            animate={{
              y: [0, -rise],
              x: [0, drift, 0],
              opacity: [0, 0.85, 0],
              scale: [0.9, 1.05, 0.95],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(248,247,255,0.4)_100%)]" />
    </div>
  );
}
