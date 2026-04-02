import CRMLayout from '../../components/feature/CRMLayout';
import LocationsTable from './components/LocationsTable';

export default function LocationsPage() {
  return (
    <CRMLayout addLabel="Nouveau contrat" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Gestion des Locations</h2>
        <p className="text-sm text-slate-500 mt-0.5">Contrats, locataires et suivi des loyers mensuels</p>
      </div>
      <LocationsTable />
    </CRMLayout>
  );
}
