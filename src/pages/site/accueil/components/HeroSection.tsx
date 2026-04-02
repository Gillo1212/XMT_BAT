import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { val: '12+', label: "Ans d'expérience", icon: 'ri-time-line' },
  { val: '350+', label: 'Biens gérés', icon: 'ri-building-2-line' },
  { val: '1 200+', label: 'Clients satisfaits', icon: 'ri-user-heart-line' },
  { val: '85+', label: 'Projets livrés', icon: 'ri-hammer-line' },
];

const villes = ['Dakar', 'Rufisque', 'Thiès', 'Diamniadio', 'Saly'];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [activeVille, setActiveVille] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVille((v) => (v + 1) % villes.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image — ambiance Sénégal premium */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Breathtaking%20aerial%20view%20of%20Dakar%20Senegal%20coastline%20at%20golden%20hour%20dramatic%20sky%20vibrant%20colors%20modern%20real%20estate%20development%20luxury%20residential%20buildings%20along%20the%20Atlantic%20ocean%20palm%20trees%20golden%20light%20cinematic%20wide%20angle%20professional%20photography&width=1920&height=1080&seq=hero-xmt-senegal-v3&orientation=landscape')`,
          transform: visible ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 9s ease-out',
        }}
      />
      {/* Deep gradient overlay — lisibilité maximale */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(8,20,40,0.93) 0%, rgba(15,40,75,0.82) 50%, rgba(10,30,60,0.55) 100%)',
        }}
      />
      {/* Fade bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, rgba(5,15,30,0.6), transparent)' }} />

      {/* Fine ligne dorée en bas du hero */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(243,156,18,0.25)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Colonne gauche */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Pill localisation */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(243,156,18,0.15)',
              border: '1px solid rgba(243,156,18,0.3)',
            }}
          >
            <i className="ri-map-pin-2-fill text-xs" style={{ color: '#F39C12' }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
            >
              Rufisque · Dakar · Sénégal
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-6"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
            }}
          >
            Votre expert
            <br />
            <span style={{ color: '#F39C12' }}>immobilier</span>
            <br />
            au Sénégal
          </h1>

          <p
            className="mb-10 text-base leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontFamily: 'Open Sans, sans-serif',
              maxWidth: '460px',
            }}
          >
            Achat, vente, location, travaux de construction et gestion de patrimoine. XMT GROUPE vous accompagne depuis 2013 avec rigueur et proximité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              to="/site/biens"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 whitespace-nowrap cursor-pointer"
              style={{
                background: '#F39C12',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
              }}
            >
              <i className="ri-building-2-line" />
              Voir nos biens
              <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/site/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.25)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <i className="ri-calendar-2-line" />
              Prendre rendez-vous
            </Link>
          </div>

          {/* Contacts rapides */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+221771234567"
              className="flex items-center gap-2 transition-all cursor-pointer text-sm hover:text-white"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Open Sans, sans-serif' }}
            >
              <i className="ri-phone-fill" style={{ color: 'rgba(255,255,255,0.4)' }} />
              +221 77 123 45 67
            </a>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />
            <a
              href="https://wa.me/221771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all cursor-pointer text-sm hover:text-white"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Open Sans, sans-serif' }}
            >
              <i className="ri-whatsapp-line" style={{ color: '#25D366' }} />
              WhatsApp direct
            </a>
          </div>
        </div>

        {/* Colonne droite — Stats cards */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s',
          }}
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {stats.map((s) => (
              <div
                key={s.val}
                className="p-5 rounded-xl flex flex-col gap-2"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <i className={`${s.icon} text-lg`} style={{ color: 'rgba(255,255,255,0.4)' }} />
                <div
                  className="text-3xl font-black"
                  style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}
                >
                  {s.val}
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Open Sans, sans-serif' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Zones d'intervention */}
          <div
            className="rounded-xl p-4"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Poppins, sans-serif' }}>
              Zones d'intervention
            </p>
            <div className="flex flex-wrap gap-2">
              {villes.map((v, i) => (
                <span
                  key={v}
                  className="text-xs px-3 py-1.5 rounded-full transition-all duration-500"
                  style={{
                    background: activeVille === i ? 'rgba(243,156,18,0.25)' : 'rgba(255,255,255,0.08)',
                    color: activeVille === i ? '#F39C12' : 'rgba(255,255,255,0.6)',
                    border: `1px solid ${activeVille === i ? 'rgba(243,156,18,0.4)' : 'rgba(255,255,255,0.1)'}`,
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: activeVille === i ? 700 : 400,
                  }}
                >
                  {v}
                </span>
              ))}
              <span
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(46,134,193,0.12)',
                  color: 'rgba(255,255,255,0.45)',
                  border: '1px solid rgba(46,134,193,0.2)',
                  fontFamily: 'Open Sans, sans-serif',
                }}
              >
                + tout le Sénégal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.5)',
              animation: 'bounce 2s infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
