import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  video?: string;
  aspectRatio?: string; // 可选的宽高比，用于适配不同尺寸的作品
}

export const Works: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // 处理悬浮时的视频播放逻辑
  useEffect(() => {
    works.forEach(work => {
      const videoEl = videoRefs.current[work.id];
      if (videoEl && work.video) {
        if (hoveredId === work.id) {
          // 当悬浮时，播放视频，并在3秒后重置回开头
          videoEl.currentTime = 0;
          videoEl.play().catch(e => console.log("Video play failed:", e));
          
          const timeoutId = setTimeout(() => {
            if (hoveredId === work.id) {
              videoEl.currentTime = 0;
              videoEl.play(); // 3秒后重新开始播放，实现3s循环
            }
          }, 3000);
          
          return () => clearTimeout(timeoutId);
        } else {
          // 鼠标移出时，暂停并回到开头
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      }
    });
  }, [hoveredId]);

  const works: WorkItem[] = [
    {
      id: 1,
      title: 'Short Video',
      category: 'AIGC Video',
      image: 'https://picsum.photos/seed/ai/800/1200',
      video: '/aigc_video.mp4', // 替换为你的本地视频文件，请将视频放置在 public/aigc_video.mp4
      aspectRatio: 'aspect-[3/4]' // 保持竖屏比例
    },
    {
      id: 2,
      title: 'Short Video',
      category: 'AIGC Video',
      image: 'https://picsum.photos/seed/ai/800/1200',
      video: '/aigc_video_2.mp4', // 替换为你的第二个本地视频文件，放置在 public/aigc_video_2.mp4
      aspectRatio: 'aspect-[3/4]' // 保持竖屏比例
    },
    {
      id: 3,
      title: 'Short Video',
      category: 'AIGC Video',
      image: 'https://picsum.photos/seed/ai/800/1200', // 封面图，如果视频未加载时显示
      video: '/aigc_video_4.mp4', // 替换为你准备的第三个竖屏视频文件，请将视频放置在 public/aigc_video_4.mp4
      aspectRatio: 'aspect-[3/4]' // 保持竖屏比例
    },
    {
      id: 4,
      title: 'Short Video',
      category: 'AIGC Video',
      image: 'https://picsum.photos/seed/ai/800/1200', // 封面图，如果视频未加载时显示
      video: '/aigc_video_5.mp4', // 替换为你准备的第四个竖屏视频文件，请将视频放置在 public/aigc_video_5.mp4
      aspectRatio: 'aspect-[3/4]' // 保持竖屏比例
    },
    {
      id: 5,
      title: 'Short Video',
      category: 'AIGC Video',
      image: 'https://picsum.photos/seed/ai/800/1200',
      video: '/aigc_video_6.mp4', // 替换为你准备的第五个竖屏视频文件，请将视频放置在 public/aigc_video_6.mp4
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 6,
      title: 'Short Video',
      category: 'AIGC Video',
      image: 'https://picsum.photos/seed/ai/800/1200',
      video: '/aigc_video_7.mp4', // 替换为你准备的第六个竖屏视频文件，请将视频放置在 public/aigc_video_7.mp4
      aspectRatio: 'aspect-[3/4]'
    }
  ];

  return (
    <section id="works" className="min-h-screen pt-24 px-6 md:pt-32 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto scale-100 md:scale-80 transform-gpu origin-top">
        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-center">我的作品</h2>
        <p className="text-gray-500 text-center mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">
          美味灵感配方研制中......
        </p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {works.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedWork(work)}
              className="relative group cursor-pointer rounded-[24px] md:rounded-[32px] overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/50 shadow-xl inline-block w-full"
            >
              <div className={`relative w-full ${work.aspectRatio || 'aspect-[3/4]'}`}>
                {work.video ? (
                  <>
                    <video
                      ref={el => videoRefs.current[work.id] = el}
                      src={work.video}
                      className={`w-full h-full object-cover transition-all duration-700 ease-in-out absolute inset-0 z-10 ${
                        hoveredId === work.id ? 'scale-110 blur-0' : 'scale-100 blur-[4px]'
                      }`}
                      muted
                      playsInline
                      loop={false}
                      preload="metadata"
                    />
                    {/* Play Icon Indicator */}
                    <div className={`absolute top-4 right-4 md:top-6 md:right-6 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 transition-opacity duration-300 ${
                      hoveredId === work.id ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
                    </div>
                  </>
                ) : (
                  <img
                    src={work.image}
                    alt={work.title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      hoveredId === work.id ? 'scale-110 blur-0' : 'scale-100 blur-[4px]'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 z-20 pointer-events-none ${
                  hoveredId === work.id ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-30 pointer-events-none">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 mb-1 md:mb-2 block">
                    {work.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    {work.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Portfolio Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <a 
            href="/portfolio.pdf" 
            download="刘紫函_作品集.pdf"
            className="bg-[#F6CA5B] hover:bg-[#e5b94a] text-[#1A1A40] font-black text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg border-2 border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            静态作品集
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download md:w-5 md:h-5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 pt-20 md:pt-12"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full md:w-auto max-w-full max-h-full bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-50 w-8 h-8 md:w-10 md:h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              {selectedWork.video ? (
                <video
                  src={selectedWork.video}
                  className="w-full md:w-auto max-h-[80vh] md:max-h-[85vh] object-contain"
                  controls
                  autoPlay
                  playsInline
                  loop
                />
              ) : (
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full md:w-auto max-h-[80vh] md:max-h-[85vh] object-contain"
                />
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2 block">
                  {selectedWork.category}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {selectedWork.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
