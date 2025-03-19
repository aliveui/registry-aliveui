import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/molecules";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/molecules/card";
import { Button, Input, Label } from "@/registry/atoms";

export const metadata: Metadata = {
  title: "Tabs Component - AliveUI",
  description:
    "A tabbed interface for switching between different sections of content",
};

export default function TabsPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          A tabbed interface for switching between different sections of
          content, allowing users to navigate through multiple panes within a
          compact space.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Tabs component is a molecule in the AliveUI component library.
            It provides an intuitive way to organize and navigate between
            different sections of related content without requiring users to
            navigate to different pages.
          </p>
          <p className="mb-4">
            Built on top of Radix UI's Tabs primitive, it ensures accessibility
            with proper keyboard navigation and ARIA attributes. The component
            is ideal for settings pages, dashboard panels, and any interface
            where you need to present multiple sections of content in a limited
            space.
          </p>
          <div className="flex items-center mt-6">
            <Link
              href="/examples/molecules/tabs"
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
              <h3 className="text-lg font-medium mb-3">Simple Tabs</h3>
              <Tabs defaultValue="account" className="w-full max-w-[600px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when
                        you're done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@johndoe" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you'll be
                        logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/tabs"
              className="text-primary hover:underline"
            >
              Tabs documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
