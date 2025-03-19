"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/molecules";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/molecules/card";
import {
  Layers,
  Settings,
  Users,
  Home,
  FileText,
  BarChart,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";


export default function NavigationMenuExamplesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Navigation Menu Examples</h1>
        <p className="text-lg text-muted-foreground">
          Examples of the Navigation Menu component in different use cases
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Navigation Menu</CardTitle>
            <CardDescription>
              A simple navigation menu with dropdown content
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
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
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>
              Navigation menu with icons for better visual cues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
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
                    Team
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[200px]">
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/team/members"
                      >
                        Members
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/team/invite"
                      >
                        Invite
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/settings" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard Navigation</CardTitle>
            <CardDescription>
              Example navigation menu for an admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <Home className="mr-2 h-4 w-4" />
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <BarChart className="mr-2 h-4 w-4" />
                    Analytics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[220px]">
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/analytics/overview"
                      >
                        Overview
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/analytics/reports"
                      >
                        Reports
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/analytics/metrics"
                      >
                        Metrics
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <FileText className="mr-2 h-4 w-4" />
                    Content
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[220px]">
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/content/pages"
                      >
                        Pages
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/content/posts"
                      >
                        Posts
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/content/media"
                      >
                        Media
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[220px]">
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/users/all"
                      >
                        All Users
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/users/administrators"
                      >
                        Administrators
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/users/permissions"
                      >
                        Permissions
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/help" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Styled Navigation Menu</CardTitle>
            <CardDescription>
              Navigation menu with custom styling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu className="bg-primary/5 rounded-md p-1">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 text-primary font-medium">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[250px] bg-background">
                      <div className="font-medium text-sm text-primary">
                        Key Features
                      </div>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        href="/features/authentication"
                      >
                        Authentication
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        href="/features/payments"
                      >
                        Payments
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        href="/features/subscriptions"
                      >
                        Subscriptions
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 text-primary font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[250px] bg-background">
                      <div className="font-medium text-sm text-primary">
                        Resources
                      </div>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        href="/resources/guides"
                      >
                        Guides
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        href="/resources/tutorials"
                      >
                        Tutorials
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                        href="/resources/documentation"
                      >
                        Documentation
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent hover:bg-primary/10 text-primary font-medium inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors focus:bg-primary/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/support" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent hover:bg-primary/10 text-primary font-medium inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors focus:bg-primary/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Support
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
