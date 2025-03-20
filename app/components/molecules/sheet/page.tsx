"use client";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Settings, ShoppingCart, UserPlus, Menu, X, Users } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/registry/molecules";
import { Button, Input, Label, Separator, Textarea } from "@/registry/atoms";

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
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Sheet</h2>
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
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="John Doe"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@johndoe"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <div className="mt-4 text-sm text-muted-foreground">
            A simple sheet with basic content and form elements
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Sheets from Different Sides
          </h2>
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Top Sheet</Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-1/3">
                <SheetHeader>
                  <SheetTitle>Top Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides down from the top of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p>
                    Top sheets are useful for notifications, alerts, or global
                    actions.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Right Sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the right side of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p>
                    Right sheets are commonly used for settings panels or
                    supplementary information.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Bottom Sheet</Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-1/3">
                <SheetHeader>
                  <SheetTitle>Bottom Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides up from the bottom of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p>
                    Bottom sheets are great for mobile interactions and quick
                    actions.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Left Sheet</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the left side of the screen.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p>
                    Left sheets are perfect for navigation menus or contextual
                    actions.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Opening sheets from different edges of the screen
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Sheet with Form</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Create New Task
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md">
              <SheetHeader>
                <SheetTitle>New Task</SheetTitle>
                <SheetDescription>
                  Add a new task to your task list. Fill out the information
                  below.
                </SheetDescription>
              </SheetHeader>
              <form className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Task Title</Label>
                  <Input id="title" placeholder="Enter task title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter task description"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" />
                </div>
                <SheetFooter className="pt-4">
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <Button type="submit">Create Task</Button>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>
          <div className="mt-4 text-sm text-muted-foreground">
            Using a sheet to display a form for user input
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
