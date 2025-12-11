"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-slate-200 py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-amber-500 transition-colors">
             G
           </div>
           <div className="flex flex-col">
             <span className="font-bold text-slate-900 leading-none">Global Studies</span>
             <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">Consultancy</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Study Abroad</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    <ListItem href="/countries/usa" title="Study in USA 🇺🇸">
                      Top universities, STEM courses, and post-study work visa info.
                    </ListItem>
                    <ListItem href="/countries/uk" title="Study in UK 🇬🇧">
                      Masters with placement year and shorter duration courses.
                    </ListItem>
                    <ListItem href="/countries/canada" title="Study in Canada 🇨🇦">
                      Affordable education and PR pathways.
                    </ListItem>
                    <ListItem href="/countries/australia" title="Study in Australia 🇦🇺">
                      Group of Eight universities and scholarship options.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Test Prep</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-100 to-blue-50 p-6 no-underline outline-none focus:shadow-md"
                          href="/coaching"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-blue-900">
                            Ace Your Exams
                          </div>
                          <p className="text-sm leading-tight text-blue-700/80">
                            Join our expert-led batches for IELTS, PTE, and GRE.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/coaching/ielts" title="IELTS">
                      Comprehensive training modules.
                    </ListItem>
                    <ListItem href="/coaching/gre" title="GRE">
                      Quantitative & Verbal reasoning.
                    </ListItem>
                    <ListItem href="/coaching/pte" title="PTE">
                      Pearson Test of English mastery.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-slate-600 mr-2">
            <Phone className="w-4 h-4" />
            <span className="font-semibold text-sm">+91 98765 43210</span>
          </div>
          <Button className="hidden md:flex bg-blue-900 hover:bg-blue-800 text-white font-semibold shadow-lg shadow-blue-900/20">
            Free Consultation
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
