import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
})

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://topbonplan.fr"),
    title: {
        default: "TopBonPlan.fr | Les Meilleurs Bons Plans & Comparatifs 2026",
        template: "%s | TopBonPlan.fr",
    },
    description:
        "Découvrez les meilleurs bons plans, promotions et comparatifs du moment. High-tech, maison, sport, mode : trouvez le meilleur prix garanti.",
    keywords: ["bons plans", "promotions", "comparatifs", "meilleur prix", "high-tech", "maison", "réductions", "deals", "codes promo", "bon plan tech"],
    authors: [{ name: "TopBonPlan" }],
    creator: "TopBonPlan",
    publisher: "TopBonPlan",
    alternates: {
        languages: {
            "fr": "https://topbonplan.fr",
        },
    },
    openGraph: {
        title: "TopBonPlan.fr | Les Meilleurs Bons Plans & Comparatifs 2026",
        description: "Découvrez les meilleurs bons plans, promotions et comparatifs du moment.",
        type: "website",
        locale: "fr_FR",
        siteName: "TopBonPlan",
        url: "https://topbonplan.fr",
        images: [
            {
                url: "/icon.png",
                width: 512,
                height: 512,
                alt: "TopBonPlan.fr - Les Meilleurs Bons Plans",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TopBonPlan.fr | Bons Plans & Comparatifs",
        description: "Les meilleurs deals du web, testés et approuvés.",
        images: ["/icon.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/icon.png", type: "image/png" },
        ],
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#2563EB" },
        { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
    ],
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                {children}
                <Analytics />
                <Script
                    src="https://nhmvgsrwhjsjnpncpiaj.supabase.co/functions/v1/analytics-collect?script=1"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    )
}
