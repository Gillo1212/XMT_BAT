import CRMLayout from "../../components/feature/CRMLayout";
import BiensTable from "./components/BiensTable";

export default function BiensPage() {
  return (
    <CRMLayout addLabel="Ajouter un bien" onAdd={() => {}}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Biens immobiliers</h2>
        <p className="text-sm text-slate-500 mt-0.5">Portefeuille complet des biens gérés par XMT GROUPE</p>
      </div>
      <BiensTable />
    </CRMLayout>
  );
}
