import Image from "next/image"
import Link from "next/link"
import { ExternalLink, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Deal } from "@/data/deals"

export function DealCard({ deal }: { deal: Deal }) {
    return (
        <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5">
            {/* Badge */}
            {deal.badge && (
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="px-3 py-1.5 text-xs font-bold bg-white/95 backdrop-blur-sm rounded-full shadow-sm text-foreground">
                        {deal.badge}
                    </span>
                </div>
            )}

            {/* Discount Badge */}
            <div className="absolute top-3 right-3 z-10 pointer-events-none">
                <span className="bg-red-500 text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-sm flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    {deal.discount}
                </span>
            </div>

            <Link href={`/bons-plans/${deal.slug}`} className="flex flex-col flex-1">
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="w-full h-full relative">
                            <Image
                                src={deal.image}
                                alt={deal.title}
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    {/* Category */}
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                        {deal.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {deal.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {deal.description}
                    </p>

                    {/* Price Row */}
                    <div className="flex items-end gap-3 mb-4">
                        <span className="text-2xl font-black text-foreground">{deal.price}</span>
                        <span className="text-sm font-medium text-muted-foreground line-through mb-1">{deal.originalPrice}</span>
                    </div>
                </div>
            </Link>

            {/* CTA */}
            <div className="px-5 pb-5">
                <Button asChild variant="accent" className="w-full rounded-xl h-11 font-bold text-sm">
                    <a href={deal.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow">
                        Voir l'offre
                        <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                </Button>
            </div>
        </div>
    )
}
