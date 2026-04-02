import CRMLayout from '../../components/feature/CRMLayout';
import FemmesMenageContent from './components/FemmesMenageContent';

export default function FemmesMenagePage() {
  return (
    <CRMLayout addLabel="Nouvelle inscription" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Femmes de Ménage</h2>
        <p className="text-sm text-slate-500 mt-0.5">Annuaire, placements et suivi des paiements</p>
      </div>
      <FemmesMenageContent />
    </CRMLayout>
  );
}
