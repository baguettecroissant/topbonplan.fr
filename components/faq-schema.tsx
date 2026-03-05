import { HelpCircle } from "lucide-react"
import type { FAQ } from "@/data/guides"

export function FaqSchema({ faqs }: { faqs: FAQ[] }) {
    if (!faqs || faqs.length === 0) return null

    // Generate Schema.org JSON-LD for FAQPage
    // This tells Google to display expandable questions directly in search results
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <section className="my-16 bg-gray-50 rounded-3xl p-6 md:p-10 border border-black/5">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-foreground">
                    Foire aux questions
                </h2>
            </div>

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                        <h3 className="font-bold text-lg text-foreground mb-3">
                            {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
