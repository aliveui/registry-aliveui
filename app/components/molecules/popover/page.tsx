"use client";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Settings } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/molecules";
import { Button, Input, Label, Checkbox } from "@/registry/atoms";

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
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Popover</h2>
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
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div className="mt-4 text-sm text-muted-foreground">
            A simple popover with dimensions information
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Popover with Form</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Profile</h4>
                  <p className="text-sm text-muted-foreground">
                    Update your profile information.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      defaultValue="john@example.com"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
                <Button className="w-full">Save Changes</Button>
              </div>
            </PopoverContent>
          </Popover>
          <div className="mt-4 text-sm text-muted-foreground">
            Using a popover to contain a form for profile editing
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Popover with Custom Positioning
          </h2>
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Show at Bottom Start</Button>
              </PopoverTrigger>
              <PopoverContent align="start" sideOffset={8}>
                <p>
                  This popover is aligned to the start and has a side offset of
                  8px.
                </p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Show at Bottom Center</Button>
              </PopoverTrigger>
              <PopoverContent align="center" sideOffset={8}>
                <p>
                  This popover is aligned to the center and has a side offset of
                  8px.
                </p>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Show at Bottom End</Button>
              </PopoverTrigger>
              <PopoverContent align="end" sideOffset={8}>
                <p>
                  This popover is aligned to the end and has a side offset of
                  8px.
                </p>
              </PopoverContent>
            </Popover>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Positioning the popover relative to the trigger element
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Popover with Icon</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Manage your preferences.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div className="mt-4 text-sm text-muted-foreground">
            Using an icon button to trigger the popover
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
