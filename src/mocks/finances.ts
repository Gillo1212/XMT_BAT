export const mockTransactions = [
  { id: 'TRX-001', date: '2026-03-18', libelle: 'Loyer - Serigne Mbaye (Villa Almadies)', categorie: 'Loyer encaissé', type: 'Recette', montant: 650000, modePaiement: 'Virement', compte: 'CBAO', reference: 'LYR-001', statut: 'Validée' },
  { id: 'TRX-002', date: '2026-03-17', libelle: 'Commission vente bien XMT-B010', categorie: 'Commission vente', type: 'Recette', montant: 1200000, modePaiement: 'Virement', compte: 'CBAO', reference: 'VTE-010', statut: 'Validée' },
  { id: 'TRX-003', date: '2026-03-15', libelle: 'Loyer - Ndeye Fall (Villa Sacré-Cœur)', categorie: 'Loyer encaissé', type: 'Recette', montant: 500000, modePaiement: 'Wave', compte: 'Wave', reference: 'LYR-007', statut: 'Validée' },
  { id: 'TRX-004', date: '2026-03-14', libelle: 'Salaire Khalil Sarr - Mars 2026', categorie: 'Salaire agent', type: 'Dépense', montant: 280000, modePaiement: 'Virement', compte: 'CBAO', reference: 'SAL-005', statut: 'Validée' },
  { id: 'TRX-005', date: '2026-03-14', libelle: 'Salaire Moussa Diallo - Mars 2026', categorie: 'Salaire agent', type: 'Dépense', montant: 450000, modePaiement: 'Virement', compte: 'CBAO', reference: 'SAL-001', statut: 'Validée' },
  { id: 'TRX-006', date: '2026-03-12', libelle: 'Loyer - Abou Diallo (Local VDN)', categorie: 'Loyer encaissé', type: 'Recette', montant: 400000, modePaiement: 'Orange Money', compte: 'OM', reference: 'LYR-004', statut: 'Validée' },
  { id: 'TRX-007', date: '2026-03-11', libelle: 'Frais intervention électrique - BIEN-006', categorie: 'Frais maintenance', type: 'Dépense', montant: 85000, modePaiement: 'Espèces', compte: 'Caisse', reference: 'INT-023', statut: 'Validée' },
  { id: 'TRX-008', date: '2026-03-10', libelle: 'Commission gestion locative - Mars', categorie: 'Commission gestion', type: 'Recette', montant: 320000, modePaiement: 'Virement', compte: 'CBAO', reference: 'COM-031', statut: 'Validée' },
  { id: 'TRX-009', date: '2026-03-08', libelle: 'Paiement Fatou Diallo - FdM Almadies', categorie: 'Femme de ménage', type: 'Dépense', montant: 75000, modePaiement: 'Wave', compte: 'Wave', reference: 'FDM-002', statut: 'Validée' },
  { id: 'TRX-010', date: '2026-03-07', libelle: 'Loyer - Coumba Sarr (Les Mamelles)', categorie: 'Loyer encaissé', type: 'Recette', montant: 350000, modePaiement: 'Chèque', compte: 'CBAO', reference: 'LYR-005', statut: 'Validée' },
  { id: 'TRX-011', date: '2026-03-05', libelle: 'Fournitures bureau XMT', categorie: 'Charges bureau', type: 'Dépense', montant: 45000, modePaiement: 'Espèces', compte: 'Caisse', reference: 'CHG-014', statut: 'Validée' },
  { id: 'TRX-012', date: '2026-03-04', libelle: 'Honoraires notaire - Vente Terrain Thiès', categorie: 'Frais juridiques', type: 'Dépense', montant: 180000, modePaiement: 'Virement', compte: 'CBAO', reference: 'JUR-008', statut: 'Validée' },
  { id: 'TRX-013', date: '2026-03-02', libelle: 'Salaire Sokhna Dieng - Mars 2026', categorie: 'Salaire staff', type: 'Dépense', montant: 220000, modePaiement: 'Virement', compte: 'CBAO', reference: 'SAL-003', statut: 'Validée' },
  { id: 'TRX-014', date: '2026-03-01', libelle: 'Loyer bureau XMT GROUPE Almadies', categorie: 'Loyer bureau', type: 'Dépense', montant: 350000, modePaiement: 'Virement', compte: 'CBAO', reference: 'CHG-001', statut: 'Validée' },
  { id: 'TRX-015', date: '2026-03-01', libelle: 'Caution reçue - Idrissa Kouyaté', categorie: 'Caution', type: 'Recette', montant: 1300000, modePaiement: 'Virement', compte: 'CBAO', reference: 'CTR-L008', statut: 'Validée' },
];

export const mockBilanMensuel = [
  { mois: 'Oct 2025', recettes: 3200000, depenses: 1800000, resultat: 1400000 },
  { mois: 'Nov 2025', recettes: 2900000, depenses: 1650000, resultat: 1250000 },
  { mois: 'Déc 2025', recettes: 4100000, depenses: 2100000, resultat: 2000000 },
  { mois: 'Jan 2026', recettes: 3600000, depenses: 1900000, resultat: 1700000 },
  { mois: 'Fév 2026', recettes: 3800000, depenses: 2000000, resultat: 1800000 },
  { mois: 'Mars 2026', recettes: 4720000, depenses: 1685000, resultat: 3035000 },
];

export const mockCaisseEntrees = [
  { id: 'CAI-001', date: '2026-03-20', libelle: 'Paiement loyer espèces - Bien B003', montant: 280000, type: 'Entrée', caissier: 'Pape Ngor Ba' },
  { id: 'CAI-002', date: '2026-03-19', libelle: 'Frais de dossier demande LOC-009', montant: 15000, type: 'Entrée', caissier: 'Sokhna Dieng' },
  { id: 'CAI-003', date: '2026-03-18', libelle: 'Achat fournitures de bureau', montant: 28000, type: 'Sortie', caissier: 'Pape Ngor Ba' },
  { id: 'CAI-004', date: '2026-03-17', libelle: 'Remise chèque CBAO', montant: 650000, type: 'Sortie', caissier: 'Pape Ngor Ba' },
  { id: 'CAI-005', date: '2026-03-15', libelle: 'Paiement femme de ménage espèces', montant: 60000, type: 'Sortie', caissier: 'Sokhna Dieng' },
  { id: 'CAI-006', date: '2026-03-14', libelle: 'Frais carburant véhicule agence', montant: 35000, type: 'Sortie', caissier: 'Pape Ngor Ba' },
  { id: 'CAI-007', date: '2026-03-12', libelle: 'Règlement honoraires avocat', montant: 120000, type: 'Sortie', caissier: 'Pape Ngor Ba' },
  { id: 'CAI-008', date: '2026-03-10', libelle: 'Avance sur salaire - Agent K. Sarr', montant: 50000, type: 'Sortie', caissier: 'Pape Ngor Ba' },
];
