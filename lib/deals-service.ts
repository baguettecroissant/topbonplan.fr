import fs from "fs/promises"
import path from "path"
import { deals as manualDeals, type Deal } from "@/data/deals"

export const getDeals = async (): Promise<Deal[]> => {
    // 1. Get manual deals
    const allDeals = [...manualDeals]
    
    // 2. Get programmatic bulk deals (JSON)
    try {
        const jsonPath = path.join(process.cwd(), "data", "bulk-deals.json")
        const fileContents = await fs.readFile(jsonPath, "utf8")
        const bulkDeals: Deal[] = JSON.parse(fileContents)
        
        allDeals.push(...bulkDeals)
    } catch (error) {
        console.error("Failed to load programmatic deals from bulk-deals.json", error)
    }

    return allDeals
}

export const getDealBySlug = async (slug: string): Promise<Deal | undefined> => {
    // 1. Check manual deals first (fast array lookup)
    const manualDeal = manualDeals.find((d) => d.slug === slug)
    if (manualDeal) return manualDeal

    // 2. Check programmatic bulk deals (JSON parsing)
    try {
        const jsonPath = path.join(process.cwd(), "data", "bulk-deals.json")
        const fileContents = await fs.readFile(jsonPath, "utf8")
        const bulkDeals: Deal[] = JSON.parse(fileContents)
        
        return bulkDeals.find((d) => d.slug === slug)
    } catch (error) {
        console.error("Failed to load programmatic deals from bulk-deals.json", error)
        return undefined
    }
}
