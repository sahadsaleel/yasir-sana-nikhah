import React from 'react';
import { motion } from 'framer-motion';

const FloatingPetal = ({ delay, x, duration }) => (
  <motion.div
    className="absolute select-none pointer-events-none"
    style={{ left: `${x}%`, top: '-20px', fontSize: '18px', color: '#C9A84C', opacity: 0.3 }}
    animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [0.3, 0.1, 0.3] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
  >
    ✦
  </motion.div>
);

const CornerOrnament = ({ style }) => (
  <div className="absolute z-20 pointer-events-none opacity-40" style={style}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M2 2 Q30 2 58 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M2 2 Q2 30 30 58" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <circle cx="2" cy="2" r="3" fill="#C9A84C" />
      <circle cx="30" cy="4" r="1.5" fill="#C9A84C" opacity="0.5" />
      <circle cx="4" cy="30" r="1.5" fill="#C9A84C" opacity="0.5" />
    </svg>
  </div>
);

const petals = [
  { delay: 0, x: 10, duration: 12 },
  { delay: 3, x: 25, duration: 15 },
  { delay: 6, x: 50, duration: 10 },
  { delay: 1.5, x: 70, duration: 14 },
  { delay: 4, x: 88, duration: 11 },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-stretch"
      style={{ background: '#FFFBF5' }}
    >
      {/* Parchment background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(160deg, #FFFBF5 0%, #F9F2E8 50%, #F5E0C0 100%)' }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating ornaments */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {petals.map((p, i) => <FloatingPetal key={i} {...p} />)}
      </div>

      {/* Corner ornaments */}
      <CornerOrnament style={{ top: 24, left: 24 }} />
      <CornerOrnament style={{ top: 24, right: 24, transform: 'scaleX(-1)' }} />
      <CornerOrnament style={{ bottom: 24, left: 24, transform: 'scaleY(-1)' }} />
      <CornerOrnament style={{ bottom: 24, right: 24, transform: 'scale(-1,-1)' }} />

      {/* Two-column layout */}
      <div className="relative z-20 w-full flex flex-col lg:flex-row items-stretch min-h-screen">

        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-20 lg:py-0 text-center lg:text-left lg:items-start lg:pl-16 xl:pl-24">

          {/* Bismillah Arabic — was #8B6E5A, now deep espresso */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-xs uppercase tracking-[0.25em] mb-2"
            style={{ color: '#5C3D2E', fontFamily: 'serif' }}
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </motion.p>

          {/* Bismillah translation — was #8B6E5A, now #6B4A38 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs tracking-widest uppercase mb-8"
            style={{ color: '#6B4A38', letterSpacing: '0.2em', maxWidth: '32ch' }}
          >
            "In the name of Allah, the most beneficent and the most merciful"
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 mb-8 w-full max-w-xs"
            style={{ originX: 0 }}
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
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              color: '#4A1230',
              lineHeight: 1.1,
              marginBottom: '0.15em',
            }}
          >
            Sana Nasrin
          </motion.h1>

          {/* & */}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm uppercase tracking-[0.4em] my-3"
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
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              color: '#4A1230',
              lineHeight: 1.1,
              marginBottom: '1em',
            }}
          >
            Yasir Shan
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-3 mb-8 w-full max-w-xs"
            style={{ originX: 0 }}
          >
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '16px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </motion.div>

          {/* Date & venue — was #8B6E5A, now darker readable brown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col gap-1 mb-10"
          >
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: '#5C3D2E' }}
            >
              Tuesday, 28 July 2026
            </p>
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ color: '#6B4A38' }}
            >
              Green Land Auditorium, Athanipadi
            </p>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
          className="relative w-full lg:w-[48%] min-h-[60vw] lg:min-h-0 flex-shrink-0 overflow-hidden"
        >
          {/* Gold frame border */}
          <div
            className="absolute inset-4 z-10 pointer-events-none"
            style={{ border: '1px solid rgba(201,168,76,0.35)' }}
          />

          <img
            src="/heroimg.jpeg"
            alt="Sana Nasrin and Yasir Shan"
            className="w-full h-full object-cover"
            style={{ minHeight: '100%', display: 'block' }}
          />

          {/* Left vignette — desktop */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{ background: 'linear-gradient(to right, #FFFBF5 0%, transparent 18%)' }}
          />

          {/* Bottom vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(255,251,245,0.6) 0%, transparent 30%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;