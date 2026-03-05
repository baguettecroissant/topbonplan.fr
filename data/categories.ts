import { Smartphone, Home, Dumbbell, ShoppingBag, Plane, Cpu } from "lucide-react"

export interface Category {
    name: string
    slug: string
    description: string
    icon: string
    color: string
    bgColor: string
    textColor: string
    count: number
    subcategories: string[]
    seoContent?: {
        h2: string
        text: string
    }[]
}

export const categories: Category[] = [
    {
        name: "High-Tech",
        slug: "high-tech",
        description: "Smartphones, écouteurs, montres connectées et gadgets au meilleur prix",
        icon: "Smartphone",
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600",
        count: 12,
        subcategories: ["Smartphones", "Audio", "Informatique", "Objets Connectés"],
        seoContent: [
            {
                h2: "Trouver les meilleurs bons plans High-Tech",
                text: "Notre équipe scrute quotidiennement le web pour vous dénicher les vraies promotions sur l'univers High-Tech. Qu'il s'agisse d'un nouveau smartphone, d'un PC portable gaming ou d'écouteurs sans fil, nous comparons l'historique des prix pour vous garantir une véritable économie.",
            },
            {
                h2: "Comment choisir son équipement ?",
                text: "L'univers de la technologie évolue rapidement. Avant de craquer sur un deal, vérifiez toujours vos besoins réels : avez-vous besoin du dernier processeur pour de la simple bureautique ? Nos mini-guides intégrés à chaque bon plan vous aident à trancher.",
            }
        ]
    },
    {
        name: "SaaS, IA & Logiciels",
        slug: "saas-logiciels",
        description: "Abonnements logiciels, IA, VPN et outils digitaux à prix malin",
        icon: "Cpu",
        color: "from-fuchsia-500 to-purple-600",
        bgColor: "bg-fuchsia-50",
        textColor: "text-fuchsia-600",
        count: 8,
        subcategories: ["VPN & Sécurité", "Intelligence Artificielle", "Bureautique", "Création"],
        seoContent: [
            {
                h2: "Des économies récurrentes sur vos abonnements",
                text: "Les logiciels en mode SaaS (Software as a Service) représentent une part croissante de notre budget. Nous rassemblons ici les codes promo, remises annuelles et offres à vie (lifetime deals) sur les meilleurs outils du marché : VPN, suites bureautiques, gestionnaires de mots de passe, etc.",
            },
            {
                h2: "Bons plans sur l'Intelligence Artificielle",
                text: "De ChatGPT à Midjourney en passant par les outils de productivité boostés à l'IA, le secteur bouillonne. Ne payez plus vos licences au prix fort : retrouvez nos astuces de partage d'abonnement légal et nos coupons de réduction vérifiés.",
            }
        ]
    },
    {
        name: "Maison & Cuisine",
        slug: "maison",
        description: "Électroménager, robots et accessoires malins pour votre intérieur",
        icon: "Home",
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600",
        count: 8,
        subcategories: ["Électroménager", "Cuisine", "Aspirateurs Robots", "Domotique"],
        seoContent: [
            {
                h2: "Équiper sa maison sans se ruiner",
                text: "L'équipement de la maison représente l'un des postes de dépense majeurs des foyers. Pour autant, il est souvent possible d'économiser de 20 à 40% sur des marques prestigieuses (Dyson, Ninja, Bosch) en guettant les bonnes périodes (Soldes, French Days, Black Friday) ou nos sélections quotidiennes.",
            }
        ]
    },
    {
        name: "Sport & Loisirs",
        slug: "sport",
        description: "Trottinettes, vélos, fitness et équipements outdoor à prix cassé",
        icon: "Dumbbell",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        count: 6,
        subcategories: ["Mobilité Urbaine", "Fitness", "Outdoor", "Nutrition"],
    },
    {
        name: "Mode & Beauté",
        slug: "mode",
        description: "Tendances, parfums, soins et accessoires mode au meilleur tarif",
        icon: "ShoppingBag",
        color: "from-pink-500 to-rose-600",
        bgColor: "bg-pink-50",
        textColor: "text-pink-600",
        count: 10,
        subcategories: ["Vêtements", "Chaussures", "Beauté & Soins", "Parfums"],
    },
    {
        name: "Voyages",
        slug: "voyages",
        description: "Valises, accessoires et bons plans voyage pour partir malin",
        icon: "Plane",
        color: "from-violet-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-600",
        count: 5,
        subcategories: ["Bagagerie", "Accessoires Voyage", "Hébergements"],
    },
]
