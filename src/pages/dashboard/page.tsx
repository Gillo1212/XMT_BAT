import CRMLayout from "../../components/feature/CRMLayout";
import KPICards from "./components/KPICards";
import RecentActivity from "./components/RecentActivity";
import StatsPanel from "./components/StatsPanel";

export default function DashboardPage() {
  return (
    <CRMLayout>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Bonjour, Admin XMT 👋</h2>
        <p className="text-sm text-slate-500 mt-0.5">Voici un résumé de votre activité du jour.</p>
      </div>

      {/* KPIs */}
      <KPICards />

      {/* Main content */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* Activity feed - takes 2 cols */}
        <div className="col-span-2">
          <RecentActivity />
        </div>

        {/* Stats panel */}
        <div className="col-span-1">
          <StatsPanel />
        </div>
      </div>
    </CRMLayout>
  );
}
