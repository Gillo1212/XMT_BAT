import { useState } from 'react';
import { mockDevis } from '../../../mocks/devis';

const statutColors: Record<string, string> = {
  'Brouillon': 'bg-slate-100 text-slate-600',
  'Envoyé': 'bg-amber-100 text-amber-700',
  'Accepté': 'bg-emerald-100 text-emerald-700',
  'Refusé': 'bg-rose-100 text-rose-600',
};

interface DevisTableProps {
  onAdd: () => void;
}

export default function DevisTable({ onAdd }: DevisTableProps) {
  const [search, setSearch] = useState('');
  const [filterStatut, setFilterStatut] = useState('Tous');
  const [selected, setSelected] = useState<typeof mockDevis[0] | null>(null);

  const statuts = ['Tous', 'Brouillon', 'Envoyé', 'Accepté', 'Refusé'];

  const filtered = mockDevis.filter(d => {
    const matchSearch = d.client.toLowerCase().includes(search.toLowerCase()) ||
      d.reference.toLowerCase().includes(search.toLowerCase()) ||
      d.bien.toLowerCase().includes(search.toLowerCase());
    const matchStatut = filterStatut === 'Tous' || d.statut === filterStatut;
    return matchSearch && matchStatut;
  });

  return (
    <div className="flex gap-5">
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
          {/* Filters */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
            <div className="relative flex-1 max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-slate-400">
                <i className="ri-search-line text-sm" />
              </span>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher un devis..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-400 text-slate-700 placeholder-slate-300"
              />
            </div>
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
            <button
              onClick={onAdd}
              className="ml-auto flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-add-line" /> Nouveau devis
            </button>
          </div>

          {/* Table */}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Référence</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Client</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Bien / Type</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Montant</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Statut</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr
                  key={d.id}
                  onClick={() => setSelected(d)}
                  className={`border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors ${selected?.id === d.id ? 'bg-emerald-50' : ''}`}
                >
                  <td className="px-4 py-3">
                    <span className="font-mono text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{d.reference}</span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800 text-sm">{d.client}</p>
                    <p className="text-xs text-slate-400">{d.telephone}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-slate-700 text-xs">{d.type}</p>
                    <p className="text-slate-400 text-xs truncate max-w-[160px]">{d.bien}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-slate-800">{d.montant.toLocaleString('fr-FR')}</span>
                    <span className="text-xs text-slate-400 ml-1">FCFA</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${statutColors[d.statut]}`}>
                      {d.statut}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    {new Date(d.dateCreation).toLocaleDateString('fr-FR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <i className="ri-file-list-3-line text-3xl mb-2 block" />
              <p className="text-sm">Aucun devis trouvé</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="w-80 flex-shrink-0">
          <div className="bg-white rounded-xl border border-slate-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{selected.reference}</span>
              <button onClick={() => setSelected(null)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
                <i className="ri-close-line" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4 p-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                {selected.client.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{selected.client}</p>
                <p className="text-xs text-slate-500">{selected.telephone}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Type de devis</p>
                <p className="text-slate-700 font-medium">{selected.type}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Bien associé</p>
                <p className="text-slate-700 text-xs">{selected.bien}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Montant</p>
                  <p className="font-bold text-slate-800">{selected.montant.toLocaleString('fr-FR')} <span className="text-xs font-normal text-slate-500">FCFA</span></p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Statut</p>
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${statutColors[selected.statut]}`}>{selected.statut}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Créé le</p>
                  <p className="text-slate-700 text-xs">{new Date(selected.dateCreation).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Expire le</p>
                  <p className="text-slate-700 text-xs">{new Date(selected.dateExpiration).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Agent</p>
                <p className="text-slate-700 text-xs">{selected.agent}</p>
              </div>
              {selected.notes && (
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Notes</p>
                  <p className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2 leading-relaxed">{selected.notes}</p>
                </div>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-send-plane-line" /> Envoyer le devis
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-download-2-line" /> Télécharger PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
