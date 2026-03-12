import { deals as manualDeals, type Deal } from "@/data/deals"
import bulkDealsData from "@/data/bulk-deals.json"

// Properly cast bulk deals to Deal type
const bulkDeals = bulkDealsData as Deal[]

export const getDeals = async (): Promise<Deal[]> => {
    // Combine manual and programmatic deals
    return [...manualDeals, ...bulkDeals]
}

export const getDealBySlug = async (slug: string): Promise<Deal | undefined> => {
    // 1. Check manual deals first (fast array lookup)
    const manualDeal = manualDeals.find((d) => d.slug === slug)
    if (manualDeal) return manualDeal

    // 2. Check programmatic bulk deals
    return bulkDeals.find((d) => d.slug === slug)
}
