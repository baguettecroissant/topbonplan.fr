import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Mentions Légales | TopBonPlan.fr",
    description: "Mentions légales du site TopBonPlan.fr",
    robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Mentions Légales</h1>

                <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
                    <section>
                        <h2 className="text-xl font-bold text-foreground">Éditeur du site</h2>
                        <p>
                            Le site TopBonPlan.fr est édité par un particulier.<br />
                            Directeur de la publication : [Nom à compléter]<br />
                            Contact : <a href="/contact" className="text-primary hover:underline">Formulaire de contact</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground">Hébergement</h2>
                        <p>
                            Ce site est hébergé par Vercel Inc.<br />
                            340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                            Site web : <a href="https://vercel.com" className="text-primary hover:underline" rel="noopener noreferrer">vercel.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground">Propriété intellectuelle</h2>
                        <p>
                            L'ensemble du contenu de ce site (textes, images, logos, vidéos) est protégé par le droit d'auteur.
                            Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground">Affiliation & liens commerciaux</h2>
                        <p>
                            TopBonPlan.fr participe à différents programmes d'affiliation, notamment le Programme Partenaires d'Amazon EU.
                            En tant que Partenaire Amazon, le site est rémunéré pour les achats éligibles effectués via les liens présents sur ce site.
                            Cette participation n'influence pas nos recommandations éditoriales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground">Données personnelles</h2>
                        <p>
                            Ce site utilise Umami Analytics, un outil de mesure d'audience respectueux de la vie privée et conforme au RGPD.
                            Aucune donnée personnelle n'est collectée ni partagée avec des tiers.
                            Aucun cookie publicitaire n'est utilisé.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground">Contact</h2>
                        <p>
                            Pour toute question relative au site, vous pouvez nous contacter via notre
                            <a href="/contact" className="text-primary hover:underline ml-1">formulaire de contact</a>.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}
