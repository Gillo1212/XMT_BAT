# CRM XMT GROUPE - Backoffice

## 1. Description du Projet
Backoffice CRM complet pour XMT GROUPE (société immobilière). Colonne vertébrale de l'activité : toutes les interactions clés sont historisées — demandes entrantes, biens, propriétaires, visites, devis, contrats, paiements, relances, interventions et documents.

**Cible** : Agents et gestionnaires internes de XMT GROUPE  
**Valeur** : Centralisation et traçabilité de toutes les opérations immobilières

## 2. Structure des Pages

- `/` → redirige vers `/dashboard`
- `/dashboard` - Tableau de bord général (KPIs, activité récente)
- `/demandes` - Demandes entrantes (clients, types, statuts)
- `/biens` - Gestion des biens immobiliers
- `/proprietaires` - Gestion des propriétaires
- `/visites` - Planification et historique des visites
- `/documents` - Gestion documentaire (contrats, devis, pièces)

## 3. Fonctionnalités Clés

- [x] Layout CRM (sidebar + topbar fixe)
- [x] Dashboard avec KPIs et activité récente
- [x] Module Demandes entrantes (liste, filtres, statuts)
- [x] Module Biens (liste, types, statuts, prix)
- [x] Module Propriétaires (liste, contacts, biens associés)
- [x] Module Visites (calendrier simplifié + liste)
- [x] Module Documents (upload simulé, catégories)
- [ ] Phase 2 : Devis & Contrats
- [ ] Phase 2 : Paiements & Relances
- [ ] Phase 2 : Interventions
- [ ] Phase 3 : Supabase (base de données réelle)
- [ ] Phase 3 : Authentification agents

## 4. Modèle de Données (Mock Phase 1)

### Demandes
| Champ | Type | Description |
|-------|------|-------------|
| id | string | Identifiant unique |
| client | string | Nom du client |
| type | string | Location / Vente / Construction |
| statut | string | Nouveau / En cours / Clôturé |
| date | string | Date de la demande |
| bien | string | Bien associé (si existant) |

### Biens
| Champ | Type | Description |
|-------|------|-------------|
| id | string | Référence |
| type | string | Appartement / Villa / Terrain... |
| adresse | string | Localisation |
| surface | number | En m² |
| prix | number | Prix en FCFA |
| proprietaire | string | Propriétaire associé |
| statut | string | Disponible / Loué / Vendu |

### Propriétaires
| Champ | Type | Description |
|-------|------|-------------|
| id | string | Identifiant |
| nom | string | Nom complet |
| telephone | string | Contact |
| email | string | Email |
| nbBiens | number | Nombre de biens |

### Visites
| Champ | Type | Description |
|-------|------|-------------|
| id | string | Référence |
| bien | string | Bien visité |
| client | string | Client visiteur |
| date | string | Date et heure |
| agent | string | Agent responsable |
| statut | string | Planifiée / Réalisée / Annulée |

### Documents
| Champ | Type | Description |
|-------|------|-------------|
| id | string | Référence |
| nom | string | Nom du document |
| type | string | Contrat / Devis / Pièce d'identité... |
| associe | string | Entité associée |
| date | string | Date d'ajout |

## 5. Intégrations Tierces

- **Supabase** : Phase 3 — base de données, authentification agents
- **Shopify** : Non applicable
- **Stripe** : Phase 3 — paiements en ligne

## 6. Plan de Développement

### Phase 1 : Interface CRM (EN COURS)
- Objectif : Backoffice navigable avec toutes les sections et données mock
- Livrable : 6 modules fonctionnels avec mock data réaliste

### Phase 2 : Modules avancés
- Objectif : Devis, Contrats, Paiements, Relances, Interventions
- Livrable : Formulaires de création, historique complet

### Phase 3 : Base de données & Auth
- Objectif : Connecter Supabase, authentification agents
- Livrable : Données persistantes, login sécurisé
