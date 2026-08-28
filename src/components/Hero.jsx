import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pills = [
  '🔥 Slow-Cooked Dum Charcoal',
  '🌿 Fresh Mint & Coriander Infused',
  '🍋 Zesty Lemon & Saffron Glaze',
  '⭐ Royal Mughal Heritage Recipe'
];

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imgX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);
  const springX = useSpring(imgX, { stiffness: 50, damping: 18 });
  const springY = useSpring(imgY, { stiffness: 50, damping: 18 });

  const leafX = useTransform(mouseX, [-0.5, 0.5], [14, -14]);
  const leafY = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const leafSpringX = useSpring(leafX, { stiffness: 45, damping: 16 });
  const leafSpringY = useSpring(leafY, { stiffness: 45, damping: 16 });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      mouseX.set((e.clientX - left - width / 2) / width);
      mouseY.set((e.clientY - top - height / 2) / height);
    };
    el.addEventListener('mousemove', onMove, { passive: true });
    return () => el.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    <section className="fullscreen-hero" ref={containerRef} id="story">
      
      {/* Background Ambient Glows */}
      <div className="hero-aura hero-aura--top" />
      <div className="hero-aura hero-aura--bottom" />

      <div className="fullscreen-hero__inner container">
        
        {/* Left Editorial Storytelling */}
        <div className="fullscreen-hero__left">
          
          <motion.div
            className="fullscreen-hero__eyebrow-row"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-gold">Royal Heritage Cuisine</span>
            <div className="hero-michelin-pill">
              <span className="hero-michelin-star">★</span>
              <span>Signature Handi Dum Special</span>
            </div>
          </motion.div>

          <h1 className="fullscreen-hero__title display-heading">
            <span className="hero-title-line">ROYAL DUM</span>
            <span className="hero-title-line">CHICKEN LEG</span>
            <span className="hero-title-line gold-text">BIRIYANI.</span>
          </h1>

          <motion.p
            className="fullscreen-hero__desc"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
          >
            Succulent, tender slow-dum cooked chicken leg drumstick layered with aged saffron basmati rice, 
            caramelized crisp golden onions, farm-fresh garden mint, fragrant coriander sprigs, and pure ghee aromatics.
          </motion.p>

          {/* Feature Highlights Pills */}
          <motion.div
            className="fullscreen-hero__pills"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
          >
            {pills.map((pill, i) => (
              <span key={i} className="hero-feature-pill">{pill}</span>
            ))}
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            className="fullscreen-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.65}
          >
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Reserve a Table
            </button>
            <button className="btn-outline" onClick={() => scrollTo('menu')}>
              Explore Menu (12 Dishes)
            </button>
          </motion.div>

          {/* Quick Glass Stats */}
          <motion.div
            className="fullscreen-hero__stats"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.8}
          >
            <div className="hero-stat-box">
              <span className="hero-stat-num">4.9 ★</span>
              <span className="hero-stat-lbl">2,400+ Guest Reviews</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-box">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-lbl">Authentic Pure Ghee Dum</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-box">
              <span className="hero-stat-num">Dum Pot</span>
              <span className="hero-stat-lbl">Sealed Charcoal Handi</span>
            </div>
          </motion.div>

        </div>

        {/* Right Section — Circular Borderless Floating Dish with Live Steam & Floating Garnishes */}
        <div className="fullscreen-hero__right">
          
          {/* Radiant Amber Plate Aura */}
          <div className="hero-plate-halo" />

          {/* Floating Fresh Mint Leaves, Coriander Sprigs, Lemon Wedges */}
          <motion.div
            className="hero-floating-garnish garnish-lemon-1"
            style={{ x: leafSpringX, y: leafSpringY }}
          >
            <span className="garnish-emoji">🍋</span>
          </motion.div>

          <motion.div
            className="hero-floating-garnish garnish-mint-1"
            style={{ x: springX, y: springY }}
          >
            <span className="garnish-emoji">🌿</span>
          </motion.div>

          <motion.div
            className="hero-floating-garnish garnish-coriander-1"
            style={{ x: leafSpringX, y: leafSpringY }}
          >
            <span className="garnish-emoji">🌱</span>
          </motion.div>

          <motion.div
            className="hero-floating-garnish garnish-lemon-2"
            style={{ x: springX, y: springY }}
          >
            <span className="garnish-emoji">🍋</span>
          </motion.div>

          <motion.div
            className="hero-floating-garnish garnish-mint-2"
            style={{ x: leafSpringX, y: leafSpringY }}
          >
            <span className="garnish-emoji">🌿</span>
          </motion.div>

          {/* Borderless Floating Circular Dish Centerpiece */}
          <motion.div
            className="hero-dish-circular"
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Real-time Rising Live Steam Particles Overlay */}
            <div className="steam-container">
              <span className="steam-particle steam-1" />
              <span className="steam-particle steam-2" />
              <span className="steam-particle steam-3" />
              <span className="steam-particle steam-4" />
              <span className="steam-particle steam-5" />
            </div>

            <img
              src="/burger_dish_plate_1787825492925.jpg"
              alt="Royal Chicken Biryani Plate"
              className="hero-dish-circular-img"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
