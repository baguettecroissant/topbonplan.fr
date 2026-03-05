import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealsFilterGrid } from "@/components/deals-filter-grid"
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

                {/* Deals Grid with interactive filters */}
                <section className="py-12 md:py-16 container mx-auto px-4">
                    <DealsFilterGrid deals={deals} categories={categories} />
                </section>
            </main>

            <Footer />
        </div>
    )
}
