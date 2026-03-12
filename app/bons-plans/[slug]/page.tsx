import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ExternalLink, TrendingDown, CheckCircle2, XCircle, ArrowRight, ShieldCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DealCard } from "@/components/deal-card"
import { Button } from "@/components/ui/button"
import { deals } from "@/data/deals"
import { getDealBySlug, getDeals } from "@/lib/deals-service"
import { categories } from "@/data/categories"

export const revalidate = 86400 // ISR for 24h
export const dynamicParams = true // Enable dynamic building for non-generated pages

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const deal = await getDealBySlug(resolvedParams.slug)
    if (!deal) return {}

    return {
        title: `${deal.title} à ${deal.price} au lieu de ${deal.originalPrice} — Bon Plan`,
        description: deal.detailedReview?.substring(0, 155) || deal.description,
        keywords: [deal.title, deal.category, deal.subcategory, "bon plan", "promo", "réduction", deal.title.split(" ")[0]],
        alternates: {
            canonical: `https://topbonplan.fr/bons-plans/${deal.slug}`,
        },
        openGraph: {
            title: `${deal.title} à ${deal.price}`,
            description: deal.description,
            type: "article",
            url: `https://topbonplan.fr/bons-plans/${deal.slug}`,
            images: [
                {
                    url: deal.image,
                    alt: deal.title,
                },
            ],
        },
    }
}

export async function generateStaticParams() {
    const allDeals = await getDeals()
    return allDeals.map((deal) => ({
        slug: deal.slug,
    }))
}

export default async function DealPage({ params }: Props) {
    const resolvedParams = await params
    const deal = await getDealBySlug(resolvedParams.slug)

    if (!deal) {
        notFound()
    }

    // Find category logic
    const category = categories.find((c) => c.name === deal.category)
    const categorySlug = category?.slug || "#"

    // Related Deals in same category
    const allDeals = await getDeals()
    const relatedDeals = allDeals
        .filter((d) => d.category === deal.category && d.slug !== deal.slug)
        .slice(0, 4)

    const breadcrumbItems = [
        { label: deal.category, href: `/${categorySlug}` },
        { label: deal.title, href: `/bons-plans/${deal.slug}` },
    ]

    // Schema.org Structured Data
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: deal.title,
        image: `https://topbonplan.fr${deal.image}`,
        description: deal.description,
        offers: {
            "@type": "Offer",
            url: deal.affiliateUrl,
            priceCurrency: "EUR",
            price: deal.price.replace("€", "").trim(),
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "TopBonPlan Partner",
            },
        },
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Schema.org integration */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />

            <main className="flex-1 pb-20">
                <div className="bg-white border-b border-black/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>

                {/* PRODUCT DETAILS */}
                <section className="container mx-auto px-4 py-8 md:py-12">
                    <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
                        <div className="flex flex-col lg:flex-row">

                            {/* Left Column: Image Gallery */}
                            <div className="lg:w-1/2 p-8 md:p-12 bg-gray-50/50 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-black/5">
                                <div className="relative w-full max-w-md aspect-square">
                                    <Image
                                        src={deal.image}
                                        alt={`${deal.title} - Bon plan ${deal.category}`}
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                    {deal.badge && (
                                        <div className="absolute top-4 left-4 z-10 pointer-events-none">
                                            <span className="px-4 py-2 text-sm font-bold bg-white/90 backdrop-blur-md rounded-full shadow-md text-foreground border border-black/5">
                                                {deal.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: Information & CTAs */}
                            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wider">
                                        {deal.subcategory}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                                        <ShieldCheck className="w-3 h-3" />
                                        Deal Vérifié
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                                    {deal.title}
                                </h1>

                                <p className="text-lg text-muted-foreground mb-8">
                                    {deal.description}
                                </p>

                                <div className="p-6 bg-gray-50 rounded-2xl border border-black/5 mb-8">
                                    <div className="flex items-end gap-3 mb-2">
                                        <div className="text-5xl font-black text-foreground tracking-tighter">
                                            {deal.price}
                                        </div>
                                        <div className="flex flex-col pb-1">
                                            <span className="text-muted-foreground line-through font-medium">Prix d'origine : {deal.originalPrice}</span>
                                            <span className="text-red-500 font-bold flex items-center gap-1">
                                                <TrendingDown className="w-4 h-4" />
                                                Économie de {deal.discount}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                        <Button asChild variant="accent" size="lg" className="w-full text-base font-bold h-14 rounded-xl shadow-xl shadow-orange-500/20">
                                            <a href={deal.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow">
                                                Profiter du deal
                                                <ExternalLink className="w-5 h-5 ml-2" />
                                            </a>
                                        </Button>
                                    </div>
                                    <p className="text-xs text-center text-muted-foreground mt-4">
                                        Les prix et la disponibilité peuvent varier rapidement.
                                    </p>
                                </div>

                                {/* Pros & Cons */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                                    {deal.pros && deal.pros.length > 0 && (
                                        <div className="space-y-3">
                                            <h3 className="font-bold text-foreground flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                Points forts
                                            </h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {deal.pros.map((pro, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {deal.cons && deal.cons.length > 0 && (
                                        <div className="space-y-3">
                                            <h3 className="font-bold text-foreground flex items-center gap-2">
                                                <XCircle className="w-5 h-5 text-red-500" />
                                                Points faibles
                                            </h3>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {deal.cons.map((con, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* DETAILED REVIEW (SEO Text) */}
                {deal.detailedReview && (
                    <section className="container mx-auto px-4 pb-16">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold font-heading mb-6 border-b pb-4">
                                Notre avis détaillé sur {deal.title.split(" -")[0]}
                            </h2>
                            <div className="prose prose-lg text-muted-foreground leading-relaxed article-content">
                                <p>{deal.detailedReview}</p>
                                <p>
                                    <em>Note de la rédaction : Les offres publiées sur TopBonPlan sont limitées dans le temps. Si le prix affiché chez le marchand diffère du prix indiqué ci-dessus, c'est que la promotion est malheureusement terminée.</em>
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* RELATED DEALS */}
                {relatedDeals.length > 0 && (
                    <section className="bg-gray-50 border-t border-black/5 py-16">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold font-heading">
                                    Offres similaires en {deal.category}
                                </h2>
                                <Link href={`/${categorySlug}`} className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                    Voir tout <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedDeals.map((relatedDeal) => (
                                    <DealCard key={relatedDeal.slug} deal={relatedDeal} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </main>

            <Footer />
        </div>
    )
}
