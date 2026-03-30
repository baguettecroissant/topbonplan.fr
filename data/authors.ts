export interface Author {
    id: string
    name: string
    role: string
    avatar: string
    expertise: string
}

export const authors: Author[] = [
    {
        id: "thomas-d",
        name: "Thomas D.",
        role: "Expert Tech & Cybersécurité",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Thomas&backgroundColor=b6e3f4",
        expertise: "Ancien sysadmin et développeur full-stack passionné par l'IA, Thomas décortique les protocoles de chiffrement et teste les derniers outils tech pour TopBonPlan."
    },
    {
        id: "claire-m",
        name: "Claire M.",
        role: "Spécialiste Domotique & IoT",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Claire&backgroundColor=ffdfbf",
        expertise: "Claire a domotisé son appartement de A à Z. Elle teste et configure les derniers aspirateurs robots et protocoles de maison connectée pour TopBonPlan."
    },
    {
        id: "sophie-l",
        name: "Sophie L.",
        role: "Experte Beauté & Lifestyle",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sophie&backgroundColor=fce4ec",
        expertise: "Coiffeuse visagiste de formation, Sophie teste les nouveaux sèche-cheveux, lisseurs et appareils beauté pour vérifier s'ils tiennent leurs promesses sans abîmer votre peau et vos cheveux au quotidien."
    },
    {
        id: "marc-t",
        name: "Marc T.",
        role: "Cuisinier Amateur & Testeur Électroménager",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Marc&backgroundColor=fff9c4",
        expertise: "Passionné de gastronomie et de gain de temps, Marc met à l'épreuve les Air Fryers, multicuiseurs et machines à café pour distinguer les vrais indispensables des gadgets inutiles."
    }
]
