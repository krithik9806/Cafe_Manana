import { SiteSettings, MenuCategory, MenuItem, Testimonial, GalleryImage } from "../types";
import { MENU_ITEMS as CENTRAL_MENU_ITEMS, MENU_CATEGORIES as CENTRAL_CATEGORIES } from "./menuData";

export const SITE_SETTINGS: SiteSettings = {
  siteName: "Cafe Manana",
  tagline: "Celebrate the everyday.",
  heroHeading: "Awaken Your Senses at Cafe Manana",
  heroSubtext:
    "A dreamy two-floor pastel cafe in Anna Nagar East, Chennai. Serving wood-fired 12\" artisanal sourdough pizzas, experimental cold brews, handcrafted mocktails, and creative fusion comfort food.",
  heroImage: "/images/cafe/hero-warm-lounge.jpg",
  aboutHeading: "Chennai's Dreamy Pastel Brunch & Experimental Coffee Destination",
  aboutText:
    "Located in the heart of Anna Nagar East, Cafe Manana is a contemporary two-floor pastel-toned brunch cafe. Known for its work-friendly atmosphere with high-speed Wi-Fi, private dining options, and warm hospitality, we specialize in authentic wood-fired 12\" sourdough pizzas, experimental cold brews featured in Indulge Express, and comforting global fusion dishes.",
  aboutImage: "/images/cafe/hero-main-lounge.png",
  openingHours: [
    { day: "Monday – Thursday", hours: "11:00 AM – 11:00 PM" },
    { day: "Friday – Sunday", hours: "11:00 AM – 2:00 AM" },
  ],
  phone: "+91 73050 54611",
  address: "38, 21st Street, L Block, Anna Nagar East, Ward 102, Chennai – 600102",
  instagramUrl: "https://www.instagram.com/cafemanana.in/",
  facebookUrl: "https://facebook.com",
  googleMapsUrl:
    "https://maps.google.com/?q=Cafe+Manana+Anna+Nagar+East+Chennai",
};

export const MENU_CATEGORIES_LIST: MenuCategory[] = CENTRAL_CATEGORIES.map((cat, idx) => ({
  _id: cat.id,
  name: cat.name,
  slug: cat.id,
  order: idx + 1,
  description: `Explore our handcrafted ${cat.name} selection.`,
}));

export const MENU_ITEMS_LIST: MenuItem[] = CENTRAL_MENU_ITEMS.map((item) => ({
  _id: item.id,
  name: item.name,
  slug: item.id,
  description: item.description,
  price: item.price,
  category: {
    _id: item.category.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    name: item.category,
    slug: item.category.toLowerCase().replace(/[^a-z0-9]/g, "-"),
  },
  isFeatured: Boolean(item.bestseller),
  isAvailable: item.available,
  dietaryTags: [
    ...(item.vegetarian ? ["Vegetarian"] : ["Non-Veg"]),
    ...(item.bestseller ? ["Bestseller"] : []),
    ...(item.reviewMentioned ? ["Guest Favourite"] : []),
    ...(item.tags || []),
  ],
  image: item.image,
}));

export const FEATURED_MENU_ITEMS: MenuItem[] = MENU_ITEMS_LIST.filter(
  (item) => item.isFeatured
).slice(0, 6);

export const TESTIMONIALS: Testimonial[] = [
  {
    _id: "test-1",
    customerName: "Divya R. (Food Critic)",
    review:
      "Cafe Manana is hands-down the best brunch spot in Chennai! The Madras 4x Cheese Pizza with Molagapodi and the Biscoff Iceberg are absolute perfection. Love the dreamy pastel aesthetic and work-friendly vibe.",
    rating: 5,
    date: "2026-08-01",
    isApproved: true,
  },
  {
    _id: "test-2",
    customerName: "Karthik Subramanian",
    review:
      "The Mango Passion Cold Brew and Sea Salted Vietnamese Coffee are revolutionary. You won't find specialty coffee crafted this thoughtfully anywhere else in Anna Nagar East.",
    rating: 5,
    date: "2026-07-28",
    isApproved: true,
  },
  {
    _id: "test-3",
    customerName: "Ananya & Team",
    review:
      "We hosted a private birthday brunch upstairs in the lounge. Outstanding hospitality, wood-fired sourdough pizzas, and the Cold Chocolate made our day unforgettable!",
    rating: 5,
    date: "2026-07-15",
    isApproved: true,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    _id: "gal-1",
    image: "/images/cafe/pastel-interior-bar.png",
    altText: "Cafe Manana pastel interior coffee bar in Anna Nagar East",
    caption: "Pastel Interior & Coffee Bar",
    order: 1,
  },
  {
    _id: "gal-2",
    image: "/images/cafe/hero-warm-lounge.jpg",
    altText: "Cafe Manana warm lounge seating",
    caption: "Wood-Fired Pizza Lounge",
    order: 2,
  },
  {
    _id: "gal-3",
    image: "/images/cafe/private-dining-room.jpg",
    altText: "Cafe Manana glass private dining suite",
    caption: "Private Dining Suite",
    order: 3,
  },
  {
    _id: "gal-4",
    image: "/images/cafe/window-sunshine-seating.png",
    altText: "Cafe Manana sunlit window seating",
    caption: "Sunlit Window Seating",
    order: 4,
  },
  {
    _id: "gal-5",
    image: "/images/cafe/hero-main-lounge.png",
    altText: "Cafe Manana main dining hall with pendant lamps",
    caption: "Main Dining Hall",
    order: 5,
  },
  {
    _id: "gal-6",
    image: "/images/cafe/exterior-facade.jpg",
    altText: "Cafe Manana exterior facade",
    caption: "Anna Nagar East Exterior Facade",
    order: 6,
  },
];
