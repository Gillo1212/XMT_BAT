import { useState } from 'react';
import { mockInterventions } from '../../../mocks/interventions';

const statutColors: Record<string, string> = {
  'Planifiée': 'bg-amber-100 text-amber-700',
  'En cours': 'bg-teal-100 text-teal-700',
  'Terminée': 'bg-emerald-100 text-emerald-700',
  'Annulée': 'bg-slate-100 text-slate-500',
};

const prioriteColors: Record<string, string> = {
  'Basse': 'text-slate-400',
  'Normale': 'text-teal-600',
  'Haute': 'text-amber-600',
  'Urgente': 'text-rose-600',
};

const typeIcons: Record<string, string> = {
  'Maintenance': 'ri-tools-line',
  'Réparation': 'ri-hammer-line',
  'Inspection': 'ri-search-eye-line',
  'Travaux': 'ri-building-4-line',
};

interface InterventionsTableProps {
  onAdd: () => void;
}

export default function InterventionsTable({ onAdd }: InterventionsTableProps) {
  const [filterStatut, setFilterStatut] = useState('Tous');
  const [filterType, setFilterType] = useState('Tous');
  const [selected, setSelected] = useState<typeof mockInterventions[0] | null>(null);

  const statuts = ['Tous', 'Planifiée', 'En cours', 'Terminée'];
  const types = ['Tous', 'Maintenance', 'Réparation', 'Inspection', 'Travaux'];

  const filtered = mockInterventions.filter(i => {
    const matchStatut = filterStatut === 'Tous' || i.statut === filterStatut;
    const matchType = filterType === 'Tous' || i.type === filterType;
    return matchStatut && matchType;
  });

  const totalCout = filtered.reduce((s, i) => s + i.cout, 0);

  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          { label: 'Planifiées', count: mockInterventions.filter(i => i.statut === 'Planifiée').length, icon: 'ri-calendar-event-line', color: 'amber' },
          { label: 'En cours', count: mockInterventions.filter(i => i.statut === 'En cours').length, icon: 'ri-loader-2-line', color: 'teal' },
          { label: 'Terminées', count: mockInterventions.filter(i => i.statut === 'Terminée').length, icon: 'ri-checkbox-circle-line', color: 'emerald' },
          { label: 'Coût total', count: mockInterventions.reduce((s, i) => s + i.cout, 0), icon: 'ri-money-cny-circle-line', color: 'rose', isMoney: true },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl border border-slate-100 p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-5 h-5 flex items-center justify-center ${k.color === 'amber' ? 'text-amber-600' : k.color === 'teal' ? 'text-teal-600' : k.color === 'emerald' ? 'text-emerald-600' : 'text-rose-600'}`}>
                <i className={`${k.icon} text-sm`} />
              </span>
              <p className="text-xs text-slate-500">{k.label}</p>
            </div>
            <p className={`font-bold text-lg ${k.color === 'amber' ? 'text-amber-700' : k.color === 'teal' ? 'text-teal-700' : k.color === 'emerald' ? 'text-emerald-700' : 'text-rose-700'}`}>
              {k.isMoney ? `${k.count.toLocaleString('fr-FR')} FCFA` : k.count}
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-5">
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 flex-wrap">
              <div className="flex gap-1.5">
                {statuts.map(s => (
                  <button
                    key={s}
                    onClick={() => setFilterStatut(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      filterStatut === s ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <select
                value={filterType}
                onChange={e => setFilterType(e.target.value)}
                className="text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-600 focus:outline-none cursor-pointer"
              >
                {types.map(t => <option key={t}>{t}</option>)}
              </select>
              <button
                onClick={onAdd}
                className="ml-auto flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-add-line" /> Nouvelle intervention
              </button>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Référence</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Type</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Bien / Propriétaire</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Technicien</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Coût</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Priorité</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Statut</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(i => (
                  <tr
                    key={i.id}
                    onClick={() => setSelected(i)}
                    className={`border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors ${selected?.id === i.id ? 'bg-emerald-50' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{i.reference}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center text-slate-500">
                          <i className={`${typeIcons[i.type] ?? 'ri-settings-line'} text-sm`} />
                        </span>
                        <span className="text-xs text-slate-700">{i.type}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-slate-700 text-xs font-medium">{i.proprietaire}</p>
                      <p className="text-slate-400 text-xs truncate max-w-[140px]">{i.bien}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600">{i.technicien}</td>
                    <td className="px-4 py-3">
                      {i.cout > 0 ? (
                        <span className="font-semibold text-slate-800 text-xs">{i.cout.toLocaleString('fr-FR')} <span className="font-normal text-slate-400">FCFA</span></span>
                      ) : (
                        <span className="text-xs text-slate-400">Gratuit</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold ${prioriteColors[i.priorite]}`}>{i.priorite}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${statutColors[i.statut]}`}>
                        {i.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <div className="py-12 text-center text-slate-400">
                <i className="ri-tools-line text-3xl mb-2 block" />
                <p className="text-sm">Aucune intervention trouvée</p>
              </div>
            )}

            {filtered.length > 0 && (
              <div className="px-4 py-3 border-t border-slate-50 bg-slate-50/50 flex items-center justify-between">
                <span className="text-xs text-slate-500">{filtered.length} intervention(s) · Coût total filtré :</span>
                <span className="font-bold text-sm text-slate-800">{totalCout.toLocaleString('fr-FR')} FCFA</span>
              </div>
            )}
          </div>
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{selected.reference}</span>
                <button onClick={() => setSelected(null)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
                  <i className="ri-close-line" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${statutColors[selected.statut]}`}>{selected.statut}</span>
                <span className={`text-xs font-semibold ${prioriteColors[selected.priorite]}`}>· Priorité {selected.priorite}</span>
              </div>

              <div className="space-y-3 mt-4 text-sm">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Type</p>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-slate-500">
                      <i className={`${typeIcons[selected.type] ?? 'ri-settings-line'} text-sm`} />
                    </span>
                    <span className="text-slate-700 font-medium">{selected.type}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Description</p>
                  <p className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2 leading-relaxed">{selected.description}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Bien / Propriétaire</p>
                  <p className="text-xs text-slate-700 font-medium">{selected.proprietaire}</p>
                  <p className="text-xs text-slate-400">{selected.bien}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Technicien</p>
                  <p className="text-xs text-slate-700">{selected.technicien}</p>
                  <p className="text-xs text-slate-400">{selected.telephone}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Date</p>
                    <p className="text-xs text-slate-700">{new Date(selected.dateIntervention).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Coût</p>
                    <p className="font-bold text-slate-800 text-sm">{selected.cout > 0 ? `${selected.cout.toLocaleString('fr-FR')} FCFA` : 'Gratuit'}</p>
                  </div>
                </div>
                {selected.notes && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Notes</p>
                    <p className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2">{selected.notes}</p>
                  </div>
                )}
              </div>

              <div className="mt-4 space-y-2">
                {selected.statut !== 'Terminée' && (
                  <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                    <i className="ri-check-line" /> Marquer terminée
                  </button>
                )}
                <button className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-file-text-line" /> Rapport d&apos;intervention
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
