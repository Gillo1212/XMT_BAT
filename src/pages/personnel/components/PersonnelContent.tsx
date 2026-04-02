import { useState } from 'react';
import { mockPersonnel, mockFichesPaie } from '../../../mocks/personnel';

type TabType = 'employes' | 'salaires';

const deptColor: Record<string, string> = {
  'Direction': 'bg-amber-100 text-amber-700',
  'Finance': 'bg-teal-100 text-teal-700',
  'Administration': 'bg-sky-100 text-sky-700',
  'Marketing': 'bg-rose-100 text-rose-700',
  'Commercial': 'bg-emerald-100 text-emerald-700',
  'Technique': 'bg-orange-100 text-orange-700',
};

export default function PersonnelContent() {
  const [activeTab, setActiveTab] = useState<TabType>('employes');
  const [selectedEmp, setSelectedEmp] = useState<typeof mockPersonnel[0] | null>(null);
  const [search, setSearch] = useState('');

  const filteredEmp = mockPersonnel.filter(e =>
    e.nom.toLowerCase().includes(search.toLowerCase()) ||
    e.poste.toLowerCase().includes(search.toLowerCase()) ||
    e.departement.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPaie = mockFichesPaie.filter(f =>
    f.employe.toLowerCase().includes(search.toLowerCase())
  );

  const totalSalaires = mockFichesPaie.reduce((s, f) => s + f.netAPayer, 0);
  const totalPayes = mockFichesPaie.filter(f => f.statut === 'Payé').reduce((s, f) => s + f.netAPayer, 0);
  const totalEnAttente = mockFichesPaie.filter(f => f.statut === 'En attente').reduce((s, f) => s + f.netAPayer, 0);

  return (
    <div>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Effectif total', value: mockPersonnel.length, icon: 'ri-team-line', color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Masse salariale', value: `${(totalSalaires / 1000).toFixed(0)}K FCFA`, icon: 'ri-money-cny-circle-line', color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Salaires versés', value: `${(totalPayes / 1000).toFixed(0)}K FCFA`, icon: 'ri-checkbox-circle-line', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'En attente', value: `${(totalEnAttente / 1000).toFixed(0)}K FCFA`, icon: 'ri-time-line', color: 'text-rose-500', bg: 'bg-rose-50' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl border border-slate-100 p-4">
            <div className={`w-9 h-9 rounded-lg ${kpi.bg} flex items-center justify-center mb-3`}>
              <i className={`${kpi.icon} ${kpi.color} text-lg`} />
            </div>
            <p className="text-xl font-bold text-slate-800">{kpi.value}</p>
            <p className="text-xs text-slate-400 mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-100">
        <div className="flex items-center gap-1 p-4 border-b border-slate-100">
          {([['employes', 'Employés'], ['salaires', 'Fiches de paie']] as [TabType, string][]).map(([tab, label]) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === tab ? 'bg-amber-500 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>
              {label}
            </button>
          ))}
          <div className="ml-auto">
            <div className="relative">
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..." className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-amber-400 w-44" />
            </div>
          </div>
        </div>

        {activeTab === 'employes' && (
          <div className="flex">
            <div className={`flex-1 overflow-x-auto ${selectedEmp ? 'border-r border-slate-100' : ''}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    {['Employé', 'Poste', 'Département', 'Téléphone', 'Email', 'Embauche', 'Contrat', 'Salaire', 'Statut'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredEmp.map(e => (
                    <tr key={e.id} onClick={() => setSelectedEmp(selectedEmp?.id === e.id ? null : e)}
                      className={`border-b border-slate-50 hover:bg-amber-50/50 cursor-pointer transition-colors ${selectedEmp?.id === e.id ? 'bg-amber-50' : ''}`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">{e.avatar}</div>
                          <span className="font-medium text-slate-700 text-xs whitespace-nowrap">{e.nom}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-600 whitespace-nowrap">{e.poste}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${deptColor[e.departement] ?? 'bg-slate-100 text-slate-500'}`}>{e.departement}</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{e.telephone}</td>
                      <td className="px-4 py-3 text-xs text-slate-500">{e.email}</td>
                      <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{e.dateEmbauche}</td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${e.typeContrat === 'CDI' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>{e.typeContrat}</span></td>
                      <td className="px-4 py-3 text-xs font-semibold text-slate-700 whitespace-nowrap">{e.salaire.toLocaleString('fr-FR')} FCFA</td>
                      <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">{e.statut}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {selectedEmp && (
              <div className="w-72 p-5 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-800">Fiche employé</h3>
                  <button onClick={() => setSelectedEmp(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><i className="ri-close-line" /></button>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">{selectedEmp.avatar}</div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{selectedEmp.nom}</p>
                    <p className="text-xs text-slate-500">{selectedEmp.poste}</p>
                    <span className={`mt-1 inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${deptColor[selectedEmp.departement]}`}>{selectedEmp.departement}</span>
                  </div>
                </div>
                {[['Téléphone', selectedEmp.telephone], ['Email', selectedEmp.email], ['Date embauche', selectedEmp.dateEmbauche], ['Type contrat', selectedEmp.typeContrat], ['Salaire brut', `${selectedEmp.salaire.toLocaleString('fr-FR')} FCFA`], ['Statut', selectedEmp.statut]].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center border-b border-slate-100 py-2">
                    <span className="text-xs text-slate-400">{k}</span>
                    <span className="text-xs font-medium text-slate-700">{v}</span>
                  </div>
                ))}
                <div className="flex gap-2 pt-3">
                  <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                    <i className="ri-file-text-line mr-1" />Fiche de paie
                  </button>
                  <button className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                    <i className="ri-edit-line mr-1" />Modifier
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'salaires' && (
          <div>
            <div className="flex items-center justify-between px-5 py-3 bg-amber-50/50 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-2-line text-amber-600" />
                <span className="text-xs font-semibold text-slate-700">Période : Mars 2026</span>
              </div>
              <button className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-send-plane-line mr-1" />Tout payer ({totalEnAttente.toLocaleString('fr-FR')} FCFA)
              </button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  {['Employé', 'Poste', 'Salaire base', 'Primes', 'Déductions', 'Net à payer', 'Date virement', 'Statut'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredPaie.map(f => (
                  <tr key={f.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700">
                          {f.employe.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <span className="font-medium text-slate-700 text-xs whitespace-nowrap">{f.employe}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">{f.poste}</td>
                    <td className="px-4 py-3 text-xs text-slate-600">{f.salaireBase.toLocaleString('fr-FR')} FCFA</td>
                    <td className="px-4 py-3 text-xs text-emerald-600 font-medium">+{f.primes.toLocaleString('fr-FR')} FCFA</td>
                    <td className="px-4 py-3 text-xs text-rose-500 font-medium">-{f.deductions.toLocaleString('fr-FR')} FCFA</td>
                    <td className="px-4 py-3 text-xs font-bold text-slate-800">{f.netAPayer.toLocaleString('fr-FR')} FCFA</td>
                    <td className="px-4 py-3 text-xs text-slate-500">{f.dateVirement ?? <span className="text-slate-300">—</span>}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${f.statut === 'Payé' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{f.statut}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
