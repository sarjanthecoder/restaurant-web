import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ingredients } from '../data';
import './IngredientsSection.css';

const qualityBadges = [
  { title: '100% PURE', desc: 'Zero synthetic additives or shortcuts.' },
  { title: 'LOCAL HARVEST', desc: 'Direct from organic partner farms.' },
  { title: 'PEAK SEASONAL', desc: 'Picked at maximum aroma & flavor.' },
  { title: 'SUSTAINABLE', desc: 'Regenerative organic farming.' }
];

export default function IngredientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="ingredients" id="ingredients" ref={ref}>
      <div className="container">
        <div className="ingredients__header">
          <div className="ingredients__title-col">
            <motion.div
              className="label-gold ingredients__label"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              The Organic Pantry
            </motion.div>
            <motion.h2
              className="ingredients__heading display-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              WE START WITH<br />
              WHAT NATURE<br />
              <em className="gold-text">GIVES US.</em>
            </motion.h2>
          </div>

          {/* Right Quality Badges */}
          <div className="ingredients__quality-badges">
            {qualityBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                className="quality-badge-box"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              >
                <div className="quality-badge-box__icon">🌿</div>
                <h4 className="quality-badge-box__title">{badge.title}</h4>
                <p className="quality-badge-box__desc">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ingredients Grid with Unique High-Def Visual Asset Cards */}
        <div className="ingredients__grid">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              className="ingredient-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
            >
              <div className="ingredient-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="ingredient-card__img"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="180"
                />
                <span className="ingredient-card__badge-num">0{i + 1}</span>
              </div>
              <div className="ingredient-card__body">
                <h3 className="ingredient-card__name">{item.name.toUpperCase()}</h3>
                <span className="ingredient-card__origin">📍 {item.origin}</span>
                <div className="ingredient-card__divider" />
                <span className="ingredient-card__flavor">✨ {item.flavor}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
