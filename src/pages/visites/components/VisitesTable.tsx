import { useState } from "react";
import { mockVisites } from "../../../mocks/visites";
import StatusBadge from "../../../components/base/StatusBadge";

const AGENTS = ["Tous", "Khalil Sarr", "Sokhna Dieng", "Pape Ngor Ba"];
const STATUTS = ["Tous", "Planifiée", "Réalisée", "Annulée"];

export default function VisitesTable() {
  const [search, setSearch] = useState("");
  const [agentFilter, setAgentFilter] = useState("Tous");
  const [statutFilter, setStatutFilter] = useState("Tous");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = mockVisites.filter((v) => {
    const matchSearch =
      v.client.toLowerCase().includes(search.toLowerCase()) ||
      v.bien.toLowerCase().includes(search.toLowerCase());
    const matchAgent = agentFilter === "Tous" || v.agent === agentFilter;
    const matchStatut = statutFilter === "Tous" || v.statut === statutFilter;
    return matchSearch && matchAgent && matchStatut;
  });

  const selectedItem = mockVisites.find((v) => v.id === selected);

  const statutCounts = {
    Planifiée: mockVisites.filter((v) => v.statut === "Planifiée").length,
    Réalisée: mockVisites.filter((v) => v.statut === "Réalisée").length,
    Annulée: mockVisites.filter((v) => v.statut === "Annulée").length,
  };

  return (
    <div>
      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[
          { label: "Planifiées", count: statutCounts.Planifiée, icon: "ri-calendar-line", bg: "bg-teal-50", text: "text-teal-700", iconColor: "text-teal-600" },
          { label: "Réalisées", count: statutCounts.Réalisée, icon: "ri-checkbox-circle-line", bg: "bg-emerald-50", text: "text-emerald-700", iconColor: "text-emerald-600" },
          { label: "Annulées", count: statutCounts.Annulée, icon: "ri-close-circle-line", bg: "bg-rose-50", text: "text-rose-600", iconColor: "text-rose-500" },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} rounded-xl p-4 flex items-center gap-3 border border-white`}>
            <div className="w-9 h-9 flex items-center justify-center bg-white/70 rounded-lg">
              <i className={`${s.icon} text-lg ${s.iconColor}`} />
            </div>
            <div>
              <p className={`text-2xl font-bold ${s.text}`}>{s.count}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 mb-4 flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Client, bien..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-emerald-400 text-slate-700"
          />
        </div>

        <select
          value={agentFilter}
          onChange={(e) => setAgentFilter(e.target.value)}
          className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus:outline-none focus:border-emerald-400 text-slate-700 cursor-pointer"
        >
          {AGENTS.map((a) => <option key={a}>{a}</option>)}
        </select>

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

        <span className="text-xs text-slate-400 ml-auto">{filtered.length} visite(s)</span>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white rounded-xl border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Réf.</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Bien</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Client</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Date & Heure</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Agent</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Statut</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((v) => (
                <tr
                  key={v.id}
                  onClick={() => setSelected(v.id === selected ? null : v.id)}
                  className={`cursor-pointer transition-colors hover:bg-slate-50 ${selected === v.id ? "bg-emerald-50/50" : ""}`}
                >
                  <td className="px-4 py-3 text-xs font-mono text-slate-500">{v.id}</td>
                  <td className="px-4 py-3 text-xs text-slate-700 max-w-[180px] truncate">{v.bien}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{v.client}</p>
                      <p className="text-xs text-slate-400">{v.telephone}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-slate-700">{new Date(v.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}</p>
                    <p className="text-xs text-slate-400">{v.heure}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600">{v.agent}</td>
                  <td className="px-4 py-3"><StatusBadge status={v.statut} /></td>
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
              <i className="ri-calendar-check-line text-3xl mb-2" />
              <p className="text-sm">Aucune visite trouvée</p>
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
                <p className="text-xs text-slate-400 mb-0.5">Bien visité</p>
                <p className="text-sm font-semibold text-slate-800">{selectedItem.bien}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Client</p>
                <p className="text-sm font-semibold text-slate-800">{selectedItem.client}</p>
                <p className="text-xs text-slate-500">{selectedItem.telephone}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Date</p>
                  <p className="text-sm font-medium text-slate-700">{new Date(selectedItem.date).toLocaleDateString("fr-FR")}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Heure</p>
                  <p className="text-sm font-medium text-slate-700">{selectedItem.heure}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Agent responsable</p>
                <p className="text-sm font-semibold text-slate-700">{selectedItem.agent}</p>
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
                Compte-rendu
              </button>
              <button className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer">
                Reprogrammer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
