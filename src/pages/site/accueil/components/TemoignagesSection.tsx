import { mockTemoignages } from '../../../../mocks/site';

const trustBadges = [
  { icon: 'ri-shield-check-line', text: 'Transactions sécurisées', sub: '100% conformes' },
  { icon: 'ri-time-line', text: 'Réponse sous 24h', sub: 'Disponibles 6j/7' },
  { icon: 'ri-map-pin-2-line', text: 'Expert marché local', sub: 'Rufisque & Dakar' },
  { icon: 'ri-award-line', text: '12 ans d\'expérience', sub: 'Depuis 2013' },
];

export default function TemoignagesSection() {
  return (
    <section className="py-28 overflow-hidden" style={{ background: '#FAFBFC' }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-bold uppercase tracking-[0.28em] mb-4"
            style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
          >
            Témoignages clients
          </p>
          <h2
            className="font-black mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#0D1F33',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              lineHeight: 1.1,
            }}
          >
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <i key={s} className="ri-star-fill text-sm" style={{ color: '#F39C12' }} />
            ))}
            <span className="text-sm font-medium ml-2" style={{ color: '#6B7A8D', fontFamily: 'Open Sans, sans-serif' }}>
              5/5 · 1 200+ clients satisfaits
            </span>
          </div>
        </div>

        {/* Cards témoignages — clean, sans bordure colorée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {mockTemoignages.slice(0, 3).map((t, i) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)',
              }}
            >
              {/* Guillemet décoratif */}
              <div
                className="absolute top-5 right-6 text-7xl font-black leading-none pointer-events-none select-none"
                style={{
                  color: 'rgba(0,0,0,0.04)',
                  fontFamily: 'Georgia, serif',
                  fontSize: '80px',
                }}
              >
                &ldquo;
              </div>

              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.note }).map((_, idx) => (
                  <i key={idx} className="ri-star-fill text-xs" style={{ color: '#F39C12' }} />
                ))}
              </div>

              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: '#4A5568', fontFamily: 'Open Sans, sans-serif' }}
              >
                &ldquo;{t.texte}&rdquo;
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #F1F5F9' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{
                    background: i === 0 ? '#1F4E79' : i === 1 ? '#2E86C1' : '#F39C12',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {t.initiales}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#0D1F33', fontFamily: 'Poppins, sans-serif' }}>
                    {t.nom}
                  </p>
                  <p className="text-xs" style={{ color: '#9AA5B4', fontFamily: 'Open Sans, sans-serif' }}>
                    {t.role} · {t.ville}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-3.5 p-4 bg-white rounded-2xl"
              style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(31,78,121,0.06)' }}
              >
                <i className={`${b.icon} text-base`} style={{ color: '#1F4E79' }} />
              </div>
              <div>
                <p className="text-xs font-bold leading-tight" style={{ color: '#0D1F33', fontFamily: 'Poppins, sans-serif' }}>
                  {b.text}
                </p>
                <p className="text-xs" style={{ color: '#9AA5B4', fontFamily: 'Open Sans, sans-serif' }}>
                  {b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
