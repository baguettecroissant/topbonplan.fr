import { MetadataRoute } from "next"
import { categories } from "@/data/categories"
import { getDeals } from "@/lib/deals-service"
import { guides } from "@/data/guides"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://topbonplan.fr"
    const allDeals = await getDeals()

    // Use a fixed "last deploy" date for static pages, but real dates for content
    const now = new Date()

    const staticPages = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "daily" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/bons-plans`,
            lastModified: now,
            changeFrequency: "daily" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/a-propos`,
            lastModified: new Date("2025-03-01"),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date("2025-03-01"),
            changeFrequency: "monthly" as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date("2025-03-01"),
            changeFrequency: "yearly" as const,
            priority: 0.1,
        },
    ]

    const categoryPages = categories.map((cat) => ({
        url: `${baseUrl}/${cat.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }))

    const dealPages = allDeals.map((deal) => ({
        url: `${baseUrl}/bons-plans/${deal.slug}`,
        lastModified: now,
        changeFrequency: "daily" as const,
        priority: 0.7,
    }))

    const guidePages = guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        lastModified: guide.lastModified ? new Date(guide.lastModified) : new Date(guide.publishDate),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }))

    return [...staticPages, ...categoryPages, ...dealPages, ...guidePages]
}
