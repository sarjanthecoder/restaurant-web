import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './RestaurantExperience.css';

const pillars = [
  { icon: '◈', title: 'Ambience', text: 'Elegant spaces designed for comfort, warm lighting, and quiet conversation.' },
  { icon: '◇', title: 'Service', text: 'Warm hospitality from the heart — attentive without intrusion.' },
  { icon: '○', title: 'Music', text: 'Curated acoustic soundscapes to elevate every moment at the table.' },
  { icon: '△', title: 'Memories', text: 'Moments crafted to be carried long after the final course.' },
];

export default function RestaurantExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="rexp" ref={ref}>
      <div className="rexp__inner">
        {/* Left — Large interior */}
        <motion.div
          className="rexp__image-main"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <img
            src="/restaurant_interior_1787821635271.jpg"
            alt="Restaurant interior"
            loading="lazy"
            decoding="async"
            width="600"
            height="750"
          />
        </motion.div>

        {/* Right — Content */}
        <div className="rexp__content">
          <motion.div className="label-gold" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            The Experience
          </motion.div>

          <motion.h2
            className="rexp__heading display-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            IT'S NOT JUST<br />
            WHAT'S ON<br />
            <em className="gold-text">THE PLATE.</em>
          </motion.h2>

          <div className="rexp__pillars">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className="rexp__pillar"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.25 + i * 0.08 }}
              >
                <span className="rexp__icon">{p.icon}</span>
                <div>
                  <h3 className="rexp__pillar-title">{p.title.toUpperCase()}</h3>
                  <p className="rexp__pillar-text">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
