import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarDays, UtensilsCrossed, Heart, Navigation } from 'lucide-react';

// Google Maps link for Taj Palace Auditorium, Neriparambu, Chamravattam
const MAP_LINK = 'https://maps.app.goo.gl/KuxyqKj8Po4Qeq9MA';

const events = [
  {
    id: 1,
    icon: Heart,
    tag: 'Main Ceremony',
    title: 'The Nikkah',
    time: '11:00 AM',
    timeNote: 'Insha Allah',
    date: 'Monday, 27 July 2026',
    islamicDate: '1448 Safar 13',
    venue: 'Taj Palace Auditorium',
    address: 'Neriparambu, Chamravattam',
    highlight: true,
  },
  {
    id: 2,
    icon: UtensilsCrossed,
    tag: 'Reception',
    title: 'Wedding Lunch',
    time: 'Post Nikkah',
    timeNote: 'Lunch thereafter',
    date: 'Monday, 27 July 2026',
    islamicDate: '1448 Safar 13',
    venue: 'Taj Palace Auditorium',
    address: 'Neriparambu, Chamravattam',
    highlight: false,
  },
];

const WeddingDetails = () => {
  return (
    <section
      id="events"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFBF5 0%, #F9F2E8 60%, #F5E0C0 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 pointer-events-none"
        style={{ background: '#C9A84C' }}
      />

      {/* Top ornament row */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          {/* Label */}
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: '#C9A84C' }}
          >
            You are cordially invited
          </p>

          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontStyle: 'italic',
              color: '#4A1230',
            }}
          >
            Nikkah Ceremony
          </h2>

          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: '#8B6E5A' }}
          >
            Solicit your esteemed presence &amp; prayerful blessings
          </p>

          {/* Gold divider */}
          <div className="flex items-center gap-3 mx-auto max-w-xs">
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            <span style={{ color: '#C9A84C', fontSize: '14px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
          </div>
        </motion.div>

        {/* Family hosts block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: '#8B6E5A' }}
          >
            Hosted by
          </p>
          <p
            className="text-lg md:text-xl mb-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#4A1230',
              fontWeight: 700,
            }}
          >
            Mr. Abdul Samad &amp; Mrs. Safeera Abdul Samad
          </p>
          <p className="text-sm" style={{ color: '#8B6E5A' }}>
            Puthuparambil House, Thavanur
          </p>
          <p className="text-xs mt-1" style={{ color: '#C9A84C', letterSpacing: '0.15em' }}>
            9946800867 &nbsp;·&nbsp; 8138880867
          </p>

          <div className="flex items-center gap-3 mx-auto max-w-[160px] mt-5">
            <div className="flex-1 h-px" style={{ background: '#D4A8B0' }} />
            <span style={{ color: '#D4A8B0', fontSize: '11px' }}>✦</span>
            <div className="flex-1 h-px" style={{ background: '#D4A8B0' }} />
          </div>

          {/* Couple block */}
          <div className="mt-5 flex flex-col items-center gap-1">
            <p className="text-xs uppercase tracking-widest" style={{ color: '#8B6E5A' }}>
              Marriage of their beloved daughter
            </p>
            <p
              className="text-2xl md:text-3xl mt-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                color: '#4A1230',
              }}
            >
              Sana Nasrin
            </p>
            <p className="text-xs uppercase tracking-[0.3em] my-1" style={{ color: '#C9A84C' }}>
              with
            </p>
            <p
              className="text-2xl md:text-3xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                color: '#4A1230',
              }}
            >
              Yasir Shan
            </p>
            <p className="text-xs mt-2" style={{ color: '#8B6E5A' }}>
              Son of Mr. Yahkoob &amp; Mrs. Zainaba Yahkoob
            </p>
            <p className="text-xs" style={{ color: '#8B6E5A' }}>
              Poonthala House, Purathur, Kavilakkad
            </p>
          </div>
        </motion.div>

        {/* Event cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(74,18,48,0.14)' }}
                className="flex flex-col items-center text-center rounded-3xl p-10 flex-1 max-w-sm mx-auto w-full"
                style={{
                  background: event.highlight ? '#4A1230' : 'rgba(249,242,232,0.85)',
                  border: `1.5px solid ${event.highlight ? '#C9A84C' : '#D4A8B0'}`,
                  boxShadow: event.highlight
                    ? '0 8px 40px rgba(74,18,48,0.22), 0 0 0 4px #F9F2E8'
                    : '0 4px 20px rgba(74,18,48,0.07)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Tag */}
                <span
                  className="text-xs uppercase tracking-[0.25em] mb-5 px-4 py-1 rounded-full"
                  style={{
                    background: event.highlight ? 'rgba(201,168,76,0.18)' : 'rgba(74,18,48,0.07)',
                    color: event.highlight ? '#E8CC7A' : '#C9A84C',
                    border: `1px solid ${event.highlight ? '#C9A84C55' : '#C9A84C44'}`,
                  }}
                >
                  {event.tag}
                </span>

                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: event.highlight ? 'rgba(201,168,76,0.15)' : 'rgba(74,18,48,0.07)',
                    border: `1px solid ${event.highlight ? '#C9A84C' : '#D4A8B0'}`,
                  }}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    style={{ color: event.highlight ? '#E8CC7A' : '#4A1230' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl mb-5"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    color: event.highlight ? '#F5E6C8' : '#4A1230',
                  }}
                >
                  {event.title}
                </h3>

                {/* Divider */}
                <div className="flex items-center gap-2 mb-5 w-24">
                  <div className="flex-1 h-px" style={{ background: event.highlight ? '#C9A84C55' : '#D4A8B0' }} />
                  <span style={{ fontSize: '10px', color: event.highlight ? '#C9A84C' : '#D4A8B0' }}>✦</span>
                  <div className="flex-1 h-px" style={{ background: event.highlight ? '#C9A84C55' : '#D4A8B0' }} />
                </div>

                {/* Time highlight */}
                <div className="mb-5">
                  <div
                    className="flex items-center gap-2 justify-center mb-1"
                  >
                    <Clock size={13} style={{ color: event.highlight ? '#C9A84C' : '#8B6E5A' }} />
                    <span
                      className="text-2xl font-bold"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: event.highlight ? '#E8CC7A' : '#4A1230',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {event.time}
                    </span>
                  </div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: event.highlight ? '#D4A8B0' : '#8B6E5A' }}
                  >
                    {event.timeNote}
                  </p>
                </div>

                {/* Date */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <CalendarDays size={13} style={{ color: event.highlight ? '#C9A84C' : '#8B6E5A' }} />
                    <p
                      className="text-sm font-semibold"
                      style={{ color: event.highlight ? '#F5E6C8' : '#4A1230' }}
                    >
                      {event.date}
                    </p>
                  </div>
                  <p
                    className="text-xs tracking-widest"
                    style={{ color: event.highlight ? '#D4A8B0' : '#8B6E5A' }}
                  >
                    {event.islamicDate}
                  </p>
                </div>

                {/* Venue */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <MapPin size={13} style={{ color: event.highlight ? '#C9A84C' : '#8B6E5A' }} />
                    <p
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: event.highlight ? '#E8CC7A' : '#4A1230',
                      }}
                    >
                      {event.venue}
                    </p>
                  </div>
                  <p
                    className="text-xs mb-3"
                    style={{ color: event.highlight ? '#D4A8B0' : '#8B6E5A' }}
                  >
                    {event.address}
                  </p>

                  {/* Google Maps Button */}
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300"
                    style={{
                      background: event.highlight ? 'rgba(201,168,76,0.15)' : '#4A1230',
                      border: `1px solid ${event.highlight ? '#C9A84C' : '#C9A84C'}`,
                      color: event.highlight ? '#E8CC7A' : '#E8CC7A',
                      textDecoration: 'none',
                      letterSpacing: '0.18em',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = event.highlight ? 'rgba(201,168,76,0.28)' : '#6B2040';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(74,18,48,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = event.highlight ? 'rgba(201,168,76,0.15)' : '#4A1230';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Navigation size={11} strokeWidth={2} />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-14 rounded-3xl overflow-hidden"
          style={{
            border: '1.5px solid #D4A8B0',
            boxShadow: '0 8px 40px rgba(74,18,48,0.10)',
          }}
        >
          {/* Map header */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: '#4A1230', borderBottom: '1px solid #C9A84C' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.18)', border: '1px solid #C9A84C' }}
              >
                <MapPin size={14} style={{ color: '#E8CC7A' }} />
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: '#E8CC7A', fontFamily: "'Playfair Display', serif" }}
                >
                  Taj Palace Auditorium
                </p>
                <p className="text-xs" style={{ color: '#D4A8B0' }}>
                  Neriparambu, Chamravattam
                </p>
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300"
              style={{
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid #C9A84C',
                color: '#E8CC7A',
                textDecoration: 'none',
                letterSpacing: '0.15em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.28)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,168,76,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Navigation size={11} strokeWidth={2} />
              Open in Maps
            </a>
          </div>

          {/* Embedded map iframe */}
          <div style={{ position: 'relative', width: '100%', height: '320px' }}>
            <iframe
              title="Taj Palace Auditorium"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5113208683197!2d75.96826227464197!3d10.820557789330929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ba135d027d85%3A0x7199d99558278f8e!2sTaj%20Palace!5e1!3m2!1sen!2sin!4v1780844266347!5m2!1sen!2sin"
            />
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center text-xs uppercase tracking-[0.25em] mt-12"
          style={{ color: '#8B6E5A' }}
        >
          Sharing the happiness &nbsp;·&nbsp; Puthuparambil Family &nbsp;·&nbsp; M4M: 9746226371
        </motion.p>
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
    </section>
  );
};

export default WeddingDetails;