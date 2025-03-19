import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/molecules";
import { Button } from "@/registry/atoms";

export const metadata: Metadata = {
  title: "Popover Component - AliveUI",
  description: "A floating content panel triggered by a click",
};

export default function PopoverPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Popover</h1>
        <p className="text-lg text-muted-foreground">
          A floating content panel that appears when a trigger element is
          clicked.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Popover component is a molecule in the AliveUI component
            library. It provides a way to show additional information or
            controls in a floating panel that appears when the user clicks on a
            trigger element.
          </p>
          <p className="mb-4">
            It's built on top of Radix UI's Popover primitive, ensuring
            accessibility and keyboard navigation. The component is ideal for
            housing secondary content like settings, details, or forms that
            don't need to take over the entire screen.
          </p>
          <div className="flex items-center mt-6">
            <Link
              href="/examples/molecules/popover"
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
              <h3 className="text-lg font-medium mb-3">Simple Popover</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <span>Width</span>
                        <span className="col-span-2">100%</span>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <span>Height</span>
                        <span className="col-span-2">25px</span>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/popover"
              className="text-primary hover:underline"
            >
              Popover documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
