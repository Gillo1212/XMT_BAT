import { useState } from 'react';
import { mockFemmesMenage, mockPlacementsFDM, mockPaiementsFDM } from '../../../mocks/femmesmenage';

type TabType = 'femmes' | 'placements' | 'paiements';

const statutFemme: Record<string, string> = {
  'Placée': 'bg-emerald-100 text-emerald-700',
  'Disponible': 'bg-amber-100 text-amber-700',
  'En pause': 'bg-slate-100 text-slate-500',
};

const statutPlacements: Record<string, string> = {
  'Actif': 'bg-emerald-100 text-emerald-700',
  'Terminé': 'bg-slate-100 text-slate-500',
  'Suspendu': 'bg-orange-100 text-orange-700',
};

export default function FemmesMenageContent() {
  const [activeTab, setActiveTab] = useState<TabType>('femmes');
  const [selectedFemme, setSelectedFemme] = useState<typeof mockFemmesMenage[0] | null>(null);
  const [search, setSearch] = useState('');

  const filteredFemmes = mockFemmesMenage.filter(f =>
    f.nom.toLowerCase().includes(search.toLowerCase()) ||
    f.nationalite.toLowerCase().includes(search.toLowerCase())
  );

  const totalPlacees = mockFemmesMenage.filter(f => f.statut === 'Placée').length;
  const disponibles = mockFemmesMenage.filter(f => f.statut === 'Disponible').length;
  const totalCommissions = mockPaiementsFDM.reduce((s, p) => s + p.commissionXMT, 0);
  const paiementsEnAttente = mockPaiementsFDM.filter(p => p.statutFemme === 'En attente').length;

  return (
    <div>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Femmes placées', value: totalPlacees, icon: 'ri-user-heart-line', color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Disponibles', value: disponibles, icon: 'ri-user-add-line', color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Commissions XMT', value: `${totalCommissions.toLocaleString('fr-FR')} FCFA`, icon: 'ri-hand-coin-line', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Paiements en attente', value: paiementsEnAttente, icon: 'ri-time-line', color: 'text-rose-500', bg: 'bg-rose-50' },
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
          {([['femmes', 'Annuaire FdM'], ['placements', 'Placements'], ['paiements', 'Paiements']] as [TabType, string][]).map(([tab, label]) => (
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

        {activeTab === 'femmes' && (
          <div className="flex">
            <div className={`flex-1 ${selectedFemme ? 'border-r border-slate-100' : ''}`}>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 p-5">
                {filteredFemmes.map(f => (
                  <div key={f.id} onClick={() => setSelectedFemme(selectedFemme?.id === f.id ? null : f)}
                    className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedFemme?.id === f.id ? 'border-amber-400 bg-amber-50' : 'border-slate-100 hover:border-amber-200 hover:bg-amber-50/30'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-sm font-bold text-amber-700">{f.avatar}</div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">{f.nom}</p>
                        <p className="text-xs text-slate-400">{f.nationalite}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statutFemme[f.statut]}`}>{f.statut}</span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`ri-star-fill text-xs ${i < Math.floor(f.noteMoyenne) ? 'text-amber-400' : 'text-slate-200'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{f.experience} d&apos;expérience</p>
                    <div className="flex flex-wrap gap-1">
                      {f.competences.map(c => (
                        <span key={c} className="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-xs">{c}</span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">{f.telephone}</p>
                  </div>
                ))}
              </div>
            </div>

            {selectedFemme && (
              <div className="w-72 p-5 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-800">Fiche détaillée</h3>
                  <button onClick={() => setSelectedFemme(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><i className="ri-close-line" /></button>
                </div>
                <div className="text-center bg-amber-50 rounded-xl p-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">{selectedFemme.avatar}</div>
                  <p className="font-bold text-slate-800 text-sm">{selectedFemme.nom}</p>
                  <p className="text-xs text-slate-500">{selectedFemme.nationalite} · {selectedFemme.age} ans</p>
                  <span className={`mt-2 inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${statutFemme[selectedFemme.statut]}`}>{selectedFemme.statut}</span>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-slate-600 mb-2">Compétences</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedFemme.competences.map(c => <span key={c} className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">{c}</span>)}
                  </div>
                </div>
                {[['Expérience', selectedFemme.experience], ['Note moyenne', `${selectedFemme.noteMoyenne}/5`], ['Téléphone', selectedFemme.telephone], ['Inscrite le', selectedFemme.dateInscription]].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center border-b border-slate-100 py-2">
                    <span className="text-xs text-slate-400">{k}</span>
                    <span className="text-xs font-medium text-slate-700">{v}</span>
                  </div>
                ))}
                <div className="flex gap-2 pt-3">
                  <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                    <i className="ri-map-pin-user-line mr-1" />Placer
                  </button>
                  <button className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                    <i className="ri-phone-line mr-1" />Contacter
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'placements' && (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                {['Femme de ménage', 'Famille / Lieu', 'Service', 'Salaire net', 'Commission XMT', 'Début', 'Suivi par', 'Statut'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockPlacementsFDM.map(p => (
                <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700">{p.femme.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
                      <span className="font-medium text-slate-700 text-xs whitespace-nowrap">{p.femme}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-xs font-medium text-slate-700">{p.famille}</p>
                    <p className="text-xs text-slate-400">{p.adresse}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600">{p.typeService}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-slate-700">{p.salaire.toLocaleString('fr-FR')} FCFA</td>
                  <td className="px-4 py-3 text-xs font-semibold text-amber-600">{p.commission.toLocaleString('fr-FR')} FCFA</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{p.dateDebut}</td>
                  <td className="px-4 py-3 text-xs text-slate-500">{p.suiviPar}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statutPlacements[p.statut] ?? 'bg-slate-100 text-slate-500'}`}>{p.statut}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'paiements' && (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                {['Femme de ménage', 'Famille', 'Mois', 'Salaire net', 'Commission XMT', 'Total famille', 'Pmt famille', 'Versement FdM'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockPaiementsFDM.map(p => (
                <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700 text-xs whitespace-nowrap">{p.femme}</td>
                  <td className="px-4 py-3 text-xs text-slate-500 max-w-32 truncate">{p.famille}</td>
                  <td className="px-4 py-3 text-xs text-slate-600">{p.mois}</td>
                  <td className="px-4 py-3 text-xs font-semibold text-slate-700">{p.salaireNet.toLocaleString('fr-FR')} FCFA</td>
                  <td className="px-4 py-3 text-xs font-semibold text-amber-600">{p.commissionXMT.toLocaleString('fr-FR')} FCFA</td>
                  <td className="px-4 py-3 text-xs font-bold text-slate-800">{p.totalFamille.toLocaleString('fr-FR')} FCFA</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.statutFamille === 'Payé' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{p.statutFamille}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.statutFemme === 'Versé' ? 'bg-teal-100 text-teal-700' : 'bg-rose-100 text-rose-700'}`}>{p.statutFemme}</span>
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
