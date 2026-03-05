import Link from "next/link"
import { Smartphone, Home, Dumbbell, ShoppingBag, Plane, ArrowRight, Cpu } from "lucide-react"
import { categories } from "@/data/categories"

const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Home: <Home className="w-6 h-6" />,
    Dumbbell: <Dumbbell className="w-6 h-6" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6" />,
    Plane: <Plane className="w-6 h-6" />,
}

export function CategoryGrid() {
    return (
        <section className="py-16 md:py-20 container mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-accent font-bold tracking-wide uppercase text-sm">Explorez</span>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2 text-foreground">
                    Nos Catégories
                </h2>
                <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                    Des bons plans triés sur le volet dans chaque univers. Trouvez ce qu'il vous faut au meilleur prix.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/${cat.slug}`}
                        className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl ${cat.bgColor} ${cat.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            {iconMap[cat.icon]}
                        </div>

                        {/* Name */}
                        <h3 className="font-heading font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                            {cat.name}
                        </h3>

                        {/* Count */}
                        <span className="text-xs text-muted-foreground mt-1">
                            {cat.count} bons plans
                        </span>

                        {/* Hover arrow */}
                        <ArrowRight className="w-4 h-4 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </Link>
                ))}
            </div>
        </section>
    )
}
