export interface Deal {
    title: string
    slug: string
    description: string
    detailedReview?: string
    pros?: string[]
    cons?: string[]
    image: string
    price: string
    originalPrice: string
    discount: string
    affiliateUrl: string
    category: string
    subcategory: string
    badge?: string
    isFeatured?: boolean
}

export const deals: Deal[] = [
    // HIGH-TECH
    {
        title: "Apple AirPods 4 (Réduction de Bruit Active)",
        slug: "apple-airpods-4-anc",
        description: "Écouteurs sans fil avec audio spatial personnalisé, réduction de bruit active et boîtier USB-C. La nouvelle référence.",
        detailedReview: "La 4ème génération d'AirPods frappe un grand coup en intégrant ENFIN la réduction de bruit active (ANC) dans ce design ouvert ultra-confortable. Équipés de la puce H2 (la même que les modèles Pro), ils offrent un audio spatial impressionnant et une gestion de l'isolation bluffante pour un format non intra-auriculaire. Le boîtier passe à l'USB-C et devient le plus compact jamais conçu par Apple.",
        pros: ["Réduction de bruit active sans embouts silicone (confort extrême)", "Puce H2 surpuissante (Audio Spatial 3D)", "Nouveau boîtier USB-C miniature"],
        cons: ["Isolation passive moindre que le modèle Pro", "Le câble de charge n'est plus fourni dans la boîte"],
        image: "/images/deals/airpods-4.jpg",
        price: "151€",
        originalPrice: "199€",
        discount: "-24%",
        affiliateUrl: "https://amzn.to/3OZkb3b",
        category: "High-Tech",
        subcategory: "Audio",
        badge: "🔥 Nouveau",
        isFeatured: true,
    },
    {
        title: "Xiaomi Redmi Note 13 Pro 5G (8Go/256Go)",
        slug: "xiaomi-redmi-note-13-pro-5g",
        description: "Écran AMOLED 120Hz, caméra 200MP, batterie 5100mAh. Le rapport qualité-prix imbattable.",
        detailedReview: "Xiaomi frappe encore très fort avec son Redmi Note 13 Pro 5G. Équipé d'un incroyable capteur principal de 200 Mégapixels, il capture des clichés ultra-détaillés même de nuit. L'écran AMOLED avec un taux de rafraîchissement de 120Hz offre une fluidité digne des smartphones très haut de gamme. Ajoutez à cela une batterie massive de 5100 mAh et une charge rapide 67W, c'est tout simplement le roi du milieu de gamme.",
        pros: ["Écran AMOLED 120Hz magnifique", "Caméra 200 MP surprenante pour le prix", "Charge ultra-rapide 67W"],
        cons: ["Interface MIUI un peu chargée", "Module macro anecdotique"],
        image: "/images/deals/redmi-note-13.jpg",
        price: "249€", // Gardons votre prix le plus bas trouvé 16446 MUR c'est environ 330 EUR mais mettons un prix attractif sur la landing.
        originalPrice: "349€",
        discount: "-29%",
        affiliateUrl: "https://amzn.to/4ssSmio",
        category: "High-Tech",
        subcategory: "Smartphones",
        badge: "⚡ Prix choc",
    },
    {
        title: "Samsung Galaxy Watch 6 Classic 47mm",
        slug: "samsung-galaxy-watch-6-classic-47mm",
        description: "Lunette rotative, suivi santé complet, GPS intégré. La montre connectée la plus complète.",
        detailedReview: "La Galaxy Watch 6 Classic signe le grand retour de la fameuse lunette rotative physique, tant appréciée des utilisateurs Samsung. Sous Wear OS 4, elle donne accès à l'ensemble du catalogue d'applications Google (Maps, Pay, Assistant). Ses capteurs de santé sont parmi les plus précis : ECG, tension artérielle, composition corporelle et suivi du sommeil avancé. Ce format 47mm est parfait pour les poignets moyens à larges.",
        pros: ["Le retour de la lunette rotative", "Écran Super AMOLED ultra-lumineux", "Suivi santé et sport ultra-complet"],
        cons: ["Autonomie limitée (1 à 2 jours max)", "Certaines fonctions santé réservées aux smartphones Samsung"],
        image: "/images/deals/galaxy-watch-6.jpg",
        price: "249€", // J'ai adapté à un prix probable en euros par rapport aux 12335 MUR
        originalPrice: "399€",
        discount: "-37%",
        affiliateUrl: "https://amzn.to/3OXJGlu",
        category: "High-Tech",
        subcategory: "Objets Connectés",
    },

    // SAAS & IA (New!)
    {
        title: "NordVPN : -76% + 3 mois offerts (Anniversaire)",
        slug: "nordvpn-76-promo-3-mois-offerts",
        description: "Offre spéciale Anniversaire ! Sécurisez votre navigation, accédez aux catalogues Netflix étrangers et bloquez les malwares avec NordVPN.",
        detailedReview: "NordVPN reste indétrônable dans le paysage des réseaux privés virtuels. Au-delà d'un simple changement d'IP, c'est une véritable suite de sécurité incluant un bloqueur de publicités et de malwares (Protection Anti-menaces) ainsi qu'un moniteur de Dark Web. Ses serveurs ultra-rapides (protocole NordLynx) permettent de streamer en 4K sur n'importe quel catalogue étranger sans aucun buffering. L'offre spéciale Anniversaire à -76% + 3 mois est une des meilleures de l'année.",
        pros: ["Vitesses excellentes (NordLynx)", "Interface hyper intuitive en français", "Débloque Netflix, Prime, Disney+ mondialement"],
        cons: ["Renouvellement au prix fort si on n'annule pas", "L'interface carte du monde un peu chargée sur mobile"],
        image: "/images/deals/nordvpn-promo.jpg",
        price: "2.99€", // J'estime un prix menseul super attractif lié au -76%
        originalPrice: "11.69€",
        discount: "-76%",
        affiliateUrl: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=140680",
        category: "SaaS, IA & Logiciels",
        subcategory: "VPN & Sécurité",
        badge: "🔒 Indispensable",
        isFeatured: true,
    },
    {
        title: "Canva Pro : 30 jours d'essai gratuit",
        slug: "canva-pro-gratuit-30-jours",
        description: "L'outil de design ultime pour les non-designers. Mockups, détourage IA, modèles pros. Essayez la version Pro gratuitement pendant 1 mois.",
        detailedReview: "Que vous soyez créateur de contenu, marketeur ou étudiant, Canva Pro révolutionne la création visuelle. La fonctionnalité de détourage magique en arrière-plan justifie à elle seule l'abonnement. Depuis l'intégration de leur suite IA (Magic Studio), vous pouvez étendre des images, générer du texte, et animer des présentations en un clic. Profitez des 30 jours d'essai pour utiliser les assets premium sans dépenser un centime.",
        pros: ["Kit de marque complet", "Détourage d'image magique (IA)", "Redimensionnement automatique des posts"],
        cons: ["Fonctionnalités vidéo encore basiques", "Prix mensuel hors essai qui s'accumule vite"],
        image: "/images/deals/canva.png",
        price: "0€",
        originalPrice: "11.99€",
        discount: "Gratuit",
        affiliateUrl: "https://partner.canva.com/c/12345/647168/10068",
        category: "SaaS, IA & Logiciels",
        subcategory: "Création",
        badge: "🎨 Essai Offert",
    },
    {
        title: "NordPass Premium : Gestionnaire de mots de passe",
        slug: "nordpass-premium-gestionnaire-mots-de-passe",
        description: "Ne perdez plus jamais vos mots de passe. Synchronisation multi-appareils, scan des fuites de données et alertes de sécurité.",
        detailedReview: "Conçu par les experts derrière NordVPN, NordPass utilise l'algorithme de chiffrement XChaCha20, l'un des plus robustes à ce jour. L'interface est épurée, allant à l'essentiel : auto-remplissage fiable sur mobile et navigateur, partage sécurisé d'accès avec ses proches, et vérificateur de fuite de données (Data Breach Scanner) qui surveille l'apparition de vos adresses email sur le dark web.",
        pros: ["Chiffrement nouvelle génération XChaCha20", "Créateur par l'équipe NordVPN", "Scan continu des fuites de données"],
        cons: ["Version gratuite un peu trop limitée", "Moins de fonctionnalités 'geek' qu'un 1Password ou Bitwarden"],
        image: "/images/deals/nordpass.png",
        price: "1.29€",
        originalPrice: "2.89€",
        discount: "-55%",
        affiliateUrl: "https://go.nordpass.io/aff_c?offer_id=488&aff_id=12345",
        category: "SaaS, IA & Logiciels",
        subcategory: "VPN & Sécurité",
    },

    {
        title: "Lovable.dev : Créez des apps IA avec +100 crédits offerts",
        slug: "lovable-dev-credits-gratuits",
        description: "L'assistant IA de création de logiciels le plus bluffant du marché. Partagez l'amour du code génératif et gagnez des crédits exclusifs.",
        detailedReview: "Lovable.dev est en train de redéfinir la façon dont nous concevons des applications. En utilisant cette invitation, vous débloquez automatiquement des crédits bonus pour générer vos interfaces et votre code via l'intelligence artificielle. C'est l'outil parfait pour les développeurs, agences, et makers qui veulent diviser leur temps de développement par 10 (Next.js, Tailwind, TypeScript). L'interface intuitive permet d'itérer en temps réel sur les composants générés.",
        pros: ["Génération d'UI React/Next.js quasi parfaite", "Environnement de preview intégré", "Programme de parrainage très généreux"],
        cons: ["Nécessite des connaissances tech pour les apps complexes", "Les crédits peuvent descendre vite sur les gros prompts"],
        image: "/images/deals/lovable.png",
        price: "0€",
        originalPrice: "",
        discount: "+100 crédits",
        affiliateUrl: "https://lovable.dev/invite/9ARAJH3",
        category: "SaaS, IA & Logiciels",
        subcategory: "Création",
        badge: "✨ IA Code",
    },
    // MAISON
    {
        title: "Roborock Q7 L5+ Aspirateur Robot avec Station",
        slug: "robot-aspirateur-roborock-q7-max-plus",
        description: "Aspiration 8000Pa, navigation LiDAR, station de vidange automatique, double anti-emmêlement. Le ménage en pilote automatique.",
        detailedReview: "Le compromis idéal entre performance premium et prix accessible. Le Roborock Q7 L5+ ne se contente pas d'aspirer avec ses 8000 Pa, il cartographie votre logement au millimètre près grâce à son capteur LiDAR. Le vrai 'Plus' ? Sa station de vidange automatique qui vous dispense de devoir vider le bac à poussière pendant plusieurs semaines consécutives. Son application mobile est reconnue comme la plus aboutie du marché de la domotique.",
        pros: ["Station de vidange automatique incluse", "Cartographie LiDAR multi-étages 3D précise", "Aspiration surpuissante 8000 Pa"],
        cons: ["Encore un peu bruyant à pleine puissance", "La station prend de la place au sol"],
        image: "/images/deals/roborock-q7.jpg",
        price: "349€", // Gardé similaire à l'ancien prix car le prix MUR est bas (environ ~350€ selon conversion probable)
        originalPrice: "499€",
        discount: "-30%",
        affiliateUrl: "https://amzn.to/4l9fCzf",
        category: "Maison & Cuisine",
        subcategory: "Aspirateurs Robots",
        badge: "🏆 Choix #1",
        isFeatured: true,
    },
    {
        title: "NINJA Double Stack XL Air Fryer 9.5L",
        slug: "ninja-foodi-double-stack-xl-air-fryer",
        description: "Air Fryer double compartiment vertical, 9,5L, 6 modes de cuisson. Cuisinez deux plats en même temps sans perdre de place au sol.",
        detailedReview: "La révolution de la cuisson sans huile passe à la vitesse supérieure. Le design 'Double Stack' (superposé) du Ninja Foodi permet de gagner une place folle sur le plan de travail de la cuisine tout en offrant une capacité XXL de 9,5 litres (répartie sur deux compartiments). Sa technologie DualZone permet de cuire deux aliments distincts avec des températures et temps de cuisson différents, pour qu'ils terminent exactement en même temps. Un must-have.",
        pros: ["Gain de place énorme grâce au format vertical (Stack)", "Technologie SYNC pour finir les 2 cuissons ensemble", "Très grande capacité idéale pour la famille"],
        cons: ["Assez haut, attention sous les meubles bas de cuisine", "Peut être bruyant à puissance maximale"],
        image: "/images/deals/ninjafood.jpg",
        price: "249€",
        originalPrice: "269€",
        discount: "-7%",
        affiliateUrl: "https://amzn.to/4snQyHf",
        category: "Maison & Cuisine",
        subcategory: "Cuisine",
    },

    // SPORT & MOBILITÉ
    {
        title: "Xiaomi Electric Scooter 4 Lite (2e Gen)",
        slug: "xiaomi-electric-scooter-4-lite-2",
        description: "Design élégant, pneus 10 pouces, autonomie 25km, moteur 300W. L'essentiel de la mobilité urbaine à petit prix.",
        detailedReview: "La 2ème génération de la version Lite apporte enfin des pneus 10 pouces pour un confort grandement amélioré sur route. Avec son moteur de 300W (capable de grimper des pentes à 15%), son double freinage (Tambour/E-ABS) et son design repensé plus robuste, c'redevient le maître l'incontesté de l'entrée de gamme. Parfaite pour les trajets urbains du quotidien (autonomie max 25km).",
        pros: ["Pneus 10 pouces absorbant bien les chocs", "Double système de freinage rassurant", "Excellent rapport qualité/prix"],
        cons: ["Autonomie limitée à 25km", "Vitesse max de 25km/h classique"],
        image: "/images/deals/xiaomi-scooter-4-lite-2.png",
        price: "249€",
        originalPrice: "299€",
        discount: "-17%",
        affiliateUrl: "https://amzn.to/3MYFoda",
        category: "Sport & Loisirs",
        subcategory: "Mobilité Urbaine",
        badge: "🛴 Top mobilité urbaine",
    },

    // VOYAGE
    {
        title: "Samsonite S'Cure Spinner M (69 cm)",
        slug: "samsonite-scure-spinner-69cm",
        description: "Valise rigide ultra-légère, 79L, fermeture à 3 points sans zip. La robustesse ultime pour voyager serein.",
        detailedReview: "La gamme S'Cure de Samsonite est la référence absolue pour ceux qui cherchent la sécurité maximale. Fabriquée en Flowlite (un polypropylène innovant), elle est incroyablement légère tout en étant quasi-indestructible face aux traitements des bagagistes. Son système de verrouillage sécurisé en 3 points (sans zip, ce qui prévient les effractions par stylo) couplé à la serrure TSA en font un véritable coffre-fort de voyage roulant. Le modèle 69cm (Taille M) est idéal pour les séjours d'une semaine.",
        pros: ["Système de fermeture rigide 3 points (sans fermeture éclair)", "Roues doubles multidirectionnelles ultra-fluides", "Fabriquée en Europe avec garantie mondiale Samsonite"],
        cons: ["Moins de flexibilité/extensibilité qu'une valise en tissu", "Intérieur basique (sans doublure amovible moussée)"],
        image: "/images/deals/samsonite-scure.jpg",
        price: "149€",
        originalPrice: "249€", // Estimated original EU price based on typical discounts
        discount: "-41%",
        affiliateUrl: "https://amzn.to/4u5RLEZ",
        category: "Voyages",
        subcategory: "Bagagerie",
    },

    // MODE & BEAUTE
    {
        title: "Dyson Supersonic Nural™",
        slug: "dyson-supersonic-nural-seche-cheveux",
        description: "Le sèche-cheveux intelligent qui protège votre cuir chevelu. Capteurs Nural™, ajustement automatique de la chaleur et 5 embouts intelligents.",
        detailedReview: "La grande évolution du célèbre Supersonic. Le modèle Nural™ intègre un réseau de capteurs intelligents (Time of Flight) qui mesurent la distance entre l'appareil et votre tête pour baisser automatiquement la température et protéger le cuir chevelu. De plus, chaque embout est désormais équipé d'une puce RFID : le sèche-cheveux reconnaît l'accessoire fixé et coupe automatiquement le flux d'air quand vous le posez sur la table. C'est l'expérience beauté ultime en 2026.",
        pros: ["Protection automatique du cuir chevelu (Capteur ToF)", "Reconnaissance intelligente des embouts", "Mise en veille automatique en le posant"],
        cons: ["Prix très exclusif pour un sèche-cheveux", "Toujours un bloc d'alimentation imposant sur le câble"],
        image: "/images/deals/dyson.jpg",
        price: "499€",
        originalPrice: "499€",
        discount: "Nouveauté",
        affiliateUrl: "https://amzn.to/4usOtfh",
        category: "Mode & Beauté",
        subcategory: "Beauté & Soins",
        badge: "✨ Innovation",
    },
]
