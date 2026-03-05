import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryGrid } from "@/components/category-grid"
import { DealCard } from "@/components/deal-card"
import { deals } from "@/data/deals"
import { guides } from "@/data/guides"
import Link from "next/link"
import { Zap, ArrowRight, Shield, Search, ThumbsUp, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
    const featuredDeals = deals.filter((d) => d.isFeatured)
    const latestDeals = deals.slice(0, 4)
    const latestGuides = guides.slice(0, 2)

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-800" />
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent rounded-full blur-[120px]" />
                        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative container mx-auto px-4 py-20 md:py-32">
                        <div className="max-w-3xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-8 border border-white/20">
                                <Zap className="w-4 h-4 text-accent" />
                                Les meilleurs deals du web
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                                Bons plans,{" "}
                                <span className="relative">
                                    <span className="relative z-10 text-accent">testés</span>
                                </span>{" "}
                                et approuvés
                            </h1>

                            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
                                On déniche les meilleures promos du moment en high-tech, maison, sport et mode.
                                Chaque deal est vérifié pour que vous ne payiez jamais trop cher.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" variant="accent" className="rounded-full font-bold text-base px-8 shadow-xl hover:shadow-2xl">
                                    <Link href="/bons-plans">
                                        <Zap className="w-5 h-5" />
                                        Voir les bons plans
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="ghost" className="rounded-full font-bold text-base px-8 text-white hover:bg-white/10 border border-white/20">
                                    <Link href="#categories">
                                        Explorer les catégories
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center justify-center gap-8 md:gap-12 mt-14">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-extrabold text-white">200+</div>
                                    <div className="text-xs md:text-sm font-medium text-white/60">Deals vérifiés</div>
                                </div>
                                <div className="w-px h-10 bg-white/20" />
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-extrabold text-white">-35%</div>
                                    <div className="text-xs md:text-sm font-medium text-white/60">Économie moyenne</div>
                                </div>
                                <div className="w-px h-10 bg-white/20" />
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-extrabold text-white">100%</div>
                                    <div className="text-xs md:text-sm font-medium text-white/60">Indépendant</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom wave */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <path d="M0 60L60 53.3C120 46.7 240 33.3 360 28.3C480 23.3 600 26.7 720 31.7C840 36.7 960 43.3 1080 43.3C1200 43.3 1320 36.7 1380 33.3L1440 30V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" className="fill-background" />
                        </svg>
                    </div>
                </section>

                {/* CATEGORIES GRID */}
                <div id="categories">
                    <CategoryGrid />
                </div>

                {/* FEATURED DEALS */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
                            <div className="max-w-2xl">
                                <span className="text-accent font-bold tracking-wide uppercase text-sm flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    Sélection de la semaine
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2 text-foreground">
                                    Les Deals du Moment
                                </h2>
                                <p className="text-muted-foreground mt-2">
                                    Notre sélection des meilleures affaires, mise à jour quotidiennement.
                                </p>
                            </div>
                            <Link
                                href="/bons-plans"
                                className="hidden md:inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors group"
                            >
                                Voir tous les deals
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {latestDeals.map((deal) => (
                                <DealCard key={deal.title} deal={deal} />
                            ))}
                        </div>

                        <div className="mt-8 text-center md:hidden">
                            <Button asChild variant="accent" size="lg" className="rounded-full px-8">
                                <Link href="/bons-plans">
                                    Voir tous les deals
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* GUIDES SECTION */}
                <section className="py-16 md:py-20 bg-gray-50 border-t border-black/5">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
                            <div className="max-w-2xl">
                                <span className="text-primary font-bold tracking-wide uppercase text-sm flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    Conseils & Comparatifs
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2 text-foreground">
                                    Nos Derniers Guides
                                </h2>
                                <p className="text-muted-foreground mt-2">
                                    On décrypte la tech et on vous aide à faire le meilleur choix avant d'acheter.
                                </p>
                            </div>
                            <Link
                                href="/guides"
                                className="hidden md:inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors group"
                            >
                                Voir tous les guides
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {latestGuides.map((guide) => (
                                <Link
                                    key={guide.slug}
                                    href={`/guides/${guide.slug}`}
                                    className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Visual */}
                                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 mix-blend-multiply" />
                                        <div className="absolute inset-0 p-5 flex flex-col justify-between">
                                            <span className="self-start px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold shadow-sm uppercase">
                                                {guide.category}
                                            </span>
                                        </div>
                                        {/* Image that scales slightly on hover */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                                            style={{ backgroundImage: `url(${guide.coverImage})` }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {guide.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed flex-1">
                                            {guide.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                                <Clock className="w-3.5 h-3.5" />
                                                {guide.readTime} min
                                            </div>
                                            <div className="text-primary text-sm font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                                Lire <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 text-center md:hidden">
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-white border-black/10">
                                <Link href="/guides">
                                    Voir tous les guides
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* TRUST SECTION */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b]" />
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 text-white">
                            Pourquoi nous faire confiance ?
                        </h2>
                        <p className="text-white/60 mb-14 max-w-xl mx-auto">
                            Pas de faux avis, pas de deals sponsorisés. Juste les meilleurs prix, vérifiés par notre équipe.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-5">
                                    <Search className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">Deals Vérifiés</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Chaque bon plan est vérifié manuellement. On compare les prix sur plusieurs sites pour s'assurer que c'est vraiment une bonne affaire.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-5">
                                    <Shield className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">100% Indépendant</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Aucune marque ne nous dicte nos choix. Nos recommandations sont basées uniquement sur le rapport qualité-prix réel.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                                    <ThumbsUp className="w-7 h-7 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">Mise à Jour Quotidienne</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Les prix changent vite. On met à jour nos deals chaque jour pour que vous ayez toujours le meilleur prix du moment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
