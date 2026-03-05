import Link from "next/link"
import { Zap, Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { categories } from "@/data/categories"

export function Header() {
    // Dynamically load top 5 categories for navigation
    const navigation = categories.slice(0, 5).map((cat) => ({
        name: cat.name,
        href: `/${cat.slug}`,
    }))

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-black/5">
            <div className="container mx-auto h-16 md:h-20 px-4 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-white group-hover:scale-110 transition-transform shadow-md">
                        <Zap className="h-5 w-5" />
                    </div>
                    <span className="font-heading text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
                        Top<span className="text-primary">Bon</span><span className="text-accent">Plan</span>
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/guides"
                        className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
                    >
                        Guides & Tests
                    </Link>

                </nav>

                {/* ACTIONS */}
                <div className="flex items-center gap-2">
                    <Button asChild variant="accent" size="sm" className="hidden md:inline-flex rounded-full px-5 shadow-md">
                        <Link href="/bons-plans">
                            <Zap className="w-4 h-4" />
                            Voir les deals
                        </Link>
                    </Button>

                    {/* MOBILE MENU */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader className="text-left mb-8">
                                <SheetTitle className="font-heading text-2xl font-extrabold flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-primary" />
                                    Top<span className="text-primary">Bon</span><span className="text-accent">Plan</span>
                                </SheetTitle>
                                <SheetDescription>
                                    Les meilleurs deals du web, testés et approuvés.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-6">
                                <nav className="flex flex-col gap-3">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-lg font-heading font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between group py-2"
                                        >
                                            {item.name}
                                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                        </Link>
                                    ))}
                                    <Link
                                        href="/guides"
                                        className="text-lg font-heading font-bold text-foreground hover:text-primary transition-colors flex items-center justify-between group py-2 border-t border-black/5 mt-2 pt-4"
                                    >
                                        Guides & Tests
                                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                    </Link>

                                </nav>

                                <div className="border-t border-border mt-auto pt-6">
                                    <Button asChild variant="accent" className="w-full rounded-xl h-12 text-base font-bold">
                                        <Link href="/bons-plans">
                                            <Zap className="w-5 h-5" />
                                            Voir tous les deals
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
