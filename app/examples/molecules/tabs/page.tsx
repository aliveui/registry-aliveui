import React from "react";
import { Metadata } from "next";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/molecules";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
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
  Textarea,
} from "@/registry/atoms";
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

export const metadata: Metadata = {
  title: "Tabs Examples - AliveUI",
  description: "Examples of the Tabs component in different use cases",
};

export default function TabsExamplesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Tabs Examples</h1>
        <p className="text-lg text-muted-foreground">
          Examples of the Tabs component in different use cases
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Tabs</CardTitle>
            <CardDescription>
              A simple tabs interface with form content
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs with Icons</CardTitle>
            <CardDescription>
              Using icons to enhance the visual representation of tabs
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                    <CardDescription>
                      Browse your photo gallery.
                    </CardDescription>
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
                    <CardDescription>
                      Manage your video library.
                    </CardDescription>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Responsive Tabs</CardTitle>
            <CardDescription>
              Tabs that adapt to different screen sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="tab1" className="flex-1 sm:flex-none">
                  Tab 1
                </TabsTrigger>
                <TabsTrigger value="tab2" className="flex-1 sm:flex-none">
                  Tab 2
                </TabsTrigger>
                <TabsTrigger value="tab3" className="flex-1 sm:flex-none">
                  Tab 3
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <div className="p-4 rounded-md border mt-4">
                  <h3 className="text-lg font-medium">Tab 1 Content</h3>
                  <p className="mt-2">
                    This content is displayed when Tab 1 is active. It will
                    resize based on the screen size due to the responsive
                    classes applied to the TabsList and TabsTrigger components.
                  </p>
                  <p className="mt-2">
                    On mobile, the tabs will take up the full width, while on
                    larger screens they will adjust to their content width.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="tab2">
                <div className="p-4 rounded-md border mt-4">
                  <h3 className="text-lg font-medium">Tab 2 Content</h3>
                  <p className="mt-2">
                    This is the content for Tab 2. The responsive layout ensures
                    that the tabs are usable on all device sizes.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="tab3">
                <div className="p-4 rounded-md border mt-4">
                  <h3 className="text-lg font-medium">Tab 3 Content</h3>
                  <p className="mt-2">
                    Tab 3 content area. The tabs adapt to both small and large
                    screens.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings Panel</CardTitle>
            <CardDescription>
              A comprehensive settings interface using tabs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="general">
                  <TabsList className="mb-4">
                    <TabsTrigger value="general">
                      <Settings className="mr-2 h-4 w-4" />
                      General
                    </TabsTrigger>
                    <TabsTrigger value="privacy">
                      <Users className="mr-2 h-4 w-4" />
                      Privacy
                    </TabsTrigger>
                    <TabsTrigger value="notifications">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="general">
                    <div className="space-y-4 py-2">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select>
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                            <SelectItem value="de">German</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="theme">Theme</Label>
                        <Select>
                          <SelectTrigger id="theme">
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="privacy">
                    <div className="space-y-4 py-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="public-profile">Public Profile</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow others to see your profile
                          </p>
                        </div>
                        <Switch id="public-profile" />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-email">Show Email</Label>
                          <p className="text-sm text-muted-foreground">
                            Display your email to other users
                          </p>
                        </div>
                        <Switch id="show-email" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="notifications">
                    <div className="space-y-4 py-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">
                            Email Notifications
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Receive emails about your account activity
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-notifications">
                            Push Notifications
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Receive push notifications on your devices
                          </p>
                        </div>
                        <Switch id="push-notifications" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dashboard Layout</CardTitle>
            <CardDescription>
              Using tabs to organize dashboard content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <PenTool className="mr-2 h-4 w-4" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="messages">
                  <Mail className="mr-2 h-4 w-4" />
                  Messages
                </TabsTrigger>
                <TabsTrigger value="calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Revenue
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Subscriptions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                          +180.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Sales
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                          +19% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Active Users
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                          +201 since last hour
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <div className="p-4 rounded-md border mt-4">
                  <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                  <p className="mt-2">
                    View detailed analytics about your application performance
                    and user behavior.
                  </p>
                  <div className="h-64 mt-4 bg-muted rounded-md flex items-center justify-center">
                    Analytics Chart Placeholder
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="messages">
                <div className="p-4 rounded-md border mt-4">
                  <h3 className="text-lg font-medium">Messages</h3>
                  <p className="mt-2">
                    Manage your communications and conversations.
                  </p>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center gap-4 p-3 rounded-md bg-muted">
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                      <div>
                        <p className="font-medium">Jane Cooper</p>
                        <p className="text-sm text-muted-foreground">
                          Hi there! Just checking in on the project status.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-md bg-muted">
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                      <div>
                        <p className="font-medium">Mike Johnson</p>
                        <p className="text-sm text-muted-foreground">
                          Can we schedule a call tomorrow to discuss the
                          roadmap?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="calendar">
                <div className="p-4 rounded-md border mt-4">
                  <h3 className="text-lg font-medium">Calendar</h3>
                  <p className="mt-2">
                    Track your schedule and upcoming events.
                  </p>
                  <div className="h-64 mt-4 bg-muted rounded-md flex items-center justify-center">
                    Calendar View Placeholder
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
