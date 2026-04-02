import CRMLayout from '../../components/feature/CRMLayout';
import InterventionsTable from './components/InterventionsTable';

export default function InterventionsPage() {
  return (
    <CRMLayout>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">Interventions</h2>
        <p className="text-sm text-slate-500 mt-0.5">Maintenance, réparations et travaux sur les biens gérés</p>
      </div>
      <InterventionsTable onAdd={() => {}} />
    </CRMLayout>
  );
}
