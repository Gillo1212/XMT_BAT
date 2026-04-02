import { Link } from 'react-router-dom';
import { mockBiens } from '../../../../mocks/biens';

const statutConfig: Record<string, { bg: string; color: string; label: string }> = {
  Disponible: { bg: 'rgba(16,185,129,0.15)', color: '#059669', label: 'Disponible' },
  'En vente': { bg: 'rgba(31,78,121,0.12)', color: '#1F4E79', label: 'En vente' },
  Loué: { bg: 'rgba(245,158,11,0.15)', color: '#B45309', label: 'Loué' },
  Vendu: { bg: 'rgba(100,116,139,0.12)', color: '#64748B', label: 'Vendu' },
};

const bienImages: Record<string, string> = {
  'BIEN-001': 'https://readdy.ai/api/search-image?query=Luxury%20residential%20villa%20with%20swimming%20pool%20and%20tropical%20garden%20Dakar%20Senegal%20modern%20architecture%20white%20facade%20palm%20trees%20blue%20sky%20golden%20light%20professional%20real%20estate%20photography%20wide%20angle&width=700&height=480&seq=bien-001-v4&orientation=landscape',
  'BIEN-002': 'https://readdy.ai/api/search-image?query=Modern%20apartment%20building%20exterior%20Dakar%20Plateau%20district%20urban%20residential%20contemporary%20glass%20facade%20balconies%20blue%20sky%20bright%20sunny%20day%20clean%20architecture%20professional%20photography&width=700&height=480&seq=bien-002-v4&orientation=landscape',
  'BIEN-005': 'https://readdy.ai/api/search-image?query=Elegant%20villa%20Sacre%20Coeur%20Dakar%20Senegal%20lush%20garden%20terrace%20modern%20architecture%20neutral%20tones%20professional%20real%20estate%20photo%20golden%20hour%20warm%20light%20inviting%20entrance&width=700&height=480&seq=bien-005-v4&orientation=landscape',
  'BIEN-009': 'https://readdy.ai/api/search-image?query=Modern%20office%20space%20interior%20Dakar%20Senegal%20corporate%20open%20plan%20bright%20white%20walls%20natural%20light%20contemporary%20professional%20workspace%20clean%20minimal%20design%20real%20estate%20commercial%20property&width=700&height=480&seq=bien-009-v4&orientation=landscape',
};

export default function BiensVedette() {
  const biens = mockBiens.filter((b) => ['BIEN-001', 'BIEN-002', 'BIEN-005', 'BIEN-009'].includes(b.id));

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-5">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.28em] mb-4"
              style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
            >
              Notre catalogue
            </p>
            <h2
              className="font-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#0D1F33',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
              }}
            >
              Biens en vedette
            </h2>
          </div>
          <Link
            to="/site/biens"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 whitespace-nowrap cursor-pointer"
            style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}
          >
            Voir tous les biens <i className="ri-arrow-right-line" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-product-shop>
          {biens.map((b, i) => {
            const stat = statutConfig[b.statut] || statutConfig['Disponible'];
            return (
              <div
                key={b.id}
                className="group rounded-2xl overflow-hidden bg-white flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: '200px' }}>
                  <img
                    src={bienImages[b.id] || 'https://readdy.ai/api/search-image?query=Real%20estate%20property%20modern%20building%20Dakar%20Senegal%20professional%20photo%20blue%20sky&width=600&height=400&seq=bien-default-v4&orientation=landscape'}
                    alt={b.reference}
                    className="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-106"
                  />
                  {/* Gradient bas */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,15,30,0.45) 0%, transparent 55%)' }} />
                  {/* Badge statut */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.92)', color: stat.color, backdropFilter: 'blur(6px)' }}
                    >
                      {stat.label}
                    </span>
                  </div>
                  {/* Badge vedette */}
                  {i === 0 && (
                    <div className="absolute top-3 right-3">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                        style={{ background: '#F39C12' }}
                      >
                        ★ Vedette
                      </span>
                    </div>
                  )}
                  {/* Type bas gauche */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="text-xs font-medium px-2 py-1 rounded-lg text-white"
                      style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      {b.type}
                    </span>
                  </div>
                </div>

                {/* Infos */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs flex items-center gap-1 mb-2.5 font-medium" style={{ color: '#2E86C1', fontFamily: 'Open Sans, sans-serif' }}>
                    <i className="ri-map-pin-line text-xs" />
                    {b.adresse.split(',')[0]}
                  </p>

                  <div className="flex items-center gap-3 text-xs mb-4" style={{ color: '#9AA5B4' }}>
                    {b.surface > 0 && (
                      <span className="flex items-center gap-1">
                        <i className="ri-layout-line" style={{ color: '#CBD5E0' }} />
                        {b.surface} m²
                      </span>
                    )}
                    {b.chambres > 0 && (
                      <span className="flex items-center gap-1">
                        <i className="ri-hotel-bed-line" style={{ color: '#CBD5E0' }} />
                        {b.chambres} ch.
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                    <div>
                      <div
                        className="text-base font-black"
                        style={{ color: '#0D1F33', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {b.prix.toLocaleString('fr-FR')}
                      </div>
                      <div className="text-xs" style={{ color: '#9AA5B4' }}>{b.prixType}</div>
                    </div>
                    <Link
                      to="/site/contact"
                      className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer whitespace-nowrap transition-all hover:opacity-85"
                      style={{ background: '#1F4E79', color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}
                    >
                      Voir <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/site/biens"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold cursor-pointer whitespace-nowrap"
            style={{ background: '#1F4E79', color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}
          >
            Voir tous les biens <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
