import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          <div className="flex items-center mt-6">
            <Link
              href="/examples/molecules/navigation-menu"
              className="inline-flex items-center text-primary hover:underline"
            >
              View Examples
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <div className="p-4 border rounded-lg flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">
                Simple Navigation Menu
              </h3>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Getting started
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                      <div className="grid gap-2">
                        <div className="font-medium">Documentation</div>
                        <div className="text-sm text-muted-foreground">
                          Start building with AliveUI components
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                      <div className="grid gap-2">
                        <div className="font-medium">UI Components</div>
                        <div className="text-sm text-muted-foreground">
                          Explore our library of reusable components
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Documentation
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
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
