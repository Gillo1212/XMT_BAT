import CRMLayout from "../../components/feature/CRMLayout";
import DocumentsTable from "./components/DocumentsTable";

export default function DocumentsPage() {
  return (
    <CRMLayout addLabel="Ajouter un document" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Documents</h2>
        <p className="text-sm text-slate-500 mt-0.5">Gestion centralisée de tous les documents liés aux opérations</p>
      </div>
      <DocumentsTable />
    </CRMLayout>
  );
}
