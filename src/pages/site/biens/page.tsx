import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../../../components/site/SiteLayout';
import { mockBiens } from '../../../mocks/biens';

const types = ['Tous', 'Villa', 'Appartement', 'Terrain', 'Local commercial', 'Bureau', 'Immeuble'];
const statuts = ['Tous', 'Disponible', 'En vente', 'Loué', 'Vendu'];
const bienImages: Record<string, string> = {
  'BIEN-001': 'https://readdy.ai/api/search-image?query=Luxury%20villa%20swimming%20pool%20modern%20architecture%20Dakar%20Senegal%20beautiful%20tropical%20garden%20blue%20sky%20high%20end%20residential%20real%20estate%20photography%20white%20facade%20spacious&width=600&height=400&seq=biens-001&orientation=landscape',
  'BIEN-002': 'https://readdy.ai/api/search-image?query=Modern%20apartment%20building%20exterior%20Plateau%20Dakar%20Senegal%20urban%20residential%20contemporary%20architecture%20blue%20sky%20real%20estate%20clean%20balconies%20professional%20photo&width=600&height=400&seq=biens-002&orientation=landscape',
  'BIEN-003': 'https://readdy.ai/api/search-image?query=Empty%20building%20land%20plot%20Diamniadio%20Senegal%20residential%20zone%20clear%20sky%20flat%20ground%20urban%20development%20opportunity%20investment%20professional%20photography&width=600&height=400&seq=biens-003&orientation=landscape',
  'BIEN-004': 'https://readdy.ai/api/search-image?query=Modern%20studio%20apartment%20interior%20Mermoz%20Dakar%20Senegal%20furnished%20bright%20contemporary%20minimal%20design%20clean%20compact%20living%20space%20professional%20photography&width=600&height=400&seq=biens-004&orientation=landscape',
  'BIEN-005': 'https://readdy.ai/api/search-image?query=Elegant%20villa%20garden%20Sacr%C3%A9%20Coeur%20Dakar%20Senegal%20arboretum%20trees%20modern%20architecture%20blue%20sky%20high%20end%20residential%20entrance%20inviting&width=600&height=400&seq=biens-005&orientation=landscape',
  'BIEN-006': 'https://readdy.ai/api/search-image?query=Commercial%20retail%20space%20avenue%20Almadies%20Dakar%20Senegal%20storefront%20glass%20facade%20modern%20commercial%20property%20urban%20location%20professional%20exterior%20photo&width=600&height=400&seq=biens-006&orientation=landscape',
  'BIEN-007': 'https://readdy.ai/api/search-image?query=Residential%20apartment%20building%20Pikine%20Dakar%20Senegal%20multistory%20R%20plus%203%20modern%20facade%20urban%20real%20estate%20investment%20clean%20architecture&width=600&height=400&seq=biens-007&orientation=landscape',
  'BIEN-008': 'https://readdy.ai/api/search-image?query=Industrial%20land%20plot%20Thies%20Senegal%20large%20terrain%20industrial%20zone%20bituminous%20road%20development%20opportunity%20wide%20area%20clear%20sky&width=600&height=400&seq=biens-008&orientation=landscape',
  'BIEN-009': 'https://readdy.ai/api/search-image?query=Modern%20office%20interior%20Point%20E%20Dakar%20Senegal%20corporate%20workspace%20air%20conditioned%20fiber%20optic%20contemporary%20design%20professional%20clean%20meeting%20room&width=600&height=400&seq=biens-009&orientation=landscape',
  'BIEN-010': 'https://readdy.ai/api/search-image?query=Grand%20luxury%20villa%20Ouest%20Foire%20Dakar%20Senegal%20large%20high%20standing%20double%20salon%20swimming%20pool%20spacious%20garden%20modern%20architecture%20premium%20real%20estate&width=600&height=400&seq=biens-010&orientation=landscape',
  'BIEN-011': 'https://readdy.ai/api/search-image?query=Premium%20apartment%20terrace%20sea%20view%20Les%20Mamelles%20Dakar%20Senegal%20high%20floor%20balcony%20ocean%20view%20modern%20interior%20luxurious%20bright%20professional%20photo&width=600&height=400&seq=biens-011&orientation=landscape',
  'BIEN-012': 'https://readdy.ai/api/search-image?query=Rural%20agricultural%20land%20Sebikotane%20Senegal%20green%20nature%20large%20plot%20countryside%20development%20potential%20investment%20land%20wide%20view%20blue%20sky&width=600&height=400&seq=biens-012&orientation=landscape',
};
const statutStyle: Record<string, { bg: string; color: string }> = {
  Disponible: { bg: 'rgba(30,132,73,0.15)', color: '#1E8449' },
  'En vente': { bg: 'rgba(31,78,121,0.15)', color: '#1F4E79' },
  Loué: { bg: 'rgba(183,119,13,0.15)', color: '#B7770D' },
  Vendu: { bg: 'rgba(145,40,33,0.15)', color: '#922B21' },
};

