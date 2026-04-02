import { useState } from 'react';
import { mockTransactions, mockBilanMensuel, mockCaisseEntrees } from '../../../mocks/finances';

type TabType = 'transactions' | 'bilan' | 'caisse';

const typeColor: Record<string, string> = {
  'Recette': 'text-emerald-600',
  'Dépense': 'text-rose-600',
};

const catIcons: Record<string, string> = {
  'Loyer encaissé': 'ri-home-4-line',
  'Commission vente': 'ri-award-line',
  'Commission gestion': 'ri-hand-coin-line',
  'Salaire agent': 'ri-user-2-line',
  'Salaire staff': 'ri-team-line',
  'Femme de ménage': 'ri-service-line',
  'Frais maintenance': 'ri-tools-line',
  'Charges bureau': 'ri-building-line',
  'Frais juridiques': 'ri-scales-2-line',
  'Loyer bureau': 'ri-door-open-line',
  'Caution': 'ri-lock-line',
};

export default function FinancesContent() {
  const [activeTab, setActiveTab] = useState<TabType>('transactions');
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('Tous');

  const totalRecettes = mockTransactions.filter(t => t.type === 'Recette').reduce((s, t) => s + t.montant, 0);
  const totalDepenses = mockTransactions.filter(t => t.type === 'Dépense').reduce((s, t) => s + t.montant, 0);
  const solde = totalRecettes - totalDepenses;
  const dernierBilan = mockBilanMensuel[mockBilanMensuel.length - 1];

  const filteredTrx = mockTransactions.filter(t => {
    const matchSearch = t.libelle.toLowerCase().includes(search.toLowerCase()) || t.categorie.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === 'Tous' || t.type === filterType;
    return matchSearch && matchType;
  });

  const soldeCaisse = mockCaisseEntrees.reduce((s, c) => c.type === 'Entrée' ? s + c.montant : s - c.montant, 450000);

  return (
    <div>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Recettes Mars', value: `${(totalRecettes / 1000000).toFixed(2)}M`, icon: 'ri-arrow-up-circle-line', color: 'text-emerald-600', bg: 'bg-emerald-50', sub: 'FCFA' },
          { label: 'Dépenses Mars', value: `${(totalDepenses / 1000000).toFixed(2)}M`, icon: 'ri-arrow-down-circle-line', color: 'text-rose-600', bg: 'bg-rose-50', sub: 'FCFA' },
          { label: 'Résultat net', value: `${(solde / 1000000).toFixed(2)}M`, icon: 'ri-bar-chart-2-line', color: 'text-amber-600', bg: 'bg-amber-50', sub: 'FCFA' },
          { label: 'Solde caisse', value: `${soldeCaisse.toLocaleString('fr-FR')}`, icon: 'ri-safe-2-line', color: 'text-teal-600', bg: 'bg-teal-50', sub: 'FCFA' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl border border-slate-100 p-4">
            <div className={`w-9 h-9 rounded-lg ${kpi.bg} flex items-center justify-center mb-3`}>
              <i className={`${kpi.icon} ${kpi.color} text-lg`} />
            </div>
            <p className="text-xl font-bold text-slate-800">{kpi.value} <span className="text-xs font-normal text-slate-400">{kpi.sub}</span></p>
            <p className="text-xs text-slate-400 mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-100">
        <div className="flex items-center gap-1 p-4 border-b border-slate-100">
          {([['transactions', 'Journal des opérations'], ['bilan', 'Bilan mensuel'], ['caisse', 'Caisse']] as [TabType, string][]).map(([tab, label]) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === tab ? 'bg-amber-500 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>
              {label}
            </button>
          ))}
          {activeTab === 'transactions' && (
            <div className="ml-auto flex items-center gap-2">
              <select value={filterType} onChange={e => setFilterType(e.target.value)} className="border border-slate-200 rounded-lg text-xs px-2 py-1.5 text-slate-600 cursor-pointer focus:outline-none">
                <option>Tous</option>
                <option>Recette</option>
                <option>Dépense</option>
              </select>
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..." className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-amber-400 w-44" />
              </div>
            </div>
          )}
        </div>

        {activeTab === 'transactions' && (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                {['Date', 'Libellé', 'Catégorie', 'Type', 'Montant', 'Mode', 'Compte', 'Statut'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredTrx.map(t => (
                <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{t.date}</td>
                  <td className="px-4 py-3 text-xs font-medium text-slate-700 max-w-56 truncate">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center">
                        <i className={`${catIcons[t.categorie] ?? 'ri-file-list-line'} text-slate-400`} />
                      </span>
                      {t.libelle}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{t.categorie}</td>
                  <td className="px-4 py-3 text-xs font-semibold">
                    <span className={typeColor[t.type] ?? 'text-slate-600'}>
                      {t.type === 'Recette' ? '+' : '-'} {t.type}
                    </span>
                  </td>
                  <td className={`px-4 py-3 text-xs font-bold whitespace-nowrap ${typeColor[t.type]}`}>
                    {t.type === 'Recette' ? '+' : '-'} {t.montant.toLocaleString('fr-FR')} FCFA
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{t.modePaiement}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{t.compte}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">{t.statut}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'bilan' && (
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-xs text-emerald-600 font-medium mb-1">Meilleur mois</p>
                <p className="text-lg font-bold text-emerald-700">{mockBilanMensuel.reduce((max, m) => m.resultat > max.resultat ? m : max).mois}</p>
                <p className="text-xs text-emerald-500">{mockBilanMensuel.reduce((max, m) => m.resultat > max.resultat ? m : max).resultat.toLocaleString('fr-FR')} FCFA</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <p className="text-xs text-amber-600 font-medium mb-1">Mars 2026</p>
                <p className="text-lg font-bold text-amber-700">{dernierBilan.resultat.toLocaleString('fr-FR')}</p>
                <p className="text-xs text-amber-500">FCFA de résultat net</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 font-medium mb-1">Taux charges Mars</p>
                <p className="text-lg font-bold text-slate-700">{Math.round(dernierBilan.depenses / dernierBilan.recettes * 100)}%</p>
                <p className="text-xs text-slate-400">Dépenses / Recettes</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    {['Mois', 'Recettes', 'Dépenses', 'Résultat net', 'Marge'].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...mockBilanMensuel].reverse().map(b => (
                    <tr key={b.mois} className="border-b border-slate-50 hover:bg-slate-50">
                      <td className="px-4 py-3 text-xs font-semibold text-slate-700">{b.mois}</td>
                      <td className="px-4 py-3 text-xs text-emerald-600 font-medium">{b.recettes.toLocaleString('fr-FR')} FCFA</td>
                      <td className="px-4 py-3 text-xs text-rose-500 font-medium">{b.depenses.toLocaleString('fr-FR')} FCFA</td>
                      <td className="px-4 py-3 text-xs font-bold text-slate-800">{b.resultat.toLocaleString('fr-FR')} FCFA</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${Math.round(b.resultat / b.recettes * 100)}%` }} />
                          </div>
                          <span className="text-xs font-semibold text-amber-600">{Math.round(b.resultat / b.recettes * 100)}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'caisse' && (
          <div className="p-5">
            <div className="flex items-center justify-between mb-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 flex items-center gap-3">
                <i className="ri-safe-2-line text-amber-600 text-xl" />
                <div>
                  <p className="text-xs text-amber-600 font-medium">Solde caisse actuel</p>
                  <p className="text-xl font-bold text-amber-700">{soldeCaisse.toLocaleString('fr-FR')} FCFA</p>
                </div>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  {['Date', 'Libellé', 'Type', 'Montant', 'Caissier'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockCaisseEntrees.map(c => (
                  <tr key={c.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs text-slate-500">{c.date}</td>
                    <td className="px-4 py-3 text-xs font-medium text-slate-700">{c.libelle}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.type === 'Entrée' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{c.type}</span>
                    </td>
                    <td className={`px-4 py-3 text-xs font-bold ${c.type === 'Entrée' ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {c.type === 'Entrée' ? '+' : '-'} {c.montant.toLocaleString('fr-FR')} FCFA
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">{c.caissier}</td>
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
