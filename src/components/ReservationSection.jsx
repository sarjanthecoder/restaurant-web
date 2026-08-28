import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ReservationSection.css';

export default function ReservationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="reservation" id="reservation" ref={ref}>
      {/* Oversized plate image entering from side */}
      <motion.div
        className="reservation__side-image"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 0.9, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <img
          src="/table_setting_1787822080371.jpg"
          alt="Table setting"
          loading="lazy"
          decoding="async"
          width="480"
          height="360"
        />
      </motion.div>

      <div className="reservation__content">
        <motion.div
          className="label-gold"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Reserve
        </motion.div>

        <motion.h2
          className="reservation__heading display-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          COME<br />
          EXPERIENCE<br />
          <em className="gold-text">THE STORY.</em>
        </motion.h2>

        <motion.p
          className="reservation__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Good food brings people together.<br />
          We can't wait to welcome you to our table.
        </motion.p>

        <motion.div
          className="reservation__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <button className="btn-primary reservation__primary-cta">
            Reserve Your Table
          </button>
          <button className="btn-outline">
            Visit the Restaurant
          </button>
        </motion.div>

        {/* Gold hairline divider */}
        <motion.div
          className="reservation__divider hairline"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          style={{ originX: 0 }}
        />
      </div>
    </section>
  );
}
