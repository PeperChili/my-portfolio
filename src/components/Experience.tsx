import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceDetail {
  title: string;
  desc: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description?: string;
  color: string;
  logo?: string;
  details?: ExperienceDetail[];
}

interface ExperienceProps {
  onHover: (color: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onHover }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      period: '2026.01 - 2026.03',
      company: '北京生数科技有限公司',
      role: 'AI产品运营',
      color: '#4285F4',
      logo: '/vidu_logo.png', // 替换为你的本地 logo 图片
      details: [
        {
          title: '模型活动与PE模版策划',
          desc: '针对Vidu核心能力，利用MJ、nano banana、即梦等工具独立完成多模型协同下的PE开发：预埋40+主体素材，配置30+条高稳定性视频热门提示词Prompt。通过封装“一键模版”主导策划并落地5个重点活动模版（含《熊出没》联动、新春专题等）大幅降低用户创作门槛。'
        },
        {
          title: '内容驱动增长与用户转化',
          desc: '负责S级核心活动「YesVidu创想周」内容供给与投流策略，沉淀100+优质短片与教程作为产品背书；实现站外曝光300w，转化2k+核心创作者用户，显著提升模型发布期内容生态与DAU。'
        },
        {
          title: '产品协同与体验优化',
          desc: '通过运营测试与数据反馈输出PRD需求，联动研发与设计优化推荐与内容展示策略，提升用户内容消费体验与创作转化效率。'
        }
      ]
    },
    {
      id: 2,
      period: '2024.09 - 2026.01',
      company: '创意传播工作室',
      role: '新媒体运营',
      color: '#A855F7',
      logo: '/jinan_media_logo.png', // 替换为暨南大学融媒体中心的 logo 图片
      details: [
        {
          title: '内容策划与视觉把控',
          desc: '独立完成IP形象设计；参与公众号及小红书账号的内容选题策划，主导视觉风格制定。通过分析过往推文数据，优化封面图文的点击率。'
        },
        {
          title: '数据成果',
          desc: 'IP项目获广东省媒体展示节三等奖，达5000元项目收入；累计产出30+篇优质图文内容，通过优化排版与视觉体验，助力账号累计阅读量突破10w+。'
        }
      ]
    },
    {
      id: 3,
      period: 'Future',
      company: '敬请期待...',
      role: 'Loading',
      color: '#F59E0B',
      details: [
        {
          title: '探索更多可能',
          desc: '更多精彩经历，正在路上......'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen pt-32 px-12 pb-24">
      <div className="max-w-7xl mx-auto scale-80 transform-gpu origin-top">
        <h2 className="text-4xl font-black mb-16 tracking-tight text-center">实习经历</h2>
        
        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              onMouseEnter={() => {
                setHoveredId(exp.id);
                onHover(exp.color);
              }}
              onMouseLeave={() => {
                setHoveredId(null);
                onHover('#4285F4'); // Default color
              }}
              layout
              className={`relative flex-1 rounded-[40px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                hoveredId === exp.id ? 'lg:flex-[3]' : 'lg:flex-1'
              } bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl`}
            >
              {/* Default State Content */}
              <motion.div 
                className={`absolute inset-0 p-12 flex flex-col justify-between transition-opacity duration-300 ${
                  hoveredId === exp.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <div>
                  <span 
                    className="text-sm font-bold uppercase tracking-widest text-gray-500"
                    style={{ opacity: 0.6 }}
                  >
                    {exp.period}
                  </span>
                  <h3 className="text-3xl font-black mt-2 mb-1 tracking-tight">{exp.company}</h3>
                  <p className="text-xl font-medium text-gray-600">{exp.role}</p>
                </div>
              </motion.div>

              {/* Expanded State Content */}
                <AnimatePresence>
                  {hoveredId === exp.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute inset-0 p-12 flex flex-col h-full overflow-y-auto"
                    >
                      <div className="mb-8 shrink-0 flex items-start justify-between">
                        <div>
                          <span className="text-sm font-bold uppercase tracking-widest text-gray-500">{exp.period}</span>
                          <h3 className="text-4xl font-black mt-2 mb-1 tracking-tight" style={{ color: exp.color }}>{exp.company}</h3>
                          <p className="text-xl font-medium text-gray-700">{exp.role}</p>
                        </div>
                        {exp.logo && (
                          <div className={`h-auto shrink-0 ml-4 ${exp.company === '创意传播工作室' ? 'w-48' : 'w-32'}`}>
                            <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 overflow-y-auto pr-4 space-y-6 scrollbar-hide">
                      {exp.details?.map((detail, index) => (
                        <div key={index} className="flex flex-col">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {index + 1}. {detail.title}
                          </h4>
                          <p className="text-base text-gray-600 leading-relaxed text-justify">
                            {detail.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Theme Color Indicator */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2"
                style={{ backgroundColor: exp.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
