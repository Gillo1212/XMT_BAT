import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/login/page';
import DashboardPage from '../pages/dashboard/page';
import DemandesPage from '../pages/demandes/page';
import BiensPage from '../pages/biens/page';
import ProprietairesPage from '../pages/proprietaires/page';
import VisitesPage from '../pages/visites/page';
import DocumentsPage from '../pages/documents/page';
import DevisContratsPage from '../pages/devis/page';
import PaiementsPage from '../pages/paiements/page';
import InterventionsPage from '../pages/interventions/page';
import LocationsPage from '../pages/locations/page';
import FinancesPage from '../pages/finances/page';
import PersonnelPage from '../pages/personnel/page';
import FemmesMenagePage from '../pages/femmesmenage/page';

// Site vitrine XMT GROUPE
import AccueilPage from '../pages/site/accueil/page';
import ImmobilierPage from '../pages/site/immobilier/page';
import SiteBiensPage from '../pages/site/biens/page';
import TravauxPage from '../pages/site/travaux/page';
import AProposPage from '../pages/site/a-propos/page';
import ActualitesPage from '../pages/site/actualites/page';
import ContactPage from '../pages/site/contact/page';
import CataloguePage from '../pages/site/catalogue/page';

const routes: RouteObject[] = [
  // Site vitrine (public)
  { path: '/', element: <Navigate to="/site" replace /> },
  { path: '/site', element: <AccueilPage /> },
  { path: '/site/immobilier', element: <ImmobilierPage /> },
  { path: '/site/biens', element: <SiteBiensPage /> },
  { path: '/site/travaux', element: <TravauxPage /> },
  { path: '/site/a-propos', element: <AProposPage /> },
  { path: '/site/actualites', element: <ActualitesPage /> },
  { path: '/site/contact', element: <ContactPage /> },
  { path: '/site/catalogue', element: <CataloguePage /> },

  // CRM (espace équipe)
  { path: '/login', element: <LoginPage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/demandes', element: <DemandesPage /> },
  { path: '/biens', element: <BiensPage /> },
  { path: '/proprietaires', element: <ProprietairesPage /> },
  { path: '/visites', element: <VisitesPage /> },
  { path: '/devis', element: <DevisContratsPage /> },
  { path: '/paiements', element: <PaiementsPage /> },
  { path: '/interventions', element: <InterventionsPage /> },
  { path: '/documents', element: <DocumentsPage /> },
  { path: '/locations', element: <LocationsPage /> },
  { path: '/finances', element: <FinancesPage /> },
  { path: '/personnel', element: <PersonnelPage /> },
  { path: '/femmesmenage', element: <FemmesMenagePage /> },

  { path: '*', element: <NotFound /> },
];

export default routes;
