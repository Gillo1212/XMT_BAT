import { Link } from 'react-router-dom';

const piliers = [
  {
    icon: 'ri-building-2-line',
    titre: 'Immobilier',
    sous: 'Achat · Vente · Location · Gestion',
    description: 'De la recherche du bien idéal à la finalisation de la transaction, nos experts immobiliers vous guident à chaque étape avec rigueur et transparence.',
    lien: '/site/immobilier',
    color: '#1F4E79',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20villa%20bright%20interior%20Dakar%20Senegal%20high-end%20real%20estate%20living%20room%20white%20walls%20natural%20light%20minimal%20elegant%20african%20decor%20professional%20interior%20photography&width=600&height=400&seq=pilier-immobilier-v3&orientation=landscape',
    services: ['Achat immobilier', 'Vente de biens', 'Gestion locative', 'Estimation gratuite'],
  },
  {
    icon: 'ri-tools-line',
    titre: 'Travaux & Technique',
    sous: 'Construction · Rénovation · BTP',
    description: 'Notre branche BTP réalise vos projets de construction neuve, rénovation complète, plomberie, électricité et installation réseau avec une équipe qualifiée.',
    lien: '/site/travaux',
    color: '#2E86C1',
    image: 'https://readdy.ai/api/search-image?query=Modern%20construction%20site%20Dakar%20Senegal%20professional%20workers%20building%20residential%20complex%20concrete%20structure%20blue%20sky%20sunny%20day%20contemporary%20architecture%20professional%20photography&width=600&height=400&seq=pilier-travaux-v3&orientation=landscape',
    services: ['Construction neuve', 'Rénovation', 'Plomberie & électricité', 'Réseau & télécoms'],
  },
  {
    icon: 'ri-service-line',
    titre: 'Gestion & Services',
    sous: 'Conciergerie · Personnel · Entretien',
    description: 'Personnel de maison qualifié, entretien régulier de vos propriétés et services de conciergerie adaptés aux besoins des propriétaires et investisseurs.',
    lien: '/site/a-propos',
    color: '#F39C12',
    image: 'https://readdy.ai/api/search-image?query=Professional%20cleaning%20concierge%20service%20Senegal%20Africa%20clean%20modern%20apartment%20bright%20interior%20professional%20staff%20uniform%20friendly%20smiling%20high-end%20residential%20service%20photography&width=600&height=400&seq=pilier-services-v3&orientation=landscape',
    services: ['Femmes de ménage', 'Entretien de biens', 'Conciergerie', 'Gardiennage'],
  },
];

export default function PilarsSection() {
  return (
    <section className="py-28" style={{ background: '#FAFBFC' }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.28em] mb-4"
              style={{ color: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
            >
              Nos expertises
            </p>
            <h2
              className="font-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#0D1F33',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
              }}
            >
              Trois piliers,
              <br />
              une seule vision
            </h2>
          </div>
          <p
            className="text-base leading-relaxed"
            style={{ color: '#6B7A8D', fontFamily: 'Open Sans, sans-serif', maxWidth: '420px', marginLeft: 'auto' }}
          >
            XMT GROUPE rassemble toutes les expertises pour réaliser et gérer vos projets immobiliers au Sénégal. Un interlocuteur unique, plusieurs compétences.
          </p>
        </div>

        {/* Cards — design premium sans bordure colorée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {piliers.map((p) => (
            <div
              key={p.titre}
              className="group bg-white rounded-2xl overflow-hidden flex flex-col cursor-default transition-all duration-400 hover:-translate-y-1"
              style={{
                boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              {/* Image section */}
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={p.image}
                  alt={p.titre}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay subtle */}
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, rgba(5,15,30,0.55) 0%, transparent 55%)` }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <i className={`${p.icon} text-lg text-white`} />
                </div>
                {/* Title over image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-black text-white mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {p.titre}
                  </h3>
                  <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Open Sans, sans-serif' }}>
                    {p.sous}
                  </p>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7A8D', fontFamily: 'Open Sans, sans-serif' }}>
                  {p.description}
                </p>

                {/* Services en grid simple */}
                <div className="grid grid-cols-2 gap-1.5 mb-6 flex-1">
                  {p.services.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-1.5 text-xs py-1.5"
                      style={{ color: '#4A5568', fontFamily: 'Open Sans, sans-serif' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: p.color, opacity: 0.7 }}
                      />
                      {s}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={p.lien}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer whitespace-nowrap group-hover:opacity-90"
                  style={{
                    background: p.color,
                    color: '#FFFFFF',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  <span>Découvrir</span>
                  <i className="ri-arrow-right-line transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
