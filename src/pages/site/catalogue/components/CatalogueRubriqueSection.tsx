import { useState } from 'react';
import type { CatalogueRubrique } from '../../../../mocks/catalogue';
import CatalogueItemCard from './CatalogueItemCard';

interface CatalogueRubriqueSectionProps {
  rubrique: CatalogueRubrique;
  defaultOpen?: boolean;
  index: number;
}

export default function CatalogueRubriqueSection({ rubrique, defaultOpen = false, index }: CatalogueRubriqueSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${isOpen ? rubrique.couleur + '30' : 'rgba(0,0,0,0.07)'}`,
        background: isOpen ? '#FAFBFC' : '#FFFFFF',
      }}
    >
      {/* Header — clic pour ouvrir/fermer */}
      <button
        className="w-full flex items-center gap-5 px-7 py-5 transition-all duration-200 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: 'transparent' }}
      >
        {/* Index number */}
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
          style={{
            background: isOpen ? rubrique.couleur : `${rubrique.couleur}15`,
            color: isOpen ? '#FFFFFF' : rubrique.couleur,
            fontFamily: 'Poppins, sans-serif',
            transition: 'all 0.2s',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Icon */}
        <div
          className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0"
          style={{ background: `${rubrique.couleur}12` }}
        >
          <i className={`${rubrique.icone} text-xl`} style={{ color: rubrique.couleur }} />
        </div>

        {/* Text */}
        <div className="flex-1 text-left">
          <h2
            className="font-black text-lg leading-tight"
            style={{
              color: isOpen ? rubrique.couleur : '#1A2B3C',
              fontFamily: 'Poppins, sans-serif',
              transition: 'color 0.2s',
            }}
          >
            {rubrique.titre}
          </h2>
          <p className="text-sm mt-0.5" style={{ color: '#94A3B8', fontFamily: 'Open Sans, sans-serif' }}>
            {rubrique.items.length} prestation{rubrique.items.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Count badge */}
        <span
          className="px-3 py-1 rounded-full text-xs font-bold hidden sm:block"
          style={{
            background: `${rubrique.couleur}12`,
            color: rubrique.couleur,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {rubrique.description.length > 60 ? `${rubrique.description.substring(0, 60)}…` : rubrique.description}
        </span>

        {/* Arrow */}
        <div
          className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? `${rubrique.couleur}15` : 'rgba(0,0,0,0.04)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <i className="ri-arrow-down-s-line text-lg" style={{ color: isOpen ? rubrique.couleur : '#94A3B8' }} />
        </div>
      </button>

      {/* Content — accordion déroulant */}
      <div
        style={{
          maxHeight: isOpen ? '2000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="px-7 pb-8"
          style={{ borderTop: `1px solid ${rubrique.couleur}18` }}
        >
          {/* Description rubrique */}
          <p
            className="text-sm leading-relaxed pt-5 pb-6"
            style={{ color: '#64748B', fontFamily: 'Open Sans, sans-serif', borderBottom: `1px solid rgba(0,0,0,0.05)` }}
          >
            {rubrique.description}
          </p>

          {/* Grid de cartes produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-6">
            {rubrique.items.map((item) => (
              <CatalogueItemCard
                key={item.id}
                item={item}
                accentColor={rubrique.couleur}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
