import { useState } from 'react';
import SiteLayout from '../../../components/site/SiteLayout';
import { mockArticles } from '../../../mocks/site';

const categories = ['Tous', 'Vente', 'Marché', 'Travaux', 'Gestion', 'Investissement', 'Réalisations'];

export default function ActualitesPage() {
  const [selectedCat, setSelectedCat] = useState('Tous');
  const filtered = selectedCat === 'Tous' ? mockArticles : mockArticles.filter((a) => a.categorie === selectedCat);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1C32 0%, #1F4E79 100%)' }}>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full translate-y-1/3 -translate-x-1/4" style={{ background: 'rgba(46,134,193,0.1)', border: '1px solid rgba(46,134,193,0.15)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
              Blog & Conseils
            </span>
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
          </div>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.05 }}>
            Actualités & Conseils
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Restez informé des tendances immobilières, conseils pratiques et réalisations XMT GROUPE.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ background: '#F4F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Catégories */}
          <div className="flex flex-wrap gap-2 mb-10 bg-white p-4 rounded-xl" style={{ border: '1px solid rgba(31,78,121,0.08)' }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className="px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap transition-all"
                style={{
                  background: selectedCat === c ? '#1F4E79' : '#F4F6F7',
                  color: selectedCat === c ? '#FFF' : '#2C3E50',
                  fontFamily: 'Open Sans, sans-serif',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Article à la une */}
          {featured && (
            <div className="bg-white rounded-xl overflow-hidden mb-8 grid grid-cols-1 lg:grid-cols-2 group" style={{ border: '1px solid rgba(31,78,121,0.08)', borderTop: '4px solid #F39C12' }}>
              <div className="h-72 lg:h-auto overflow-hidden relative">
                <img src={featured.image} alt={featured.titre} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1))' }} />
              </div>
              <div className="p-9 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-lg" style={{ background: 'rgba(243,156,18,0.12)', color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>{featured.categorie}</span>
                  <span className="text-xs" style={{ color: '#95A5A6', fontFamily: 'Open Sans, sans-serif' }}>
                    <i className="ri-star-fill mr-1" style={{ color: '#F39C12' }} />À la une
                  </span>
                </div>
                <h2 className="text-2xl font-black mb-3" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif', lineHeight: 1.2 }}>{featured.titre}</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{featured.extrait}</p>
                <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: 'rgba(31,78,121,0.08)' }}>
                  <span className="text-xs" style={{ color: '#95A5A6', fontFamily: 'Open Sans, sans-serif' }}>
                    {new Date(featured.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} · {featured.auteur}
                  </span>
                  <button className="flex items-center gap-2 text-sm font-bold cursor-pointer whitespace-nowrap" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
                    Lire l'article <i className="ri-arrow-right-line" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Articles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <div key={a.id} className="bg-white rounded-xl overflow-hidden flex flex-col cursor-pointer group transition-transform hover:-translate-y-1" style={{ border: '1px solid rgba(31,78,121,0.08)', borderTop: `3px solid ${i % 3 === 0 ? '#1F4E79' : i % 3 === 1 ? '#2E86C1' : '#F39C12'}` }}>
                <div className="h-48 overflow-hidden flex-shrink-0 relative">
                  <img src={a.image} alt={a.titre} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,28,50,0.4), transparent)' }} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg mb-3 inline-block" style={{ background: 'rgba(31,78,121,0.07)', color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{a.categorie}</span>
                  <h3 className="font-black text-sm mb-2 flex-1 leading-snug" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{a.titre}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{a.extrait.substring(0, 90)}...</p>
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'rgba(31,78,121,0.08)' }}>
                    <span className="text-xs" style={{ color: '#95A5A6', fontFamily: 'Open Sans, sans-serif' }}>{new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                    <button className="text-xs font-bold cursor-pointer whitespace-nowrap flex items-center gap-1" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
                      Lire <i className="ri-arrow-right-line" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl" style={{ border: '1px solid rgba(31,78,121,0.08)' }}>
              <i className="ri-article-line text-5xl block mb-4" style={{ color: 'rgba(31,78,121,0.2)' }} />
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>Aucun article dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
