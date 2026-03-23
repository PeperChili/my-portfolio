import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我' },
    { id: 'experience', label: '实习经历' },
    { id: 'works', label: '我的作品' },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 bg-black/80 backdrop-blur-md text-white">
      <div className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => handleNavClick('home')}>PeperChili</div>
      
      <div className="flex items-center space-x-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleNavClick(tab.id)}
            className={`relative text-sm font-medium transition-colors duration-300 ${
              activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative group">
        <a 
          href="/resume.pdf" // 替换为你的简历PDF，放置在 public/resume.pdf
          download="刘紫函_简历.pdf"
          className="block px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"
        >
          Resume
        </a>

        {/* 鼠标悬浮的桥接区域，防止移出按钮时弹窗消失 */}
        <div className="absolute top-full right-0 w-full h-6 bg-transparent" />

        {/* 简历预览悬浮窗 - A4比例 (1:1.414) */}
        <div className="absolute top-[calc(100%+16px)] right-0 w-[320px] aspect-[1/1.414] bg-white/80 backdrop-blur-2xl rounded-[32px] border-4 border-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 origin-top-right overflow-hidden pointer-events-none p-2">
          <div className="w-full h-full rounded-[24px] overflow-hidden bg-white">
            <img 
              src="/resume.jpg" // 替换为你的简历图片，放置在 public/resume.jpg
              alt="Resume Preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
