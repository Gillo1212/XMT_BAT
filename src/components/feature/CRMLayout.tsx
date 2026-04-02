import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useAuth } from '../../contexts/AuthContext';

interface CRMLayoutProps {
  children: ReactNode;
  onAdd?: () => void;
  addLabel?: string;
}

export default function CRMLayout({ children, onAdd, addLabel }: CRMLayoutProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F6F7' }}>
      <Sidebar />
      <TopBar onAdd={onAdd} addLabel={addLabel} />
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