export default function BiensPage() {
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedStatut, setSelectedStatut] = useState('Tous');
  const [search, setSearch] = useState('');

  const filtered = mockBiens.filter((b) => {
    const matchType = selectedType === 'Tous' || b.type === selectedType;
    const matchStatut = selectedStatut === 'Tous' || b.statut === selectedStatut;
    const matchSearch = !search || b.adresse.toLowerCase().includes(search.toLowerCase()) || b.type.toLowerCase().includes(search.toLowerCase());
    return matchType && matchStatut && matchSearch;
  });

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1C32 0%, #1F4E79 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3" style={{ background: 'rgba(46,134,193,0.1)', border: '1px solid rgba(46,134,193,0.2)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
              Catalogue immobilier
            </span>
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
          </div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.05 }}>
            Nos biens disponibles
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Villas, appartements, terrains, bureaux et locaux commerciaux — trouvez le bien qui correspond à votre projet.
          </p>
          {/* Search bar */}
          <div className="max-w-xl mx-auto flex bg-white rounded-xl overflow-hidden" style={{ border: '2px solid rgba(243,156,18,0.3)' }}>
            <input
              type="text"
              placeholder="Rechercher par quartier, type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-5 py-3.5 text-sm outline-none"
              style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}
            />
            <button className="px-6 py-3.5 text-white font-bold text-sm cursor-pointer whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #F39C12, #E67E22)' }}>
              <i className="ri-search-line text-base" />
            </button>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-14" style={{ background: '#F4F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="bg-white rounded-xl p-5 mb-8 flex flex-wrap gap-4 items-center" style={{ border: '1px solid rgba(31,78,121,0.08)' }}>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                  style={{
                    background: selectedType === t ? '#1F4E79' : '#F4F6F7',
                    color: selectedType === t ? '#FFF' : '#2C3E50',
                    fontFamily: 'Open Sans, sans-serif',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <div className="flex flex-wrap gap-2">
              {statuts.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStatut(s)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                  style={{
                    background: selectedStatut === s ? 'linear-gradient(135deg, #F39C12, #E67E22)' : '#F4F6F7',
                    color: selectedStatut === s ? '#FFF' : '#2C3E50',
                    fontFamily: 'Open Sans, sans-serif',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
            <span className="ml-auto text-sm font-bold" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>
              {filtered.length} bien{filtered.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
            {filtered.map((b) => {
              const stat = statutStyle[b.statut] || statutStyle['Disponible'];
              return (
                <div key={b.id} className="bg-white rounded-xl overflow-hidden flex flex-col group cursor-pointer transition-transform hover:-translate-y-1" style={{ border: '1px solid rgba(31,78,121,0.08)' }}>
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <img
                      src={bienImages[b.id] || 'https://readdy.ai/api/search-image?query=Real%20estate%20property%20Senegal%20modern%20building%20professional%20photo%20blue%20sky%20clean%20architecture%20residential&width=600&height=400&seq=bien-fallback&orientation=landscape'}
                      alt={b.reference}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,28,50,0.5) 0%, transparent 60%)' }} />
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm" style={{ background: stat.bg, color: stat.color }}>{b.statut}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: 'rgba(31,78,121,0.85)', backdropFilter: 'blur(4px)' }}>{b.type}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs flex items-center gap-1 mb-2" style={{ color: '#2E86C1', fontFamily: 'Open Sans, sans-serif' }}>
                      <i className="ri-map-pin-line text-xs" />{b.adresse}
                    </p>
                    <p className="text-xs line-clamp-2 mb-3 flex-1" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{b.description}</p>
                    <div className="flex items-center gap-4 text-xs mb-4" style={{ color: '#95A5A6' }}>
                      {b.surface > 0 && <span><i className="ri-layout-line mr-1" style={{ color: '#1F4E79' }} />{b.surface} m²</span>}
                      {b.chambres > 0 && <span><i className="ri-hotel-bed-line mr-1" style={{ color: '#1F4E79' }} />{b.chambres} chambres</span>}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(31,78,121,0.08)' }}>
                      <div>
                        <div className="text-base font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{b.prix.toLocaleString('fr-FR')}</div>
                        <div className="text-xs" style={{ color: '#95A5A6' }}>{b.prixType}</div>
                      </div>
                      <Link to="/site/contact" className="px-4 py-2 rounded-lg text-xs font-bold text-white cursor-pointer whitespace-nowrap hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #F39C12, #E67E22)', fontFamily: 'Poppins, sans-serif' }}>
                        Planifier visite
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl" style={{ border: '1px solid rgba(31,78,121,0.08)' }}>
              <i className="ri-building-line text-5xl block mb-4" style={{ color: 'rgba(31,78,121,0.2)' }} />
              <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>Aucun bien ne correspond à votre recherche.</p>
              <button onClick={() => { setSelectedType('Tous'); setSelectedStatut('Tous'); setSearch(''); }} className="text-sm font-bold cursor-pointer whitespace-nowrap" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
