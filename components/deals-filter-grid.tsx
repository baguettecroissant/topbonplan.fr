"use client"

import { useState } from "react"
import { DealCard } from "@/components/deal-card"
import type { Deal } from "@/data/deals"
import type { Category } from "@/data/categories"

interface DealsFilterGridProps {
    deals: Deal[]
    categories: Category[]
}

export function DealsFilterGrid({ deals, categories }: DealsFilterGridProps) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null)

    const filteredDeals = activeCategory
        ? deals.filter((deal) => deal.category === activeCategory)
        : deals

    return (
        <>
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-10">
                <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === null
                            ? "bg-primary text-white shadow-md"
                            : "bg-white text-muted-foreground border border-black/5 hover:border-primary hover:text-primary"
                        }`}
                >
                    Tous ({deals.length})
                </button>
                {categories.map((cat) => {
                    const count = deals.filter((d) => d.category === cat.name).length
                    if (count === 0) return null
                    return (
                        <button
                            key={cat.slug}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat.name
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-white text-muted-foreground border border-black/5 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {cat.name} ({count})
                        </button>
                    )
                })}
            </div>

            {/* Results count */}
            {activeCategory && (
                <div className="mb-6 text-sm text-muted-foreground">
                    {filteredDeals.length} deal{filteredDeals.length > 1 ? "s" : ""} en <strong className="text-foreground">{activeCategory}</strong>
                </div>
            )}

            {/* Deals grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDeals.map((deal) => (
                    <DealCard key={deal.slug} deal={deal} />
                ))}
            </div>
        </>
    )
}
