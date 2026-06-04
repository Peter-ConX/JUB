import { isDemoSite } from "@/lib/site-config";

export default function DemoBanner() {
  if (!isDemoSite) return null;

  return (
    <div className="relative z-[60] bg-navy-dark py-2.5 text-center">
      <p className="px-4 text-[11px] font-medium uppercase tracking-[0.25em] text-champagne/90 sm:text-xs sm:tracking-[0.3em]">
        Demonstration Website — Portfolio sample branding, not a live client site
      </p>
    </div>
  );
}
