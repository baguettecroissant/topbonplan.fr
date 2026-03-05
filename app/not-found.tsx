import Link from "next/link"
import { ZapOff, ArrowLeft, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 flex items-center justify-center p-4 py-20">
                <div className="max-w-2xl w-full text-center space-y-8">

                    <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
                        {/* Pulsing background effect */}
                        <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                        <div className="absolute inset-4 bg-primary/20 rounded-full" />
                        <ZapOff className="w-16 h-16 text-primary relative z-10" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-extrabold text-foreground tracking-tighter">
                            404
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                            Oups ! Ce bon plan a expiré...
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                            Ou alors cette page n'a jamais existé. Quoi qu'il en soit, il y a plein d'autres offres qui vous attendent !
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-8 text-base">
                            <Link href="/">
                                <Home className="w-5 h-5 mr-2" />
                                Retour à l'accueil
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 text-base">
                            <Link href="/bons-plans">
                                <Search className="w-5 h-5 mr-2" />
                                Voir tous les deals
                            </Link>
                        </Button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
