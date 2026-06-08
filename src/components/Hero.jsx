import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const frameCount = 226;

const currentFrame = (index) => {
  const safeIndex = Math.max(1, Math.min(frameCount, Math.round(index)));
  return `/animation/ezgif-frame-${safeIndex.toString().padStart(3, '0')}.png`;
};

// Floating ornament particle
const FloatingPetal = ({ delay, x, duration }) => (
  <motion.div
    className="absolute text-gold opacity-30 select-none pointer-events-none"
    style={{ left: `${x}%`, top: '-20px', fontSize: '18px' }}
    animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [0.3, 0.1, 0.3] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
  >
    ✦
  </motion.div>
);

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        loadedImages[i - 1] = img;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setLoaded(true);
          console.log(`✅ Loaded ${loadedImages.length} animation frames`);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame ${i}: ${currentFrame(i)}`);
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setLoaded(true);
          console.log(`✅ Loaded ${loadedImages.filter(f => f).length} animation frames (some failed)`);
        }
      };
    }
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  const renderFrame = (index) => {
    if (images.length === 0 || !canvasRef.current) {
      return;
    }
    const safeIndex = Math.max(1, Math.min(frameCount, Math.round(index)));
    const img = images[safeIndex - 1];

    if (!img) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!canvas.width || !canvas.height) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    if (img.complete && img.naturalWidth > 0) {
      const hRatio = canvas.width / img.naturalWidth;
      const vRatio = canvas.height / img.naturalHeight;
      const ratio = Math.min(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
      const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img, 0, 0, img.naturalWidth, img.naturalHeight,
        centerShift_x, centerShift_y, img.naturalWidth * ratio, img.naturalHeight * ratio
      );
    }
  };

  // Initialize canvas and render first frame when images load
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(1);
    }
  }, [images]);

  useEffect(() => {
    const handleResize = () => renderFrame(frameIndex.get());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    renderFrame(latest);
  });

  const petals = [
    { delay: 0, x: 10, duration: 12 },
    { delay: 3, x: 25, duration: 15 },
    { delay: 6, x: 50, duration: 10 },
    { delay: 1.5, x: 70, duration: 14 },
    { delay: 4, x: 88, duration: 11 },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-[250vh]"
      style={{ background: '#FFFBF5' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 w-full h-full object-cover opacity-100"
        />

        {/* Parchment background base */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(160deg, #FFFBF5 0%, #F9F2E8 50%, #F5E0C0 100%)' }}
        />

        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 60%, #FFFBF5 100%)' }}
        />

        {/* Floating ornaments */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {petals.map((p, i) => <FloatingPetal key={i} {...p} />)}
        </div>

        {/* Corner ornaments */}
        <div className="absolute top-6 left-6 z-20 pointer-events-none opacity-40">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M2 2 Q30 2 58 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <path d="M2 2 Q2 30 30 58" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <circle cx="2" cy="2" r="3" fill="#C9A84C" />
            <circle cx="30" cy="4" r="1.5" fill="#C9A84C" opacity="0.5" />
            <circle cx="4" cy="30" r="1.5" fill="#C9A84C" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-40" style={{ transform: 'scaleX(-1)' }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M2 2 Q30 2 58 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <path d="M2 2 Q2 30 30 58" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <circle cx="2" cy="2" r="3" fill="#C9A84C" />
          </svg>
        </div>
        <div className="absolute bottom-6 left-6 z-20 pointer-events-none opacity-40" style={{ transform: 'scaleY(-1)' }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M2 2 Q30 2 58 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <path d="M2 2 Q2 30 30 58" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <circle cx="2" cy="2" r="3" fill="#C9A84C" />
          </svg>
        </div>
        <div className="absolute bottom-6 right-6 z-20 pointer-events-none opacity-40" style={{ transform: 'scale(-1,-1)' }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M2 2 Q30 2 58 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <path d="M2 2 Q2 30 30 58" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <circle cx="2" cy="2" r="3" fill="#C9A84C" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto pointer-events-none flex flex-col items-center">

          {/* Bismillah */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-xs uppercase tracking-[0.25em] mb-2"
            style={{ color: '#8B6E5A', fontFamily: 'serif' }}
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: '#8B6E5A', letterSpacing: '0.2em' }}
          >
            "In the name of Allah, the most beneficent and the most merciful"
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 mb-6 w-full max-w-xs"
          >
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '16px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </motion.div>

          {/* "We invite you" */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: '#C9A84C' }}
          >
            With joyful hearts, we invite you
          </motion.p>

          {/* Bride name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              color: '#4A1230',
              lineHeight: 1.1,
              marginBottom: '0.2em',
            }}
          >
            Sana Nasrin
          </motion.h1>

          {/* & */}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm uppercase tracking-[0.4em] my-2"
            style={{ color: '#C9A84C' }}
          >
            &amp;
          </motion.p>

          {/* Groom name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 1.0 }}
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              color: '#4A1230',
              lineHeight: 1.1,
              marginBottom: '0.8em',
            }}
          >
            Yasir Shan
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-3 mb-6 w-full max-w-xs"
          >
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '16px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-10 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: '#C9A84C' }}>
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ color: '#C9A84C', fontSize: '18px' }}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;