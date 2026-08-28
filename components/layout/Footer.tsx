import { Instagram, Facebook, MapPin, Phone, ExternalLink } from "lucide-react";
import { SiteSettings } from "@/lib/types";
import Logo from "@/components/ui/Logo";

interface FooterProps {
  siteSettings: SiteSettings;
}

export const Footer: React.FC<FooterProps> = ({ siteSettings }) => {
  return (
    <footer className="bg-brown-deep text-cream pt-16 pb-8 border-t border-brown-mid/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-cream/10">
          {/* Column 1: Branding & Socials */}
          <div className="space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-cream/80 text-sm leading-relaxed max-w-sm font-body">
              {siteSettings.tagline ||
                "Specialty coffee, handcrafted viennoiserie, and slow mornings served daily."}
            </p>

            <div className="flex items-center space-x-4 pt-2">
              {siteSettings.instagramUrl && (
                <a
                  href={siteSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-terracotta transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteSettings.facebookUrl && (
                <a
                  href={siteSettings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-terracotta transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-cream tracking-wide">Opening Hours</h4>
            <ul className="space-y-2.5 text-sm text-cream/80">
              {siteSettings.openingHours && siteSettings.openingHours.length > 0 ? (
                siteSettings.openingHours.map((schedule, idx) => (
                  <li key={idx} className="flex justify-between border-b border-cream/5 pb-2">
                    <span className="font-medium text-cream">{schedule.day}</span>
                    <span className="text-cream/70">{schedule.hours}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex justify-between border-b border-cream/5 pb-2">
                    <span className="font-medium text-cream">Monday – Thursday</span>
                    <span className="text-cream/70">11:00 AM – 11:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-cream/5 pb-2">
                    <span className="font-medium text-cream">Friday – Sunday</span>
                    <span className="text-cream/70">11:00 AM – 2:00 AM</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-cream tracking-wide">Find Us</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <span>{siteSettings.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-terracotta shrink-0" />
                <a href={`tel:${siteSettings.phone}`} className="hover:text-terracotta transition-colors">
                  {siteSettings.phone}
                </a>
              </li>
            </ul>

            {siteSettings.googleMapsUrl && (
              <div className="pt-2">
                <a
                  href={siteSettings.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta hover:text-cream transition-colors"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© {new Date().getFullYear()} Cafe Manana. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-terracotta">☕</span>
            <span>for coffee lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
