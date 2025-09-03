import { MetadataRoute } from "next"
import client from "@/sanity/client"
import { SITEMAP_QUERY } from "@/sanity/lib/queries"
import path from "path";

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  try {
    const paths = await client.fetch(SITEMAP_QUERY);

    if(!path) return []

    const baseUrl = process.env.VERCEL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
    return paths.map((path) => ({
      url: new URL(path.href!, baseUrl).toString(),
      lastModified: new Date(path._updatedAt),
    }));
  } catch (error) {
    console.error("Error fetching sitemap:", error)
    return []
  }
}

export default Sitemap
