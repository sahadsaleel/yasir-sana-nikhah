import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Updated to Sana & Yasir's wedding date: July 27, 2026 at 11:00 AM
    const targetDate = new Date('2026-07-27T11:00:00');

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFBF5 0%, #F9F2E8 60%, #F5E0C0 100%)' }}
    >
      {/* Soft parchment glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 z-0 pointer-events-none"
        style={{ background: '#C9A84C' }}
      />

      {/* Corner ornaments */}
      {[
        { top: '16px', left: '16px', transform: 'none' },
        { top: '16px', right: '16px', transform: 'scaleX(-1)' },
      ].map((style, i) => (
        <div key={i} className="absolute z-0 opacity-30 pointer-events-none" style={style}>
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <path d="M2 2 Q30 2 58 30" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <path d="M2 2 Q2 30 30 58" stroke="#C9A84C" strokeWidth="1" fill="none" />
            <circle cx="2" cy="2" r="3" fill="#C9A84C" />
          </svg>
        </div>
      ))}

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">

        {/* ✨ NIKKAH HIGHLIGHT BADGE — top of section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 120 }}
          className="relative mb-10"
        >
          {/* Pulsing glow ring */}
          <motion.div
            animate={{ scale: [1, 1.07, 1], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #C9A84C44 0%, transparent 70%)',
              margin: '-16px',
            }}
          />
          <div
            className="flex flex-col items-center px-10 py-5 rounded-full"
            style={{
              background: '#4A1230',
              border: '1.5px solid #C9A84C',
              boxShadow: '0 6px 32px rgba(74,18,48,0.22), 0 0 0 5px #F9F2E8',
            }}
          >
            <span
              className="text-xs uppercase tracking-[0.3em] mb-1"
              style={{ color: '#E8CC7A' }}
            >
              Nikkah Ceremony
            </span>
            <span
              className="text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: '#E8CC7A',
                letterSpacing: '0.05em',
              }}
            >
              11:00 AM
            </span>
            <span className="text-xs mt-1" style={{ color: '#D4A8B0' }}>
              Insha Allah
            </span>
          </div>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-8 w-full max-w-xs"
        >
          <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          <span style={{ color: '#C9A84C', fontSize: '14px' }}>✦</span>
          <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
        </motion.div>

        {/* Countdown card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="w-full rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: 'rgba(249,242,232,0.7)',
            border: '1px solid #D4A8B0',
            boxShadow: '0 8px 40px rgba(74,18,48,0.08)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl mb-2"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontStyle: 'italic',
              color: '#4A1230',
            }}
          >
            Our Forever Begins In
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs uppercase tracking-[0.25em] mb-10"
            style={{ color: '#8B6E5A' }}
          >
            Monday · 27 July 2026 · 1448 Safar 13
          </motion.p>

          {/* Countdown numbers */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-10">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className="flex flex-col items-center min-w-[70px]"
              >
                {/* Number box */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl mb-2"
                  style={{
                    background: '#4A1230',
                    border: '1px solid #C9A84C',
                    boxShadow: '0 4px 16px rgba(74,18,48,0.15)',
                  }}
                >
                  <span
                    className="text-3xl md:text-4xl font-light tracking-wider"
                    style={{
                      fontFamily: "'Playfair Display', 'Georgia', serif",
                      color: '#E8CC7A',
                    }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: '#8B6E5A' }}
                >
                  {unit.label}
                </span>

                {/* Separator dot between units (not after last) */}
                {index < timeUnits.length - 1 && (
                  <span
                    className="hidden md:block absolute mt-8 ml-[6.5rem] text-2xl"
                    style={{ color: '#C9A84C', pointerEvents: 'none' }}
                  >
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Gold divider */}
          <div className="flex items-center gap-3 mb-6 mx-auto max-w-xs">
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '13px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </div>

          {/* Venue info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col items-center gap-1"
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#4A1230', fontFamily: "'Playfair Display', serif" }}
            >
              Taj Palace Auditorium
            </p>
            <p className="text-xs" style={{ color: '#8B6E5A' }}>
              Neriparambu, Chamravattam · Lunch thereafter
            </p>
            <p className="text-xs mt-1" style={{ color: '#C9A84C', letterSpacing: '0.15em' }}>
              Puthuparambil Family
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;