export type MetadataConfig = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const defaultMetadata: MetadataConfig = {
  title: "PRODIGY Comics",
  description: "A world where humans are evolving into something more. The GODSTRAND has been discovered.",
  keywords: ["prodigy", "comics", "superhero", "action", "adventure"],
  ogType: "website",
  twitterCard: "summary_large_image",
  ogImage: "/images/og-image.jpg" // Add your default OG image path
}