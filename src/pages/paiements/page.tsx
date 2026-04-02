import CRMLayout from '../../components/feature/CRMLayout';
import PaiementsTable from './components/PaiementsTable';

export default function PaiementsPage() {
  return (
    <CRMLayout>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">Paiements &amp; Relances</h2>
        <p className="text-sm text-slate-500 mt-0.5">Suivi des encaissements, échéances et relances clients</p>
      </div>
      <PaiementsTable onAdd={() => {}} />
    </CRMLayout>
  );
}
