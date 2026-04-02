import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'directeur' | 'comptable' | 'assistante' | 'communication' | 'agent' | 'electricien';

export interface AuthUser {
  id: number;
  nom: string;
  email: string;
  role: UserRole;
  avatar: string;
  roleLabel: string;
  poste: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  hasAccess: (module: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const ROLE_ACCESS: Record<UserRole, string[]> = {
  directeur: [
    'dashboard', 'demandes', 'biens', 'proprietaires', 'visites',
    'devis', 'paiements', 'interventions', 'documents',
    'locations', 'finances', 'personnel', 'femmesmenage',
  ],
  comptable: [
    'dashboard', 'biens', 'proprietaires', 'devis', 'paiements', 'documents',
    'locations', 'finances', 'personnel', 'femmesmenage',
  ],
  assistante: [
    'dashboard', 'demandes', 'biens', 'proprietaires', 'visites', 'documents',
    'locations', 'femmesmenage',
  ],
  communication: [
    'dashboard', 'demandes', 'documents',
  ],
  agent: [
    'dashboard', 'demandes', 'biens', 'visites', 'documents', 'locations',
  ],
  electricien: [
    'dashboard', 'demandes', 'devis', 'interventions', 'documents',
  ],
};

const MOCK_USERS: (AuthUser & { password: string })[] = [
  {
    id: 1, nom: 'Moussa Diallo', email: 'directeur@xmt.sn', password: 'dir123',
    role: 'directeur', avatar: 'MD', roleLabel: 'Directeur', poste: 'Directeur Général',
  },
  {
    id: 2, nom: 'Pape Ngor Ba', email: 'comptable@xmt.sn', password: 'cpt123',
    role: 'comptable', avatar: 'PB', roleLabel: 'Comptable / Gérant', poste: 'Responsable Financier',
  },
  {
    id: 3, nom: 'Sokhna Dieng', email: 'assistante@xmt.sn', password: 'ast123',
    role: 'assistante', avatar: 'SD', roleLabel: 'Assistante', poste: 'Assistante Administrative',
  },
  {
    id: 4, nom: 'Aminata Cissé', email: 'communication@xmt.sn', password: 'com123',
    role: 'communication', avatar: 'AC', roleLabel: 'Communication', poste: 'Chargée Communication Digitale',
  },
  {
    id: 5, nom: 'Khalil Sarr', email: 'agent@xmt.sn', password: 'agt123',
    role: 'agent', avatar: 'KS', roleLabel: 'Agent de terrain', poste: 'Agent Immobilier',
  },
  {
    id: 6, nom: 'Ibrahim Touré', email: 'electricien@xmt.sn', password: 'elec123',
    role: 'electricien', avatar: 'IT', roleLabel: 'Associé Électricien', poste: 'Responsable Technique',
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const stored = localStorage.getItem('xmt_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = (email: string, password: string): boolean => {
    const found = MOCK_USERS.find(
      u => u.email === email.trim().toLowerCase() && u.password === password,
    );
    if (found) {
      const { password: _pw, ...userData } = found;
      void _pw;
      setUser(userData);
      localStorage.setItem('xmt_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('xmt_user');
  };

  const hasAccess = (module: string): boolean => {
    if (!user) return false;
    return ROLE_ACCESS[user.role]?.includes(module) ?? false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, hasAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
