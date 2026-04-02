import { useState } from 'react';
import { mockContratsLocation, mockLoyersLoyer, mockLocataires } from '../../../mocks/locations';

type TabType = 'contrats' | 'loyers' | 'locataires';

const statutContratColor: Record<string, string> = {
  'Actif': 'bg-emerald-100 text-emerald-700',
  'Renouvellement': 'bg-amber-100 text-amber-700',
  'Préavis': 'bg-orange-100 text-orange-700',
  'Terminé': 'bg-slate-100 text-slate-500',
};

const statutLoyerColor: Record<string, string> = {
  'Payé': 'bg-emerald-100 text-emerald-700',
  'En attente': 'bg-amber-100 text-amber-700',
  'En retard': 'bg-rose-100 text-rose-700',
};

export default function LocationsTable() {
  const [activeTab, setActiveTab] = useState<TabType>('contrats');
  const [search, setSearch] = useState('');
  const [selectedContrat, setSelectedContrat] = useState<typeof mockContratsLocation[0] | null>(null);

  const filteredContrats = mockContratsLocation.filter(c =>
    c.locataire.toLowerCase().includes(search.toLowerCase()) ||
    c.bien.toLowerCase().includes(search.toLowerCase()) ||
    c.reference.toLowerCase().includes(search.toLowerCase())
  );

  const filteredLoyers = mockLoyersLoyer.filter(l =>
    l.locataire.toLowerCase().includes(search.toLowerCase()) ||
    l.bien.toLowerCase().includes(search.toLowerCase())
  );

  const filteredLocataires = mockLocataires.filter(loc =>
    loc.nom.toLowerCase().includes(search.toLowerCase()) ||
    loc.telephone.includes(search)
  );

  const totalLoyersMois = mockLoyersLoyer.reduce((s, l) => s + l.montant, 0);
  const totalPayes = mockLoyersLoyer.filter(l => l.statut === 'Payé').reduce((s, l) => s + l.montant, 0);
  const totalRetard = mockLoyersLoyer.filter(l => l.statut === 'En retard').reduce((s, l) => s + l.montant, 0);
  const contratsActifs = mockContratsLocation.filter(c => c.statut === 'Actif').length;

  return (
    <div>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Contrats actifs', value: contratsActifs, icon: 'ri-file-text-line', color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Loyers du mois', value: `${(totalLoyersMois / 1000000).toFixed(1)}M FCFA`, icon: 'ri-money-cny-circle-line', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Encaissés', value: `${(totalPayes / 1000).toFixed(0)}K FCFA`, icon: 'ri-checkbox-circle-line', color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'En retard', value: `${(totalRetard / 1000).toFixed(0)}K FCFA`, icon: 'ri-alarm-warning-line', color: 'text-rose-600', bg: 'bg-rose-50' },
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

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-slate-100">
        <div className="flex items-center gap-1 p-4 border-b border-slate-100">
          {([['contrats', 'Contrats'], ['loyers', 'Suivi loyers'], ['locataires', 'Locataires']] as [TabType, string][]).map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab ? 'bg-amber-500 text-white' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-amber-400 w-48"
              />
            </div>
          </div>
        </div>

        {/* Contrats tab */}
        {activeTab === 'contrats' && (
          <div className="flex">
            <div className={`flex-1 overflow-x-auto ${selectedContrat ? 'border-r border-slate-100' : ''}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    {['Référence', 'Locataire', 'Bien', 'Type', 'Loyer/mois', 'Période', 'Agent', 'Statut'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredContrats.map(c => (
                    <tr
                      key={c.id}
                      onClick={() => setSelectedContrat(selectedContrat?.id === c.id ? null : c)}
                      className={`border-b border-slate-50 hover:bg-amber-50/50 cursor-pointer transition-colors ${selectedContrat?.id === c.id ? 'bg-amber-50' : ''}`}
                    >
                      <td className="px-4 py-3 font-mono text-xs text-amber-600">{c.reference}</td>
                      <td className="px-4 py-3 font-medium text-slate-700">{c.locataire}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs max-w-36 truncate">{c.bien}</td>
                      <td className="px-4 py-3 text-xs text-slate-500">{c.typeContrat}</td>
                      <td className="px-4 py-3 font-semibold text-slate-700">{c.loyer.toLocaleString('fr-FR')} <span className="text-xs text-slate-400 font-normal">FCFA</span></td>
                      <td className="px-4 py-3 text-xs text-slate-500">{c.dateDebut} → {c.dateFin}</td>
                      <td className="px-4 py-3 text-xs text-slate-500">{c.agentSuivi}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statutContratColor[c.statut] ?? 'bg-slate-100 text-slate-500'}`}>{c.statut}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedContrat && (
              <div className="w-72 p-5 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-800">Détail contrat</h3>
                  <button onClick={() => setSelectedContrat(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                    <i className="ri-close-line" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-xs text-amber-600 font-semibold">{selectedContrat.reference}</p>
                    <p className="text-sm font-bold text-slate-800 mt-1">{selectedContrat.locataire}</p>
                    <span className={`mt-1 inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${statutContratColor[selectedContrat.statut]}`}>{selectedContrat.statut}</span>
                  </div>
                  {[
                    ['Bien', selectedContrat.bien],
                    ['Type', selectedContrat.typeContrat],
                    ['Loyer', `${selectedContrat.loyer.toLocaleString('fr-FR')} FCFA/mois`],
                    ['Caution', `${selectedContrat.caution.toLocaleString('fr-FR')} FCFA`],
                    ['Durée', `${selectedContrat.duree} mois`],
                    ['Début', selectedContrat.dateDebut],
                    ['Fin', selectedContrat.dateFin],
                    ['Prochain loyer', selectedContrat.prochainLoyer],
                    ['Agent suivi', selectedContrat.agentSuivi],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-start border-b border-slate-100 pb-2">
                      <span className="text-xs text-slate-400">{label}</span>
                      <span className="text-xs font-medium text-slate-700 text-right max-w-36">{val}</span>
                    </div>
                  ))}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                      <i className="ri-file-text-line mr-1" />Renouveler
                    </button>
                    <button className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                      <i className="ri-printer-line mr-1" />Imprimer
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Loyers tab */}
        {activeTab === 'loyers' && (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                {['Locataire', 'Bien', 'Mois', 'Montant', 'Échéance', 'Paiement', 'Mode', 'Statut'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredLoyers.map(l => (
                <tr key={l.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700">{l.locataire}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 max-w-36 truncate">{l.bien}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{l.mois}</td>
                  <td className="px-4 py-3 font-semibold text-slate-700">{l.montant.toLocaleString('fr-FR')} <span className="text-xs text-slate-400 font-normal">FCFA</span></td>
                  <td className="px-4 py-3 text-xs text-slate-500">{l.dateEcheance}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{l.datePaiement ?? <span className="text-rose-400">—</span>}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{l.modePaiement ?? '—'}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statutLoyerColor[l.statut] ?? 'bg-slate-100 text-slate-500'}`}>{l.statut}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Locataires tab */}
        {activeTab === 'locataires' && (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                {['Nom', 'Téléphone', 'Email', 'Nationalité', 'Profession', 'Pièce d\'identité', 'Entrée', 'Statut'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredLocataires.map(loc => (
                <tr key={loc.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700">{loc.nom.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
                      <span className="font-medium text-slate-700 text-xs">{loc.nom}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{loc.telephone}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{loc.email}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{loc.nationalite}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{loc.profession}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{loc.typeId} · {loc.numeroId}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{loc.dateEntree}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${loc.statut === 'Actif' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>{loc.statut}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
