export const mockKPIs = [
  { label: "Demandes entrantes", value: 12, evolution: "+3 ce mois", icon: "ri-mail-line", color: "emerald" },
  { label: "Biens en portefeuille", value: 12, evolution: "4 disponibles", icon: "ri-building-2-line", color: "amber" },
  { label: "Propriétaires actifs", value: 11, evolution: "2 sociétés", icon: "ri-user-3-line", color: "teal" },
  { label: "Visites planifiées", value: 5, evolution: "3 cette semaine", icon: "ri-calendar-check-line", color: "rose" },
  { label: "Documents enregistrés", value: 12, evolution: "+4 ce mois", icon: "ri-file-text-line", color: "violet" },
  { label: "Biens loués / vendus", value: 5, evolution: "2 vendus, 3 loués", icon: "ri-home-smile-line", color: "orange" },
];

export const mockRecentActivity = [
  { id: 1, type: "demande", texte: "Nouvelle demande de Aminata Diallo — Location villa Almadies", date: "Il y a 2h", icon: "ri-mail-add-line", color: "emerald" },
  { id: 2, type: "visite", texte: "Visite réalisée — Ibrahima Sow, Appartement Plateau", date: "Il y a 4h", icon: "ri-walk-line", color: "teal" },
  { id: 3, type: "document", texte: "Compromis de vente signé — Omar Diagne / Villa Ouest Foire", date: "Il y a 5h", icon: "ri-file-check-line", color: "amber" },
  { id: 4, type: "bien", texte: "Nouveau bien ajouté — Appartement Les Mamelles (XMT-B011)", date: "Hier, 16:30", icon: "ri-add-circle-line", color: "rose" },
  { id: 5, type: "proprietaire", texte: "Nouveau propriétaire — Fatou Ndiaye enregistrée", date: "Hier, 14:00", icon: "ri-user-add-line", color: "orange" },
  { id: 6, type: "visite", texte: "Visite annulée — Cheikh Diop, Terrain Thiès", date: "Hier, 11:15", icon: "ri-close-circle-line", color: "rose" },
  { id: 7, type: "demande", texte: "Demande clôturée — Moussa Traoré, contrat signé", date: "20/03, 09:00", icon: "ri-check-double-line", color: "teal" },
  { id: 8, type: "document", texte: "Quittance émise — Aïssatou Kane, Mars 2026", date: "19/03, 15:45", icon: "ri-receipt-line", color: "amber" },
];

export const mockStatsBiens = [
  { label: "Disponibles", count: 4, color: "bg-emerald-500" },
  { label: "Loués", count: 3, color: "bg-amber-500" },
  { label: "En vente", count: 3, color: "bg-teal-500" },
  { label: "Vendus", count: 2, color: "bg-slate-400" },
];

export const mockStatsVisites = [
  { label: "Planifiées", count: 5, color: "bg-teal-500" },
  { label: "Réalisées", count: 5, color: "bg-emerald-500" },
  { label: "Annulées", count: 2, color: "bg-rose-400" },
];
