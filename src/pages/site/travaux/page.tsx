import { Link } from 'react-router-dom';
import SiteLayout from '../../../components/site/SiteLayout';
import { mockServicesTravaux } from '../../../mocks/site';

const realisations = [
  { titre: 'Villa R+1 à Thiès', desc: 'Construction complète avec piscine et système électrique solaire. Livré en 8 mois.', cat: 'Construction', image: 'https://readdy.ai/api/search-image?query=Newly%20built%20modern%20villa%20R%20plus%201%20Thies%20Senegal%20construction%20complete%20exterior%20blue%20sky%20contemporary%20architecture%20solar%20panels%20swimming%20pool%20professional%20real%20estate%20photography&width=600&height=380&seq=real-villa-001&orientation=landscape' },
  { titre: 'Rénovation bureau Plateau', desc: 'Réfection complète de 200m² de bureaux : électricité, plomberie, faux plafond, peinture.', cat: 'Rénovation', image: 'https://readdy.ai/api/search-image?query=Office%20renovation%20interior%20Dakar%20Plateau%20Senegal%20modern%20workspace%20after%20renovation%20clean%20white%20walls%20contemporary%20lighting%20ceiling%20tiles%20professional%20corporate%20space&width=600&height=380&seq=real-bureau-002&orientation=landscape' },
  { titre: 'Immeuble R+3 Almadies', desc: '12 appartements livrés, installation réseau fibre et vidéosurveillance incluse.', cat: 'Construction', image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20apartment%20building%20R%20plus%203%20Almadies%20Dakar%20Senegal%20newly%20constructed%20contemporary%20facade%20balconies%20urban%20architecture%20professional%20photography%20blue%20sky&width=600&height=380&seq=real-immeuble-003&orientation=landscape' },
];

const process = [
  { num: '01', titre: 'Étude & devis', desc: 'Analyse de vos besoins, visite du site, devis détaillé sous 48h, sans engagement.', icon: 'ri-file-chart-line' },
  { num: '02', titre: 'Planification', desc: 'Planning d\'exécution précis, approvisionnement matériaux, coordination des équipes.', icon: 'ri-calendar-check-line' },
  { num: '03', titre: 'Exécution', desc: 'Chantier suivi quotidiennement par notre chef de chantier certifié, rapports photos.', icon: 'ri-hammer-line' },
  { num: '04', titre: 'Réception', desc: 'Livraison avec levée de réserves, garanties contractuelles et service après-vente.', icon: 'ri-medal-line' },
];

export default function TravauxPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20construction%20site%20Dakar%20Senegal%20modern%20building%20under%20construction%20workers%20with%20safety%20equipment%20hard%20hats%20scaffolding%20blue%20sky%20concrete%20structure%20professional%20BTP%20photography&width=1920&height=700&seq=hero-travaux-xmt&orientation=landscape')` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,28,55,0.92) 0%, rgba(31,78,121,0.80) 100%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
              Pôle BTP — XMT BAT
            </span>
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.05 }}>
            Travaux &<br />Technique
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Construction, rénovation, plomberie, électricité, réseau — notre équipe de techniciens qualifiés réalise vos projets dans le respect des délais et de votre budget.
          </p>
          <Link to="/site/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-white cursor-pointer whitespace-nowrap hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #F39C12, #E67E22)', fontFamily: 'Poppins, sans-serif' }}>
            <i className="ri-file-list-3-line text-lg" /> Demander un devis gratuit
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10" style={{ background: '#F39C12' }} />
                <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Nos prestations</p>
              </div>
              <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>Ce que nous réalisons</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServicesTravaux.map((s, i) => (
              <div
                key={s.titre}
                className="p-7 rounded-xl transition-transform hover:-translate-y-1 flex flex-col gap-4"
                style={{ background: '#F4F6F7', borderTop: `3px solid ${i % 2 === 0 ? '#1F4E79' : i % 3 === 1 ? '#2E86C1' : '#F39C12'}` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#EBF5FB' }}>
                  <i className={`${s.icone} text-2xl`} style={{ color: '#1F4E79' }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{s.titre}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: '#F4F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Notre méthode</p>
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
            </div>
            <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>De la demande à la livraison</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.num} className="bg-white rounded-xl p-7 text-center relative">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: i === 0 ? 'linear-gradient(135deg, #F39C12, #E67E22)' : 'linear-gradient(135deg, #1F4E79, #2E86C1)' }}
                >
                  <i className={`${p.icon} text-xl text-white`} />
                </div>
                <div className="text-4xl font-black mb-2" style={{ color: 'rgba(31,78,121,0.08)', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>{p.num}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{p.titre}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Nos chantiers</p>
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
            </div>
            <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>Quelques réalisations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realisations.map((r) => (
              <div key={r.titre} className="rounded-xl overflow-hidden bg-white group" style={{ border: '1px solid rgba(31,78,121,0.08)' }}>
                <div className="h-52 overflow-hidden relative">
                  <img src={r.image} alt={r.titre} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,28,55,0.5), transparent)' }} />
                  <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(31,78,121,0.85)', color: 'white', backdropFilter: 'blur(4px)' }}>{r.cat}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{r.titre}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Devis */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1C32, #1F4E79)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full -translate-y-1/2 translate-x-1/3" style={{ background: 'rgba(243,156,18,0.08)', border: '1px solid rgba(243,156,18,0.15)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Un projet de construction ou de rénovation ?</h2>
          <p className="text-white/70 mb-10 max-w-lg mx-auto text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>Décrivez votre projet et recevez un devis détaillé et personnalisé sous 48h, sans frais ni engagement.</p>
          <Link to="/site/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white cursor-pointer whitespace-nowrap hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #F39C12, #E67E22)', fontFamily: 'Poppins, sans-serif' }}>
            <i className="ri-draft-line" /> Demander mon devis gratuit
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
