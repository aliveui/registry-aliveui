import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/molecules";
import { Button } from "@/registry/atoms";

export const metadata: Metadata = {
  title: "Drawer Component - AliveUI",
  description: "A panel that slides in from the edge of the screen",
};

export default function DrawerPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Drawer</h1>
        <p className="text-lg text-muted-foreground">
          A panel that slides in from the edge of the screen.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Drawer component is a molecule in the AliveUI component library.
            It provides a panel that slides in from the edge of the screen,
            typically from the bottom on mobile devices and from the sides on
            larger screens.
          </p>
          <p className="mb-4">
            Drawers are useful for displaying additional content without
            navigating away from the current page, such as filtering options,
            product details, or forms that don't require the full screen.
          </p>
          <div className="flex items-center mt-6">
            <Link
              href="/components/molecules/drawer/examples"
              className="inline-flex items-center text-primary hover:underline"
            >
              View Examples
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <div className="p-4 border rounded-lg">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Basic Drawer</DrawerTitle>
                  <DrawerDescription>
                    This is a simple drawer with basic content.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p>This is the main content of the drawer.</p>
                </div>
                <DrawerFooter>
                  <Button>Save</Button>
                  <Button variant="outline">Cancel</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/drawer"
              className="text-primary hover:underline"
            >
              Drawer documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
