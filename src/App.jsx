import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import SignatureDishes from './components/SignatureDishes';
import ChefSection from './components/ChefSection';
import IngredientsSection from './components/IngredientsSection';
import QualitySection from './components/QualitySection';
import VegNonVegSection from './components/VegNonVegSection';
import TasteExperience from './components/TasteExperience';
import FoodGallery from './components/FoodGallery';
import RestaurantExperience from './components/RestaurantExperience';
import Testimonials from './components/Testimonials';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';

const themes = ['champagne', 'pure-white', 'noir'];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ember_theme') || 'champagne';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ember_theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      const idx = themes.indexOf(prev);
      const nextIdx = (idx + 1) % themes.length;
      return themes[nextIdx];
    });
  };

  return (
    <div className="app-root">
      <Navbar theme={theme} cycleTheme={cycleTheme} />
      <main>
        <Hero />
        <StorySection />
        <SignatureDishes />
        <ChefSection />
        <IngredientsSection />
        <QualitySection />
        <VegNonVegSection />
        <TasteExperience />
        <FoodGallery />
        <RestaurantExperience />
        <Testimonials />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
