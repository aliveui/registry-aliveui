import React from "react";
import { Metadata } from "next";
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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/molecules/card";
import { Button, Input, Label, Separator, Textarea } from "@/registry/atoms";
import { Settings, ShoppingCart, UserPlus, Menu, X, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sheet Examples - AliveUI",
  description: "Examples of the Sheet component in different use cases",
};

export default function SheetExamplesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Sheet Examples</h1>
        <p className="text-lg text-muted-foreground">
          Examples of the Sheet component in different use cases
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Sheet</CardTitle>
            <CardDescription>A simple sheet with basic content</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sheets from Different Sides</CardTitle>
            <CardDescription>
              Opening sheets from different edges of the screen
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sheet with Form</CardTitle>
            <CardDescription>
              Using a sheet to display a form for user input
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Details Sheet</CardTitle>
            <CardDescription>
              A sheet displaying detailed information with sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">View Product Details</Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Product Details</SheetTitle>
                  <SheetDescription>
                    View complete information about this product.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-md font-medium">Basic Information</h3>
                    <Separator />
                  </div>
                  <dl className="grid grid-cols-4 gap-2 text-sm">
                    <dt className="col-span-1 font-medium">Name:</dt>
                    <dd className="col-span-3">Premium Headphones</dd>
                    <dt className="col-span-1 font-medium">SKU:</dt>
                    <dd className="col-span-3">HD-12345-BLK</dd>
                    <dt className="col-span-1 font-medium">Price:</dt>
                    <dd className="col-span-3">$299.99</dd>
                  </dl>
                </div>
                <div className="py-4">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-md font-medium">
                      Technical Specifications
                    </h3>
                    <Separator />
                  </div>
                  <dl className="grid grid-cols-4 gap-2 text-sm">
                    <dt className="col-span-1 font-medium">Type:</dt>
                    <dd className="col-span-3">Over-ear headphones</dd>
                    <dt className="col-span-1 font-medium">Connectivity:</dt>
                    <dd className="col-span-3">Bluetooth 5.0, 3.5mm jack</dd>
                    <dt className="col-span-1 font-medium">Battery:</dt>
                    <dd className="col-span-3">Up to 30 hours playtime</dd>
                  </dl>
                </div>
                <SheetFooter>
                  <Button>Add to Cart</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mobile Navigation</CardTitle>
            <CardDescription>
              A common pattern for mobile navigation using a sheet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <nav className="flex flex-col space-y-1">
                    <a
                      href="#"
                      className="rounded-md px-2 py-2 hover:bg-accent text-sm font-medium"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-2 py-2 hover:bg-accent text-sm font-medium"
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-2 py-2 hover:bg-accent text-sm font-medium"
                    >
                      Customers
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-2 py-2 hover:bg-accent text-sm font-medium"
                    >
                      Orders
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-2 py-2 hover:bg-accent text-sm font-medium"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-2 py-2 hover:bg-accent text-sm font-medium"
                    >
                      Settings
                    </a>
                  </nav>
                </div>
                <SheetFooter className="mt-auto">
                  <p className="text-xs text-muted-foreground">
                    &copy; 2023 AliveUI Inc.
                  </p>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shopping Cart</CardTitle>
            <CardDescription>
              A sheet used as a shopping cart overlay
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  View Cart (3)
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    You have 3 items in your cart
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-secondary" />
                      <div>
                        <p className="text-sm font-medium">
                          Premium Headphones
                        </p>
                        <p className="text-sm text-muted-foreground">
                          1 × $299.99
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-secondary" />
                      <div>
                        <p className="text-sm font-medium">Wireless Mouse</p>
                        <p className="text-sm text-muted-foreground">
                          1 × $59.99
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-secondary" />
                      <div>
                        <p className="text-sm font-medium">
                          Mechanical Keyboard
                        </p>
                        <p className="text-sm text-muted-foreground">
                          1 × $129.99
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-medium">$489.97</span>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </SheetClose>
                    <Button className="w-full">Checkout</Button>
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
