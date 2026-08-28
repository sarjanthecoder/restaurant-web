import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { testimonials, signatureMoments } from '../data';
import './Testimonials.css';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <>
      {/* ── Testimonials ── */}
      <section className="testimonials" id="contact" ref={ref}>
        <div className="container">
          <motion.div className="label-gold" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            What Our Guests Say
          </motion.div>
          <motion.h2 className="testimonials__heading display-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.15 }}>
            WORDS FROM<br /><em className="gold-text">OUR TABLE.</em>
          </motion.h2>

          <div className="testimonials__body">
            <div className="testimonials__quote-mark">"</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="testimonials__card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="testimonials__text">
                  "{t.quote}"
                </blockquote>
                <div className="testimonials__meta">
                  <div>
                    <p className="testimonials__name">{t.name}</p>
                    <p className="testimonials__title">{t.title.toUpperCase()}</p>
                  </div>
                  <div className="testimonials__stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="testimonials__star">★</span>
                    ))}
                    <span className="testimonials__rating">5.0</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonials__nav">
              <button className="testimonials__arrow" onClick={prev} aria-label="Previous testimonial">&larr;</button>
              <span className="testimonials__count">{String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
              <button className="testimonials__arrow" onClick={next} aria-label="Next testimonial">&rarr;</button>
            </div>
          </div>

          {/* Overlapping food image */}
          <motion.div
            className="testimonials__food-image"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <img
              src="/ember_salmon_1787821956715.jpg"
              alt="Signature dish"
              loading="lazy"
              decoding="async"
              width="360"
              height="270"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Signature Moments strip ── */}
      <section className="moments">
        <div className="container">
          <motion.h2
            className="moments__heading display-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            THE MOMENTS<br />
            THAT STAY<br />
            <em className="gold-text">WITH YOU.</em>
          </motion.h2>
        </div>
        <div className="moments__strip">
          {signatureMoments.map((m, i) => (
            <motion.div
              key={i}
              className="moment"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
            >
              <div className="moment__img-wrap">
                <img
                  src={m.image}
                  alt={m.title}
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="530"
                />
                <div className="moment__overlay">
                  <span className="moment__title">{m.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
