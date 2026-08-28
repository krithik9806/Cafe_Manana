import React from "react";
import { SiteSettings } from "@/lib/types";

interface JsonLdProps {
  siteSettings: SiteSettings;
}

export const JsonLd: React.FC<JsonLdProps> = ({ siteSettings }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteSettings.siteName || "Cafe Manana",
    "image": [
      siteSettings.heroImage,
      siteSettings.aboutImage
    ],
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": siteSettings.phone || "+91 73050 54611",
    "priceRange": "₹800 – ₹2,000 for two",
    "servesCuisine": [
      "Italian",
      "Wood-Fired Pizza",
      "Specialty Coffee",
      "Fusion",
      "Contemporary",
      "Brunch"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New No. 38, Old No. L72/A2, L Block, 21st Street, Anna Nagar East, Ward 102",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600102",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0850,
      "longitude": 80.2101
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "11:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "02:00"
      }
    ],
    "hasMenu": `${baseUrl}/menu`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "1488"
    },
    "sameAs": [
      siteSettings.instagramUrl,
      siteSettings.facebookUrl
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
    />
  );
};

export default JsonLd;
