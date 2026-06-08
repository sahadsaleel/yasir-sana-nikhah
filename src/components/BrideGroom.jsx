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
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[100px] opacity-30 pointer-events-none"
        style={{ background: '#C9A84C' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: '#4A1230' }}
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
          className="text-center mb-20"
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
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: '#8B6E5A' }}
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
        <div className="flex flex-col md:flex-row gap-12 md:gap-6 items-center justify-center relative">

          {/* ── BRIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 flex flex-col items-center text-center"
          >
            {/* Name */}
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

            {/* Gold divider */}
            <div className="flex items-center gap-2 my-3 w-28">
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
              <span style={{ color: '#C9A84C', fontSize: '10px' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            </div>

            {/* Family info */}
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: '#8B6E5A' }}
            >
              Daughter of
            </p>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: '#4A1230', fontFamily: "'Playfair Display', serif" }}
            >
              Mr. Abdul Samad &amp; Mrs. Safeera Abdul Samad
            </p>
            <p className="text-xs" style={{ color: '#8B6E5A' }}>
              Puthuparambil House, Thavanur
            </p>
          </motion.div>

          {/* ── CENTER HEART — fixed to left edge, 70% visible ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              overflow: 'hidden',
              width: '84px',   /* 70% of 120px circle */
            }}
          >
            {/* Vertical line top */}
            <div
              style={{
                width: '1px',
                height: '56px',
                background: 'linear-gradient(to bottom, transparent, #C9A84C)',
                marginLeft: '59px',
              }}
            />
            {/* Gold circle — pushed so only 70% shows */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#4A1230',
                border: '2px solid #C9A84C',
                boxShadow: '0 0 0 6px #F9F2E8, 0 0 0 8px #C9A84C55, 0 8px 32px rgba(74,18,48,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '-36px',  /* cut off left 30% */
              }}
            >
              <Heart size={34} strokeWidth={1.5} style={{ color: '#E8CC7A', marginLeft: '18px' }} />
            </div>
            {/* Vertical line bottom */}
            <div
              style={{
                width: '1px',
                height: '56px',
                background: 'linear-gradient(to top, transparent, #C9A84C)',
                marginLeft: '59px',
              }}
            />
          </motion.div>

          {/* Mobile & */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex md:hidden items-center gap-4"
          >
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: '#4A1230', border: '1.5px solid #C9A84C' }}
            >
              <Heart size={20} strokeWidth={1.5} style={{ color: '#E8CC7A' }} />
            </div>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </motion.div>

          {/* ── GROOM ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 flex flex-col items-center text-center"
          >
            {/* Name */}
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

            {/* Gold divider */}
            <div className="flex items-center gap-2 my-3 w-28">
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
              <span style={{ color: '#C9A84C', fontSize: '10px' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            </div>

            {/* Family info */}
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: '#8B6E5A' }}
            >
              Son of
            </p>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: '#4A1230', fontFamily: "'Playfair Display', serif" }}
            >
              Mr. Yahkoob &amp; Mrs. Zainaba Yahkoob
            </p>
            <p className="text-xs" style={{ color: '#8B6E5A' }}>
              Poonthala House, Purathur, Kavilakkad
            </p>
          </motion.div>
        </div>

        {/* Bottom Bismillah quote */}
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

          <p
            className="text-xs uppercase tracking-[0.25em] mb-2"
            style={{ color: '#8B6E5A' }}
          >
            "In the name of Allah, the most beneficent and the most merciful"
          </p>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: '#C9A84C' }}
          >
            Insha Allah · 27 July 2026 · 1448 Safar 13
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