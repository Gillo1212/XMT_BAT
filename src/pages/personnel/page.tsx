import CRMLayout from '../../components/feature/CRMLayout';
import PersonnelContent from './components/PersonnelContent';

export default function PersonnelPage() {
  return (
    <CRMLayout addLabel="Nouvel employé" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Personnel &amp; Salaires</h2>
        <p className="text-sm text-slate-500 mt-0.5">Gestion des employés, contrats et fiches de paie</p>
      </div>
      <PersonnelContent />
    </CRMLayout>
  );
}
