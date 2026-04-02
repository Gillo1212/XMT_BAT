export const mockPersonnel = [
  { id: 'EMP-001', nom: 'Moussa Diallo', poste: 'Directeur Général', departement: 'Direction', telephone: '+221 77 123 45 67', email: 'directeur@xmt.sn', dateEmbauche: '2020-01-01', typeContrat: 'CDI', salaire: 450000, statut: 'Actif', avatar: 'MD' },
  { id: 'EMP-002', nom: 'Pape Ngor Ba', poste: 'Responsable Financier', departement: 'Finance', telephone: '+221 76 234 56 78', email: 'comptable@xmt.sn', dateEmbauche: '2020-03-15', typeContrat: 'CDI', salaire: 380000, statut: 'Actif', avatar: 'PB' },
  { id: 'EMP-003', nom: 'Sokhna Dieng', poste: 'Assistante Administrative', departement: 'Administration', telephone: '+221 77 345 67 89', email: 'assistante@xmt.sn', dateEmbauche: '2021-06-01', typeContrat: 'CDI', salaire: 220000, statut: 'Actif', avatar: 'SD' },
  { id: 'EMP-004', nom: 'Aminata Cissé', poste: 'Chargée Communication Digitale', departement: 'Marketing', telephone: '+221 78 456 78 90', email: 'communication@xmt.sn', dateEmbauche: '2022-01-10', typeContrat: 'CDI', salaire: 250000, statut: 'Actif', avatar: 'AC' },
  { id: 'EMP-005', nom: 'Khalil Sarr', poste: 'Agent Immobilier', departement: 'Commercial', telephone: '+221 77 567 89 01', email: 'agent@xmt.sn', dateEmbauche: '2021-09-01', typeContrat: 'CDI', salaire: 280000, statut: 'Actif', avatar: 'KS' },
  { id: 'EMP-006', nom: 'Ibrahim Touré', poste: 'Responsable Technique', departement: 'Technique', telephone: '+221 76 678 90 12', email: 'electricien@xmt.sn', dateEmbauche: '2022-04-01', typeContrat: 'CDD', salaire: 320000, statut: 'Actif', avatar: 'IT' },
  { id: 'EMP-007', nom: 'Ndéye Sall', poste: 'Agent Immobilier Junior', departement: 'Commercial', telephone: '+221 77 789 01 23', email: 'ndeye.sall@xmt.sn', dateEmbauche: '2023-03-15', typeContrat: 'CDD', salaire: 180000, statut: 'Actif', avatar: 'NS' },
  { id: 'EMP-008', nom: 'Babacar Diop', poste: 'Technicien Polyvalent', departement: 'Technique', telephone: '+221 78 890 12 34', email: 'babacar.diop@xmt.sn', dateEmbauche: '2023-07-01', typeContrat: 'CDD', salaire: 200000, statut: 'Actif', avatar: 'BD' },
];

export const mockFichesPaie = [
  { id: 'PAY-001', employeId: 'EMP-001', employe: 'Moussa Diallo', poste: 'Directeur Général', mois: 'Mars 2026', salaireBase: 450000, primes: 80000, deductions: 45000, netAPayer: 485000, dateVirement: '2026-03-28', statut: 'Payé' },
  { id: 'PAY-002', employeId: 'EMP-002', employe: 'Pape Ngor Ba', poste: 'Responsable Financier', mois: 'Mars 2026', salaireBase: 380000, primes: 50000, deductions: 38000, netAPayer: 392000, dateVirement: '2026-03-28', statut: 'Payé' },
  { id: 'PAY-003', employeId: 'EMP-003', employe: 'Sokhna Dieng', poste: 'Assistante Administrative', mois: 'Mars 2026', salaireBase: 220000, primes: 20000, deductions: 22000, netAPayer: 218000, dateVirement: '2026-03-28', statut: 'Payé' },
  { id: 'PAY-004', employeId: 'EMP-004', employe: 'Aminata Cissé', poste: 'Chargée Communication', mois: 'Mars 2026', salaireBase: 250000, primes: 30000, deductions: 25000, netAPayer: 255000, dateVirement: null, statut: 'En attente' },
  { id: 'PAY-005', employeId: 'EMP-005', employe: 'Khalil Sarr', poste: 'Agent Immobilier', mois: 'Mars 2026', salaireBase: 280000, primes: 120000, deductions: 28000, netAPayer: 372000, dateVirement: null, statut: 'En attente' },
  { id: 'PAY-006', employeId: 'EMP-006', employe: 'Ibrahim Touré', poste: 'Responsable Technique', mois: 'Mars 2026', salaireBase: 320000, primes: 60000, deductions: 32000, netAPayer: 348000, dateVirement: null, statut: 'En attente' },
  { id: 'PAY-007', employeId: 'EMP-007', employe: 'Ndéye Sall', poste: 'Agent Junior', mois: 'Mars 2026', salaireBase: 180000, primes: 25000, deductions: 18000, netAPayer: 187000, dateVirement: null, statut: 'En attente' },
  { id: 'PAY-008', employeId: 'EMP-008', employe: 'Babacar Diop', poste: 'Technicien Polyvalent', mois: 'Mars 2026', salaireBase: 200000, primes: 15000, deductions: 20000, netAPayer: 195000, dateVirement: null, statut: 'En attente' },
];
