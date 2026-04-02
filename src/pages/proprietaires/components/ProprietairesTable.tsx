import { useState } from "react";
import { mockProprietaires } from "../../../mocks/proprietaires";
import StatusBadge from "../../../components/base/StatusBadge";

const TYPES = ["Tous", "Particulier", "Société"];
const STATUTS = ["Tous", "Actif", "Inactif"];

export default function ProprietairesTable() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [statutFilter, setStatutFilter] = useState("Tous");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = mockProprietaires.filter((p) => {
    const matchSearch =
      p.nom.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.telephone.includes(search);
    const matchType = typeFilter === "Tous" || p.typeClient === typeFilter;
    const matchStatut = statutFilter === "Tous" || p.statut === statutFilter;
    return matchSearch && matchType && matchStatut;
  });

  const selectedItem = mockProprietaires.find((p) => p.id === selected);

  const initials = (nom: string) =>
    nom
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 mb-4 flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nom, email, téléphone..."
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

        <span className="text-xs text-slate-400 ml-auto">{filtered.length} propriétaire(s)</span>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white rounded-xl border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Propriétaire</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Téléphone</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Email</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Type</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Biens</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Depuis</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Statut</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => setSelected(p.id === selected ? null : p.id)}
                  className={`cursor-pointer transition-colors hover:bg-slate-50 ${selected === p.id ? "bg-emerald-50/50" : ""}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {initials(p.nom)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{p.nom}</p>
                        <p className="text-xs text-slate-400">{p.adresse}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600">{p.telephone}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 max-w-[180px] truncate">{p.email}</td>
                  <td className="px-4 py-3"><StatusBadge status={p.typeClient} showDot={false} /></td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-bold text-slate-800">{p.nbBiens}</span>
                    <span className="text-xs text-slate-400 ml-1">bien(s)</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    {new Date(p.dateEntree).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}
                  </td>
                  <td className="px-4 py-3"><StatusBadge status={p.statut} /></td>
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
              <i className="ri-user-3-line text-3xl mb-2" />
              <p className="text-sm">Aucun propriétaire trouvé</p>
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selectedItem && (
          <div className="w-80 flex-shrink-0 bg-white rounded-xl border border-slate-100 p-5 self-start">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold">
                  {initials(selectedItem.nom)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{selectedItem.nom}</h3>
                  <p className="text-xs text-slate-400">{selectedItem.id}</p>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
                <i className="ri-close-line text-sm" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Téléphone</p>
                <p className="text-sm font-medium text-slate-700">{selectedItem.telephone}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Email</p>
                <p className="text-sm text-slate-700 truncate">{selectedItem.email}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Adresse</p>
                <p className="text-sm text-slate-700">{selectedItem.adresse}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Type</p>
                  <StatusBadge status={selectedItem.typeClient} showDot={false} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Nb biens</p>
                  <p className="text-lg font-bold text-emerald-600">{selectedItem.nbBiens}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Notes</p>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-lg p-3">{selectedItem.notes}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer">
                Voir les biens
              </button>
              <button className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer">
                Contacter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
