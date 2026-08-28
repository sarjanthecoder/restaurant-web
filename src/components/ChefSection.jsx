import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { chefTimeline } from '../data';
import './ChefSection.css';

export default function ChefSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="chef" id="chef" ref={ref}>
      <div className="chef__inner">
        {/* Left — Typography */}
        <div className="chef__left">
          <motion.div
            className="label-gold"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            The Chef
          </motion.div>

          <motion.h2
            className="chef__heading display-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            THE HAND<br />
            BEHIND<br />
            <em className="gold-text">THE FLAME.</em>
          </motion.h2>

          <motion.div
            className="chef__name-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <h3 className="chef__name">Chef Alex Morgan</h3>
            <span className="chef__title">Culinary Director</span>
          </motion.div>

          <motion.p
            className="chef__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            With over 15 years spanning Michelin-starred kitchens from Paris to Tokyo,
            Alex Morgan brings a philosophy rooted in live fire, restraint and the unflinching
            celebration of seasonal produce.
          </motion.p>

          {/* Timeline */}
          <motion.div
            className="chef__timeline"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            {chefTimeline.map((item, i) => (
              <div className="chef__tl-item" key={i}>
                <div className="chef__tl-year">{item.year}</div>
                <div className="chef__tl-connector">
                  <div className="chef__tl-dot" />
                  {i < chefTimeline.length - 1 && <div className="chef__tl-line" />}
                </div>
                <div className="chef__tl-info">
                  <span className="chef__tl-label">{item.label}</span>
                  <span className="chef__tl-detail">{item.detail}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Center — Portrait */}
        <motion.div
          className="chef__portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="/chef_portrait_1787821805700.jpg"
            alt="Chef Alex Morgan"
            className="chef__portrait-img"
            loading="lazy"
            decoding="async"
            width="500"
            height="600"
          />
          <div className="chef__portrait-accent" />
        </motion.div>

        {/* Right — Kitchen images */}
        <div className="chef__right">
          <motion.div
            className="chef__kitchen-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="label-gold">The Kitchen</div>
            <h3 className="display-heading chef__precision">
              PRECISION<br />BEHIND<br />EVERY<br /><em className="gold-text">PLATE.</em>
            </h3>
          </motion.div>
          <div className="chef__kitchen-grid">
            {[
              { img: '/chef_cooking_1787821999923.jpg', cap: 'Open Flame' },
              { img: '/kitchen_plating_1787822067205.jpg', cap: 'Artisan Plating' },
              { img: '/ember_salmon_1787821956715.jpg', cap: 'Precision Cooking' },
              { img: '/charred_veggies_1787822051948.jpg', cap: 'Seasonal Produce' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="chef__kitchen-img"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3 + i * 0.08 }}
              >
                <img
                  src={item.img}
                  alt={item.cap}
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="200"
                />
                <span className="chef__kitchen-cap">{item.cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
