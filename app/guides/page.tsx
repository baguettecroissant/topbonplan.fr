import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { guides } from "@/data/guides"
import { BookOpen, Clock, CalendarDays, ArrowRight } from "lucide-react"

export const metadata = {
    title: "Guides d'Achat & Comparatifs 2026 | TopBonPlan",
    description: "Découvrez nos guides d'achat approfondis, nos comparatifs et nos tests pour vous aider à dénicher les vrais bons plans tech et conso de l'année.",
}

export default function GuidesIndex() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">

                {/* HERO GUIDES */}
                <section className="bg-primary/5 border-b border-black/5 py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <BookOpen className="w-64 h-64 text-primary rotate-12" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-6">
                            Nos Guides d'Achat
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            On décode la tech pour vous. Des avis tranchés, des dossiers complets et des conseils pour acheter mieux, sans payer plus cher.
                        </p>
                    </div>
                </section>

                {/* GUIDES GRID */}
                <section className="py-16 md:py-20 container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {guides.map((guide) => (
                            <Link
                                key={guide.slug}
                                href={`/guides/${guide.slug}`}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >

                                {/* Visual */}
                                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                                    {/* Placeholder gradient instead of actual image for now */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 mix-blend-multiply" />

                                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                        <span className="self-start px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold shadow-sm">
                                            {guide.category}
                                        </span>
                                    </div>

                                    <Image
                                        src={guide.coverImage}
                                        alt={guide.title}
                                        fill
                                        className="object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">

                                    <h2 className="text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-3">
                                        {guide.title}
                                    </h2>

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
                </section>

            </main>

            <Footer />
        </div>
    )
}
