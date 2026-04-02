import { useState } from 'react';
import { mockPaiements, mockRelances } from '../../../mocks/paiements';

const payStatutColors: Record<string, string> = {
  'Reçu': 'bg-emerald-100 text-emerald-700',
  'En attente': 'bg-amber-100 text-amber-700',
  'Retard': 'bg-rose-100 text-rose-600',
};

const relStatutColors: Record<string, string> = {
  'Envoyée': 'bg-teal-100 text-teal-700',
  'Effectuée': 'bg-emerald-100 text-emerald-700',
  'Planifiée': 'bg-amber-100 text-amber-700',
};

const typeColors: Record<string, string> = {
  'Loyer': 'bg-emerald-50 text-emerald-700',
  'Caution': 'bg-teal-50 text-teal-700',
  'Commission agence': 'bg-amber-50 text-amber-700',
  'Acompte vente': 'bg-violet-50 text-violet-700',
  'Travaux': 'bg-rose-50 text-rose-700',
};

interface PaiementsTableProps {
  onAdd: () => void;
}

export default function PaiementsTable({ onAdd }: PaiementsTableProps) {
  const [activeTab, setActiveTab] = useState<'paiements' | 'relances'>('paiements');
  const [filterStatut, setFilterStatut] = useState('Tous');
  const [selected, setSelected] = useState<typeof mockPaiements[0] | null>(null);

  const statuts = ['Tous', 'Reçu', 'En attente', 'Retard'];

  const filteredPaiements = mockPaiements.filter(p => {
    return filterStatut === 'Tous' || p.statut === filterStatut;
  });

  const totalRecu = mockPaiements.filter(p => p.statut === 'Reçu').reduce((s, p) => s + p.montant, 0);
  const totalAttente = mockPaiements.filter(p => p.statut === 'En attente').reduce((s, p) => s + p.montant, 0);
  const totalRetard = mockPaiements.filter(p => p.statut === 'Retard').reduce((s, p) => s + p.montant, 0);

  return (
    <div>
      {/* KPI Row */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          { label: 'Encaissé ce mois', value: totalRecu, icon: 'ri-check-double-line', color: 'emerald' },
          { label: 'En attente', value: totalAttente, icon: 'ri-time-line', color: 'amber' },
          { label: 'En retard', value: totalRetard, icon: 'ri-error-warning-line', color: 'rose' },
        ].map(k => (
          <div key={k.label} className={`bg-white rounded-xl border p-4 ${k.color === 'emerald' ? 'border-emerald-100' : k.color === 'amber' ? 'border-amber-100' : 'border-rose-100'}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-5 h-5 flex items-center justify-center ${k.color === 'emerald' ? 'text-emerald-600' : k.color === 'amber' ? 'text-amber-600' : 'text-rose-600'}`}>
                <i className={`${k.icon} text-sm`} />
              </span>
              <p className="text-xs text-slate-500">{k.label}</p>
            </div>
            <p className={`font-bold text-lg ${k.color === 'emerald' ? 'text-emerald-700' : k.color === 'amber' ? 'text-amber-700' : 'text-rose-700'}`}>
              {k.value.toLocaleString('fr-FR')} <span className="text-xs font-normal">FCFA</span>
            </p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit mb-5">
        {(['paiements', 'relances'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab === 'paiements' ? 'Paiements' : 'Relances'}
            <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${activeTab === tab ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
              {tab === 'paiements' ? mockPaiements.length : mockRelances.length}
            </span>
          </button>
        ))}
      </div>

      <div className="flex gap-5">
        <div className="flex-1 min-w-0">
          {activeTab === 'paiements' && (
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
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
                  <i className="ri-add-line" /> Enregistrer
                </button>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Référence</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Client</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Type</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Montant</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Échéance</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPaiements.map(p => (
                    <tr
                      key={p.id}
                      onClick={() => setSelected(p)}
                      className={`border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors ${selected?.id === p.id ? 'bg-emerald-50' : ''}`}
                    >
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs text-slate-500">{p.reference}</span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-800 text-sm">{p.client}</p>
                        <p className="text-xs text-slate-400 truncate max-w-[120px]">{p.bien}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[p.type] ?? 'bg-slate-100 text-slate-600'}`}>
                          {p.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-semibold text-slate-800">{p.montant.toLocaleString('fr-FR')}</span>
                        <span className="text-xs text-slate-400 ml-1">FCFA</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500">
                        {new Date(p.dateEcheance).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${payStatutColors[p.statut]}`}>
                          {p.statut}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'relances' && (
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-700">{mockRelances.length} relances enregistrées</p>
                <button className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-add-line" /> Nouvelle relance
                </button>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Client</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Bien</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Montant</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Type</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {mockRelances.map(r => (
                    <tr key={r.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-800 text-sm">{r.client}</p>
                        <p className="text-xs text-slate-400">{r.telephone}</p>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500 max-w-[120px] truncate">{r.bien}</td>
                      <td className="px-4 py-3">
                        <span className="font-semibold text-slate-800">{r.montant.toLocaleString('fr-FR')}</span>
                        <span className="text-xs text-slate-400 ml-1">FCFA</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 flex items-center justify-center text-slate-500">
                            <i className={`${r.typeRelance === 'SMS' ? 'ri-message-2-line' : r.typeRelance === 'Appel' ? 'ri-phone-line' : r.typeRelance === 'Email' ? 'ri-mail-line' : 'ri-mail-open-line'} text-xs`} />
                          </span>
                          <span className="text-xs text-slate-600">{r.typeRelance}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500">{new Date(r.dateRelance).toLocaleDateString('fr-FR')}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${relStatutColors[r.statut]}`}>
                          {r.statut}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail panel */}
        {activeTab === 'paiements' && selected && (
          <div className="w-72 flex-shrink-0">
            <div className="bg-white rounded-xl border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{selected.reference}</span>
                <button onClick={() => setSelected(null)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
                  <i className="ri-close-line" />
                </button>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Client</p>
                  <p className="font-semibold text-slate-800">{selected.client}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Bien</p>
                  <p className="text-xs text-slate-600">{selected.bien}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Montant</p>
                    <p className="font-bold text-slate-800">{selected.montant.toLocaleString('fr-FR')} <span className="text-xs font-normal text-slate-400">FCFA</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Statut</p>
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${payStatutColors[selected.statut]}`}>{selected.statut}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Échéance</p>
                  <p className="text-xs text-slate-700">{new Date(selected.dateEcheance).toLocaleDateString('fr-FR')}</p>
                </div>
                {selected.datePaiement && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Date de paiement</p>
                    <p className="text-xs text-slate-700">{new Date(selected.datePaiement).toLocaleDateString('fr-FR')}</p>
                  </div>
                )}
                {selected.mode && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Mode</p>
                    <p className="text-xs text-slate-700">{selected.mode}</p>
                  </div>
                )}
                {selected.notes && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Notes</p>
                    <p className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2">{selected.notes}</p>
                  </div>
                )}
              </div>
              {selected.statut !== 'Reçu' && (
                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-check-line" /> Marquer comme reçu
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
