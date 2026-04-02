import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const pageTitles: Record<string, { label: string; icon: string; description: string }> = {
  '/dashboard': { label: 'Dashboard', icon: 'ri-dashboard-3-line', description: 'Vue d\'ensemble de l\'activité' },
  '/demandes': { label: 'Demandes entrantes', icon: 'ri-mail-open-line', description: 'Gestion des demandes clients' },
  '/biens': { label: 'Biens immobiliers', icon: 'ri-building-2-line', description: 'Portefeuille immobilier' },
  '/proprietaires': { label: 'Propriétaires', icon: 'ri-user-3-line', description: 'Base propriétaires' },
  '/visites': { label: 'Visites', icon: 'ri-calendar-check-line', description: 'Planification & historique' },
  '/locations': { label: 'Gestion des Locations', icon: 'ri-home-gear-line', description: 'Contrats, locataires et loyers' },
  '/devis': { label: 'Devis & Contrats', icon: 'ri-file-text-line', description: 'Offres et engagements' },
  '/paiements': { label: 'Paiements & Relances', icon: 'ri-money-cny-circle-line', description: 'Suivi financier' },
  '/finances': { label: 'Finances & Comptabilité', icon: 'ri-bar-chart-2-line', description: 'Journal, bilan et caisse' },
  '/personnel': { label: 'Personnel & Salaires', icon: 'ri-team-line', description: 'Employés et fiches de paie' },
  '/femmesmenage': { label: 'Femmes de Ménage', icon: 'ri-service-line', description: 'Annuaire, placements et paiements' },
  '/interventions': { label: 'Interventions', icon: 'ri-tools-line', description: 'Maintenance & travaux' },
  '/documents': { label: 'Documents', icon: 'ri-folder-open-line', description: 'Gestion documentaire' },
};

interface TopBarProps {
  onAdd?: () => void;
  addLabel?: string;
}

export default function TopBar({ onAdd, addLabel }: TopBarProps) {
  const location = useLocation();
  const { user } = useAuth();
  const page = pageTitles[location.pathname] ?? { label: 'CRM', icon: 'ri-apps-line', description: '' };
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-slate-100 flex items-center px-6 z-20">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg border border-blue-100">
          <i className={`${page.icon} text-blue-600 text-base`} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-800 leading-tight">{page.label}</h1>
          <p className="text-xs text-slate-400">{page.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 capitalize hidden xl:block">{today}</span>

        <button className="relative w-8 h-8 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
          <i className="ri-notification-3-line text-base" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
        </button>

        <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
          <i className="ri-search-line text-base" />
        </button>

        {user && (
          <div className="flex items-center gap-2 pl-2 border-l border-slate-100 ml-1">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1F4E79, #2E86C1)' }}
            >
              <span className="text-white text-xs font-bold">{user.avatar}</span>
            </div>
            <div className="hidden xl:block">
              <p className="text-xs font-semibold text-slate-700 leading-tight">{user.nom}</p>
              <p className="text-xs text-slate-400">{user.poste}</p>
            </div>
          </div>
        )}

        {onAdd && (
          <button
            onClick={onAdd}
            className="flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ml-2"
            style={{ backgroundColor: '#F39C12' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#D68910')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F39C12')}
          >
            <i className="ri-add-line" />
            {addLabel ?? 'Nouveau'}
          </button>
        )}
      </div>
    </header>
  );
}
