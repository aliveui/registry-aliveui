"use client";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Settings,
  Users,
  Home,
  FileText,
  BarChart,
  HelpCircle,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/molecules";

export const metadata: Metadata = {
  title: "Navigation Menu Component - AliveUI",
  description:
    "A responsive navigation component with support for dropdown menus and keyboard navigation",
};

export default function NavigationMenuPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Navigation Menu</h1>
        <p className="text-lg text-muted-foreground">
          A responsive navigation component with dropdown menus, links, and
          keyboard navigation support.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Navigation Menu component is a molecule in the AliveUI component
            library. It provides a horizontal navigation system with support for
            dropdown menus and flyout content.
          </p>
          <p className="mb-4">
            It's built on top of Radix UI's NavigationMenu primitive, ensuring
            accessibility and keyboard navigation. The component is ideal for
            site headers, application navigation, and any interface where users
            need to navigate between different sections.
          </p>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Navigation Menu</h2>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            AliveUI
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/docs/introduction" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Introduction
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            A quick introduction to the AliveUI library
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/installation" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Installation
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            How to install AliveUI and get started
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/typography" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Typography
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Styles for headings, paragraphs, lists...etc
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link
                        href="/docs/components/accordion"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Accordion
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            A vertically stacked set of interactive headings
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/components/alert-dialog"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Alert Dialog
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            A modal dialog that interrupts the user with
                            important content
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/components/card"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Card
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Container for displaying content in a clear and
                            concise format
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/components/hover-card"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Hover Card
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            For sighted users to preview content available
                            behind a link
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="mt-4 text-sm text-muted-foreground">
            A simple navigation menu with dropdown content
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">With Icons</h2>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Layers className="mr-2 h-4 w-4" />
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-[200px]">
                    <NavigationMenuLink
                      className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/products/all"
                    >
                      All Products
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/products/new"
                    >
                      New Arrivals
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/products/featured"
                    >
                      Featured
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Users className="mr-2 h-4 w-4" />
                  Customers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-[200px]">
                    <NavigationMenuLink
                      className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/customers/list"
                    >
                      Customer List
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/customers/reports"
                    >
                      Reports
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/settings" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="mt-4 text-sm text-muted-foreground">
            Navigation menu with icons for better visual cues
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/navigation-menu"
              className="text-primary hover:underline"
            >
              Navigation Menu documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
