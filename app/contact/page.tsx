import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact | TopBonPlan.fr",
    description: "Contactez l'équipe TopBonPlan.fr pour vos questions, suggestions ou partenariats.",
}

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Nous Contacter</h1>
                    <p className="text-muted-foreground">
                        Une question, une suggestion de bon plan, ou une demande de partenariat ? On vous répond rapidement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                        href="mailto:contact@topbonplan.fr"
                        className="group flex flex-col items-center p-8 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground text-sm text-center">contact@topbonplan.fr</p>
                    </a>

                    <div className="group flex flex-col items-center p-8 bg-white rounded-2xl border border-black/5 shadow-sm">
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h3 className="font-heading font-bold text-lg mb-2">Partenariats</h3>
                        <p className="text-muted-foreground text-sm text-center">
                            Pour les demandes de partenariat ou de contenu sponsorisé, écrivez-nous par email.
                        </p>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
                    <h3 className="font-heading font-bold text-lg mb-3">Signaler un bon plan</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Vous avez trouvé un deal incroyable que nous n'avons pas encore repéré ? Envoyez-nous le lien par email
                        et notre équipe le vérifiera dans les plus brefs délais. Si le bon plan est retenu, il sera publié sur le site !
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
