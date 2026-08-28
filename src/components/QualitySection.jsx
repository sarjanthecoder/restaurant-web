import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { qualityPrinciples } from '../data';
import './QualitySection.css';

export default function QualitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="quality" ref={ref}>
      <div className="container">
        <div className="quality__top">
          <motion.div
            className="label-gold"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Our Philosophy
          </motion.div>
          <motion.h2
            className="quality__heading display-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            QUALITY<br />
            IS NEVER<br />
            <em className="gold-text">A SHORTCUT.</em>
          </motion.h2>
        </div>

        <div className="quality__principles">
          {qualityPrinciples.map((p, i) => (
            <motion.div
              key={i}
              className="quality__principle"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
            >
              {i > 0 && <div className="quality__separator" />}
              <div className="quality__p-inner">
                <span className="quality__p-num">{p.num}</span>
                <h3 className="quality__p-title">{p.title.toUpperCase()}</h3>
                <p className="quality__p-text">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
