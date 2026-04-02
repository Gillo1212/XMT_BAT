import { useState } from "react";
import { mockDocuments } from "../../../mocks/documents";
import StatusBadge from "../../../components/base/StatusBadge";

const CATEGORIES = ["Toutes", "Contrat", "Devis", "Juridique", "KYC", "Paiement", "Technique"];

const iconMap: Record<string, string> = {
  "Contrat": "ri-file-paper-2-line",
  "Devis": "ri-money-dollar-box-line",
  "Juridique": "ri-scales-3-line",
  "KYC": "ri-shield-user-line",
  "Paiement": "ri-bank-card-line",
  "Technique": "ri-tools-line",
};

const colorMap: Record<string, string> = {
  "Contrat": "text-emerald-600 bg-emerald-50",
  "Devis": "text-amber-600 bg-amber-50",
  "Juridique": "text-teal-600 bg-teal-50",
  "KYC": "text-slate-600 bg-slate-100",
  "Paiement": "text-orange-600 bg-orange-50",
  "Technique": "text-rose-500 bg-rose-50",
};

export default function DocumentsTable() {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("Toutes");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = mockDocuments.filter((d) => {
    const matchSearch =
      d.nom.toLowerCase().includes(search.toLowerCase()) ||
      d.associe.toLowerCase().includes(search.toLowerCase());
    const matchCat = catFilter === "Toutes" || d.categorie === catFilter;
    return matchSearch && matchCat;
  });

  const selectedItem = mockDocuments.find((d) => d.id === selected);

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 mb-4 flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nom du document, entité associée..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-emerald-400 text-slate-700"
          />
        </div>

        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCatFilter(c)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${catFilter === c ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-400 ml-auto">{filtered.length} document(s)</span>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white rounded-xl border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Document</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Type</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Associé à</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Agent</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Taille</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Date</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Statut</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((d) => {
                const icon = iconMap[d.categorie] ?? "ri-file-line";
                const clr = colorMap[d.categorie] ?? "text-slate-600 bg-slate-100";
                return (
                  <tr
                    key={d.id}
                    onClick={() => setSelected(d.id === selected ? null : d.id)}
                    className={`cursor-pointer transition-colors hover:bg-slate-50 ${selected === d.id ? "bg-emerald-50/50" : ""}`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${clr}`}>
                          <i className={`${icon} text-sm`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 max-w-[200px] truncate">{d.nom}</p>
                          <p className="text-xs font-mono text-slate-400">{d.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{d.type}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600 max-w-[180px] truncate">{d.associe}</td>
                    <td className="px-4 py-3 text-xs text-slate-600">{d.agent}</td>
                    <td className="px-4 py-3 text-xs text-slate-500">{d.taille}</td>
                    <td className="px-4 py-3 text-xs text-slate-500">{new Date(d.date).toLocaleDateString("fr-FR")}</td>
                    <td className="px-4 py-3"><StatusBadge status={d.statut} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors cursor-pointer">
                          <i className="ri-download-2-line text-sm" />
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors cursor-pointer">
                          <i className="ri-share-line text-sm" />
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-md transition-colors cursor-pointer">
                          <i className="ri-delete-bin-line text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <i className="ri-file-text-line text-3xl mb-2" />
              <p className="text-sm">Aucun document trouvé</p>
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selectedItem && (
          <div className="w-80 flex-shrink-0 bg-white rounded-xl border border-slate-100 p-5 self-start">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800">{selectedItem.id}</h3>
              <button onClick={() => setSelected(null)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
                <i className="ri-close-line text-sm" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Nom</p>
                <p className="text-sm font-semibold text-slate-800">{selectedItem.nom}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Type</p>
                  <p className="text-sm text-slate-700">{selectedItem.type}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Catégorie</p>
                  <p className="text-sm text-slate-700">{selectedItem.categorie}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Associé à</p>
                <p className="text-sm text-slate-700">{selectedItem.associe}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Taille</p>
                  <p className="text-sm text-slate-700">{selectedItem.taille}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Date</p>
                  <p className="text-sm text-slate-700">{new Date(selectedItem.date).toLocaleDateString("fr-FR")}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Agent</p>
                <p className="text-sm font-semibold text-slate-700">{selectedItem.agent}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Statut</p>
                <StatusBadge status={selectedItem.statut} />
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1">
                <i className="ri-download-2-line" />
                Télécharger
              </button>
              <button className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1">
                <i className="ri-share-line" />
                Partager
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
