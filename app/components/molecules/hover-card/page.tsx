import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/registry/molecules";
import { Avatar, AvatarImage, AvatarFallback, Button } from "@/registry/atoms";

export const metadata: Metadata = {
  title: "Hover Card Component - AliveUI",
  description:
    "A floating card that appears when hovering over a trigger element",
};

export default function HoverCardPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Hover Card</h1>
        <p className="text-lg text-muted-foreground">
          A floating card that appears when hovering over a trigger element to
          display additional information.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Hover Card component is a molecule in the AliveUI component
            library. It displays additional information in a floating card when
            a user hovers over a trigger element.
          </p>
          <p className="mb-4">
            It's built on top of Radix UI's Hover Card primitive, providing a
            robust and accessible implementation with customizable open and
            close delays.
          </p>
          <div className="flex items-center mt-6">
            <Link
              href="/components/molecules/hover-card/examples"
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
              <h3 className="text-lg font-medium mb-3">User Profile Card</h3>
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
                      <h4 className="text-sm font-semibold">@johndoe</h4>
                      <p className="text-sm">
                        UI/UX designer and full-stack developer
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          Joined December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Information Card</h3>
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
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/hover-card"
              className="text-primary hover:underline"
            >
              Hover Card documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
