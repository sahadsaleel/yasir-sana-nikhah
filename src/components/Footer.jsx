import React from 'react';
import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #3A0C26 0%, #2A0818 100%)' }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #C9A84C 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
      />

      {/* Corner ornaments */}
      {[
        { style: { top: '20px', left: '20px' } },
        { style: { top: '20px', right: '20px', transform: 'scaleX(-1)' } },
      ].map((o, i) => (
        <div key={i} className="absolute opacity-30 pointer-events-none" style={o.style}>
          <svg width="56" height="56" viewBox="0 0 60 60" fill="none">
            <path d="M2 2 Q30 2 58 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <path d="M2 2 Q2 30 30 58" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <circle cx="2" cy="2" r="3" fill="#C9A84C" />
          </svg>
        </div>
      ))}

      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >

          {/* Gold divider — boosted opacity */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-3 mx-auto max-w-sm mb-10"
          >
            <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.4)' }} />
            <span style={{ color: '#C9A84C', fontSize: '11px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.4)' }} />
          </motion.div>

          {/* Host family */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mb-8"
          >
            {/* Label — was #6B4050, now soft gold */}
            <p
              className="text-xs uppercase tracking-[0.2em] mb-2"
              style={{ color: '#C9A84C' }}
            >
              Sharing the happiness
            </p>

            {/* Family name — already decent, slightly brighter */}
            <p
              className="text-base mb-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F0D0D8',
                letterSpacing: '0.05em',
              }}
            >
              Puthuparambil Family
            </p>

            {/* Address — was #6B4050, now legible warm ivory */}
            <p
              className="text-xs mb-1"
              style={{ color: '#C4A09A' }}
            >
              Puthuparambil House, Thavanur
            </p>

            {/* Phone numbers — was #8B6E5A, now bright enough to read */}
            <div className="flex items-center justify-center gap-4 mt-3">
              {['9946800867', '8138880867'].map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="flex items-center gap-1 transition-opacity hover:opacity-70"
                  style={{
                    color: '#E8C9B0',
                    textDecoration: 'none',
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                  }}
                >
                  <Phone size={10} style={{ color: '#C9A84C' }} />
                  {num}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Copyright — was #3D1525 (nearly invisible), now soft muted ivory */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xs"
            style={{ color: '#A08090', letterSpacing: '0.08em' }}
          >
            &copy; {new Date().getFullYear()} Sana &amp; Yasir Wedding · Created with{' '}
            <Heart
              size={10}
              strokeWidth={2}
              style={{ display: 'inline', color: '#C9A84C', verticalAlign: 'middle' }}
            />{' '}
            Love
          </motion.p>

        </motion.div>
      </div>

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
      />
    </footer>
  );
};

export default Footer;