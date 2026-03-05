import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
                <li>
                    <Link href="/" className="flex items-center hover:text-primary transition-colors">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Accueil</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 opacity-50" />
                        <Link
                            href={item.href}
                            className={`${index === items.length - 1
                                    ? "font-semibold text-foreground pointer-events-none"
                                    : "hover:text-primary transition-colors"
                                }`}
                            aria-current={index === items.length - 1 ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
