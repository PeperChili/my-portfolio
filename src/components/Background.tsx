import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundProps {
  color?: string;
}

export const Background: React.FC<BackgroundProps> = ({ color = '#4285F4' }) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Main Diffusion Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: color }}
      />
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: '#A855F7' }}
      />
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-15"
        style={{ backgroundColor: '#34D399' }}
      />
      
      {/* Subtle grid or texture if needed, but keeping it clean like the image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
    </div>
  );
};
