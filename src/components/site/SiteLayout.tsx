import { ReactNode } from 'react';
import SiteNavbar from './SiteNavbar';
import SiteFooter from './SiteFooter';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <SiteNavbar />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
