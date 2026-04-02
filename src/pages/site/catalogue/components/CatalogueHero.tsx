import { mockCatalogueInfo } from '../../../../mocks/catalogue';

interface CatalogueHeroProps {
  onDownload: () => void;
  totalItems: number;
  totalRubriques: number;
}

export default function CatalogueHero({ onDownload, totalItems, totalRubriques }: CatalogueHeroProps) {
  return (
    <div
      className="relative pt-28 pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B1929 0%, #1F4E79 60%, #2E7D32 100%)',
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(243,156,18,0.15)', border: '1px solid rgba(243,156,18,0.3)' }}>
              <i className="ri-book-open-line text-sm" style={{ color: '#F39C12' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
                Catalogue officiel {mockCatalogueInfo.annee}
              </span>
            </div>

            <h1
              className="text-4xl lg:text-5xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {mockCatalogueInfo.titre}
            </h1>
            <p className="text-xl font-medium mb-4" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Open Sans, sans-serif' }}>
              {mockCatalogueInfo.sousTitre}
            </p>
            <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Open Sans, sans-serif' }}>
              {mockCatalogueInfo.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-8">
              {[
                { val: `${totalRubriques}`, label: 'Rubriques' },
                { val: `${totalItems}+`, label: 'Prestations' },
                { val: '12+', label: 'Années d\'exp.' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.val}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Open Sans, sans-serif' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button
              onClick={onDownload}
              className="flex items-center gap-3 px-7 py-4 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #F39C12, #E67E22)',
                boxShadow: '0 8px 24px rgba(243,156,18,0.35)',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <i className="ri-file-pdf-line text-lg" />
              Télécharger le catalogue PDF
            </button>
            <a
              href="/site/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-90 cursor-pointer whitespace-nowrap"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontFamily: 'Open Sans, sans-serif',
              }}
            >
              <i className="ri-phone-line" />
              Demander un devis gratuit
            </a>
            <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Open Sans, sans-serif' }}>
              {mockCatalogueInfo.contact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
