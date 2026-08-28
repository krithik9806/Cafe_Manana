"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Search,
  Coffee,
  Sparkles,
  Star,
  MessageSquare,
  X,
  Phone,
  MapPin,
  ExternalLink,
  Flame,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES, MenuItemData } from "@/lib/data/menuData";

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeDietFilter, setActiveDietFilter] = useState<"all" | "veg" | "nonveg" | "bestseller" | "review">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);

  // Filter items based on Category, Diet Filter, and Search Query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // 1. Category Match
      let matchesCategory = true;
      if (activeCategory !== "all") {
        if (activeCategory === "pizzas") matchesCategory = item.category.toLowerCase().includes("pizza");
        else if (activeCategory === "iced-coffee") matchesCategory = item.category === "Iced Coffee";
        else if (activeCategory === "filter-coffee") matchesCategory = item.category === "Filter Coffee";
        else if (activeCategory === "cold-brews") matchesCategory = item.category === "Cold Brews";
        else if (activeCategory === "matcha") matchesCategory = item.category === "Matcha";
        else if (activeCategory === "shakes") matchesCategory = item.category === "Shakes";
        else if (activeCategory === "cold-chocolate") matchesCategory = item.category === "Cold Chocolate";
        else if (activeCategory === "mocktails") matchesCategory = item.category === "Mocktails & Juices";
        else if (activeCategory === "smoothies") matchesCategory = item.category === "Smoothies";
        else if (activeCategory === "cold-pressed") matchesCategory = item.category === "Cold Pressed Juice";
        else if (activeCategory === "guest-favourites") matchesCategory = Boolean(item.reviewMentioned);
      }

      // 2. Diet / Preference Filter Match
      let matchesDiet = true;
      if (activeDietFilter === "veg") matchesDiet = item.vegetarian;
      else if (activeDietFilter === "nonveg") matchesDiet = !item.vegetarian;
      else if (activeDietFilter === "bestseller") matchesDiet = Boolean(item.bestseller);
      else if (activeDietFilter === "review") matchesDiet = Boolean(item.reviewMentioned);

      // 3. Search Query Match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, activeDietFilter, searchQuery]);

  // Featured Favourites for top spotlight section
  const featuredFavourites = useMemo(() => {
    return MENU_ITEMS.filter((item) => item.bestseller).slice(0, 3);
  }, []);

  return (
    <div className="bg-cream min-h-screen text-brown-deep font-body pb-24">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] bg-brown-deep text-cream flex items-center justify-center overflow-hidden pt-20 pb-16 border-b border-gold/20">
        {/* Interior Lounge Background Image */}
        <Image
          src="/images/cafe/hero-main-lounge.png"
          alt="Cafe Manana Interior Lounge"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Elegant Mild Brown Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-deep via-brown-deep/80 to-brown-deep/65" />
        <div className="absolute inset-0 bg-brown-deep/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/60 via-transparent to-brown-deep/60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest shadow-md"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span>Anna Nagar East • Chennai</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-cream tracking-tight leading-none"
          >
            THE MANANA MENU
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display italic text-gold text-xl sm:text-2xl md:text-3xl max-w-xl mx-auto"
          >
            Coffee, comfort, curiosity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-cream/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Wood-fired 12" artisanal sourdough pizzas, experimental cold brews, Japanese matcha clouds, and customer-favourite brunch classics in Anna Nagar East.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-4 flex items-center justify-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest animate-bounce"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </section>

      {/* 2. STICKY CATEGORY & SEARCH NAVIGATION BAR */}
      <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur-xl border-b border-brown-mid/10 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Back to Home Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brown-deep hover:text-terracotta transition-colors self-start md:self-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            {/* Dynamic Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-brown-mid absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search pizza, cold brew, matcha, veg..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-cream-dark/80 border border-brown-mid/20 text-brown-deep text-sm placeholder:text-brown-mid/60 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brown-mid hover:text-brown-deep"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Horizontally Scrollable Category Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shrink-0 ${
                    isSelected
                      ? "text-cream shadow-md"
                      : "bg-cream-dark/60 text-brown-mid hover:bg-cream-dark hover:text-brown-deep"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-terracotta rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. EDITORIAL SPOTLIGHT: MAÑANA FAVOURITES (Only when no search query is active) */}
      {!searchQuery && activeCategory === "all" && activeDietFilter === "all" && featuredFavourites && featuredFavourites.length >= 3 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-brown-mid/10">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-terracotta uppercase tracking-widest">
                Customer Top Choices
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-brown-deep">
                MANANA FAVOURITES
              </h2>
            </div>
            <span className="text-xs font-bold text-brown-mid bg-brown-deep/5 px-3 py-1.5 rounded-full hidden sm:inline-block">
              ✨ Verified Reviews & Listings
            </span>
          </div>

          {/* Asymmetric Editorial Grid: 1 Large Feature + 2 Side Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Feature Card 1: Biscoff Iceberg or Pepperoni Pizza */}
            <div
              onClick={() => setSelectedItem(featuredFavourites[0])}
              className="lg:col-span-7 group relative cursor-pointer rounded-3xl overflow-hidden bg-brown-deep text-cream p-6 sm:p-8 flex flex-col justify-end min-h-[380px] shadow-2xl hover:shadow-[0_10px_30px_rgba(59,35,20,0.3)] transition-all duration-500"
            >
              <Image
                src={featuredFavourites[0]?.image || "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800"}
                alt={featuredFavourites[0]?.name || "Bestseller"}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-deep via-brown-deep/40 to-transparent" />

              <div className="relative z-10 space-y-3">
                <span className="bg-gold text-brown-deep text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md inline-flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-brown-deep" />
                  <span>#1 Guest Choice</span>
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-cream group-hover:text-gold transition-colors">
                  {featuredFavourites[0]?.name}
                </h3>
                <p className="font-body text-cream/80 text-sm max-w-lg line-clamp-2">
                  {featuredFavourites[0]?.description}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-body text-3xl font-extrabold text-gold">
                    ₹{featuredFavourites[0]?.price}
                  </span>
                  <span className="text-xs font-bold text-cream bg-cream/20 hover:bg-gold hover:text-brown-deep px-4 py-2 rounded-full transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
            </div>

            {/* Side Cards 2 & 3 */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {featuredFavourites.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white-soft border border-cream-dark p-4 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 flex-1"
                >
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0 bg-cream-dark">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      sizes="120px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1 pr-2">
                    <span className="text-[10px] font-bold text-terracotta uppercase tracking-wider bg-terracotta/10 px-2.5 py-0.5 rounded-md">
                      Bestseller
                    </span>
                    <h4 className="font-display text-lg font-bold text-brown-deep group-hover:text-terracotta transition-colors line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="font-body text-xs text-brown-mid/70 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="font-body text-lg font-extrabold text-terracotta block pt-1">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. DIET & PREFERENCE FILTER PILLS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-brown-mid/10 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveDietFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeDietFilter === "all"
                  ? "bg-brown-deep text-cream"
                  : "bg-cream-dark text-brown-mid hover:bg-cream-dark/80"
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveDietFilter("veg")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeDietFilter === "veg"
                  ? "bg-sage text-white"
                  : "bg-sage/10 text-sage hover:bg-sage/20"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-sage" />
              <span>Vegetarian</span>
            </button>
            <button
              onClick={() => setActiveDietFilter("nonveg")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeDietFilter === "nonveg"
                  ? "bg-terracotta text-white"
                  : "bg-terracotta/10 text-terracotta hover:bg-terracotta/20"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span>Non-Vegetarian</span>
            </button>
            <button
              onClick={() => setActiveDietFilter("bestseller")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeDietFilter === "bestseller"
                  ? "bg-gold text-brown-deep"
                  : "bg-gold/15 text-brown-deep hover:bg-gold/30"
              }`}
            >
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span>Bestsellers</span>
            </button>
            <button
              onClick={() => setActiveDietFilter("review")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeDietFilter === "review"
                  ? "bg-brown-mid text-cream"
                  : "bg-brown-mid/10 text-brown-mid hover:bg-brown-mid/20"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Guest Favourites</span>
            </button>
          </div>

          <span className="text-xs font-semibold text-brown-mid">
            Showing {filteredItems.length} item{filteredItems.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      {/* 5. MAIN DYNAMIC MENU GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${activeDietFilter}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white-soft rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-cream-dark flex flex-col group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dark">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap z-10">
                      <span className="bg-brown-deep/80 backdrop-blur-md text-cream text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Veg / Non-Veg Indicator Badge */}
                    <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-md">
                      <span
                        className={`block w-3 h-3 rounded-full ${
                          item.vegetarian ? "bg-sage" : "bg-terracotta"
                        }`}
                        title={item.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                      />
                    </div>

                    {/* Guest Favourite Tag */}
                    {item.reviewMentioned && (
                      <span className="absolute bottom-3 left-3 bg-gold/90 backdrop-blur-md text-brown-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>Guest Favourite</span>
                      </span>
                    )}
                  </div>

                  {/* Card Content Details */}
                  <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-xl font-bold text-brown-deep group-hover:text-terracotta transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="font-body text-brown-mid/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer: Price & Tags */}
                    <div className="pt-3 border-t border-cream-dark flex items-center justify-between">
                      <span className="font-body text-2xl font-extrabold text-terracotta">
                        ₹{item.price}
                      </span>

                      <span className="text-xs font-bold text-brown-mid group-hover:text-terracotta transition-colors flex items-center gap-1">
                        <span>Details</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center space-y-4 max-w-md mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-terracotta/10 text-terracotta mx-auto flex items-center justify-center">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-brown-deep">
                Nothing on the menu yet
              </h3>
              <p className="font-body text-brown-mid text-sm">
                Try searching for coffee, pizza, cold brew, matcha or something sweet!
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setActiveDietFilter("all");
                  setSearchQuery("");
                }}
                className="btn-outline text-xs uppercase"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 6. ITEM DETAIL MODAL / MOBILE BOTTOM SHEET */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-end sm:items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-cream rounded-3xl overflow-hidden border border-gold/30 shadow-2xl p-6 sm:p-8 cursor-default max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brown-deep/10 text-brown-deep hover:bg-terracotta hover:text-white transition-colors flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-brown-deep">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-brown-deep/90 text-gold text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold/30">
                      {selectedItem.category}
                    </span>
                    <span
                      className={`text-xs font-bold text-white px-3 py-1 rounded-full ${
                        selectedItem.vegetarian ? "bg-sage" : "bg-terracotta"
                      }`}
                    >
                      {selectedItem.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                    </span>
                  </div>
                </div>

                {/* Header & Price */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-brown-deep">
                      {selectedItem.name}
                    </h3>
                    <span className="font-body text-3xl font-extrabold text-terracotta shrink-0">
                      ₹{selectedItem.price}
                    </span>
                  </div>

                  <p className="font-body text-brown-mid text-base leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  {selectedItem.bestseller && (
                    <span className="bg-gold/20 text-brown-deep text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-gold/40">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                      <span>Bestseller</span>
                    </span>
                  )}
                  {selectedItem.reviewMentioned && (
                    <span className="bg-brown-deep/10 text-brown-deep text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-brown-deep/20">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Mentioned by Manana guests</span>
                    </span>
                  )}
                  {selectedItem.tags?.map((t) => (
                    <span
                      key={t}
                      className="bg-cream-dark text-brown-mid text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Callout */}
                <div className="pt-4 border-t border-brown-mid/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-cream-dark/40 p-4 rounded-2xl">
                  <div className="text-left text-xs text-brown-mid">
                    <strong className="block text-brown-deep font-semibold">Cafe Manana • Anna Nagar East</strong>
                    <span>Mon–Thu: 11 AM – 11 PM • Fri–Sun: 11 AM – 2 AM</span>
                  </div>
                  <a
                    href="tel:+917305054611"
                    className="btn-primary text-xs w-full sm:w-auto"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call +91 73050 54611</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. PREMIUM FOOTER CTA */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-brown-mid/20">
        <div className="bg-brown-deep text-cream rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/15 rounded-full filter blur-3xl pointer-events-none" />

          <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/15 px-4 py-1.5 rounded-full border border-gold/30 inline-block">
            Anna Nagar East • Chennai
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-cream">
            COME HANG OUT AT MANANA
          </h2>

          <p className="font-body text-cream/80 text-sm sm:text-base max-w-xl mx-auto">
            38, 21st Street, L Block, Anna Nagar East, Chennai, Tamil Nadu 600102
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://maps.google.com/?q=Cafe+Manana+Anna+Nagar+East+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>

            <a href="tel:+917305054611" className="btn-outline text-cream border-cream hover:bg-cream hover:text-brown-deep text-xs uppercase">
              <Phone className="w-4 h-4" />
              <span>Call Cafe Manana</span>
            </a>

            <a
              href="https://www.instagram.com/cafemanana.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-gold border-gold hover:bg-gold hover:text-brown-deep text-xs uppercase"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;
