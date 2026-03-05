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

                <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-black/5 shadow-sm">
                    <form action="https://formspree.io/f/mkoqwogb" method="POST" className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-foreground">
                                Votre nom
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-black/5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                placeholder="Jean Dupont"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-foreground">
                                Adresse email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-black/5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                placeholder="jean@exemple.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                                Sujet
                            </label>
                            <select
                                name="subject"
                                id="subject"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-black/5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none"
                            >
                                <option value="" disabled selected>Choisissez le motif principal</option>
                                <option value="Signaler un bon plan">Signaler un bon plan</option>
                                <option value="Partenariat pro">Demande de partenariat / Sponsoring</option>
                                <option value="Erreur sur le site">Signaler une erreur sur un deal</option>
                                <option value="Autre demande">Autre demande</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-foreground">
                                Votre message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-black/5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                                placeholder="Bonjour, je vous contacte à propos de..."
                            ></textarea>
                        </div>

                        {/* Formspree anti-spam honeypot */}
                        <input type="text" name="_gotcha" style={{ display: "none" }} />

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Envoyer le message
                        </button>

                        <p className="text-xs text-center text-muted-foreground mt-4">
                            En validant, vous acceptez que vos informations soient utilisées pour vous recontacter. Aucune donnée n'est revendue.
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
