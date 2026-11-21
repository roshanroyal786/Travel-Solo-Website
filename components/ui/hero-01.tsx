"use client";

import React from "react";
import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
  ];

  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "/",
      isActive: true,
    },
    {
      title: "Destinations",
      href: "/countries",
    },
    {
      title: "Eligibility Quiz",
      href: "/tools/eligibility-checker",
    },
    {
      title: "Checklist Tool",
      href: "/tools/document-checklist",
    },
    {
      title: "Timelines",
      href: "/tools/processing-time",
    },
    {
      title: "About Us",
      href: "/about",
    },
  ];

  const brandList: BrandList[] = [
    {
      image:
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=80&q=80",
      lightimg:
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=80&q=80",
      name: "Czech Republic (Schengen)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=80&q=80",
      lightimg:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=80&q=80",
      name: "Malaysia (e-Visa & MDEC)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=80&q=80",
      lightimg:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=80&q=80",
      name: "Russia (MBBS & Unified e-Visa)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=80&q=80",
      lightimg:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=80&q=80",
      name: "Slovenia (EU Single Permit)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=80&q=80",
      lightimg:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=80&q=80",
      name: "Singapore (EP & COMPASS)",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}
