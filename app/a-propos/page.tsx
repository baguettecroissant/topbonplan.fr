import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Zap, Shield, Search, Handshake } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "À Propos de Nous | TopBonPlan.fr",
    description: "Découvrez notre mission, notre équipe et notre processus pour vous dénicher les meilleurs bons plans du web en toute indépendance.",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-primary overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                            Notre Mission : <br className="hidden md:block" />
                            <span className="text-accent">Vous faire économiser</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                            TopBonPlan est né d'un constat simple : dénicher une vraie bonne affaire sur internet demande trop de temps.
                            Notre équipe le fait pour vous, tous les jours.
                        </p>
                    </div>
                </section>

                {/* STORY SECTION */}
                <section className="py-16 md:py-24 container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground text-muted-foreground">
                        <h2 className="text-3xl text-center mb-8">Qui sommes-nous ?</h2>
                        <p className="lead text-xl text-center font-medium text-foreground mb-12">
                            Nous sommes une équipe de passionnés de tech, accros au shopping malin, et surtout, intransigeants sur les prix.
                        </p>

                        <p>
                            Face à l'inflation constante et aux fausses promotions ("prix barrés" artificiels gonflés juste avant les soldes), il est devenu très difficile pour un consommateur de savoir s'il réalise une vraie affaire.
                        </p>
                        <p>
                            C'est pour résoudre ce problème que <strong>TopBonPlan.fr</strong> a été créé. Notre rôle est de fouiller le web, d'analyser l'historique des prix, de vérifier les codes promos et de vous présenter uniquement les offres qui valent <em>vraiment</em> le coup. Nous ne sommes pas un annuaire automatique : derrière chaque deal publié sur ce site, il y a une validation humaine.
                        </p>
                    </div>
                </section>

                {/* OUR COMMITMENTS */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-accent font-bold tracking-wide uppercase text-sm">Nos Valeurs</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2 text-foreground">
                                Nos 4 engagements
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl bg-gray-50 border border-black/5 flex gap-5">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2 text-foreground">Vérification manuelle</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nous vérifions chaque offre en croisant l'historique des prix (via des outils comme Keepa pour Amazon) pour garantir qu'il s'agit du meilleur prix récent.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-gray-50 border border-black/5 flex gap-5">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-accent">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2 text-foreground">100% Indépendants</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Aucune marque ne peut payer pour apparaître dans notre sélection. Si un produit est mauvais ou que le prix n'est pas bon, nous ne le publions pas.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-gray-50 border border-black/5 flex gap-5">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2 text-foreground">Mise à jour quotidienne</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Les bons plans expirent vite. Notre équipe actualise le site plusieurs fois par jour pour retirer les offres expirées et ajouter les nouvelles pépites.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-gray-50 border border-black/5 flex gap-5">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Handshake className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2 text-foreground">Transparence totale</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Notre modèle économique repose sur l'affiliation. Cela signifie que si vous achetez via l'un de nos liens, le marchand nous reverse une petite commission. Cela ne vous coûte absolument rien de plus et permet de faire vivre le site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-20 container mx-auto px-4 text-center">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">
                        Prêt à faire des économies ?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Rejoignez des milliers de chasseurs de bons plans et explorez nos sélections du jour.
                    </p>
                    <a
                        href="/bons-plans"
                        className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-xl hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors"
                    >
                        <Zap className="mr-2 h-5 w-5" />
                        Voir les bons plans du moment
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    )
}
