import CRMLayout from '../../components/feature/CRMLayout';
import FinancesContent from './components/FinancesContent';

export default function FinancesPage() {
  return (
    <CRMLayout addLabel="Nouvelle opération" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Finances &amp; Comptabilité</h2>
        <p className="text-sm text-slate-500 mt-0.5">Journal, bilan mensuel et gestion de la caisse</p>
      </div>
      <FinancesContent />
    </CRMLayout>
  );
}
