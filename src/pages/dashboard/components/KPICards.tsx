import { mockKPIs } from "../../../mocks/dashboard";

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-100" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-100" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-100" },
  rose: { bg: "bg-rose-50", icon: "text-rose-500", border: "border-rose-100" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "border-violet-100" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-100" },
};

export default function KPICards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {mockKPIs.map((kpi, i) => {
        const c = colorMap[kpi.color] ?? colorMap.emerald;
        return (
          <div key={i} className="bg-white rounded-xl p-5 border border-slate-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{kpi.label}</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">{kpi.value}</p>
                <p className="text-xs text-slate-400 mt-1">{kpi.evolution}</p>
              </div>
              <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${c.bg} border ${c.border}`}>
                <i className={`${kpi.icon} text-xl ${c.icon}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
