import React from "react";
import {
  SITE_SETTINGS,
  FEATURED_MENU_ITEMS,
  TESTIMONIALS,
  GALLERY_IMAGES,
} from "@/lib/data/siteData";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AwardsSection from "@/components/sections/AwardsSection";
import MenuPreview from "@/components/sections/MenuPreview";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero siteSettings={SITE_SETTINGS} />
      <About siteSettings={SITE_SETTINGS} />
      <AwardsSection />
      <MenuPreview featuredItems={FEATURED_MENU_ITEMS} />
      <Testimonials testimonials={TESTIMONIALS} />
      <Gallery galleryImages={GALLERY_IMAGES} />
      <ContactCTA siteSettings={SITE_SETTINGS} />
    </>
  );
}
