import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { dishes } from '../data';
import './SignatureDishes.css';

function DishCard({ dish, index }) {
  const isSpecial = dish.id === 3;

  return (
    <motion.div
      className={`dish-card ${isSpecial ? 'dish-card--special' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {isSpecial && (
        <div className="dish-card__special-badge">
          <span>CHEF'S SPECIAL</span>
        </div>
      )}
      
      <div className="dish-card__image-wrap">
        <img
          src={dish.image}
          alt={dish.name}
          className="dish-card__image"
          loading="lazy"
          decoding="async"
          width="350"
          height="260"
        />
      </div>

      <div className="dish-card__body">
        <div className="dish-card__meta">
          <span className={`badge ${dish.type === 'veg' ? 'badge-veg' : 'badge-nonveg'}`}>
            <span className="badge-dot" />
            {dish.type === 'veg' ? 'VEG' : 'NON-VEG'}
          </span>
          <span className="dish-card__num">0{index + 1}</span>
        </div>

        <h3 className="dish-card__name">{dish.name}</h3>
        <p className="dish-card__desc">{dish.description}</p>

        <div className="dish-card__profile">
          {dish.profile.map((tag) => (
            <span key={tag} className="dish-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SignatureDishes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section className="dishes" id="menu" ref={ref}>
      <div className="dishes__header container">
        <div className="dishes__header-left">
          <motion.div
            className="label-gold"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Signature Dishes
          </motion.div>
          <motion.h2
            className="dishes__heading display-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            CURATED FOR<br />
            <em className="gold-text">EVERY PALATE.</em>
          </motion.h2>
        </div>
        <motion.div
          className="dishes__header-right"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="dishes__view-all" onClick={() => scroll(1)}>VIEW FULL MENU &rarr;</span>
          <div className="dishes__arrows">
            <button className="dishes__arrow" onClick={() => scroll(-1)} aria-label="Previous dish">
              &larr;
            </button>
            <button className="dishes__arrow" onClick={() => scroll(1)} aria-label="Next dish">
              &rarr;
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll rail */}
      <div className="dishes__rail" ref={scrollRef}>
        {dishes.map((dish, i) => (
          <DishCard key={dish.id} dish={dish} index={i} />
        ))}
      </div>
    </section>
  );
}
