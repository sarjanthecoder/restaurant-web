import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { galleryItems } from '../data';
import './FoodGallery.css';

export default function FoodGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="container">
        <motion.div className="label-gold gallery__label" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          Gallery
        </motion.div>
        <motion.h2 className="gallery__heading display-heading" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.15 }}>
          FOOD AS<br /><em className="gold-text">ART.</em>
        </motion.h2>
      </div>

      <div className="gallery__masonry container">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            className={`gallery__item gallery__item--${item.size}`}
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 + i * 0.06 }}
          >
            <div className="gallery__item-inner">
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
              <div className="gallery__item-overlay">
                <span className="gallery__item-caption">{item.caption}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
