import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './VegNonVegSection.css';

export default function VegNonVegSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="vnv" id="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="vnv__heading display-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          VEG &amp;<br />
          NON-VEG<br />
          <em className="gold-text">PERFECTION.</em>
        </motion.h2>
      </div>

      <div className="vnv__split">
        {/* VEG */}
        <motion.div
          className="vnv__side vnv__side--veg"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="vnv__img-wrap">
            <img
              src="/charred_veggies_1787822051948.jpg"
              alt="Premium vegetarian"
              loading="lazy"
              decoding="async"
              width="600"
              height="380"
            />
          </div>
          <div className="vnv__content">
            <span className="badge badge-veg">
              <span className="badge-dot" />
              Vegetarian
            </span>
            <h3 className="vnv__dish-name">Charred Seasonal Vegetables</h3>
            <p className="vnv__desc">Heritage root vegetables kissed by open live coals. A testament that vegetables deserve the same reverence as the finest proteins.</p>
            <div className="vnv__profile">
              {['Earthy', 'Smoky', 'Fresh', 'Seasonal'].map(t => (
                <span key={t} className="dish-card__tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="vnv__divider">
          <div className="vnv__divider-line" />
          <span className="vnv__divider-text">&amp;</span>
          <div className="vnv__divider-line" />
        </div>

        {/* NON-VEG */}
        <motion.div
          className="vnv__side vnv__side--nonveg"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="vnv__img-wrap">
            <img
              src="/lamb_rack_1787821972800.jpg"
              alt="Premium non-vegetarian"
              loading="lazy"
              decoding="async"
              width="600"
              height="380"
            />
          </div>
          <div className="vnv__content">
            <span className="badge badge-nonveg">
              <span className="badge-dot" />
              Non-Vegetarian
            </span>
            <h3 className="vnv__dish-name">Herb-Crusted Lamb Rack</h3>
            <p className="vnv__desc">Frenched rack of lamb at perfect medium-rare, with Bordeaux reduction and glazed root vegetables. A composition of boldness and grace.</p>
            <div className="vnv__profile">
              {['Bold', 'Herbal', 'Rich', 'Indulgent'].map(t => (
                <span key={t} className="dish-card__tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
