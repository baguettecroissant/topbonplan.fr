import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealCard } from "@/components/deal-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { RelatedCategories } from "@/components/related-categories"
import { categories } from "@/data/categories"
import { deals } from "@/data/deals"
import { Zap, LayoutGrid } from "lucide-react"

type Props = {
    params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const category = categories.find((c) => c.slug === resolvedParams.category)
    if (!category) return {}

    return {
        title: `Bons plans ${category.name} : Codes promo & réductions 2026 | TopBonPlan`,
        description: `Découvrez tous nos bons plans et codes promo vérifiés pour l'univers ${category.name}. Économisez sur vos achats ${category.subcategories?.join(", ")}.`,
    }
}

export function generateStaticParams() {
    return categories.map((cat) => ({
        category: cat.slug,
    }))
}

export default async function CategoryHubPage({ params }: Props) {
    const resolvedParams = await params
    const category = categories.find((c) => c.slug === resolvedParams.category)

    if (!category) {
        notFound()
    }

    const categoryDeals = deals.filter((d) => d.category === category.name)

    const breadcrumbItems = [
        { label: category.name, href: `/${category.slug}` },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                {/* BREADCRUMB - Internal linking */}
                <div className="bg-white border-b border-black/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>

                {/* HERO SILO */}
                <section className={`py-12 md:py-20 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                    <div className="container mx-auto px-4 relative z-10 text-center text-white">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/30">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                            Bons Plans <span className="text-white/90">{category.name}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
                            {category.description}
                        </p>

                        {/* Subcategories Tags for internal filtering/linking */}
                        {category.subcategories && category.subcategories.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-2 mt-8">
                                <span className="px-4 py-1.5 rounded-full bg-white text-primary text-sm font-bold shadow-sm flex items-center gap-2">
                                    <LayoutGrid className="w-4 h-4" />
                                    Tous
                                </span>
                                {category.subcategories.map((sub) => (
                                    <button
                                        key={sub}
                                        className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm transition-colors"
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* DEALS GRID */}
                <section className="py-12 md:py-16 container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-heading text-2xl font-bold text-foreground">
                            {categoryDeals.length} deals trouvés
                        </h2>
                        <div className="text-sm text-muted-foreground hidden md:block">
                            Mis à jour aujourd'hui
                        </div>
                    </div>

                    {categoryDeals.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {categoryDeals.map((deal) => (
                                <DealCard key={deal.title} deal={deal} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-black/5">
                            <Zap className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-muted-foreground mb-2">Aucun deal en cours</h3>
                            <p className="text-muted-foreground">Revenez bientôt, notre équipe scrute le web !</p>
                        </div>
                    )}
                </section>

                {/* SEO CONTENT BLOCK - Silo semantic reinforcement */}
                {category.seoContent && category.seoContent.length > 0 && (
                    <section className="py-16 md:py-24 bg-white border-t border-black/5">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <div className="prose prose-lg max-w-none text-muted-foreground article-content">
                                {category.seoContent.map((block, idx) => (
                                    <div key={idx} className="mb-10 last:mb-0">
                                        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">
                                            {block.h2}
                                        </h2>
                                        <p className="leading-relaxed whitespace-pre-line">
                                            {block.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* RELATED CATEGORIES - Cross-silo linking */}
                <RelatedCategories currentCategorySlug={category.slug} />

            </main>

            <Footer />
        </div>
    )
}
