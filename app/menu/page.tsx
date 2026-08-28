import type { Metadata } from "next";
import MenuPage from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Menu | Cafe Manana — Anna Nagar, Chennai",
  description:
    "Explore Cafe Manana's menu of wood-fired 12\" artisanal sourdough pizzas, specialty coffee, cold brews, matcha clouds, smoothies, shakes, mocktails and refreshing juices in Anna Nagar, Chennai.",
  openGraph: {
    title: "Menu | Cafe Manana — Anna Nagar, Chennai",
    description:
      "Wood-fired 12\" sourdough pizzas, experimental cold brews, matcha clouds, shakes & juices at Cafe Manana, Anna Nagar East, Chennai.",
  },
};

export default function DedicatedMenuPage() {
  return <MenuPage />;
}
