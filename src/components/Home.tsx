import React from 'react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const tags = [
    'AIGC创作者',
    'B站认证画师',
    'AI产品&产运',
    'TA技术美术'
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 md:px-6 text-center overflow-hidden">
      {/* Background Blur Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/background blur.png" 
          alt="Background Blur" 
          className="w-full h-full object-cover mix-blend-screen opacity-80"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full scale-100 md:scale-80 transform-gpu origin-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          {/* Avatar Container with Ripple Effect */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 group cursor-pointer">
            {/* Water Ripple Effects */}
            <div className="absolute inset-0 rounded-full border-[3px] border-white/80 opacity-0 group-hover:animate-[ripple_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute inset-0 rounded-full border-[3px] border-white/60 opacity-0 group-hover:animate-[ripple_2s_cubic-bezier(0,0,0.2,1)_infinite_0.6s]"></div>
            <div className="absolute inset-0 rounded-full border-[3px] border-white/40 opacity-0 group-hover:animate-[ripple_2s_cubic-bezier(0,0,0.2,1)_infinite_1.2s]"></div>

            {/* Actual Avatar */}
            <div className="absolute inset-0 z-10 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105 bg-white">
              <img
                src="/avatar.jpg" // 替换为你的本地头像图片，请将图片放置在 public/avatar.jpg
                alt="Avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-black mb-4"
        >
          你好，我是虎皮尖椒
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-8 md:mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent"
        >
          A creative creator!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-gray-600 max-w-2xl px-4 md:px-0 mb-10 md:mb-16 leading-relaxed"
        >
          AI Product Explorer | Digital Artist Specialized in Prompt Engineering & Strategic PE Testing.
          <br className="hidden md:block" />
          Currently focused on the evolution of Autonomous Agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 px-2"
        >
          {tags.map((tag, i) => (
            <div
              key={i}
              className="px-5 py-2.5 md:px-8 md:py-4 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full text-sm md:text-lg font-medium shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 cursor-default"
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
