import Image from "next/image"
import { BadgeCheck, PenLine } from "lucide-react"

interface Author {
    name: string
    role: string
    avatar: string
    expertise: string
}

export function AuthorBio({ author }: { author: Author }) {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/5 shadow-sm my-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-20 h-20 shrink-0">
                <Image
                    src={author.avatar}
                    alt={`Portrait expat de ${author.name}`}
                    fill
                    className="rounded-full object-cover border-4 border-gray-50 bg-gray-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white" title="Expert vérifié">
                    <BadgeCheck className="w-4 h-4" />
                </div>
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-bold font-heading text-foreground">{author.name}</h4>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {author.role}
                    </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {author.expertise}
                </p>

                <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                    <PenLine className="w-3.5 h-3.5" />
                    Rédacteur(trice) & Testeur(se) TopBonPlan
                </div>
            </div>
        </div>
    )
}
