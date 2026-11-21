import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { countries } from "@/content/countries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/countries",
    "/tools/eligibility-checker",
    "/tools/document-checklist",
    "/tools/processing-time",
    "/apply",
    "/book",
    "/about",
    "/contact",
    "/services",
    "/faq",
    "/legal/privacy",
    "/legal/terms",
    "/legal/refund",
    "/legal/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/tools") || route === "/countries" ? 0.9 : 0.7,
  }));

  const countryHubRoutes = Object.keys(countries).map((slug) => ({
    url: `${baseUrl}/countries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const visaRoutes: MetadataRoute.Sitemap = [];
  const visaTypes = ["job", "study", "tourist", "business"];

  Object.keys(countries).forEach((slug) => {
    visaTypes.forEach((visa) => {
      visaRoutes.push({
        url: `${baseUrl}/countries/${slug}/${visa}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    });
  });

  return [...staticRoutes, ...countryHubRoutes, ...visaRoutes];
}
