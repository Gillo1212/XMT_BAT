import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const DEMO_ACCOUNTS = [
  {
    role: 'Directeur',
    email: 'directeur@xmt.sn',
    password: 'dir123',
    icon: 'ri-vip-crown-line',
    desc: 'Vision globale, validation, reporting complet',
    bg: 'bg-blue-50 border-blue-200 hover:border-blue-400 hover:bg-blue-100',
    text: 'text-blue-700',
  },
  {
    role: 'Comptable / Gérant',
    email: 'comptable@xmt.sn',
    password: 'cpt123',
    icon: 'ri-money-cny-circle-line',
    desc: 'Facturation, paiements, contrats, état financier',
    bg: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-100',
    text: 'text-cyan-700',
  },
  {
    role: 'Assistante',
    email: 'assistante@xmt.sn',
    password: 'ast123',
    icon: 'ri-user-smile-line',
    desc: 'Dossiers, planning, suivi administratif',
    bg: 'bg-orange-50 border-orange-200 hover:border-orange-400 hover:bg-orange-100',
    text: 'text-orange-700',
  },
  {
    role: 'Communication',
    email: 'communication@xmt.sn',
    password: 'com123',
    icon: 'ri-megaphone-line',
    desc: 'Leads, formulaires, campagnes marketing',
    bg: 'bg-rose-50 border-rose-200 hover:border-rose-400 hover:bg-rose-100',
    text: 'text-rose-700',
  },
  {
    role: 'Agent de terrain',
    email: 'agent@xmt.sn',
    password: 'agt123',
    icon: 'ri-walk-line',
    desc: 'Visites, comptes rendus, mise à jour terrain',
    bg: 'bg-sky-50 border-sky-200 hover:border-sky-400 hover:bg-sky-100',
    text: 'text-sky-700',
  },
  {
    role: 'Associé électricien',
    email: 'electricien@xmt.sn',
    password: 'elec123',
    icon: 'ri-flashlight-line',
    desc: 'Devis techniques, interventions, exécution',
    bg: 'bg-slate-50 border-slate-200 hover:border-slate-400 hover:bg-slate-100',
    text: 'text-slate-700',
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const ok = login(email, password);
    if (ok) {
      navigate('/dashboard');
    } else {
      setError('Email ou mot de passe incorrect. Cliquez sur un compte démo ci-dessous pour le remplir.');
    }
    setLoading(false);
  };

  const fillDemo = (acc: typeof DEMO_ACCOUNTS[0]) => {
    setEmail(acc.email);
    setPassword(acc.password);
    setSelected(acc.role);
    setError('');
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}>

      {/* ── Left branding panel ── */}
      <div className="hidden lg:flex lg:w-[44%] relative flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20professional%20real%20estate%20office%20buildings%20Dakar%20Senegal%20African%20city%20skyline%20construction%20architecture%20blue%20sky%20aerial%20view%20urban%20cityscape%20corporate%20photography&width=760&height=1080&seq=xmt-login-blue-v1&orientation=portrait"
            alt="XMT GROUPE"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,30,55,0.92) 0%, rgba(31,78,121,0.80) 50%, rgba(46,134,193,0.65) 100%)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829]/70 via-transparent to-transparent" />
        </div>

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl backdrop-blur-sm flex items-center justify-center"
            style={{ background: 'rgba(46,134,193,0.2)', border: '1px solid rgba(46,134,193,0.45)' }}
          >
            <i className="ri-building-2-line text-blue-300 text-xl" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight tracking-wide">XMT GROUPE</p>
            <p className="text-blue-300/70 text-xs font-medium tracking-widest uppercase">Backoffice CRM</p>
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10">
          <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: '#F39C12' }} />
          <h2 className="text-4xl font-bold text-white leading-snug mb-4">
            Gérez votre activité<br />
            <span style={{ color: '#F39C12' }}>immobilière</span><br />
            en toute sérénité.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
            Une seule source de vérité pour l&apos;équipe. Des vues adaptées à chaque rôle.
            Des workflows simples et mesurables.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[
              { val: '13', lab: 'Modules actifs' },
              { val: '6', lab: 'Rôles métier' },
              { val: '100%', lab: 'Activité tracée' },
            ].map(s => (
              <div
                key={s.lab}
                className="backdrop-blur-sm rounded-xl p-3"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(46,134,193,0.25)' }}
              >
                <p className="font-bold text-xl" style={{ color: '#F39C12' }}>{s.val}</p>
                <p className="text-white/45 text-xs mt-0.5">{s.lab}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-white/25 text-xs">© 2026 XMT GROUPE · Tous droits réservés</p>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex items-center justify-center bg-[#F4F6F7] p-6 overflow-y-auto">
        <div className="w-full max-w-lg py-6">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1F4E79, #2E86C1)' }}
            >
              <i className="ri-building-2-line text-white text-lg" />
            </div>
            <div>
              <p className="font-bold text-slate-800">XMT GROUPE</p>
              <p className="text-slate-500 text-xs">Backoffice CRM</p>
            </div>
          </div>

          {/* Header */}
          <div className="mb-7">
            <div className="w-8 h-1 rounded-full mb-3" style={{ backgroundColor: '#F39C12' }} />
            <h1 className="text-2xl font-bold" style={{ color: '#2C3E50' }}>Bienvenue</h1>
            <p className="text-slate-500 text-sm mt-1">Connectez-vous à votre espace de travail</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-7">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2C3E50' }}>Adresse email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-slate-400">
                  <i className="ri-mail-line text-sm" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="votre@xmt.sn"
                  required
                  className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none transition-all text-slate-800 placeholder-slate-300 bg-white"
                  style={{ fontFamily: "'Open Sans', 'Roboto', sans-serif" }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#1F4E79'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.12)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2C3E50' }}>Mot de passe</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-slate-400">
                  <i className="ri-lock-line text-sm" />
                </span>
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-9 pr-10 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none transition-all text-slate-800 placeholder-slate-300 bg-white"
                  style={{ fontFamily: "'Open Sans', 'Roboto', sans-serif" }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#1F4E79'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.12)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <i className={showPwd ? 'ri-eye-off-line text-sm' : 'ri-eye-line text-sm'} />
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2.5">
                <i className="ri-error-warning-line text-rose-500 text-sm mt-0.5" />
                <p className="text-xs text-rose-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              style={{ backgroundColor: loading ? '#ccc' : '#F39C12', fontFamily: "'Montserrat', sans-serif" }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#D68910'; }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#F39C12'; }}
            >
              {loading ? (
                <><i className="ri-loader-4-line animate-spin" />Connexion en cours...</>
              ) : (
                <><i className="ri-login-box-line" />Se connecter</>
              )}
            </button>
          </form>

          {/* Demo accounts */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Accès rapide — comptes démo</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {DEMO_ACCOUNTS.map(acc => (
                <button
                  key={acc.role}
                  type="button"
                  onClick={() => fillDemo(acc)}
                  className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${acc.bg}`}
                  style={selected === acc.role ? { outline: '2px solid #1F4E79', outlineOffset: '2px' } : {}}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-5 h-5 flex items-center justify-center ${acc.text}`}>
                      <i className={`${acc.icon} text-sm`} />
                    </span>
                    <span className={`text-xs font-bold ${acc.text}`}>{acc.role}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-tight">{acc.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
