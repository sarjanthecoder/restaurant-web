import './Footer.css';

const navLinks = ['Story', 'Menu', 'Chef', 'Experience', 'Ingredients', 'Gallery'];
const infoLinks = ['Private Dining', 'Events', 'Gift Cards', 'Careers', 'Press'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">EMBER</span>
            <span className="footer__logo-sep"> &amp; </span>
            <span className="footer__logo-sub">OAK</span>
          </div>
          <p className="footer__tagline">
            A modern expression of fire,<br />
            flavor, craft and the finest<br />
            ingredients. Since 2014.
          </p>
          <div className="footer__socials">
            {['IG', 'FB', 'TW', 'YT'].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>{s}</a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__col">
          <h3 className="footer__col-title">Navigation</h3>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l}>
                <button onClick={() => scrollTo(l)} className="footer__link">{l}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="footer__col">
          <h3 className="footer__col-title">Information</h3>
          <ul className="footer__links">
            {infoLinks.map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__col-title">Contact</h3>
          <div className="footer__contact">
            <p>12 Culinary Lane, Mayfair<br />London, W1K 6AF</p>
            <a href="tel:+441234567890">+44 (0) 123 456 7890</a>
            <a href="mailto:hello@emberandoak.com">hello@emberandoak.com</a>
          </div>
        </div>

        {/* Hours */}
        <div className="footer__col">
          <h3 className="footer__col-title">Hours</h3>
          <div className="footer__hours">
            <div className="footer__hours-row">
              <span>Mon — Thu</span>
              <span>5PM — 11PM</span>
            </div>
            <div className="footer__hours-row">
              <span>Fri — Sat</span>
              <span>5PM — 12AM</span>
            </div>
            <div className="footer__hours-row footer__hours-row--closed">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
          <button
            className="btn-primary footer__reserve-cta"
            onClick={() => scrollTo('reservation')}
          >
            Reserve a Table
          </button>
        </div>
      </div>

      <div className="footer__bottom container">
        <span className="footer__copy">© 2026 Ember &amp; Oak. All rights reserved.</span>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
