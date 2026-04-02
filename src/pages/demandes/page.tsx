import CRMLayout from "../../components/feature/CRMLayout";
import DemandesTable from "./components/DemandesTable";

export default function DemandesPage() {
  return (
    <CRMLayout addLabel="Nouvelle demande" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Demandes entrantes</h2>
        <p className="text-sm text-slate-500 mt-0.5">Historique et suivi de toutes les demandes clients</p>
      </div>
      <DemandesTable onAdd={() => {}} />
    </CRMLayout>
  );
}
