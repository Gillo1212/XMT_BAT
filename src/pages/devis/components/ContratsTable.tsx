import { useState } from 'react';
import { mockContrats } from '../../../mocks/devis';

const statutColors: Record<string, string> = {
  'Actif': 'bg-emerald-100 text-emerald-700',
  'En cours': 'bg-amber-100 text-amber-700',
  'Expiré': 'bg-slate-100 text-slate-500',
  'Résilié': 'bg-rose-100 text-rose-600',
};

const typeIcons: Record<string, string> = {
  'Bail commercial': 'ri-store-2-line',
  "Bail d'habitation": 'ri-home-heart-line',
  'Compromis de vente': 'ri-handshake-line',
  'Mandat de gestion': 'ri-user-settings-line',
  'Mandat de vente': 'ri-price-tag-3-line',
};

interface ContratsTableProps {
  onAdd: () => void;
}

export default function ContratsTable({ onAdd }: ContratsTableProps) {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('Tous');
  const [selected, setSelected] = useState<typeof mockContrats[0] | null>(null);

  const types = ['Tous', 'Bail commercial', "Bail d'habitation", 'Compromis de vente', 'Mandat de gestion', 'Mandat de vente'];

  const filtered = mockContrats.filter(c => {
    const matchSearch = c.client.toLowerCase().includes(search.toLowerCase()) ||
      c.reference.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === 'Tous' || c.type === filterType;
    return matchSearch && matchType;
  });

  return (
    <div className="flex gap-5">
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 flex-wrap">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-slate-400">
                <i className="ri-search-line text-sm" />
              </span>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="w-56 pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400 text-slate-700 placeholder-slate-300"
              />
            </div>
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-600 focus:outline-none focus:border-emerald-400 cursor-pointer"
            >
              {types.map(t => <option key={t}>{t}</option>)}
            </select>
            <button
              onClick={onAdd}
              className="ml-auto flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-add-line" /> Nouveau contrat
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Référence</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Type</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Client</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Bien</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Montant</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Statut</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors ${selected?.id === c.id ? 'bg-emerald-50' : ''}`}
                >
                  <td className="px-4 py-3">
                    <span className="font-mono text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">{c.reference}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-slate-400">
                        <i className={`${typeIcons[c.type] ?? 'ri-file-text-line'} text-sm`} />
                      </span>
                      <span className="text-xs text-slate-700 whitespace-nowrap">{c.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800 text-sm">{c.client}</p>
                    <p className="text-xs text-slate-400">{c.telephone}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500 max-w-[140px] truncate">{c.bien}</td>
                  <td className="px-4 py-3">
                    {c.montant > 0 ? (
                      <>
                        <span className="font-semibold text-slate-800">{c.montant.toLocaleString('fr-FR')}</span>
                        <span className="text-xs text-slate-400 ml-1">FCFA/{c.periodicite === 'Mensuel' ? 'mois' : c.periodicite}</span>
                      </>
                    ) : (
                      <span className="text-xs text-slate-400">Commission</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${statutColors[c.statut]}`}>
                      {c.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <i className="ri-file-text-3-line text-3xl mb-2 block" />
              <p className="text-sm">Aucun contrat trouvé</p>
            </div>
          )}
        </div>
      </div>

      {selected && (
        <div className="w-80 flex-shrink-0">
          <div className="bg-white rounded-xl border border-slate-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">{selected.reference}</span>
              <button onClick={() => setSelected(null)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
                <i className="ri-close-line" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4 p-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm">
                {selected.client.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{selected.client}</p>
                <p className="text-xs text-slate-500">{selected.telephone}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Type de contrat</p>
                <p className="text-slate-700 font-medium">{selected.type}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Bien</p>
                <p className="text-xs text-slate-700">{selected.bien}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Début</p>
                  <p className="text-xs text-slate-700">{new Date(selected.dateDebut).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Fin</p>
                  <p className="text-xs text-slate-700">{new Date(selected.dateFin).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
              {selected.montant > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Montant</p>
                    <p className="font-bold text-slate-800 text-sm">{selected.montant.toLocaleString('fr-FR')} <span className="text-xs font-normal text-slate-400">FCFA</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Caution</p>
                    <p className="text-xs text-slate-700">{selected.caution > 0 ? `${selected.caution.toLocaleString('fr-FR')} FCFA` : 'Sans'}</p>
                  </div>
                </div>
              )}
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Statut</p>
                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${statutColors[selected.statut]}`}>{selected.statut}</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Agent responsable</p>
                <p className="text-xs text-slate-700">{selected.agent}</p>
              </div>
              {selected.notes && (
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Notes</p>
                  <p className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2 leading-relaxed">{selected.notes}</p>
                </div>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <button className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-download-2-line" /> Télécharger contrat
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-edit-line" /> Modifier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
