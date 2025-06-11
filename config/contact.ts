export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  address2: string;
  pressEmail: string;
  partnershipsEmail: string;
  campaignLink: string;
  social: {
    twitter: string;
    instagram: string;
    youtube: string;
    discord: string;
  };
}

export const contactInfo: ContactInfo = {
  email: "contact@prodigycomics.com",
  phone: "+1 (555) 123-4567",
  address: "123 Comic Street, Metropolis, NY 10001",
  address2: "P.O. Box 12345",
  pressEmail: "press@prodigycomics.com",
  partnershipsEmail: "partnerships@prodigycomics.com",
  campaignLink: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0",
  social: {
    twitter: "https://twitter.com/prodigynewagecomics",
    instagram: "https://instagram.com/prodigynewagecomics",
    youtube: "https://youtube.com/@popculturerocks",
    discord: "https://discord.gg/prodigynewagecomics",
  }
}; 