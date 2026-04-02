type StatusVariant = string;

const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
  "Nouveau": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "En cours": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "Clôturé": { bg: "bg-slate-100", text: "text-slate-500", dot: "bg-slate-400" },
  "Disponible": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "Loué": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "En vente": { bg: "bg-teal-50", text: "text-teal-700", dot: "bg-teal-500" },
  "Vendu": { bg: "bg-slate-100", text: "text-slate-500", dot: "bg-slate-400" },
  "Actif": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "Inactif": { bg: "bg-slate-100", text: "text-slate-500", dot: "bg-slate-400" },
  "Planifiée": { bg: "bg-teal-50", text: "text-teal-700", dot: "bg-teal-500" },
  "Réalisée": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "Annulée": { bg: "bg-rose-50", text: "text-rose-600", dot: "bg-rose-500" },
  "Signé": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "En attente": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "Validé": { bg: "bg-teal-50", text: "text-teal-700", dot: "bg-teal-500" },
  "Vérifié": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "Émis": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "En cours": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "Payé": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "Finalisé": { bg: "bg-teal-50", text: "text-teal-700", dot: "bg-teal-500" },
  "Particulier": { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-400" },
  "Société": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
};

interface StatusBadgeProps {
  status: StatusVariant;
  showDot?: boolean;
}

export default function StatusBadge({ status, showDot = true }: StatusBadgeProps) {
  const config = statusConfig[status] ?? { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-400" };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />}
      {status}
    </span>
  );
}
