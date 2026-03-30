import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DealCard } from "@/components/deal-card"
import { AuthorBio } from "@/components/author-bio"
import { FaqSchema } from "@/components/faq-schema"
import { guides } from "@/data/guides"
import { deals } from "@/data/deals"
import { Clock, CalendarDays, ArrowLeft } from "lucide-react"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const guide = guides.find((g) => g.slug === resolvedParams.slug)
    if (!guide) return {}

    return {
        title: guide.title,
        description: guide.description,
        keywords: [guide.category, "guide", "comparatif", "test", "avis", guide.title.split(" ").slice(0, 3).join(" ")],
        alternates: {
            canonical: `https://topbonplan.fr/guides/${guide.slug}`,
        },
        openGraph: {
            title: guide.title,
            description: guide.description,
            type: "article",
            url: `https://topbonplan.fr/guides/${guide.slug}`,
            images: [
                {
                    url: guide.coverImage,
                    alt: guide.title,
                },
            ],
        },
    }
}

export function generateStaticParams() {
    return guides.map((g) => ({
        slug: g.slug,
    }))
}

export default async function GuideSingle({ params }: Props) {
    const resolvedParams = await params
    const guide = guides.find((g) => g.slug === resolvedParams.slug)

    if (!guide) {
        notFound()
    }

    const breadcrumbItems = [
        { label: "Guides & Tests", href: "/guides" },
        { label: guide.title.substring(0, 30) + "...", href: `/guides/${guide.slug}` },
    ]

    // Schema.org Article (for LLM and SERP richness)
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        image: guide.coverImage.startsWith("http") ? guide.coverImage : `https://topbonplan.fr${guide.coverImage}`,
        author: {
            "@type": "Person",
            name: guide.author.name,
            jobTitle: guide.author.role,
            description: guide.author.expertise,
        },
        datePublished: guide.publishDate,
        dateModified: guide.lastModified || guide.publishDate,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://topbonplan.fr/guides/${guide.slug}`,
        },
        publisher: {
            "@type": "Organization",
            name: "TopBonPlan",
            logo: {
                "@type": "ImageObject",
                url: "https://topbonplan.fr/icon.png",
            },
        },
    }

    // BreadcrumbList schema
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
                name: "Guides & Tests",
                item: "https://topbonplan.fr/guides",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: guide.title,
                item: `https://topbonplan.fr/guides/${guide.slug}`,
            },
        ],
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <Header />

            <main className="flex-1 pb-20">

                {/* NAV + HERO */}
                <article className="bg-white">
                    <div className="border-b border-black/5">
                        <div className="container mx-auto px-4 flex items-center justify-between">
                            <Breadcrumb items={breadcrumbItems} />
                            <Link href="/guides" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-4">
                                <ArrowLeft className="w-4 h-4" /> Retour aux guides
                            </Link>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 pt-12 text-center max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide mb-6">
                            {guide.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground tracking-tight leading-tight mb-8">
                            {guide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                            {guide.description}
                        </p>

                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-medium pb-12">
                            <div className="flex items-center gap-2">
                                <Image src={guide.author.avatar} alt={guide.author.name} width={32} height={32} unoptimized className="rounded-full bg-gray-100" />
                                <span>Par <strong className="text-foreground">{guide.author.name}</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="w-4 h-4" />
                                {new Date(guide.publishDate).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {guide.readTime} min
                            </div>
                        </div>
                    </div>
                </article>

                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl mx-auto">

                        {/* CONTENT ENGINE */}
                        <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-primary max-w-none article-content">
                            {guide.sections.map((section, idx) => {

                                // 1. Render Normal Text Sections (with Markdown-like basic support)
                                if (section.type === "text") {
                                    return (
                                        <div key={idx} className="mb-10 block-text">
                                            {section.h2 && <h2 className="text-3xl mt-12 mb-6">{section.h2}</h2>}
                                            {section.h3 && <h3 className="text-2xl mt-8 mb-4">{section.h3}</h3>}
                                            {section.content && (
                                                <p className="whitespace-pre-wrap leading-loose">
                                                    {/* Quick regex to bold **text** -> Very LLM friendly */}
                                                    {section.content.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part)}
                                                </p>
                                            )}
                                        </div>
                                    )
                                }

                                // 2. Render Bullet Lists (LLM loves this)
                                if (section.type === "list") {
                                    return (
                                        <div key={idx} className="mb-10 bg-gray-50 p-8 rounded-2xl border border-black/5">
                                            {section.h2 && <h2 className="text-2xl mt-0 mb-6">{section.h2}</h2>}
                                            {section.h3 && <h3 className="text-xl mt-0 mb-4">{section.h3}</h3>}
                                            {section.listItems && (
                                                <ul className="space-y-4">
                                                    {section.listItems.map((item, i) => (
                                                        <li key={i} className="flex gap-3 text-lg">
                                                            <span className="text-primary font-bold mt-1.5">→</span>
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )
                                }

                                // 2.5 Render Images
                                if (section.type === "image" && section.imageUrl) {
                                    return (
                                        <div key={idx} className="my-10 relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-black/5">
                                            <Image
                                                src={section.imageUrl}
                                                alt={section.imageAlt || "Illustration du guide"}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )
                                }

                                // 3. MID-CONTENT DEAL INJECTION (Conversion engine)
                                if (section.type === "deal" && section.dealSlugs && section.dealSlugs.length > 0) {
                                    return (
                                        <div key={idx} className="my-16 not-prose">
                                            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center mb-6">
                                                --- L'Offre Recommandée ---
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {section.dealSlugs.map(slug => {
                                                    const deal = deals.find(d => d.slug === slug)
                                                    return deal ? <DealCard key={deal.slug} deal={deal} /> : null
                                                })}
                                            </div>
                                        </div>
                                    )
                                }

                                return null
                            })}
                        </div>

                        {/* EXPERTISE / E-E-A-T AUTHOR BIO */}
                        <div className="mt-16 border-t border-black/10 pt-10">
                            <AuthorBio author={guide.author} />
                        </div>

                        {/* FAQ SCHEMA COMPONENT */}
                        <div className="mt-4">
                            <FaqSchema faqs={guide.faqs} />
                        </div>

                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}
