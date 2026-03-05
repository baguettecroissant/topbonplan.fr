import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, PenLine, ChevronRight } from "lucide-react"
import { Author } from "@/data/authors"

export function AuthorBio({ author }: { author: Author }) {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/5 shadow-sm my-10 flex flex-col md:flex-row gap-6 items-start group">
            <Link href={`/auteurs/${author.id}`} className="relative w-20 h-20 shrink-0 block">
                <Image
                    src={author.avatar}
                    alt={`Portrait de ${author.name}`}
                    fill
                    unoptimized
                    className="rounded-full object-cover border-4 border-gray-50 bg-gray-100 group-hover:border-primary transition-colors"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white" title="Expert vérifié">
                    <BadgeCheck className="w-4 h-4" />
                </div>
            </Link>

            <div className="flex-1 relative">
                <div className="flex items-center gap-2 mb-1">
                    <Link href={`/auteurs/${author.id}`} className="hover:text-primary transition-colors">
                        <h4 className="text-xl font-bold font-heading text-foreground">{author.name}</h4>
                    </Link>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {author.role}
                    </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {author.expertise}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                        <PenLine className="w-3.5 h-3.5" />
                        Rédacteur(trice) & Testeur(se) TopBonPlan
                    </div>
                </div>

                <Link href={`/auteurs/${author.id}`} className="absolute top-0 right-0 md:static mt-3 md:mt-0 md:absolute md:-right-2 text-sm font-semibold text-primary invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all flex items-center gap-1">
                    Voir profil <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    )
}
