import { Link } from 'react-router-dom';
import SiteLayout from '../../../components/site/SiteLayout';
import { mockEquipe } from '../../../mocks/site';

const valeurs = [
  { icon: 'ri-shield-check-line', titre: 'Confiance', desc: 'Transparence dans chaque transaction, honnêteté dans chaque conseil. Votre confiance est notre priorité absolue.', accent: '#1F4E79' },
  { icon: 'ri-award-line', titre: 'Excellence', desc: 'Des standards élevés dans nos prestations, notre service client et la qualité de nos réalisations.', accent: '#2E86C1' },
  { icon: 'ri-group-line', titre: 'Proximité', desc: 'Une équipe locale qui connaît le marché sénégalais et accompagne chaque client de manière personnalisée.', accent: '#F39C12' },
  { icon: 'ri-seedling-line', titre: 'Engagement', desc: 'Nous nous engageons sur les délais, les budgets et les résultats. Parole donnée, parole tenue.', accent: '#1F4E79' },
];

const timeline = [
  { annee: '2013', event: 'Création de XMT GROUPE à Rufisque, agence immobilière généraliste.', active: false },
  { annee: '2016', event: 'Lancement de la branche BTP : XMT BAT pour les travaux de construction et rénovation.', active: false },
  { annee: '2019', event: 'Ouverture d\'un second bureau à Dakar. Plus de 200 biens gérés.', active: false },
  { annee: '2022', event: 'Déploiement des services de conciergerie et placement de personnel de maison.', active: false },
  { annee: '2025', event: 'Plus de 1200 clients accompagnés, 85 projets BTP livrés, expansion vers Thiès et Diamniadio.', active: true },
];

export default function AProposPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20real%20estate%20agency%20team%20office%20Dakar%20Senegal%20modern%20interior%20meeting%20room%20colleagues%20collaboration%20bright%20corporate%20environment%20African%20business%20professionals%20confident%20smiling&width=1920&height=700&seq=hero-apropos-xmt&orientation=landscape')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,28,55,0.94) 0%, rgba(31,78,121,0.82) 100%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
              Notre histoire
            </span>
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.05 }}>
            À propos de<br />XMT GROUPE
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Depuis 2013, XMT GROUPE est le partenaire de confiance des particuliers et entreprises pour leurs projets immobiliers et travaux au Sénégal.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: '#F39C12' }} />
                <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Qui sommes-nous</p>
              </div>
              <h2 className="text-4xl font-black mb-6" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif', lineHeight: 1.1 }}>
                Votre partenaire<br />immobilier depuis 2013
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>
                <p>XMT GROUPE est une agence immobilière et de services basée à Rufisque, Dakar. Nous sommes spécialisés dans les transactions immobilières, la gestion locative, les travaux de BTP et les services aux particuliers.</p>
                <p>Notre vision est simple : offrir à chaque client un accompagnement professionnel, transparent et humain, du premier contact jusqu'à la finalisation de son projet.</p>
                <p>Avec plus de 12 ans d'expérience sur le marché sénégalais, nous connaissons les spécificités locales et les opportunités à saisir dans un marché en plein développement.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Immobilier', 'BTP', 'Gestion', 'Sénégal'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: '#EBF5FB', color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '12+', label: "Années d'expérience", icon: 'ri-history-line', accent: '#1F4E79' },
                { val: '350+', label: 'Biens gérés', icon: 'ri-building-2-line', accent: '#2E86C1' },
                { val: '1200+', label: 'Clients satisfaits', icon: 'ri-user-smile-line', accent: '#F39C12' },
                { val: '85+', label: 'Projets livrés', icon: 'ri-tools-line', accent: '#1F4E79' },
              ].map((s, i) => (
                <div key={s.val} className="rounded-xl p-6" style={{ background: i === 2 ? 'linear-gradient(135deg, #F39C12, #E67E22)' : '#F4F6F7', borderTop: i !== 2 ? `3px solid ${s.accent}` : 'none' }}>
                  <i className={`${s.icon} text-xl mb-2 block`} style={{ color: i === 2 ? 'rgba(255,255,255,0.8)' : s.accent }} />
                  <div className="text-3xl font-black mb-1" style={{ color: i === 2 ? '#FFFFFF' : s.accent, fontFamily: 'Poppins, sans-serif' }}>{s.val}</div>
                  <div className="text-xs" style={{ color: i === 2 ? 'rgba(255,255,255,0.85)' : '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24" style={{ background: '#F4F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Ce qui nous guide</p>
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
            </div>
            <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>Nos valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-white rounded-xl p-7 text-center transition-transform hover:-translate-y-1" style={{ borderBottom: `3px solid ${v.accent}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: `${v.accent}12` }}>
                  <i className={`${v.icon} text-xl`} style={{ color: v.accent }} />
                </div>
                <h3 className="font-bold text-sm mb-3" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{v.titre}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Notre parcours</p>
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
            </div>
            <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>Les étapes clés</h2>
          </div>
          <div className="relative pl-10 border-l-2" style={{ borderColor: 'rgba(31,78,121,0.12)' }}>
            {timeline.map((t) => (
              <div key={t.annee} className="relative mb-10 last:mb-0">
                <div
                  className="absolute -left-12 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ background: t.active ? 'linear-gradient(135deg, #F39C12, #E67E22)' : '#1F4E79' }}
                >
                  {t.active && <i className="ri-star-fill text-white text-xs" />}
                </div>
                <div className="rounded-xl p-5" style={{ background: t.active ? 'linear-gradient(135deg, rgba(243,156,18,0.06), rgba(230,126,34,0.03))' : '#F4F6F7', border: t.active ? '1px solid rgba(243,156,18,0.2)' : '1px solid rgba(31,78,121,0.08)' }}>
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: t.active ? '#F39C12' : '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{t.annee}</span>
                  <p className="text-sm mt-1.5 leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24" style={{ background: '#F4F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Les personnes derrière XMT</p>
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
            </div>
            <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>Notre équipe</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockEquipe.map((m, i) => (
              <div key={m.id} className="bg-white rounded-xl overflow-hidden text-center group transition-transform hover:-translate-y-1">
                <div className="h-56 overflow-hidden relative">
                  <img src={m.image} alt={m.nom} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(31,78,121,0.6) 0%, transparent 50%)' }} />
                </div>
                <div className="p-5" style={{ borderTop: `3px solid ${i === 0 ? '#F39C12' : i === 1 ? '#2E86C1' : '#1F4E79'}` }}>
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{m.nom}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: '#F39C12' }}>{m.poste}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1C32, #1F4E79)' }}>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full translate-y-1/3 translate-x-1/4" style={{ background: 'rgba(243,156,18,0.07)', border: '1px solid rgba(243,156,18,0.12)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Travaillons ensemble</h2>
          <p className="text-white/70 mb-8 text-sm max-w-md mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>Que vous soyez particulier, investisseur ou entreprise, notre équipe est à votre disposition.</p>
          <Link to="/site/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white cursor-pointer whitespace-nowrap hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #F39C12, #E67E22)', fontFamily: 'Poppins, sans-serif' }}>
            <i className="ri-mail-send-line" /> Contacter l'agence
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
