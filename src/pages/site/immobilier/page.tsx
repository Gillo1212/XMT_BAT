import { Link } from 'react-router-dom';
import SiteLayout from '../../../components/site/SiteLayout';
import { mockServicesImmobilier } from '../../../mocks/site';

const processus = [
  { step: '01', titre: 'Prise de contact', desc: 'Échangez avec notre équipe pour définir votre besoin : achat, vente, location ou gestion.', icon: 'ri-discuss-line' },
  { step: '02', titre: 'Étude & proposition', desc: 'Nous sélectionnons les meilleures opportunités correspondant à votre profil et votre budget.', icon: 'ri-file-search-line' },
  { step: '03', titre: 'Visites & négociation', desc: 'Organisation des visites, accompagnement lors des négociations pour défendre vos intérêts.', icon: 'ri-home-smile-line' },
  { step: '04', titre: 'Finalisation', desc: 'Suivi complet jusqu\'à la signature des actes et la remise des clés. Zéro stress.', icon: 'ri-key-2-line' },
];

const faqs = [
  { q: 'Combien coûtent vos honoraires pour une vente ?', r: 'Nos honoraires sont de 5% HT du prix de vente pour les transactions, partagés entre acquéreur et vendeur selon accord.' },
  { q: 'Quelle est votre zone d\'intervention ?', r: 'Nous intervenons principalement à Dakar, Rufisque, Thiès et Diamniadio, mais aussi dans d\'autres villes du Sénégal sur demande.' },
  { q: 'Proposez-vous la gestion locative complète ?', r: 'Oui, nous assurons la mise en location, l\'encaissement des loyers, l\'entretien courant et les déclarations fiscales pour votre compte.' },
  { q: 'Comment estimer la valeur de mon bien ?', r: 'Nous réalisons une estimation gratuite et sans engagement, basée sur les prix du marché local et les caractéristiques de votre bien.' },
];

export default function ImmobilierPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20real%20estate%20properties%20Dakar%20Senegal%20premium%20residential%20villas%20apartments%20aerial%20view%20modern%20architecture%20beautiful%20landscape%20blue%20sky%20palm%20trees%20upscale%20neighborhood%20professional%20photography&width=1920&height=700&seq=hero-immobilier-xmt&orientation=landscape')` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,28,55,0.94) 0%, rgba(31,78,121,0.82) 100%)' }} />
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: 'linear-gradient(to bottom, transparent, #F39C12, transparent)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
              Pôle Immobilier
            </span>
            <div className="h-px w-8" style={{ background: '#F39C12' }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.05 }}>
            L'immobilier,<br />notre expertise
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Achat, vente, location, gestion locative — nos conseillers vous accompagnent à chaque étape de votre projet immobilier avec transparence et réactivité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/site/biens" className="px-7 py-3.5 rounded-lg font-bold text-white cursor-pointer whitespace-nowrap hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #F39C12, #E67E22)', fontFamily: 'Poppins, sans-serif' }}>
              <i className="ri-search-line mr-2" />Chercher un bien
            </Link>
            <Link to="/site/contact" className="px-7 py-3.5 rounded-lg font-semibold cursor-pointer whitespace-nowrap" style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', border: '1.5px solid rgba(255,255,255,0.4)', fontFamily: 'Poppins, sans-serif', backdropFilter: 'blur(8px)' }}>
              <i className="ri-hand-heart-line mr-2" />Confier mon bien
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10" style={{ background: '#F39C12' }} />
                <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Nos offres</p>
              </div>
              <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>Services immobiliers</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockServicesImmobilier.map((s, i) => (
              <div
                key={s.titre}
                className="flex gap-5 p-7 rounded-xl transition-transform hover:-translate-y-1"
                style={{ background: i % 2 === 0 ? '#F4F6F7' : 'white', border: '1px solid rgba(31,78,121,0.08)', borderLeft: `4px solid ${s.couleur}` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: `${s.couleur}12` }}>
                  <i className={`${s.icone} text-2xl`} style={{ color: s.couleur }} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{s.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24" style={{ background: '#F4F6F7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Comment ça marche</p>
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
            </div>
            <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>Notre processus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processus.map((p, i) => (
              <div key={p.step} className="relative text-center">
                {i < processus.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, #2E86C1 0%, rgba(46,134,193,0.1) 100%)' }} />
                )}
                <div className="relative z-10 w-14 h-14 rounded-xl flex flex-col items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #1F4E79, #2E86C1)' }}>
                  <i className={`${p.icon} text-xl text-white`} />
                  <span className="text-white/60 text-xs font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{p.step}</span>
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>{p.titre}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>Questions fréquentes</p>
              <div className="h-px w-8" style={{ background: '#F39C12' }} />
            </div>
            <h2 className="text-4xl font-black" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>FAQ Immobilier</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="rounded-xl p-6" style={{ background: '#F4F6F7', borderLeft: `3px solid ${i % 2 === 0 ? '#1F4E79' : '#F39C12'}` }}>
                <h4 className="font-bold text-sm mb-3 flex items-start gap-3" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>
                  <i className="ri-question-fill text-base mt-0.5 flex-shrink-0" style={{ color: '#F39C12' }} />
                  {faq.q}
                </h4>
                <p className="text-sm leading-relaxed pl-7" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>{faq.r}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/site/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white cursor-pointer whitespace-nowrap hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #1F4E79, #2E86C1)', fontFamily: 'Poppins, sans-serif' }}>
              <i className="ri-mail-send-line" /> Poser une question
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
