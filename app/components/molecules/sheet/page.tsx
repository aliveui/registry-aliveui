import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/molecules";
import { Button } from "@/registry/atoms";

export const metadata: Metadata = {
  title: "Sheet Component - AliveUI",
  description:
    "A side-anchored panel that slides in from the edge of the screen",
};

export default function SheetPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Sheet</h1>
        <p className="text-lg text-muted-foreground">
          A side-anchored panel that slides in from the edge of the screen,
          providing additional content or controls.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Sheet component is a molecule in the AliveUI component library.
            It provides a panel that slides in from any edge of the screen (top,
            right, bottom, or left), allowing you to display additional content,
            forms, or navigation without navigating away from the current page.
          </p>
          <p className="mb-4">
            It's built on top of Radix UI's Dialog primitive, ensuring
            accessibility and keyboard navigation. The component is ideal for
            secondary content that doesn't need to take over the entire screen,
            such as settings panels, shopping carts, or detailed information
            views.
          </p>
          <div className="flex items-center mt-6">
            <Link
              href="/components/molecules/sheet/examples"
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
              <h3 className="text-lg font-medium mb-3">Simple Sheet</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p>Sheet content goes here.</p>
                  </div>
                  <div className="flex justify-end">
                    <Button>Save changes</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/sheet"
              className="text-primary hover:underline"
            >
              Sheet documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
