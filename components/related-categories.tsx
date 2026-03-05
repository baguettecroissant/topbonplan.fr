import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories } from "@/data/categories"

interface RelatedCategoriesProps {
    currentCategorySlug: string
}

export function RelatedCategories({ currentCategorySlug }: RelatedCategoriesProps) {
    // Get 3 other categories for cross-silo linking
    const related = categories
        .filter((c) => c.slug !== currentCategorySlug)
        .slice(0, 3)

    if (related.length === 0) return null

    return (
        <section className="py-12 border-t border-black/5 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <h3 className="font-heading text-xl font-bold mb-6 text-foreground text-center md:text-left">
                    Explorez nos autres univers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {related.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/${cat.slug}`}
                            className="flex items-center justify-between p-4 bg-white rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg ${cat.bgColor} ${cat.textColor} flex items-center justify-center`}>
                                    {/* Simplification: we could map icons here too, but to keep it simple we just use colors */}
                                    <span className="font-bold text-lg">{cat.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                        {cat.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">{cat.count} bons plans</p>
                                </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
