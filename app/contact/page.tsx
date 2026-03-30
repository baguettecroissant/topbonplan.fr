import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Handshake, Info, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contactez-nous | TopBonPlan.fr",
    description: "Une question, un partenariat, ou un deal à signaler ? Écrivez à l'équipe TopBonPlan.fr, nous répondons en moins de 24h.",
    alternates: {
        canonical: "https://topbonplan.fr/contact",
    },
}

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 shrink-0 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10" />

                <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Discutons</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading tracking-tight">On répond <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">super vite</span>.</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Que vous soyez un lecteur avec une question, ou une marque cherchant un partenariat pertinent, on lit vraiment tous nos messages.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                        {/* LEFT COLUMN: INFO & FAQ */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm">
                                <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                    Comment ça marche ?
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">1</div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">Signaler un bon plan</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">Vous avez déniché une erreur de prix ou une belle promo ? Envoyez-nous le lien via le formulaire. S'il est validé par l'équipe, on le publie !</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                                            <Handshake className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">Demandes Pros</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">Nous lisons toutes les propositions de partenariat. Mais attention : nous n'acceptons aucun post sponsorisé déguisé. L'indépendance de nos avis n'est pas à vendre.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold">
                                            <Info className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">SAV Marchands</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">Nous ne vendons rien directement ! Si vous avez un problème avec une commande passée sur Amazon ou ailleurs, merci de contacter directement leur support client.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                <MapPin className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
                                <h3 className="font-heading font-bold text-xl mb-2 relative z-10">Basés en France 🇫🇷</h3>
                                <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                                    Notre petite équipe travaille en 100% remote depuis la France. Nos horaires de réponse habituels sont du lundi au vendredi, de 9h à 18h.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: FORM */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-xl relative">
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-accent/30 flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                    On est connectés
                                </div>

                                <form action="https://formspree.io/f/mkoqwogb" method="POST" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-foreground">
                                                Votre nom
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm placeholder:text-slate-400"
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
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm placeholder:text-slate-400"
                                                placeholder="jean@exemple.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                                            Quel est le sujet ?
                                        </label>
                                        <select
                                            name="subject"
                                            id="subject"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled selected>Choisissez le motif principal</option>
                                            <option value="Signaler un bon plan">Signaler un bon plan</option>
                                            <option value="Partenariat pro">Demande de partenariat / Sponsoring</option>
                                            <option value="Erreur sur le site">Signaler une erreur sur un deal</option>
                                            <option value="Autre demande">Autre demande</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-foreground flex justify-between">
                                            <span>Votre message</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={6}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none placeholder:text-slate-400"
                                            placeholder="Bonjour, je vous contacte à propos de..."
                                        ></textarea>
                                    </div>

                                    {/* Formspree anti-spam honeypot */}
                                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                                    >
                                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        Envoyer le message
                                    </button>

                                    <p className="text-xs text-center text-muted-foreground mt-4">
                                        En envoyant ce message, vous acceptez d'être recontacté(e) par la team. Pas de spam, promis. ✌️
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
