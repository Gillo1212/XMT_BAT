import CRMLayout from "../../components/feature/CRMLayout";
import VisitesTable from "./components/VisitesTable";

export default function VisitesPage() {
  return (
    <CRMLayout addLabel="Planifier une visite" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Visites</h2>
        <p className="text-sm text-slate-500 mt-0.5">Planification et historique de toutes les visites</p>
      </div>
      <VisitesTable />
    </CRMLayout>
  );
}
