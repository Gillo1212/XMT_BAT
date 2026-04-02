import CRMLayout from "../../components/feature/CRMLayout";
import ProprietairesTable from "./components/ProprietairesTable";

export default function ProprietairesPage() {
  return (
    <CRMLayout addLabel="Nouveau propriétaire" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Propriétaires</h2>
        <p className="text-sm text-slate-500 mt-0.5">Base de données des propriétaires partenaires</p>
      </div>
      <ProprietairesTable />
    </CRMLayout>
  );
}
