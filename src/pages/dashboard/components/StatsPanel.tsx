import { mockStatsBiens, mockStatsVisites } from "../../../mocks/dashboard";

function MiniBar({ label, count, color, total }: { label: string; count: number; color: string; total: number }) {
  const pct = Math.round((count / total) * 100);
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-600">{label}</span>
        <span className="text-xs font-semibold text-slate-800">{count}</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function StatsPanel() {
  const totalBiens = mockStatsBiens.reduce((s, b) => s + b.count, 0);
  const totalVisites = mockStatsVisites.reduce((s, v) => s + v.count, 0);

  return (
    <div className="space-y-4">
      {/* Biens par statut */}
      <div className="bg-white rounded-xl border border-slate-100 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 flex items-center justify-center bg-amber-50 rounded-lg">
            <i className="ri-building-2-line text-amber-600 text-sm" />
          </div>
          <h3 className="text-sm font-bold text-slate-800">Biens par statut</h3>
        </div>
        <div className="space-y-3">
          {mockStatsBiens.map((b) => (
            <MiniBar key={b.label} label={b.label} count={b.count} color={b.color} total={totalBiens} />
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3 text-right">{totalBiens} biens au total</p>
      </div>

      {/* Visites par statut */}
      <div className="bg-white rounded-xl border border-slate-100 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 flex items-center justify-center bg-teal-50 rounded-lg">
            <i className="ri-calendar-check-line text-teal-600 text-sm" />
          </div>
          <h3 className="text-sm font-bold text-slate-800">Visites ce mois</h3>
        </div>
        <div className="space-y-3">
          {mockStatsVisites.map((v) => (
            <MiniBar key={v.label} label={v.label} count={v.count} color={v.color} total={totalVisites} />
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3 text-right">{totalVisites} visites au total</p>
      </div>

      {/* Agents */}
      <div className="bg-white rounded-xl border border-slate-100 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 flex items-center justify-center bg-emerald-50 rounded-lg">
            <i className="ri-team-line text-emerald-600 text-sm" />
          </div>
          <h3 className="text-sm font-bold text-slate-800">Agents actifs</h3>
        </div>
        <div className="space-y-2">
          {[
            { nom: "Khalil Sarr", visites: 5, icon: "KS" },
            { nom: "Sokhna Dieng", visites: 4, icon: "SD" },
            { nom: "Pape Ngor Ba", visites: 3, icon: "PB" },
          ].map((agent) => (
            <div key={agent.nom} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                {agent.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-700">{agent.nom}</p>
                <p className="text-xs text-slate-400">{agent.visites} visites</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
