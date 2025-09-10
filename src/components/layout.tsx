import { ReactNode } from 'react';
import { SiteNavbar } from '@/components/site-navbar';
import { SkipToMain, RouteChangeAnnouncer } from '@/components/accessibility';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ${className}`}>
      <SkipToMain />
      <RouteChangeAnnouncer />
      <SiteNavbar />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;