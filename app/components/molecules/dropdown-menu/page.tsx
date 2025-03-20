"use client";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  User,
  CreditCard,
  Settings,
  LogOut,
  Cloud,
  LifeBuoy,
  Shield,
  FileText,
  Save,
  Printer,
  FileUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
} from "@/registry/molecules";
import { Button } from "@/registry/atoms";

export const metadata: Metadata = {
  title: "Dropdown Menu Component - AliveUI",
  description: "A contextual menu for displaying options",
};

export default function DropdownMenuPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Dropdown Menu</h1>
        <p className="text-lg text-muted-foreground">
          A contextual menu for displaying a list of actions or options.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Dropdown Menu component is a molecule in the AliveUI component
            library. It provides a contextual menu that appears when a user
            interacts with a trigger element, displaying a list of actionable
            items.
          </p>
          <p className="mb-4">
            It's built on top of Radix UI's Dropdown Menu primitive, providing a
            robust and accessible dropdown implementation with features like
            keyboard navigation, submenu support, and checkbox/radio selection.
          </p>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Dropdown Menu</h2>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>New File</DropdownMenuItem>
                <DropdownMenuItem>New Folder</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            A simple dropdown menu with basic options.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Dropdown with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">My Account</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Enhance visual cues with icons alongside menu items.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Dropdown with Shortcuts
          </h2>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Logout
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Display keyboard shortcuts for power users.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Dropdown with Submenu</h2>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Edit</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Cut</DropdownMenuItem>
                <DropdownMenuItem>Copy</DropdownMenuItem>
                <DropdownMenuItem>Paste</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>More Options</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Save className="mr-2 h-4 w-4" />
                      <span>Save As...</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileUp className="mr-2 h-4 w-4" />
                      <span>Export</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Printer className="mr-2 h-4 w-4" />
                      <span>Print</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Create hierarchical menus with submenu support.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Dropdown with Checkbox Items
          </h2>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">View Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Allow multi-selection with checkbox items.
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Dropdown with Radio Items
          </h2>
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Panel Position</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="bottom">
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="left">
                    Left
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Enable single-selection from a list of options with radio items.
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/dropdown-menu"
              className="text-primary hover:underline"
            >
              Dropdown Menu documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
