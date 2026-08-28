export interface OpeningHour {
  day: string;
  hours: string;
}

export interface SiteSettings {
  siteName: string;
  tagline?: string;
  heroHeading: string;
  heroSubtext: string;
  heroImage: string;
  aboutHeading: string;
  aboutText: string;
  aboutImage: string;
  openingHours: OpeningHour[];
  phone: string;
  address: string;
  instagramUrl?: string;
  facebookUrl?: string;
  googleMapsUrl?: string;
}

export interface MenuCategory {
  _id: string;
  name: string;
  slug: string;
  order: number;
  description?: string;
}

export interface MenuItem {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category?: {
    _id?: string;
    name: string;
    slug?: string;
  };
  isFeatured: boolean;
  isAvailable: boolean;
  dietaryTags?: string[];
}

export interface Testimonial {
  _id: string;
  customerName: string;
  rating: number; // 1 to 5
  review: string;
  date: string;
  isApproved?: boolean;
}

export interface GalleryImage {
  _id: string;
  image: string;
  altText: string;
  caption?: string;
  order: number;
}
