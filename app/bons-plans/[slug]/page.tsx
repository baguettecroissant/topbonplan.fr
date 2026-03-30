import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ExternalLink, TrendingDown, CheckCircle2, XCircle, ArrowRight, ShieldCheck, BookOpen, HelpCircle, Star, Zap, BarChart3 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DealCard } from "@/components/deal-card"
import { Button } from "@/components/ui/button"
import { deals } from "@/data/deals"
import { getDealBySlug, getDeals } from "@/lib/deals-service"
import { categories } from "@/data/categories"
import { guides } from "@/data/guides"

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

    // Alternative Deals (explicit cross-links)
    const alternativeDeals = deal.alternativeSlugs
        ? deal.alternativeSlugs
            .map((slug) => allDeals.find((d) => d.slug === slug))
            .filter((d): d is NonNullable<typeof d> => d !== undefined)
        : []

    // Related Guides (internal linking: deal → guides)
    const relatedGuides = guides.filter((g) =>
        g.category === deal.category ||
        g.sections.some((s) => s.dealSlugs?.includes(deal.slug))
    ).slice(0, 3)

    const breadcrumbItems = [
        { label: deal.category, href: `/${categorySlug}` },
        { label: deal.title, href: `/bons-plans/${deal.slug}` },
    ]

    // Robust price parsing: handles "151€", "Dès 0€", "2.99€", "1 299€"
    const parsePrice = (priceStr: string): string => {
        const cleaned = priceStr.replace(/[^0-9.,]/g, "").replace(",", ".").trim()
        const num = parseFloat(cleaned)
        return isNaN(num) ? "0" : num.toString()
    }

    // Schema.org Product (with robust price + review)
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: deal.title,
        image: deal.image.startsWith("http") ? deal.image : `https://topbonplan.fr${deal.image}`,
        description: deal.description,
        review: deal.detailedReview ? {
            "@type": "Review",
            reviewBody: deal.detailedReview,
            reviewRating: deal.score ? {
                "@type": "Rating",
                ratingValue: deal.score.toString(),
                bestRating: "10",
            } : undefined,
            author: {
                "@type": "Organization",
                name: "TopBonPlan",
            },
        } : undefined,
        offers: {
            "@type": "Offer",
            url: `https://topbonplan.fr/bons-plans/${deal.slug}`,
            priceCurrency: "EUR",
            price: parsePrice(deal.price),
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "TopBonPlan Partner",
            },
        },
    }

    // BreadcrumbList schema for rich results
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://topbonplan.fr",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: deal.category,
                item: `https://topbonplan.fr/${categorySlug}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: deal.title,
                item: `https://topbonplan.fr/bons-plans/${deal.slug}`,
            },
        ],
    }

    // FAQPage schema (if deal has FAQs)
    const faqJsonLd = deal.faqs && deal.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: deal.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    } : null

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Schema.org Product */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Schema.org BreadcrumbList */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Schema.org FAQPage */}
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

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
                                    {deal.score && (
                                        <div className="absolute top-4 right-4 z-10 pointer-events-none">
                                            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex flex-col items-center justify-center shadow-lg">
                                                <span className="text-xl font-black leading-none">{deal.score}</span>
                                                <span className="text-[10px] font-bold opacity-80">/10</span>
                                            </div>
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
                                            <span className="text-muted-foreground line-through font-medium">Prix d&apos;origine : {deal.originalPrice}</span>
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

                {/* WHY BUY — Quick conversion text */}
                {deal.whyBuy && (
                    <section className="container mx-auto px-4 pb-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold font-heading text-foreground">
                                        Pourquoi acheter le {deal.title.split(" -")[0].split(" (")[0]} ?
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {deal.whyBuy}
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* DETAILED REVIEW (SEO Text) */}
                {deal.detailedReview && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold font-heading mb-6 border-b pb-4">
                                Notre avis détaillé sur {deal.title.split(" -")[0]}
                            </h2>
                            <div className="prose prose-lg text-muted-foreground leading-relaxed article-content">
                                <p>{deal.detailedReview}</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* SPECS TABLE */}
                {deal.specs && deal.specs.length > 0 && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
                                <div className="flex items-center gap-3 p-6 border-b border-black/5 bg-gray-50/50">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold font-heading text-foreground">
                                        Fiche technique
                                    </h2>
                                </div>
                                <div className="divide-y divide-black/5">
                                    {deal.specs.map((spec, i) => (
                                        <div key={i} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                            <span className="font-medium text-foreground">{spec.label}</span>
                                            <span className="text-muted-foreground text-right max-w-[60%]">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* VERDICT / SCORE */}
                {deal.verdict && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white rounded-2xl border border-black/5 p-6 md:p-8 shadow-sm">
                                <div className="flex items-start gap-4">
                                    {deal.score && (
                                        <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary text-white flex flex-col items-center justify-center shadow-lg">
                                            <span className="text-3xl font-black leading-none">{deal.score}</span>
                                            <span className="text-xs font-bold opacity-80">/10</span>
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                            <h2 className="text-xl font-bold font-heading text-foreground">
                                                Verdict TopBonPlan
                                            </h2>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {deal.verdict}
                                        </p>
                                    </div>
                                </div>
                                {/* Score bar */}
                                {deal.score && (
                                    <div className="mt-6 pt-4 border-t border-black/5">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-medium text-muted-foreground">Note globale</span>
                                            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
                                                    style={{ width: `${deal.score * 10}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-bold text-foreground">{deal.score}/10</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* ALTERNATIVES */}
                {alternativeDeals.length > 0 && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl font-bold font-heading mb-6">
                                🔄 Alternatives à considérer
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {alternativeDeals.map((altDeal) => (
                                    <DealCard key={altDeal.slug} deal={altDeal} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ SECTION */}
                {deal.faqs && deal.faqs.length > 0 && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-black/5">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <HelpCircle className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-foreground">
                                        Questions fréquentes
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {deal.faqs.map((faq, index) => (
                                        <div key={index} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                                            <h3 className="font-bold text-lg text-foreground mb-3">
                                                {faq.question}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* EDITORIAL NOTE */}
                <section className="container mx-auto px-4 pb-12">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground italic border-l-4 border-primary/20 pl-4 py-2">
                            Note de la rédaction : Les offres publiées sur TopBonPlan sont vérifiées et limitées dans le temps. Si le prix affiché chez le marchand diffère du prix indiqué ci-dessus, c&apos;est que la promotion est malheureusement terminée. Nos recommandations sont indépendantes et basées sur nos tests et analyses.
                        </p>
                    </div>
                </section>

                {/* RELATED GUIDES (Internal Linking: deal → guide) */}
                {relatedGuides.length > 0 && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold font-heading text-foreground">
                                        Guides liés
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    {relatedGuides.map((guide) => (
                                        <li key={guide.slug}>
                                            <Link
                                                href={`/guides/${guide.slug}`}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/80 transition-colors group"
                                            >
                                                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                                                <div>
                                                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                        {guide.title}
                                                    </span>
                                                    <p className="text-sm text-muted-foreground mt-0.5">
                                                        {guide.description.substring(0, 100)}...
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
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
