"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "../registry/lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    category: string;
    items: {
      href: string;
      title: string;
    }[];
  }[];
  activeHref?: string;
}

export function SidebarNav({
  className,
  items,
  activeHref,
  ...props
}: SidebarNavProps) {
  return (
    <nav className={cn("flex flex-col space-y-6", className)} {...props}>
      {items.map((category) => (
        <div key={category.category} className="space-y-2">
          <h4 className="text-sm font-semibold">{category.category}</h4>
          <div className="grid grid-flow-row auto-rows-max space-y-1">
            {category.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  item.href === activeHref
                    ? "bg-accent text-accent-foreground"
                    : "transparent"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export const atomicDesignCategories = [
  {
    category: "Atoms",
    items: [
      { href: "/components/atoms/button", title: "Button" },
      { href: "/components/atoms/badge", title: "Badge" },
      { href: "/components/atoms/avatar", title: "Avatar" },
      { href: "/components/atoms/checkbox", title: "Checkbox" },
      { href: "/components/atoms/input", title: "Input" },
      { href: "/components/atoms/label", title: "Label" },
      { href: "/components/atoms/radio-group", title: "Radio Group" },
      { href: "/components/atoms/select", title: "Select" },
      { href: "/components/atoms/switch", title: "Switch" },
      { href: "/components/atoms/textarea", title: "Textarea" },
      { href: "/components/atoms/separator", title: "Separator" },
      { href: "/components/atoms/skeleton", title: "Skeleton" },
      { href: "/components/atoms/progress", title: "Progress" },
      { href: "/components/atoms/tooltip", title: "Tooltip" },
      { href: "/components/atoms/scroll-area", title: "Scroll Area" },
    ],
  },
  {
    category: "Molecules",
    items: [
      { href: "/components/molecules/accordion", title: "Accordion" },
      { href: "/components/molecules/alert", title: "Alert" },
      { href: "/components/molecules/alert-dialog", title: "Alert Dialog" },
      { href: "/components/molecules/aspect-ratio", title: "Aspect Ratio" },
      { href: "/components/molecules/card", title: "Card" },
      { href: "/components/molecules/collapsible", title: "Collapsible" },
      { href: "/components/molecules/command", title: "Command" },
      { href: "/components/molecules/context-menu", title: "Context Menu" },
      { href: "/components/molecules/dialog", title: "Dialog" },
      { href: "/components/molecules/dropdown-menu", title: "Dropdown Menu" },
      { href: "/components/molecules/hover-card", title: "Hover Card" },
      { href: "/components/molecules/menubar", title: "Menubar" },
      {
        href: "/components/molecules/navigation-menu",
        title: "Navigation Menu",
      },
      { href: "/components/molecules/popover", title: "Popover" },
      { href: "/components/molecules/sheet", title: "Sheet" },
      { href: "/components/molecules/tabs", title: "Tabs" },
      { href: "/components/molecules/toaster", title: "Toaster" },
    ],
  },
  {
    category: "Organisms",
    items: [
      { href: "/components/organisms/data-table", title: "Data Table" },
      { href: "/components/organisms/calendar", title: "Calendar" },
      { href: "/components/organisms/combobox", title: "Combobox" },
      { href: "/components/organisms/date-picker", title: "Date Picker" },
      { href: "/components/organisms/form", title: "Form" },
      { href: "/components/organisms/carousel", title: "Carousel" },
    ],
  },
  {
    category: "Templates",
    items: [
      {
        href: "/components/templates/dashboard-layout",
        title: "Dashboard Layout",
      },
      {
        href: "/components/templates/settings-layout",
        title: "Settings Layout",
      },
      { href: "/components/templates/auth-layout", title: "Auth Layout" },
      {
        href: "/components/templates/marketing-layout",
        title: "Marketing Layout",
      },
      {
        href: "/components/templates/documentation-layout",
        title: "Documentation Layout",
      },
    ],
  },
  {
    category: "Pages",
    items: [
      { href: "/components/pages/dashboard", title: "Dashboard Page" },
      { href: "/components/pages/login", title: "Login Page" },
      { href: "/components/pages/settings", title: "Settings Page" },
      { href: "/components/pages/profile", title: "Profile Page" },
      { href: "/components/pages/landing", title: "Landing Page" },
    ],
  },
];
