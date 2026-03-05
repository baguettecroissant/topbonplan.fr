import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { authors } from "@/data/authors"
import { guides } from "@/data/guides"
import { BookOpen, Clock, CalendarDays, ArrowRight, BadgeCheck } from "lucide-react"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const author = authors.find(a => a.id === params.slug)
    if (!author) return {}

    return {
        title: `${author.name} - Expert TopBonPlan`,
        description: `Découvrez tous les articles, tests et guides d'achat rédigés par ${author.name}, ${author.role} sur TopBonPlan.`,
        alternates: {
            canonical: `https://topbonplan.fr/auteurs/${author.id}`,
        },
    }
}

export function generateStaticParams() {
    return authors.map((author) => ({
        slug: author.id,
    }))
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
    const author = authors.find(a => a.id === params.slug)

    if (!author) {
        notFound()
    }

    const authorGuides = guides.filter(g => g.author.id === author.id)

    // JSON-LD ProfilePage schema
    const profileJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2026-01-01T08:00:00+08:00",
        "dateModified": new Date().toISOString(),
        "mainEntity": {
            "@type": "Person",
            "name": author.name,
            "jobTitle": author.role,
            "image": author.avatar,
            "description": author.expertise,
            "url": `https://topbonplan.fr/auteurs/${author.id}`,
            "worksFor": {
                "@type": "Organization",
                "name": "TopBonPlan"
            }
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
            />

            <Header />

            <main className="flex-1">
                {/* AUTHOR PROFILE HEADER */}
                <section className="bg-primary/5 border-b border-black/5 py-12 md:py-20 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white rounded-3xl p-8 shadow-sm border border-black/5">
                            <div className="relative w-32 h-32 shrink-0">
                                <Image
                                    src={author.avatar}
                                    alt={`Portrait de ${author.name}`}
                                    fill
                                    unoptimized
                                    className="rounded-full object-cover border-4 border-gray-50 bg-gray-100"
                                />
                                <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full border-4 border-white" title="Expert vérifié">
                                    <BadgeCheck className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-2">
                                    {author.name}
                                </h1>
                                <div className="inline-block text-sm font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                                    {author.role}
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {author.expertise}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AUTHOR GUIDES GRID */}
                <section className="py-16 md:py-20 container mx-auto px-4">
                    <div className="max-w-5xl mx-auto mb-10 flex items-center justify-between">
                        <h2 className="text-2xl font-bold font-heading flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-primary" />
                            Articles rédigés par {author.name}
                        </h2>
                        <span className="text-sm font-bold bg-muted px-3 py-1 rounded-full text-muted-foreground">
                            {authorGuides.length} article{authorGuides.length > 1 ? 's' : ''}
                        </span>
                    </div>

                    {authorGuides.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {authorGuides.map((guide) => (
                                <Link
                                    key={guide.slug}
                                    href={`/guides/${guide.slug}`}
                                    className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Visual */}
                                    <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 mix-blend-multiply z-10" />
                                        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                                            <span className="self-start px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold shadow-sm">
                                                {guide.category}
                                            </span>
                                        </div>
                                        <Image
                                            src={guide.coverImage}
                                            alt={guide.title}
                                            fill
                                            className="object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-3">
                                            {guide.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-1">
                                            {guide.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5">
                                            <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                                                <div className="flex items-center gap-1.5">
                                                    <CalendarDays className="w-4 h-4" />
                                                    {new Date(guide.publishDate).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4" />
                                                    {guide.readTime} min
                                                </div>
                                            </div>

                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-foreground max-w-2xl mx-auto bg-muted/30 rounded-3xl border border-black/5">
                            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p className="text-lg">Cet auteur n'a pas encore publié d'article.</p>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    )
}
