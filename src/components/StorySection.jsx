import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './StorySection.css';

const stats = [
  { num: '10+', label: 'Years of Passion' },
  { num: '100%', label: 'Quality Ingredients' },
  { num: '25K+', label: 'Memorable Experiences' },
];

export default function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="story" id="story" ref={ref}>
      <div className="container">
        <div className="story__grid">
          {/* Left */}
          <div className="story__left">
            <motion.div
              className="label-gold"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              Our Story
            </motion.div>

            <motion.h2
              className="story__heading display-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15 }}
            >
              WE DON'T<br />
              FOLLOW FLAVOR.<br />
              <em className="gold-text">WE CREATE IT.</em>
            </motion.h2>

            <motion.p
              className="story__body"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Founded in 2014, Ember & Oak was born from a simple belief — fine dining should be honest,
              ambitious and alive. Inspired by our drive to celebrate fire, craft, and seasons, our kitchen
              is guided by the finest producers.
            </motion.p>

            <motion.div
              className="story__signature"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <svg viewBox="0 0 180 60" className="story__sig-svg" fill="none">
                <path d="M10 45 C30 10 60 50 90 30 C120 10 150 45 170 35" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M40 50 C55 30 70 50 85 40" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <span>Alex Morgan — Founder &amp; Culinary Director</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="story__stats"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              {stats.map((s, i) => (
                <div className="story__stat" key={i}>
                  <span className="story__stat-num">{s.num}</span>
                  <span className="story__stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — overlapping images */}
          <div className="story__right">
            <motion.div
              className="story__year"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              2014
            </motion.div>
            <span className="story__year-label">OUR JOURNEY BEGAN</span>

            <motion.div
              className="story__img-main"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              <img
                src="/restaurant_interior_1787821635271.jpg"
                alt="Ember & Oak dining room"
                loading="lazy"
                decoding="async"
                width="600"
                height="390"
              />
            </motion.div>

            <motion.div
              className="story__img-secondary"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.45 }}
            >
              <img
                src="/kitchen_plating_1787822067205.jpg"
                alt="Chef plating"
                loading="lazy"
                decoding="async"
                width="230"
                height="160"
              />
            </motion.div>

            {/* Gold stats panel */}
            <motion.div
              className="story__stat-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: '✦', label: '10+ YEARS' },
                { icon: '◈', label: '100% QUALITY' },
                { icon: '◇', label: '25K+ GUESTS' },
              ].map((item, i) => (
                <div className="story__panel-item" key={i}>
                  <span className="story__panel-icon">{item.icon}</span>
                  <span className="story__panel-txt">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
