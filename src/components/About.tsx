import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Mail, MessageCircle } from 'lucide-react';

export const About: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const newSkillGroups = [
    {
      title: 'AIGC 工具',
      skills: ['Vidu', 'Seedance', 'Nano Banana', 'Midjourney', 'Trae']
    },
    {
      title: '产品与数据',
      skills: ['工作流', 'Python', 'Mysql']
    },
    {
      title: '设计与 3D',
      skills: ['Procreate', 'Blender', 'Figma', 'Unity', 'Shader']
    }
  ];

  const skillData = [
    { subject: 'AIGC Workflow', A: 140, fullMark: 150 },
    { subject: 'Data Strategy', A: 110, fullMark: 150 },
    { subject: '3D & Tech Art', A: 120, fullMark: 150 },
    { subject: 'Artistic Sense', A: 135, fullMark: 150 },
    { subject: 'Synergy & Product', A: 130, fullMark: 150 },
  ];

  const skillGroups = [
    {
      title: 'AIGC & 工具',
      skills: ['Vidu', 'Midjourney', 'ComfyUI', 'Shader']
    },
    {
      title: '产品与数据',
      skills: ['PRD 撰写', 'Pandas', 'Numpy', '归因复盘']
    },
    {
      title: '设计与 3D',
      skills: ['PS', 'Figma', 'Blender']
    }
  ];

  return (
    <section id="about" className="min-h-screen pt-32 px-12 pb-24">
      <div className="max-w-7xl mx-auto scale-80 transform-gpu origin-top grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Intro Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group bg-[#B5B2DE] rounded-[40px] shadow-2xl flex flex-col items-center pt-12 pb-0 overflow-visible"
        >
          {/* Major Tag - Hanging from top right */}
          <div className="absolute -top-6 -right-6 z-30 transform rotate-[15deg] hover:rotate-[5deg] transition-transform duration-300 origin-top-left cursor-default">
            {/* Metal Ring */}
            <div className="absolute -top-2 left-6 w-4 h-4 rounded-full border-[3px] border-gray-300 shadow-sm z-40 bg-transparent"></div>
            <div className="absolute -top-1 left-[1.6rem] w-1.5 h-3 bg-gray-400 rounded-full z-30 shadow-inner"></div>
            
            {/* Tag Body */}
            <div className="bg-[#F6CA5B] rounded-xl px-5 py-3 shadow-lg border-2 border-white/20 relative mt-1">
              <div className="absolute top-1.5 left-2.5 text-[8px] font-black text-black/40 tracking-wider">MAJOR</div>
              <div className="mt-2 text-[#1A1A40] font-black text-lg whitespace-nowrap">网络与新媒体</div>
            </div>
          </div>

          {/* Avatar with Glass Shine Effect */}
          <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-[2rem]">
            <img 
              src="/avatar_illustration.png" // 替换为你的插画头像
              alt="Avatar Illustration" 
              className="w-full h-full object-contain relative z-10"
            />
            {/* 玻璃反光特效层 */}
            <div className="absolute inset-0 z-20 pointer-events-none translate-x-[-150%] -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
          </div>

          {/* Name */}
          <h2 className="text-4xl font-black text-[#1A1A40] mb-2 tracking-widest">刘紫函</h2>
          
          {/* Divider */}
          <div className="w-32 h-0.5 bg-[#1A1A40] mb-6"></div>

          {/* Contact Info */}
          <div className="flex flex-col items-start space-y-3 mb-8 text-[#1A1A40] font-medium text-lg">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span>13121632005@163.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6" />
              <span>Liu68010010</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-center text-[#1A1A40] font-bold text-xl leading-relaxed mb-10">
            <p>闲不下来的创意创作者</p>
            <p>致力于探索艺术与产品的无限可能</p>
          </div>

          {/* MBTI */}
          <div className="w-full px-12 mb-8 text-left">
            <span className="text-2xl font-black text-[#1A1A40]">ENFJ-A</span>
          </div>

          {/* Bottom Status Bar */}
          <div className="w-full bg-white py-5 px-12 flex items-center space-x-3 mt-auto rounded-b-[40px]">
            <div className="w-3.5 h-3.5 rounded-full bg-[#34D399]"></div>
            <span className="text-gray-500 font-medium text-lg">Status: Available</span>
          </div>
        </motion.div>

        {/* Right: Skill Tree / Data Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative h-[700px] perspective-1000"
        >
          {/* Inner container for 3D flip */}
          <div 
            className="w-full h-full relative preserve-3d group-hover:rotate-y-180 transition-transform duration-1000 ease-in-out"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            
            {/* Front Side: Text and Tags */}
            <div className="absolute inset-0 backface-hidden bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[40px] p-12 shadow-2xl flex flex-col justify-start overflow-hidden">
              <div className="space-y-10 w-full z-10 relative mt-4">
                {newSkillGroups.map((group, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-center mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#E8E6FF] text-[#4A3AFF] font-bold flex items-center justify-center text-lg mr-4 shadow-sm">
                        {i + 1}
                      </div>
                      <h3 className="text-2xl font-black tracking-widest text-black">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 pl-14 max-w-[85%]">
                      {group.skills.map((skill, j) => (
                        <span 
                          key={j} 
                          className="px-5 py-2 bg-white/80 backdrop-blur-md rounded-full text-sm font-medium border border-white shadow-sm text-black hover:shadow-md transition-shadow cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Illustration at Bottom Right */}
              <div className="absolute -bottom-8 -right-8 w-[320px] h-[320px] z-20 pointer-events-none">
                <img 
                  src="/character_cat_illustration.png" // 替换为带有猫咪的角色插图
                  alt="Character with cat" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Back Side: Radar Chart */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[40px] p-12 shadow-2xl flex flex-col items-center justify-center">
              <h3 className="text-2xl font-black mb-8 tracking-tight text-black">技能树</h3>
              <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 600 }} 
                    />
                    {isFlipped && (
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="#4285F4"
                        fill="#4285F4"
                        fillOpacity={0.4}
                        isAnimationActive={true}
                        animationBegin={300}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      />
                    )}
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full mt-8 space-y-4">
                <div className="flex justify-between text-sm font-bold text-gray-500">
                  <span>学习探索进度</span>
                  <span>72%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                    initial={{ width: 0 }}
                    animate={{ width: isFlipped ? '72%' : 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
