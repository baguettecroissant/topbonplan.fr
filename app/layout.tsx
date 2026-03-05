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
    title: "TopBonPlan.fr | Les Meilleurs Bons Plans & Comparatifs 2026",
    description:
        "Découvrez les meilleurs bons plans, promotions et comparatifs du moment. High-tech, maison, sport, mode : trouvez le meilleur prix garanti.",
    keywords: ["bons plans", "promotions", "comparatifs", "meilleur prix", "high-tech", "maison", "réductions", "deals"],
    authors: [{ name: "TopBonPlan" }],
    creator: "TopBonPlan",
    publisher: "TopBonPlan",
    openGraph: {
        title: "TopBonPlan.fr | Les Meilleurs Bons Plans & Comparatifs 2026",
        description: "Découvrez les meilleurs bons plans, promotions et comparatifs du moment.",
        type: "website",
        locale: "fr_FR",
        siteName: "TopBonPlan",
    },
    twitter: {
        card: "summary_large_image",
        title: "TopBonPlan.fr | Bons Plans & Comparatifs",
        description: "Les meilleurs deals du web, testés et approuvés.",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
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
            <head>
                <Script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="REPLACE_WITH_UMAMI_ID"
                    strategy="afterInteractive"
                />
            </head>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
