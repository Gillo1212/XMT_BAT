import { useState } from 'react';
import CRMLayout from '../../components/feature/CRMLayout';
import DevisTable from './components/DevisTable';
import ContratsTable from './components/ContratsTable';

export default function DevisContratsPage() {
  const [activeTab, setActiveTab] = useState<'devis' | 'contrats'>('devis');

  return (
    <CRMLayout>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">Devis &amp; Contrats</h2>
        <p className="text-sm text-slate-500 mt-0.5">Gestion des offres commerciales et des engagements contractuels</p>
      </div>

      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit mb-5">
        {(['devis', 'contrats'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab === 'devis' ? (
              <span className="flex items-center gap-1.5"><i className="ri-file-list-3-line" />Devis</span>
            ) : (
              <span className="flex items-center gap-1.5"><i className="ri-file-text-line" />Contrats</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'devis' && <DevisTable onAdd={() => {}} />}
      {activeTab === 'contrats' && <ContratsTable onAdd={() => {}} />}
    </CRMLayout>
  );
}
