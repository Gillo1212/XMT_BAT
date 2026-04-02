import { mockRecentActivity } from "../../../mocks/dashboard";

const colorMap: Record<string, { bg: string; icon: string }> = {
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600" },
  rose: { bg: "bg-rose-50", icon: "text-rose-500" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600" },
};

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl border border-slate-100">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-50">
        <h3 className="text-sm font-bold text-slate-800">Activité récente</h3>
        <span className="text-xs text-slate-400">{mockRecentActivity.length} événements</span>
      </div>
      <div className="divide-y divide-slate-50">
        {mockRecentActivity.map((item) => {
          const c = colorMap[item.color] ?? colorMap.emerald;
          return (
            <div key={item.id} className="flex items-start gap-3 px-5 py-3 hover:bg-slate-50/50 transition-colors">
              <div className={`w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5 ${c.bg}`}>
                <i className={`${item.icon} text-sm ${c.icon}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-700 leading-relaxed">{item.texte}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
