import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { tasteProfiles, kitchenSteps } from '../data';
import './TasteExperience.css';

export default function TasteExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* ── Taste visualization ── */}
      <section className="taste" ref={ref}>
        <div className="container">
          <div className="taste__grid">
            <div className="taste__left">
              <motion.div className="label-gold" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
                Flavor Profile
              </motion.div>
              <motion.h2 className="taste__heading display-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.15 }}>
                A HARMONY<br />OF<br /><em className="gold-text">FLAVORS.</em>
              </motion.h2>
            </div>
            <div className="taste__right">
              {tasteProfiles.map((t, i) => (
                <motion.div
                  key={i}
                  className="taste__bar-row"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.15 + i * 0.08 }}
                >
                  <span className="taste__label">{t.label.toUpperCase()}</span>
                  <div className="taste__track">
                    <motion.div
                      className="taste__fill"
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: t.value / 100 } : {}}
                      transition={{ duration: 1.1, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                  </div>
                  <span className="taste__val">{t.value}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Kitchen Process ── */}
      <section className="ksteps" ref={stepsRef}>
        <div className="container">
          <motion.div className="label-gold" initial={{ opacity: 0, x: -20 }} animate={stepsInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            The Kitchen
          </motion.div>
          <motion.h2 className="ksteps__heading display-heading" initial={{ opacity: 0, y: 30 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.15 }}>
            PRECISION<br /><em className="gold-text">IN EVERY STEP.</em>
          </motion.h2>
        </div>
        <div className="ksteps__rail">
          {kitchenSteps.map((step, i) => (
            <motion.div
              key={i}
              className="kstep"
              initial={{ opacity: 0, y: 25 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.08 }}
            >
              <div className="kstep__img-wrap">
                <img
                  src={step.image}
                  alt={step.label}
                  loading="lazy"
                  decoding="async"
                  width="270"
                  height="200"
                />
              </div>
              <div className="kstep__body">
                <span className="kstep__num">{step.num}</span>
                <span className="kstep__label">{step.label.toUpperCase()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
