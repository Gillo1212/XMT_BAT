import type { CatalogueItem } from '../../../../mocks/catalogue';

interface CatalogueItemCardProps {
  item: CatalogueItem;
  accentColor: string;
}

export default function CatalogueItemCard({ item, accentColor }: CatalogueItemCardProps) {
  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={item.image}
          alt={item.nom}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badge */}
        {item.badge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: accentColor, fontFamily: 'Poppins, sans-serif' }}
          >
            {item.badge}
          </span>
        )}
        {/* Prix */}
        {item.prix && (
          <span
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', fontFamily: 'Poppins, sans-serif' }}
          >
            {item.prix}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-bold text-base mb-2 leading-snug"
          style={{ color: '#1A2B3C', fontFamily: 'Poppins, sans-serif' }}
        >
          {item.nom}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ color: '#64748B', fontFamily: 'Open Sans, sans-serif' }}
        >
          {item.description}
        </p>

        {/* Details list */}
        <ul className="space-y-1.5">
          {item.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${accentColor}15` }}
              >
                <i className="ri-check-line text-xs" style={{ color: accentColor }} />
              </span>
              <span className="text-xs" style={{ color: '#4A5568', fontFamily: 'Open Sans, sans-serif' }}>
                {detail}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/site/contact"
          className="mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80 cursor-pointer"
          style={{
            background: `${accentColor}10`,
            color: accentColor,
            border: `1px solid ${accentColor}25`,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <i className="ri-arrow-right-line text-xs" />
          Demander un devis
        </a>
      </div>
    </div>
  );
}
