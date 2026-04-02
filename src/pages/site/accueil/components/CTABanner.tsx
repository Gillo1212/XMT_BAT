import { Link } from 'react-router-dom';
import { mockZonesIntervention } from '../../../../mocks/site';

export default function CTABanner() {
  return (
    <>
      {/* Section zones d'intervention */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.28em] mb-4"
                style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
              >
                Notre présence
              </p>
              <h2
                className="font-black mb-5"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#0D1F33',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  lineHeight: 1.12,
                }}
              >
                Présents dans tout
                <br />
                le Sénégal
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: '#6B7A8D', fontFamily: 'Open Sans, sans-serif', maxWidth: '400px' }}
              >
                Basés à Rufisque, XMT GROUPE opère dans les principales villes et zones à fort potentiel immobilier avec une connaissance approfondie du marché local.
              </p>
              <Link
                to="/site/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer whitespace-nowrap transition-all hover:opacity-90"
                style={{ background: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="ri-map-pin-2-line" />
                Contacter notre équipe
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {mockZonesIntervention.map((zone, i) => (
                <span
                  key={zone}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium cursor-default transition-all hover:scale-105"
                  style={{
                    background: i === 0 ? '#1F4E79' : i === 1 ? '#F39C12' : '#F4F6F8',
                    color: i < 2 ? '#FFFFFF' : '#4A5568',
                    fontFamily: 'Open Sans, sans-serif',
                    boxShadow: i < 2 ? 'none' : '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <i
                    className="ri-map-pin-fill text-xs"
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.7)' : i === 1 ? 'rgba(255,255,255,0.7)' : '#CBD5E0' }}
                  />
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden py-32">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Panoramic%20aerial%20view%20Dakar%20Senegal%20skyline%20sunset%20Atlantic%20ocean%20golden%20hour%20modern%20buildings%20construction%20development%20vibrant%20city%20breathtaking%20cinematic%20photography%20wide%20angle&width=1920&height=900&seq=cta-xmt-v4&orientation=landscape')`,
          }}
        />
        {/* Overlay riche */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(8,20,45,0.94) 0%, rgba(15,45,90,0.90) 55%, rgba(20,60,110,0.80) 100%)',
          }}
        />

        {/* Deco circle */}
        <div
          className="absolute top-0 right-20 w-80 h-80 rounded-full -translate-y-1/2"
          style={{ background: 'rgba(243,156,18,0.06)', border: '1px solid rgba(243,156,18,0.12)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.28em] mb-5"
            style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
          >
            Prêt à démarrer ?
          </p>
          <h2
            className="text-white font-black mb-5"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              lineHeight: 1.1,
            }}
          >
            Confiez votre projet
            <br />à nos experts
          </h2>
          <p
            className="mb-10 text-base leading-relaxed mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Open Sans, sans-serif', maxWidth: '480px' }}
          >
            Vente, location, travaux ou gestion de patrimoine — notre équipe vous accompagne à chaque étape avec sérieux et réactivité.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/site/contact"
              className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 whitespace-nowrap cursor-pointer"
              style={{ background: '#F39C12', fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}
            >
              <i className="ri-calendar-check-line mr-2" />
              Demander un rendez-vous
            </Link>
            <a
              href="tel:+221771234567"
              className="px-8 py-4 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.2)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <i className="ri-phone-line mr-2" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
