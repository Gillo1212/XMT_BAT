import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL = 'https://storage.readdy-site.link/project_files/23941d3d-9a18-41cf-ae5d-fa1b92b52dad/33e904ea-19a6-45dc-be29-6d2cb3be6b79_WhatsApp-Image-2026-03-25-at-08.57.54.jpeg?v=eef4cad0d00bcc103d78cc3a6f3c4bec';

const navLinks = [
  { label: 'Accueil', path: '/site' },
  { label: 'Immobilier', path: '/site/immobilier' },
  { label: 'Nos Biens', path: '/site/biens' },
  { label: 'Travaux & Technique', path: '/site/travaux' },
  { label: 'Catalogue', path: '/site/catalogue' },
  { label: 'À propos', path: '/site/a-propos' },
  { label: 'Actualités', path: '/site/actualites' },
];

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between" style={{ height: '76px' }}>

        {/* Logo — grand et propre, sans bordure */}
        <Link to="/site" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
          <div
            className="overflow-hidden flex-shrink-0"
            style={{ width: '52px', height: '52px', borderRadius: '10px' }}
          >
            <img
              src={LOGO_URL}
              alt="XMT GROUPE"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="font-black text-base tracking-widest"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: scrolled ? '#1F4E79' : '#FFFFFF',
                letterSpacing: '0.18em',
              }}
            >
              XMT GROUPE
            </span>
            <span
              className="text-xs font-medium tracking-wider"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                color: scrolled ? '#7F8C9A' : 'rgba(255,255,255,0.65)',
                letterSpacing: '0.14em',
                fontSize: '10px',
              }}
            >
              
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                color: isActive(link.path)
                  ? (scrolled ? '#1F4E79' : '#FFFFFF')
                  : (scrolled ? '#4A5568' : 'rgba(255,255,255,0.8)'),
                fontWeight: isActive(link.path) ? 700 : 500,
                background: isActive(link.path) && scrolled ? 'rgba(31,78,121,0.07)' : 'transparent',
              }}
            >
              {link.label}
              {isActive(link.path) && (
                <span
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: scrolled ? '#1F4E79' : '#FFFFFF' }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/221771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap"
            style={{
              color: scrolled ? '#2C3E50' : 'rgba(255,255,255,0.85)',
              background: scrolled ? 'rgba(37,211,102,0.07)' : 'rgba(255,255,255,0.1)',
              fontFamily: 'Open Sans, sans-serif',
            }}
          >
            <i className="ri-whatsapp-line text-lg" style={{ color: '#25D366' }} />
            WhatsApp
          </a>
          <Link
            to="/site/contact"
            className="px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 whitespace-nowrap cursor-pointer"
            style={{
              background: '#F39C12',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer"
          style={{ background: scrolled ? 'rgba(31,78,121,0.07)' : 'rgba(255,255,255,0.15)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i
            className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-xl`}
            style={{ color: scrolled ? '#1F4E79' : '#FFFFFF' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: 'rgba(255,255,255,0.99)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}
        >
          <div className="px-5 py-5 flex flex-col gap-1 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium cursor-pointer flex items-center gap-2 transition-all"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  color: isActive(link.path) ? '#1F4E79' : '#4A5568',
                  background: isActive(link.path) ? 'rgba(31,78,121,0.07)' : 'transparent',
                  fontWeight: isActive(link.path) ? 700 : 500,
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="https://wa.me/221771234567"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold cursor-pointer"
                style={{ background: 'rgba(37,211,102,0.08)', color: '#1a8a3a', fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="ri-whatsapp-line" /> WhatsApp
              </a>
              <Link
                to="/site/contact"
                onClick={() => setMobileOpen(false)}
                className="py-2.5 rounded-lg text-sm font-bold text-white text-center cursor-pointer"
                style={{ background: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
