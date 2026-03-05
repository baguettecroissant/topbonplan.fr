import Link from "next/link"
import { Zap } from "lucide-react"
import { categories } from "@/data/categories"

export function Footer() {
    const populaires = [
        { name: "NordVPN à -73%", href: "/saas-logiciels" },
        { name: "AirPods Pro 2", href: "/high-tech" },
        { name: "Roborock Q7 Max+", href: "/maison" },
        { name: "Xiaomi Scooter 4", href: "/sport" },
    ]

    const legale = [
        { name: "Guides & Tests", href: "/guides" },
        { name: "À Propos", href: "/a-propos" },
        { name: "Mentions Légales", href: "/mentions-legales" },
        { name: "Politique de Confidentialité", href: "/mentions-legales" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10">
            <div className="container mx-auto px-4">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white group-hover:scale-110 transition-transform">
                                <Zap className="h-6 w-6" />
                            </div>
                            <span className="font-heading text-3xl font-extrabold tracking-tight">
                                Top<span className="text-primary">Bon</span><span className="text-accent">Plan</span>
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed max-w-sm">
                            Votre chasseur de bons plans au quotidien. On déniche, on teste, on compare — pour que vous ne payiez jamais trop cher.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-white/40">
                            <span>🇫🇷</span>
                            <span>Site indépendant basé en France</span>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Categories */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-6 text-white">Catégories</h3>
                            <ul className="space-y-3">
                                {categories.map((cat) => (
                                    <li key={cat.slug} className="flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                                        <Link href={`/${cat.slug}`} className="text-white/60 hover:text-white transition-colors text-sm">
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Populaires */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-6 text-white">Les Plus Populaires</h3>
                            <ul className="space-y-3">
                                {populaires.map((link) => (
                                    <li key={link.name} className="flex items-center gap-2 group">
                                        <Zap className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors" />
                                        <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legale */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-6 text-white">Informations</h3>
                            <ul className="space-y-3">
                                {legale.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Affiliate Disclaimer */}
                <div className="py-6 border-t border-white/10 mb-6">
                    <p className="text-xs text-white/40 max-w-3xl">
                        💡 <strong className="text-white/60">Transparence :</strong> TopBonPlan.fr participe à divers programmes d'affiliation.
                        Cela signifie que nous pouvons percevoir une commission sur les achats effectués via nos liens, sans surcoût pour vous.
                        Nos recommandations restent 100% indépendantes.
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} TopBonPlan.fr — Tous droits réservés.</p>
                    <p>Fait avec ⚡ pour les chasseurs de bons plans.</p>
                </div>
            </div>
        </footer>
    )
}
