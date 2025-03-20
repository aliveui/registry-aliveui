"use client";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Music,
  Image,
  Video,
  Settings,
  Users,
  Bell,
  Calendar,
  Mail,
  PenTool,
  LayoutGrid,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/molecules";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/molecules/card";
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
} from "@/registry/atoms";

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
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Tabs</h2>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
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
                    Change your password here. After saving, you'll be logged
                    out.
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
          <div className="mt-4 text-sm text-muted-foreground">
            A simple tabs interface with form content
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Tabs with Icons</h2>
          <Tabs defaultValue="music" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="music">
                <Music className="mr-2 h-4 w-4" />
                Music
              </TabsTrigger>
              <TabsTrigger value="photos">
                <Image className="mr-2 h-4 w-4" />
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos">
                <Video className="mr-2 h-4 w-4" />
                Videos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="music">
              <Card>
                <CardHeader>
                  <CardTitle>Music</CardTitle>
                  <CardDescription>
                    View and manage your music collection.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Dreams</p>
                        <p className="text-sm text-muted-foreground">
                          Fleetwood Mac
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Play
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Bohemian Rhapsody</p>
                        <p className="text-sm text-muted-foreground">Queen</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Play
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Imagine</p>
                        <p className="text-sm text-muted-foreground">
                          John Lennon
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Play
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="photos">
              <Card>
                <CardHeader>
                  <CardTitle>Photos</CardTitle>
                  <CardDescription>Browse your photo gallery.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square bg-muted rounded-md"></div>
                    <div className="aspect-square bg-muted rounded-md"></div>
                    <div className="aspect-square bg-muted rounded-md"></div>
                    <div className="aspect-square bg-muted rounded-md"></div>
                    <div className="aspect-square bg-muted rounded-md"></div>
                    <div className="aspect-square bg-muted rounded-md"></div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="videos">
              <Card>
                <CardHeader>
                  <CardTitle>Videos</CardTitle>
                  <CardDescription>Manage your video library.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="aspect-video w-32 bg-muted rounded-md"></div>
                      <div>
                        <p className="font-medium">Trip to Mountains</p>
                        <p className="text-sm text-muted-foreground">
                          10:25 • May 12, 2023
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="aspect-video w-32 bg-muted rounded-md"></div>
                      <div>
                        <p className="font-medium">Beach Vacation</p>
                        <p className="text-sm text-muted-foreground">
                          5:18 • Jun 18, 2023
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="aspect-video w-32 bg-muted rounded-md"></div>
                      <div>
                        <p className="font-medium">City Exploring</p>
                        <p className="text-sm text-muted-foreground">
                          7:42 • Jul 24, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-sm text-muted-foreground">
            Using icons to enhance the visual representation of tabs
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Vertical Tabs</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <Tabs
              defaultValue="profile"
              orientation="vertical"
              className="w-full"
            >
              <TabsList className="flex flex-col h-full w-48 bg-muted">
                <TabsTrigger value="profile" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="display" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Display
                </TabsTrigger>
              </TabsList>
              <div className="flex-1">
                <TabsContent value="profile" className="p-4">
                  <h3 className="text-lg font-medium mb-2">Profile Settings</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input defaultValue="Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input defaultValue="jane.smith@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label>Bio</Label>
                      <Input defaultValue="Product designer at Company Inc." />
                    </div>
                    <Button>Save Profile</Button>
                  </div>
                </TabsContent>
                <TabsContent value="notifications" className="p-4">
                  <h3 className="text-lg font-medium mb-2">
                    Notification Preferences
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications on your device
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Digest</Label>
                        <p className="text-sm text-muted-foreground">
                          Get a weekly summary of activity
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="display" className="p-4">
                  <h3 className="text-lg font-medium mb-2">Display Settings</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select defaultValue="system">
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Density</Label>
                      <Select defaultValue="default">
                        <SelectTrigger>
                          <SelectValue placeholder="Select density" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compact">Compact</SelectItem>
                          <SelectItem value="default">Default</SelectItem>
                          <SelectItem value="comfortable">
                            Comfortable
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Vertical tabs for navigation-heavy interfaces like settings panels
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
