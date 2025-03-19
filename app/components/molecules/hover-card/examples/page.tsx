"use client";
import React from "react";
import {
  CalendarIcon,
  FileIcon,
  ImageIcon,
  PackageIcon,
  Info,
  ArrowUpRight,
} from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/registry/molecules";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  Badge,
} from "@/registry/atoms";


export default function HoverCardExamplesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Hover Card Examples</h1>
        <p className="text-lg text-muted-foreground">
          Interactive examples showcasing the versatility of the Hover Card
          component.
        </p>
      </div>

      <div className="grid gap-10">
        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Hover Card</h2>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">Hover over me</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Information</h4>
                  <p className="text-sm">
                    This is a simple hover card that displays additional
                    information on hover.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            A simple hover card with basic information shown on hover.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">User Profile Card</h2>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <a href="#" className="text-blue-500 underline">
                  @johndoe
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@johndoe"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">John Doe</h4>
                    <p className="text-sm">
                      UI/UX designer and full-stack developer based in San
                      Francisco.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        Joined December 2023
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Displays user profile information when hovering over a username.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Image Preview</h2>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="#"
                  className="text-blue-500 underline flex items-center"
                >
                  <ImageIcon className="mr-1 h-4 w-4" />
                  View image
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=400&q=80"
                    alt="Preview"
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-xs text-muted-foreground">
                    Click to see full resolution image
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Shows an image preview when hovering over a link.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Product Information</h2>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  <PackageIcon className="h-4 w-4" />
                  Product Details
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">AliveUI Pro Package</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">$99.00</span>
                    <Badge>New</Badge>
                  </div>
                  <p className="text-sm">
                    Complete UI package with 200+ components, advanced theming,
                    and premium support.
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      Released: January 2024
                    </span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Displays product details and pricing information on hover.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Documentation Preview</h2>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="#"
                  className="text-blue-500 underline flex items-center"
                >
                  <FileIcon className="mr-1 h-4 w-4" />
                  API Documentation
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">API Reference</h4>
                    <Badge variant="outline" className="text-xs">
                      v1.0
                    </Badge>
                  </div>
                  <div className="rounded-md bg-muted p-2">
                    <code className="text-xs">
                      {`<HoverCard>
  <HoverCardTrigger />
  <HoverCardContent />
</HoverCard>`}
                    </code>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click to view full API documentation
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Gives a preview of documentation content before clicking.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Custom Positioning</h2>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Hover Me</Button>
              </HoverCardTrigger>
              <HoverCardContent side="right" align="start" className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Custom Positioning</h4>
                  <p className="text-sm">
                    This hover card is positioned to the right of the trigger
                    with start alignment.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Demonstrates custom positioning with the side and align props.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">With Arrow</h2>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Hover with Arrow</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="absolute left-1/2 -top-2 h-2 w-4 -translate-x-1/2 overflow-hidden">
                  <div className="absolute inset-0 translate-y-1/2 transform-gpu rounded-full bg-popover" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">
                    Hover Card with Arrow
                  </h4>
                  <p className="text-sm">
                    This hover card has a custom arrow indicator pointing to the
                    trigger element.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Shows a hover card with a custom arrow pointing to the trigger.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contextual Help</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <span className="mr-1">Usage Limit</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </HoverCardTrigger>
                <HoverCardContent side="top" className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Usage Limits</h4>
                    <p className="text-sm">
                      Your current plan has a limit of 10,000 API requests per
                      month. Upgrade to increase this limit.
                    </p>
                    <a
                      href="#"
                      className="text-xs text-blue-500 flex items-center hover:underline"
                    >
                      Learn more about usage limits
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Uses a hover card to provide contextual help information.
          </div>
        </div>
      </div>
    </div>
  );
}
