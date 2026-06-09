import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const BrideGroom = () => {
  return (
    <section
      id="couple"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFBF5 0%, #F9F2E8 60%, #F5E0C0 100%)' }}
    >
      {/* Background blobs — inline filter to guarantee render */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.45) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,18,48,0.28) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: '#C9A84C' }}
          >
            The Blessed Union
          </p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontStyle: 'italic',
              color: '#4A1230',
            }}
          >
            The Couple
          </h2>

          {/* was #8B6E5A — now darker espresso for legibility */}
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: '#5C3D2E' }}
          >
            Meet the bride &amp; groom
          </p>

          <div className="flex items-center gap-3 mx-auto max-w-xs">
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '14px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </div>
        </motion.div>

        {/* Couple layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">

          {/* BRIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 flex flex-col items-center text-center px-8"
          >
            <h3
              className="text-3xl md:text-4xl mb-1"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontStyle: 'italic',
                color: '#4A1230',
              }}
            >
              Sana Nasrin
            </h3>

            <div className="flex items-center gap-2 my-3 w-28">
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
              <span style={{ color: '#C9A84C', fontSize: '10px' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            </div>

            {/* was #8B6E5A — now readable dark brown */}
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#5C3D2E' }}>
              Daughter of
            </p>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: '#4A1230', fontFamily: "'Playfair Display', serif" }}
            >
              Mr. Abdul Samad &amp; Mrs. Safeera Abdul Samad
            </p>
            {/* was #8B6E5A — now readable warm brown */}
            <p className="text-xs" style={{ color: '#6B4A38' }}>
              Puthuparambil House, Thavanur
            </p>
          </motion.div>

          {/* CENTER HEART — desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex flex-col items-center flex-shrink-0"
            style={{ width: '120px' }}
          >
            <div
              style={{
                width: '1px',
                height: '48px',
                background: 'linear-gradient(to bottom, transparent, #C9A84C)',
              }}
            />
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: '#4A1230',
                border: '2px solid #C9A84C',
                boxShadow: '0 0 0 5px #F9F2E8, 0 0 0 7px rgba(201,168,76,0.35), 0 8px 32px rgba(74,18,48,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Heart size={30} strokeWidth={1.5} style={{ color: '#E8CC7A' }} />
            </div>
            <div
              style={{
                width: '1px',
                height: '48px',
                background: 'linear-gradient(to top, transparent, #C9A84C)',
              }}
            />
          </motion.div>

          {/* Mobile heart separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex md:hidden items-center gap-4 my-8 w-full max-w-xs"
          >
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#4A1230', border: '1.5px solid #C9A84C' }}
            >
              <Heart size={20} strokeWidth={1.5} style={{ color: '#E8CC7A' }} />
            </div>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </motion.div>

          {/* GROOM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 flex flex-col items-center text-center px-8"
          >
            <h3
              className="text-3xl md:text-4xl mb-1"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontStyle: 'italic',
                color: '#4A1230',
              }}
            >
              Yasir Shan
            </h3>

            <div className="flex items-center gap-2 my-3 w-28">
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
              <span style={{ color: '#C9A84C', fontSize: '10px' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            </div>

            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#5C3D2E' }}>
              Son of
            </p>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: '#4A1230', fontFamily: "'Playfair Display', serif" }}
            >
              Mr. Yahkoob &amp; Mrs. Zainaba Yahkoob
            </p>
            <p className="text-xs" style={{ color: '#6B4A38' }}>
              Poonthala House, Purathur, Kavilakkad
            </p>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="flex items-center gap-3 mx-auto max-w-xs mb-6">
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '14px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </div>

          {/* was #8B6E5A — now legible warm espresso */}
          <p
            className="text-xs uppercase tracking-[0.25em] mb-2"
            style={{ color: '#5C3D2E' }}
          >
            "In the name of Allah, the most beneficent and the most merciful"
          </p>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: '#C9A84C' }}
          >
            Insha Allah · 28 July 2026 · 1448 Safar 13
          </p>
        </motion.div>
      </div>

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
      />
    </section>
  );
};

export default BrideGroom;