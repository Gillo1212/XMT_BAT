import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth, UserRole } from '../../contexts/AuthContext';

interface NavItem {
  path: string;
  label: string;
  icon: string;
  module: string;
  section: string;
}

const ALL_NAV_ITEMS: NavItem[] = [
  { path: '/dashboard',      label: 'Dashboard',            icon: 'ri-dashboard-3-line',      module: 'dashboard',     section: 'Principal' },
  { path: '/demandes',       label: 'Demandes entrantes',   icon: 'ri-mail-open-line',         module: 'demandes',      section: 'Activité' },
  { path: '/biens',          label: 'Biens immobiliers',    icon: 'ri-building-2-line',        module: 'biens',         section: 'Activité' },
  { path: '/proprietaires',  label: 'Propriétaires',        icon: 'ri-user-3-line',            module: 'proprietaires', section: 'Activité' },
  { path: '/visites',        label: 'Visites',              icon: 'ri-calendar-check-line',    module: 'visites',       section: 'Activité' },
  { path: '/locations',      label: 'Gestion Locations',    icon: 'ri-home-gear-line',         module: 'locations',     section: 'Locations' },
  { path: '/devis',          label: 'Devis & Contrats',     icon: 'ri-file-text-line',         module: 'devis',         section: 'Commercial' },
  { path: '/paiements',      label: 'Paiements & Relances', icon: 'ri-money-cny-circle-line',  module: 'paiements',     section: 'Commercial' },
  { path: '/finances',       label: 'Finances & Compta',    icon: 'ri-bar-chart-2-line',       module: 'finances',      section: 'Finance' },
  { path: '/personnel',      label: 'Personnel & Salaires', icon: 'ri-team-line',              module: 'personnel',     section: 'Finance' },
  { path: '/femmesmenage',   label: 'Femmes de Ménage',     icon: 'ri-service-line',           module: 'femmesmenage',  section: 'Finance' },
  { path: '/interventions',  label: 'Interventions',        icon: 'ri-tools-line',             module: 'interventions', section: 'Technique' },
  { path: '/documents',      label: 'Documents',            icon: 'ri-folder-open-line',       module: 'documents',     section: 'Technique' },
];

const ROLE_META: Record<UserRole, { label: string; badgeBg: string; badgeText: string; dot: string }> = {
  directeur:     { label: 'Directeur',           badgeBg: 'bg-blue-400/25',    badgeText: 'text-blue-200',    dot: 'bg-blue-300' },
  comptable:     { label: 'Comptable / Gérant',  badgeBg: 'bg-cyan-400/20',    badgeText: 'text-cyan-200',    dot: 'bg-cyan-300' },
  assistante:    { label: 'Assistante',          badgeBg: 'bg-orange-400/25',  badgeText: 'text-orange-200',  dot: 'bg-orange-300' },
  communication: { label: 'Communication',       badgeBg: 'bg-rose-400/20',    badgeText: 'text-rose-200',    dot: 'bg-rose-300' },
  agent:         { label: 'Agent de terrain',    badgeBg: 'bg-sky-400/20',     badgeText: 'text-sky-200',     dot: 'bg-sky-300' },
  electricien:   { label: 'Assoc. Électricien',  badgeBg: 'bg-slate-400/30',   badgeText: 'text-slate-200',   dot: 'bg-slate-300' },
};

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, hasAccess } = useAuth();

  const visibleItems = ALL_NAV_ITEMS.filter(item => hasAccess(item.module));
  const sections = Array.from(new Set(visibleItems.map(i => i.section)));
  const meta = user ? ROLE_META[user.role] : null;

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-64 flex flex-col z-30"
      style={{ background: 'linear-gradient(180deg, #0B1829 0%, #0D1F35 50%, #0A1628 100%)' }}
    >
      {/* Blue top accent line */}
      <div
        className="h-0.5 w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #2E86C1, #1F4E79, #2E86C1, transparent)' }}
      />

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-blue-900/40">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(46,134,193,0.15)', border: '1px solid rgba(46,134,193,0.35)' }}
        >
          <i className="ri-building-2-line text-blue-300 text-xl" />
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-tight tracking-widest uppercase">XMT GROUPE</p>
          <p className="text-blue-400/60 text-xs font-medium tracking-wider">Backoffice CRM</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-3">
        {sections.map(section => {
          const items = visibleItems.filter(i => i.section === section);
          return (
            <div key={section}>
              <p className="text-blue-400/50 text-xs font-semibold uppercase tracking-widest px-3 mb-1.5">
                {section}
              </p>
              <div className="space-y-0.5">
                {items.map(item => {
                  const isActive =
                    location.pathname === item.path ||
                    location.pathname.startsWith(item.path + '/');
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'text-blue-200/50 hover:text-white hover:bg-white/5'
                      }`}
                      style={isActive ? {
                        background: 'linear-gradient(90deg, #1F4E79, #2E86C1)',
                      } : {}}
                    >
                      <span className="w-5 h-5 flex items-center justify-center">
                        <i className={`${item.icon} text-base`} />
                      </span>
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* User footer */}
      {user && meta && (
        <div className="px-4 py-4 border-t border-blue-900/40">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1F4E79, #2E86C1)' }}
              >
                <span className="text-white text-xs font-bold">{user.avatar}</span>
              </div>
              <span
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${meta.dot}`}
                style={{ borderColor: '#0A1628' }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">{user.nom}</p>
              <span className={`inline-flex px-1.5 py-0.5 rounded text-xs font-medium ${meta.badgeBg} ${meta.badgeText}`}>
                {meta.label}
              </span>
            </div>
            <button
              onClick={handleLogout}
              title="Déconnexion"
              className="w-7 h-7 flex items-center justify-center text-blue-300/40 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <i className="ri-logout-box-r-line text-sm" />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
