export interface CatalogueItem {
  id: string;
  nom: string;
  description: string;
  details: string[];
  image: string;
  badge?: string;
  prix?: string;
}

export interface CatalogueRubrique {
  id: string;
  titre: string;
  icone: string;
  couleur: string;
  description: string;
  items: CatalogueItem[];
}

export const mockCatalogue: CatalogueRubrique[] = [
  {
    id: 'immobilier-achat-vente',
    titre: 'Immobilier — Achat & Vente',
    icone: 'ri-building-2-line',
    couleur: '#1F4E79',
    description: 'Nous vous accompagnons dans toutes vos transactions immobilières avec expertise et transparence.',
    items: [
      {
        id: 'immo-01',
        nom: 'Achat de villa',
        description: 'Recherche personnalisée, visites organisées, négociation experte et accompagnement jusqu\u2019\u00e0 la signature notariale.',
        details: ['S\u00e9lection sur mesure selon votre budget', 'Estimation officielle et conseil juridique', 'Accompagnement chez le notaire', 'Suivi apr\u00e8s-vente'],
        image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20villa%20for%20sale%20Dakar%20Senegal%20Africa%20beautiful%20exterior%20white%20facade%20palm%20trees%20blue%20sky%20pool%20garden%20elegant%20residential%20architecture%20clean%20minimalist%20design%20daylight%20professional%20real%20estate%20photo&width=600&height=400&seq=cat-immo-villa-01&orientation=landscape',
        badge: 'Populaire',
      },
      {
        id: 'immo-02',
        nom: 'Vente de bien immobilier',
        description: 'Estimation gratuite, mise en valeur professionnelle, diffusion multi-canaux et gestion des offres pour vendre au meilleur prix.',
        details: ['Estimation gratuite de votre bien', 'Photos professionnelles incluses', 'Diffusion sur tous les portails', 'Gestion des visites et des offres'],
        image: 'https://readdy.ai/api/search-image?query=Real%20estate%20agent%20presenting%20modern%20apartment%20for%20sale%20Senegal%20Africa%20professional%20property%20listing%20sold%20sign%20contemporary%20urban%20residential%20building%20clean%20exterior%20sunlight&width=600&height=400&seq=cat-immo-vente-02&orientation=landscape',
      },
      {
        id: 'immo-03',
        nom: 'Achat de terrain',
        description: 'Identification des terrains constructibles, v\u00e9rification du titre foncier, bornes et accompagnement notarial.',
        details: ['V\u00e9rification titre foncier et bornes', 'Analyse urbanistique', 'Accompagnement acte de vente', 'Conseil investissement'],
        image: 'https://readdy.ai/api/search-image?query=Land%20plot%20for%20sale%20Dakar%20Senegal%20Africa%20empty%20terrain%20sunny%20day%20clear%20blue%20sky%20trees%20perimeter%20marked%20construction%20site%20aerial%20view%20investment%20opportunity&width=600&height=400&seq=cat-immo-terrain-03&orientation=landscape',
      },
      {
        id: 'immo-04',
        nom: 'Achat de local commercial',
        description: 'Bureau, boutique, entrep\u00f4t : nous identifions le local id\u00e9al pour votre activit\u00e9 et n\u00e9gocions les meilleures conditions.',
        details: ['Analyse de l\u2019emplacement et flux', 'Aide \u00e0 la n\u00e9gociation du prix', 'Bail commercial et actes', 'Conseil en am\u00e9nagement'],
        image: 'https://readdy.ai/api/search-image?query=Modern%20commercial%20office%20space%20for%20sale%20Dakar%20Senegal%20Africa%20professional%20business%20building%20exterior%20glass%20facade%20urban%20city%20center%20daylight%20corporate%20architecture%20clean&width=600&height=400&seq=cat-immo-local-04&orientation=landscape',
        badge: 'Professionnel',
      },
    ],
  },
  {
    id: 'gestion-locative',
    titre: 'Location & Gestion Locative',
    icone: 'ri-key-2-line',
    couleur: '#2E7D32',
    description: 'Confiez la gestion de votre patrimoine locatif \u00e0 notre \u00e9quipe et percevez vos loyers sans souci.',
    items: [
      {
        id: 'loc-01',
        nom: 'Mise en location',
        description: 'Recherche de locataire s\u00e9rieux, \u00e9tude de dossier rigoureuse, r\u00e9daction du bail et \u00e9tat des lieux.',
        details: ['Annonces et diffusion compl\u00e8te', 'S\u00e9lection et v\u00e9rification des dossiers', 'R\u00e9daction bail conforme', 'Remise des cl\u00e9s officielle'],
        image: 'https://readdy.ai/api/search-image?query=Modern%20apartment%20rental%20Dakar%20Senegal%20Africa%20interior%20living%20room%20furnished%20bright%20natural%20light%20clean%20contemporary%20design%20keys%20handover%20real%20estate%20agent&width=600&height=400&seq=cat-loc-mise-01&orientation=landscape',
        badge: 'Nouveau',
      },
      {
        id: 'loc-02',
        nom: 'Gestion locative compl\u00e8te',
        description: 'Encaissement des loyers, suivi locataire, entretien, gestion des impr\u00e9vus et bilan mensuel d\u00e9taill\u00e9.',
        details: ['Encaissement loyers et quittances', 'Suivi et relation locataire', 'Coordination travaux et entretien', 'Bilan financier mensuel'],
        image: 'https://readdy.ai/api/search-image?query=Property%20management%20service%20professional%20real%20estate%20office%20team%20Senegal%20Africa%20manager%20reviewing%20lease%20documents%20computer%20modern%20office%20interior%20bright%20clean%20corporate%20environment&width=600&height=400&seq=cat-loc-gestion-02&orientation=landscape',
        badge: 'Populaire',
        prix: 'D\u00e8s 5% des loyers',
      },
      {
        id: 'loc-03',
        nom: 'Gestion de patrimoine',
        description: 'Optimisation de votre portefeuille, conseil en investissement locatif et bilans patrimoniaux r\u00e9guliers.',
        details: ['Audit de votre patrimoine', 'Strat\u00e9gie d\u2019optimisation', 'Conseil fiscalit\u00e9 et rendement', 'Rapports trimestriels'],
        image: 'https://readdy.ai/api/search-image?query=Wealth%20management%20real%20estate%20portfolio%20financial%20advisor%20professional%20meeting%20Senegal%20Africa%20modern%20office%20charts%20graphs%20investment%20strategy%20clean%20contemporary%20corporate%20interior&width=600&height=400&seq=cat-loc-patri-03&orientation=landscape',
      },
    ],
  },
  {
    id: 'construction',
    titre: 'Construction & R\u00e9novation',
    icone: 'ri-building-4-line',
    couleur: '#E65100',
    description: 'XMT BAT r\u00e9alise vos projets de construction et r\u00e9novation de A \u00e0 Z avec des mat\u00e9riaux de qualit\u00e9.',
    items: [
      {
        id: 'bat-01',
        nom: 'Construction de villa',
        description: 'Construction cl\u00e9 en main, de la fondation \u00e0 la finition : plans, gros \u0153uvre, corps d\u2019\u00e9tat, peinture.',
        details: ['Plans architecturaux sur mesure', 'Gros \u0153uvre et ma\u00e7onnerie', 'Corps d\u2019\u00e9tat secondaires inclus', 'Finitions haut de gamme'],
        image: 'https://readdy.ai/api/search-image?query=New%20villa%20construction%20building%20site%20Senegal%20Africa%20workers%20modern%20architecture%20foundations%20brickwork%20daylight%20sunny%20professional%20construction%20management%20quality%20materials%20residential&width=600&height=400&seq=cat-bat-villa-01&orientation=landscape',
        badge: 'Cl\u00e9 en main',
      },
      {
        id: 'bat-02',
        nom: 'Construction immeuble',
        description: 'Immeubles r\u00e9sidentiels et commerciaux : ma\u00eettrise d\u2019\u0153uvre compl\u00e8te, respect des d\u00e9lais et du budget.',
        details: ['Ma\u00eettrise d\u2019\u0153uvre compl\u00e8te', 'Suivi chantier quotidien', 'Respect des normes b\u00e2timent', 'Garantie d\u00e9cennale'],
        image: 'https://readdy.ai/api/search-image?query=Modern%20apartment%20building%20construction%20Dakar%20Senegal%20Africa%20multi-story%20residential%20building%20exterior%20concrete%20structure%20under%20construction%20scaffolding%20professional%20daylight%20urban%20development&width=600&height=400&seq=cat-bat-immeuble-02&orientation=landscape',
      },
      {
        id: 'bat-03',
        nom: 'R\u00e9novation compl\u00e8te',
        description: 'Remise \u00e0 neuf int\u00e9rieure et ext\u00e9rieure : carrelage, peinture, faux plafond, menuiserie aluminium.',
        details: ['Diagnostic complet du bien', 'Carrelage et rev\u00eatements', 'Peinture et faux plafonds', 'Menuiserie aluminium et PVC'],
        image: 'https://readdy.ai/api/search-image?query=Home%20renovation%20interior%20complete%20makeover%20Senegal%20Africa%20modern%20kitchen%20living%20room%20after%20renovation%20bright%20contemporary%20design%20tiles%20paint%20high%20quality%20materials%20finished%20result%20beautiful&width=600&height=400&seq=cat-bat-renov-03&orientation=landscape',
        badge: 'Populaire',
      },
      {
        id: 'bat-04',
        nom: 'Agencement & finitions',
        description: 'Dressing, placards encastr\u00e9s, cuisine \u00e9quip\u00e9e, salle de bain design. Finitions soign\u00e9es et livraison propre.',
        details: ['Cuisine \u00e9quip\u00e9e sur mesure', 'Dressing et rangements int\u00e9gr\u00e9s', 'Salle de bain cl\u00e9 en main', 'Peinture et d\u00e9coration'],
        image: 'https://readdy.ai/api/search-image?query=Modern%20interior%20design%20finishing%20Senegal%20Africa%20luxury%20kitchen%20fitted%20wardrobe%20built-in%20furniture%20contemporary%20home%20interior%20clean%20bright%20elegant%20high%20quality%20craftsmanship&width=600&height=400&seq=cat-bat-agen-04&orientation=landscape',
      },
    ],
  },
  {
    id: 'plomberie',
    titre: 'Plomberie & Sanitaire',
    icone: 'ri-water-flash-line',
    couleur: '#0277BD',
    description: 'Installation, d\u00e9pannage et entretien de tous vos \u00e9quipements sanitaires. Intervention sous 24h en urgence.',
    items: [
      {
        id: 'plomb-01',
        nom: 'Installation plomberie neuve',
        description: 'Pose de toutes canalisations eau froide, eau chaude, \u00e9vacuation, salle de bain et cuisine compl\u00e8te.',
        details: ['R\u00e9seaux eau froide/chaude', '\u00c9vacuations et WC', 'Salle de bain compl\u00e8te', 'Test \u00e9tanch\u00e9it\u00e9 inclus'],
        image: 'https://readdy.ai/api/search-image?query=Professional%20plumbing%20installation%20Senegal%20Africa%20plumber%20working%20pipes%20bathroom%20modern%20fittings%20clean%20white%20sanitary%20installation%20quality%20copper%20pipes%20bathroom%20fixtures%20professional%20work&width=600&height=400&seq=cat-plomb-inst-01&orientation=landscape',
      },
      {
        id: 'plomb-02',
        nom: 'D\u00e9pannage urgence',
        description: 'Fuite d\u2019eau, canalisation bouch\u00e9e, casse de tuyau : intervention rapide, d\u00e8s le jour m\u00eame.',
        details: ['Intervention sous 24h', 'D\u00e9tection de fuites', 'D\u00e9gorgement canalisation', 'Disponible 6j/7'],
        image: 'https://readdy.ai/api/search-image?query=Emergency%20plumber%20repair%20pipe%20leak%20professional%20worker%20Senegal%20Africa%20tools%20fixing%20water%20damage%20urgent%20intervention%20plumbing%20repair%20service%20quick%20response&width=600&height=400&seq=cat-plomb-dep-02&orientation=landscape',
        badge: 'Urgence 24h',
      },
      {
        id: 'plomb-03',
        nom: 'Contrat d\u2019entretien',
        description: 'Entretien pr\u00e9ventif annuel de vos installations avec rapport d\u2019inspection et recommandations.',
        details: ['Visite annuelle programm\u00e9e', 'V\u00e9rification compl\u00e8te', 'Rapport \u00e9crit fourni', 'Tarif pr\u00e9f\u00e9rentiel urgences'],
        image: 'https://readdy.ai/api/search-image?query=Plumbing%20maintenance%20service%20inspection%20professional%20technician%20checking%20pipes%20water%20heater%20boiler%20Senegal%20Africa%20modern%20building%20maintenance%20contract%20clipboard%20checklist&width=600&height=400&seq=cat-plomb-contrat-03&orientation=landscape',
        prix: 'Sur devis',
      },
    ],
  },
  {
    id: 'electricite',
    titre: '\u00c9lectricit\u00e9 & \u00c9nergies',
    icone: 'ri-flashlight-line',
    couleur: '#F9A825',
    description: 'Tableaux \u00e9lectriques, c\u00e2blage, mise aux normes, installation solaire et groupes \u00e9lectrog\u00e8nes.',
    items: [
      {
        id: 'elec-01',
        nom: 'Installation \u00e9lectrique compl\u00e8te',
        description: 'Tableau, c\u00e2blage, prises et \u00e9clairage. Installation neuve ou r\u00e9novation conform\u00e9ment aux normes en vigueur.',
        details: ['Tableau \u00e9lectrique neuf', 'C\u00e2blage toutes pi\u00e8ces', 'Prises et interrupteurs design', 'Mise aux normes certifi\u00e9e'],
        image: 'https://readdy.ai/api/search-image?query=Professional%20electrical%20installation%20Senegal%20Africa%20electrician%20working%20wiring%20electrical%20panel%20modern%20building%20interior%20cables%20circuit%20breaker%20professional%20technician%20safety%20equipment&width=600&height=400&seq=cat-elec-inst-01&orientation=landscape',
      },
      {
        id: 'elec-02',
        nom: '\u00c9nergie solaire photovolta\u00efque',
        description: 'Installation de panneaux solaires, onduleurs et batteries pour r\u00e9duire vos factures et \u00eatre autonome en \u00e9nergie.',
        details: ['Audit \u00e9nerg\u00e9tique gratuit', 'Panneaux solaires haut de gamme', 'Batterie de stockage', 'Maintenance incluse 1 an'],
        image: 'https://readdy.ai/api/search-image?query=Solar%20panel%20installation%20roof%20Senegal%20Africa%20photovoltaic%20panels%20sunny%20day%20technician%20installing%20green%20energy%20renewable%20bright%20clear%20sky%20residential%20building%20modern%20eco-friendly&width=600&height=400&seq=cat-elec-solar-02&orientation=landscape',
        badge: 'Tendance',
      },
      {
        id: 'elec-03',
        nom: 'Groupe \u00e9lectrog\u00e8ne',
        description: 'Fourniture, installation et maintenance de groupes \u00e9lectrog\u00e8nes diesel et gaz pour particuliers et entreprises.',
        details: ['Installation et mise en service', 'Transfert automatique ATS', 'Contrat maintenance', 'Pi\u00e8ces de rechange disponibles'],
        image: 'https://readdy.ai/api/search-image?query=Generator%20installation%20Senegal%20Africa%20diesel%20generator%20set%20industrial%20professional%20outdoor%20installation%20building%20power%20backup%20system%20maintenance%20technician&width=600&height=400&seq=cat-elec-gen-03&orientation=landscape',
      },
      {
        id: 'elec-04',
        nom: '\u00c9clairage LED & domotique',
        description: 'Transformation \u00e9clairage LED, gradateurs, volets motoris\u00e9s, syst\u00e8mes domotiques contr\u00f4lables par smartphone.',
        details: ['\u00c9clairage LED basse consommation', 'Commande smartphone/vocale', 'Volets et portails automatis\u00e9s', 'Syst\u00e8me alarme int\u00e9gr\u00e9'],
        image: 'https://readdy.ai/api/search-image?query=Smart%20home%20LED%20lighting%20domotique%20modern%20interior%20Senegal%20Africa%20automated%20lights%20smart%20switches%20contemporary%20interior%20design%20bright%20warm%20atmosphere%20connected%20home%20technology&width=600&height=400&seq=cat-elec-led-04&orientation=landscape',
        badge: 'Smart Home',
      },
    ],
  },
  {
    id: 'reseau-telecom',
    titre: 'R\u00e9seaux & T\u00e9l\u00e9coms',
    icone: 'ri-wifi-line',
    couleur: '#6A1B9A',
    description: 'C\u00e2blage r\u00e9seau, vid\u00e9osurveillance, interphonie et fibre optique pour vos locaux et r\u00e9sidences.',
    items: [
      {
        id: 'net-01',
        nom: 'C\u00e2blage r\u00e9seau & fibre',
        description: 'Installation r\u00e9seau cat6/cat6a, fibre optique, baie de brassage et infrastructure t\u00e9l\u00e9com pour bureaux et immeubles.',
        details: ['C\u00e2blage cat6A certifi\u00e9', 'Fibre optique FTTH/FTTO', 'Baie de brassage profess.', 'Tests et certification fournis'],
        image: 'https://readdy.ai/api/search-image?query=Network%20cabling%20installation%20professional%20technician%20Senegal%20Africa%20cat6%20fiber%20optic%20server%20room%20structured%20cabling%20data%20center%20clean%20organized%20rack%20modern%20office%20infrastructure&width=600&height=400&seq=cat-net-cable-01&orientation=landscape',
      },
      {
        id: 'net-02',
        nom: 'Vid\u00e9osurveillance CCTV',
        description: 'Installation cam\u00e9ras HD/4K int\u00e9rieures et ext\u00e9rieures avec enregistreur NVR et acc\u00e8s \u00e0 distance sur smartphone.',
        details: ['Cam\u00e9ras HD 4K', 'Enregistreur NVR haute capacit\u00e9', 'Acc\u00e8s smartphone 24/7', 'Alertes mouvement en temps r\u00e9el'],
        image: 'https://readdy.ai/api/search-image?query=CCTV%20security%20camera%20installation%20Senegal%20Africa%20professional%20technician%20installing%20surveillance%20cameras%20modern%20building%20exterior%20HD%20cameras%20security%20system%20professional%20monitoring&width=600&height=400&seq=cat-net-cctv-02&orientation=landscape',
        badge: 'S\u00e9curit\u00e9',
      },
      {
        id: 'net-03',
        nom: 'Interphonie & contr\u00f4le d\u2019acc\u00e8s',
        description: 'Visiophone, interphone, badges RFID, digicodes et portails automatis\u00e9s pour r\u00e9sidences et bureaux.',
        details: ['Visiophone HD couleur', 'Badges RFID et digicodes', 'Portail automatis\u00e9', 'Gestion des acc\u00e8s en ligne'],
        image: 'https://readdy.ai/api/search-image?query=Intercom%20access%20control%20system%20installation%20Senegal%20Africa%20modern%20building%20entrance%20video%20doorbell%20RFID%20badge%20reader%20gate%20automation%20professional%20security%20system&width=600&height=400&seq=cat-net-interphone-03&orientation=landscape',
      },
    ],
  },
  {
    id: 'climatisation',
    titre: 'Climatisation & Froid',
    icone: 'ri-temp-cold-line',
    couleur: '#00838F',
    description: 'Installation, entretien et d\u00e9pannage de tous types de climatiseurs pour particuliers et professionnels.',
    items: [
      {
        id: 'clim-01',
        nom: 'Installation split syst\u00e8me',
        description: 'Pose de climatiseurs split muraux et cassettes toutes marques (Daikin, Samsung, LG, Midea) avec garantie main d\u2019\u0153uvre.',
        details: ['Toutes marques disponibles', 'Pose et mise en service', 'Garantie main d\u2019\u0153uvre 1 an', 'Conseils \u00e9conomies \u00e9nergie'],
        image: 'https://readdy.ai/api/search-image?query=Air%20conditioning%20installation%20Senegal%20Africa%20technician%20installing%20wall%20split%20unit%20modern%20interior%20bright%20room%20professional%20HVAC%20work%20clean%20quality%20installation%20residential&width=600&height=400&seq=cat-clim-split-01&orientation=landscape',
        badge: 'Populaire',
      },
      {
        id: 'clim-02',
        nom: 'Syst\u00e8me centralis\u00e9 VRV/VRF',
        description: 'Climatisation centralis\u00e9e pour immeubles, bureaux et h\u00f4tels. Installation et maintenance de syst\u00e8mes multi-splits.',
        details: ['Audit et dimensionnement', 'Syst\u00e8mes Daikin VRV', 'Installation multi-zones', 'Contrat de maintenance annuel'],
        image: 'https://readdy.ai/api/search-image?query=VRF%20VRV%20centralized%20air%20conditioning%20system%20commercial%20building%20installation%20Senegal%20Africa%20rooftop%20HVAC%20units%20professional%20installation%20modern%20office%20building%20cooling%20system&width=600&height=400&seq=cat-clim-central-02&orientation=landscape',
      },
      {
        id: 'clim-03',
        nom: 'Entretien & d\u00e9pannage',
        description: 'Nettoyage, rechargement gaz, r\u00e9paration toutes pannes. Intervention sous 48h.',
        details: ['Nettoyage filtres et \u00e9vaporateurs', 'Rechargement fluide frigorigène', 'Diagnostic \u00e9lectronique', 'Intervention 48h maximum'],
        image: 'https://readdy.ai/api/search-image?query=Air%20conditioning%20maintenance%20technician%20Senegal%20Africa%20cleaning%20servicing%20split%20unit%20professional%20HVAC%20repair%20service%20tools%20refrigerant%20recharge%20indoor%20unit%20maintenance%20work&width=600&height=400&seq=cat-clim-main-03&orientation=landscape',
        prix: 'D\u00e8s 15 000 FCFA',
      },
    ],
  },
  {
    id: 'services-menage',
    titre: 'Services \u00e0 Domicile',
    icone: 'ri-service-line',
    couleur: '#AD1457',
    description: 'Personnel de maison qualifi\u00e9, conciergerie et services \u00e0 domicile pour particuliers et entreprises.',
    items: [
      {
        id: 'dom-01',
        nom: 'Femmes de m\u00e9nage',
        description: 'Personnel s\u00e9lectionn\u00e9, form\u00e9 et assur\u00e9. Entretien de villa, appartement et bureau avec produits professionnels.',
        details: ['Personnel v\u00e9rifi\u00e9 et form\u00e9', 'Assurance et couverture sociale', 'Produits d\u2019entretien fournis', 'Planning flexible'],
        image: 'https://readdy.ai/api/search-image?query=Professional%20housekeeper%20cleaning%20service%20Senegal%20Africa%20woman%20cleaning%20modern%20villa%20interior%20bright%20living%20room%20professional%20uniform%20cleaning%20supplies%20quality%20domestic%20service&width=600&height=400&seq=cat-dom-menage-01&orientation=landscape',
        badge: 'Disponible',
      },
      {
        id: 'dom-02',
        nom: 'Gardiennage & s\u00e9curit\u00e9',
        description: 'Agents de s\u00e9curit\u00e9 pour villas, r\u00e9sidences, chantiers et \u00e9v\u00e9nements. Disponibles jour et nuit.',
        details: ['Agents qualifi\u00e9s et form\u00e9s', 'Disponible 24h/24, 7j/7', 'Rapport quotidien fourni', 'Uniformes et \u00e9quipements inclus'],
        image: 'https://readdy.ai/api/search-image?query=Professional%20security%20guard%20gatekeeper%20Senegal%20Africa%20uniform%20modern%20residential%20villa%20entrance%20daytime%20professional%20security%20service%20vigilant%20smart%20appearance%20quality%20service&width=600&height=400&seq=cat-dom-garde-02&orientation=landscape',
      },
      {
        id: 'dom-03',
        nom: 'Jardinage & espaces verts',
        description: 'Entretien de jardins, taille des haies, arrosage automatis\u00e9 et am\u00e9nagement paysager pour villas.',
        details: ['Entretien r\u00e9gulier jardin', 'Taille et tonte', 'Arrosage automatis\u00e9', 'Am\u00e9nagement paysager'],
        image: 'https://readdy.ai/api/search-image?query=Professional%20gardener%20landscaping%20service%20Senegal%20Africa%20maintaining%20beautiful%20tropical%20garden%20villa%20green%20lawn%20palm%20trees%20flowers%20hedge%20trimming%20daylight%20outdoor%20landscaping%20quality&width=600&height=400&seq=cat-dom-jardin-03&orientation=landscape',
      },
    ],
  },
];

export const mockCatalogueInfo = {
  titre: 'Catalogue Produits & Services',
  sousTitre: 'XMT GROUPE — L\u2019excellence \u00e0 votre service',
  description: 'D\u00e9couvrez l\u2019ensemble de nos prestations immobili\u00e8res, travaux et services \u00e0 domicile. Ce catalogue vous pr\u00e9sente chaque offre en d\u00e9tail pour vous aider \u00e0 trouver la solution adapt\u00e9e \u00e0 vos besoins.',
  contact: '+221 77 123 45 67 — contact@xmt-groupe.sn',
  adresse: 'Rufisque, Dakar, S\u00e9n\u00e9gal',
  annee: '2026',
};
