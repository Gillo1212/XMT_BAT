import { useState } from "react";
import { mockDemandes } from "../../../mocks/demandes";
import StatusBadge from "../../../components/base/StatusBadge";

const TYPES = ["Tous", "Location", "Vente", "Construction", "Gestion"];
const STATUTS = ["Tous", "Nouveau", "En cours", "Clôturé"];

interface Props {
  onAdd: () => void;
}

export default function DemandesTable({ onAdd }: Props) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [statutFilter, setStatutFilter] = useState("Tous");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = mockDemandes.filter((d) => {
    const matchSearch = d.client.toLowerCase().includes(search.toLowerCase()) || d.id.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "Tous" || d.type === typeFilter;
    const matchStatut = statutFilter === "Tous" || d.statut === statutFilter;
    return matchSearch && matchType && matchStatut;
  });

  const selectedItem = mockDemandes.find((d) => d.id === selected);

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 mb-4 flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un client, une référence..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-emerald-400 text-slate-700"
          />
        </div>

        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${typeFilter === t ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
          {STATUTS.map((s) => (
            <button
              key={s}
              onClick={() => setStatutFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${statutFilter === s ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              {s}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-400 ml-auto">{filtered.length} résultat(s)</span>
      </div>

      <div className="flex gap-4">
        {/* Table */}
        <div className="flex-1 bg-white rounded-xl border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Réf.</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Client</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Type</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Bien</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Date</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Statut</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((d) => (
                <tr
                  key={d.id}
                  onClick={() => setSelected(d.id === selected ? null : d.id)}
                  className={`cursor-pointer transition-colors hover:bg-slate-50 ${selected === d.id ? "bg-emerald-50/50" : ""}`}
                >
                  <td className="px-4 py-3 text-xs font-mono text-slate-500">{d.id}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{d.client}</p>
                      <p className="text-xs text-slate-400">{d.telephone}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{d.type}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600 max-w-[160px] truncate">{d.bien}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{new Date(d.date).toLocaleDateString("fr-FR")}</td>
                  <td className="px-4 py-3"><StatusBadge status={d.statut} /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors cursor-pointer">
                        <i className="ri-eye-line text-sm" />
                      </button>
                      <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors cursor-pointer">
                        <i className="ri-edit-line text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <i className="ri-inbox-line text-3xl mb-2" />
              <p className="text-sm">Aucune demande trouvée</p>
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
                <p className="text-xs text-slate-400 mb-0.5">Client</p>
                <p className="text-sm font-semibold text-slate-800">{selectedItem.client}</p>
                <p className="text-xs text-slate-500">{selectedItem.telephone}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Type</p>
                  <p className="text-sm font-medium text-slate-700">{selectedItem.type}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Source</p>
                  <p className="text-sm font-medium text-slate-700">{selectedItem.source}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Budget</p>
                <p className="text-sm font-semibold text-emerald-700">{selectedItem.budget}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Bien souhaité</p>
                <p className="text-sm text-slate-700">{selectedItem.bien}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Statut</p>
                <StatusBadge status={selectedItem.statut} />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Notes</p>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-lg p-3">{selectedItem.notes}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer">
                Traiter
              </button>
              <button className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer">
                Modifier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
