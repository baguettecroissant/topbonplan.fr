import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealCard } from "@/components/deal-card"
import { deals } from "@/data/deals"
import { categories } from "@/data/categories"
import { Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tous les Bons Plans du Moment",
    description: "Découvrez notre sélection de bons plans vérifiés : high-tech, maison, sport, mode. Prix cassés et promotions exclusives, mis à jour quotidiennement.",
    keywords: ["bons plans", "promotions", "deals", "réductions", "codes promo", "prix cassés"],
    alternates: {
        canonical: "https://topbonplan.fr/bons-plans",
    },
}

export default function BonsPlansPage() {
    // JSON-LD ItemList for Google Rich Results
    const itemListJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Tous les Bons Plans du Moment",
        numberOfItems: deals.length,
        itemListElement: deals.map((deal, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://topbonplan.fr/bons-plans/${deal.slug}`,
            name: deal.title,
        })),
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />

            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-gradient-to-r from-primary to-blue-800 py-16 md:py-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-6 border border-white/20">
                            <Zap className="w-4 h-4 text-accent" />
                            {deals.length} deals disponibles
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                            Tous les Bons Plans
                        </h1>
                        <p className="text-white/70 max-w-xl mx-auto">
                            Notre sélection des meilleures affaires du moment, vérifiées et mises à jour chaque jour.
                        </p>
                    </div>
                </section>

                {/* Deals Grid */}
                <section className="py-12 md:py-16 container mx-auto px-4">

                    {/* Category filters */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        <button className="px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white">
                            Tous
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                className="px-4 py-2 rounded-full text-sm font-semibold bg-white text-muted-foreground border border-black/5 hover:border-primary hover:text-primary transition-colors"
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {deals.map((deal) => (
                            <DealCard key={deal.title} deal={deal} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
