import React from "react";
import { Metadata } from "next";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/molecules";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/molecules/card";
import { Button, Input, Label, Checkbox } from "@/registry/atoms";
import { Settings, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Popover Examples - AliveUI",
  description: "Examples of the Popover component in different use cases",
};

export default function PopoverExamplesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Popover Examples</h1>
        <p className="text-lg text-muted-foreground">
          Examples of the Popover component in different use cases
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Popover</CardTitle>
            <CardDescription>
              A simple popover with dimensions information
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popover with Form</CardTitle>
            <CardDescription>
              Using a popover to contain a form for profile editing
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popover with Custom Positioning</CardTitle>
            <CardDescription>
              Positioning the popover relative to the trigger element
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popover with Icon</CardTitle>
            <CardDescription>
              Using an icon button to trigger the popover
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                      <Label htmlFor="notifications">
                        Enable notifications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" defaultChecked />
                      <Label htmlFor="newsletter">
                        Subscribe to newsletter
                      </Label>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Styled Popover</CardTitle>
            <CardDescription>A popover with custom styling</CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-primary-foreground text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Custom Styled
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-primary text-primary-foreground border-primary">
                <div className="space-y-2">
                  <h4 className="font-medium">Custom Styled Popover</h4>
                  <p className="opacity-90 text-sm">
                    This popover has custom styling applied to match your brand
                    colors.
                  </p>
                  <div className="pt-2">
                    <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                      Action Button
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
