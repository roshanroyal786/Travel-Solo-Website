"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, Compass, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const CollaborateButton = ({ className }: { className?: string }) => (
  <a
    href={buildWhatsAppLink({ type: "quote" })}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "relative inline-flex items-center text-xs font-semibold rounded-full h-10 ps-4 pe-11 group transition-all duration-500 bg-primary text-white hover:bg-primary/95 shadow-sm hover:ps-11 hover:pe-4 overflow-hidden cursor-pointer",
      className
    )}
  >
    <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
      WhatsApp Us
    </span>
    <span className="absolute right-1 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45 shadow-xs">
      <ArrowUpRight size={15} />
    </span>
  </a>
);

export default function Header({ navigationData, className }: HeaderProps) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 40);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "inset-x-0 z-50 px-4 flex items-center justify-center sticky top-0 h-20 transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "w-full max-w-6xl flex items-center h-fit justify-between gap-3 lg:gap-6 transition-all duration-500",
          sticky
            ? "py-2.5 px-5 bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md rounded-full"
            : "py-3 px-4 bg-transparent border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Compass className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-xl sm:text-2xl font-normal tracking-tight text-slate-900">
            Travel <span className="italic text-primary font-normal">Solo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu className="bg-slate-100/90 border border-slate-200/70 p-1 rounded-full">
            <NavigationMenuList className="flex gap-0.5">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-medium rounded-full text-slate-600 hover:text-slate-900 hover:bg-white transition-all tracking-normal",
                      navItem.isActive ? "bg-white text-primary font-semibold shadow-xs" : ""
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right CTA Group */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>{siteConfig.phone}</span>
          </a>

          <CollaborateButton className="hidden lg:inline-flex" />

          {/* Mobile Sheet Trigger */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80 p-6 bg-white border-l border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Compass className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-display text-xl font-normal text-slate-900">
                        Travel <span className="italic text-primary">Solo</span>
                      </span>
                    </Link>
                    <SheetClose asChild>
                      <button className="rounded-full border border-slate-200 p-2 text-slate-500 hover:text-slate-800">
                        <X className="w-4 h-4" />
                      </button>
                    </SheetClose>
                  </div>

                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

                  <nav className="flex flex-col gap-2 pt-6">
                    {navigationData.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                          item.isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <a
                    href={buildWhatsAppLink({ type: "quote" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-primary text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get a Quote on WhatsApp</span>
                  </a>

                  <div className="text-center text-[11px] text-slate-400">
                    Dwarka Sector 12, New Delhi · {siteConfig.phone}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
