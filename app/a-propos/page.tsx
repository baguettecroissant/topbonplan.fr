import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Zap, Shield, Search, Handshake, Users, Trophy, Target } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { authors } from "@/data/authors"

export const metadata: Metadata = {
    title: "À Propos de Nous | L'Équipe TopBonPlan.fr",
    description: "Découvrez l'équipe d'experts tech et notre mission : vous dénicher les vrais bons plans du net, validés humainement 100% indépendamment.",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="relative py-24 bg-[#0f172a] overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-8">
                            <Zap className="w-4 h-4 text-accent" />
                            <span>100% Indépendants depuis 2026</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight font-heading leading-tight">
                            Notre mission : <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Tracker les faux prix.</span><br />
                            <span className="text-white">Vous faire économiser.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mx-auto font-medium leading-relaxed max-w-2xl">
                            Le web est rempli de fausses promos. TopBonPlan c'est l'anti-annuaire automatique : chaque deal publié ici est vérifié humainement par notre équipe.
                        </p>
                    </div>
                </section>

                {/* STATS STRIP */}
                <section className="bg-primary/5 py-12 border-b border-black/5">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                            <div>
                                <div className="text-4xl font-black font-heading text-primary mb-1">5K+</div>
                                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Deals Analysés</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black font-heading text-primary mb-1">~240€</div>
                                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Économie Moyenne</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black font-heading text-primary mb-1">0</div>
                                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Article Sponsorisé</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black font-heading text-primary mb-1">100%</div>
                                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Validation Humaine</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR VALUES */}
                <section className="py-24 container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6 text-foreground">
                            Pourquoi on fait ça ?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Face à l'inflation et au "price gorging" algorithmique, il est devenu impossible de savoir si on paie le juste prix. Nous avons créé les outils et la méthode pour déjouer ces pièges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                                <Search className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4">Analyse stricte</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Finies les "promos" gonflées. Nous croisons les historiques tarifaires (Keepa, CamelCamelCamel...) sur 12 mois pour garantir qu'un deal est une VRAIE remise.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4">Zéro Sponso.</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Les marques ne peuvent pas acheter leur place ici. Notre business model repose uniquement sur l'affiliation transparente. Si le produit est mauvais, on l'écarte.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4">Tests Longue Durée</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous achetons (la majorité) des produits que nous recommandons dans nos Guides pour les pousser dans leurs retranchements pendant plusieurs semaines.
                            </p>
                        </div>
                    </div>
                </section>

                {/* THE TEAM */}
                <section className="py-24 bg-slate-50 border-y border-black/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
                                L'équipe derrière le site
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Des geeks, des fouineurs, mais surtout des passionnés intraitables.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {authors.map((author) => (
                                <Link href={`/auteurs/${author.id}`} key={author.id} className="group bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:border-primary/50 hover:shadow-lg transition-all flex flex-col items-center text-center">
                                    <div className="relative w-32 h-32 mb-6">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
                                        <Image
                                            src={author.avatar}
                                            alt={author.name}
                                            fill
                                            unoptimized
                                            className="relative rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">{author.name}</h3>
                                    <span className="text-sm font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                                        {author.role}
                                    </span>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {author.expertise}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-24 container mx-auto px-4 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
                        Prêt à faire pigner votre banquier ?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                        Ne perdez plus votre temps à écumer les forums pendant des heures. Explorez nos sélections du jour.
                    </p>
                    <Link
                        href="/bons-plans"
                        className="inline-flex items-center justify-center rounded-2xl bg-accent px-10 py-5 text-lg font-bold text-accent-foreground shadow-xl shadow-accent/20 hover:bg-accent/90 hover:scale-105 transition-all"
                    >
                        <Zap className="mr-2 h-6 w-6" />
                        Voir les Deals Frais
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    )
}
