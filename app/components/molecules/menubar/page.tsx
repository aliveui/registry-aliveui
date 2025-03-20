"use client";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Check, Grid, LayoutGrid, List, Settings } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarLabel,
} from "@/registry/molecules";

export const metadata: Metadata = {
  title: "Menubar Component - AliveUI",
  description: "A horizontal menu system for navigation and commands",
};

export default function MenubarPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Menubar</h1>
        <p className="text-lg text-muted-foreground">
          A horizontal menu system commonly used in application headers,
          offering dropdown menus with various item types and keyboard
          navigation.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Menubar component is a molecule in the AliveUI component
            library. It provides a horizontal menu system commonly used in
            application headers.
          </p>
          <p className="mb-4">
            It's built on top of Radix UI's Menubar primitive, providing a
            robust and accessible implementation with keyboard navigation,
            submenus, and support for shortcuts.
          </p>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Menubar</h2>
          <div>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Open <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Save <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Cut <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>Show Toolbar</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Show Statusbar
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Reset Zoom <MenubarShortcut>⌘0</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            A standard menubar with File, Edit, and View options
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            With Radio and Checkbox Items
          </h2>
          <div>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Options</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Theme</MenubarLabel>
                  <MenubarRadioGroup value="light">
                    <MenubarRadioItem value="light">Light</MenubarRadioItem>
                    <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                    <MenubarRadioItem value="system">System</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarLabel>View Options</MenubarLabel>
                  <MenubarCheckboxItem checked>
                    Show Line Numbers
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>Word Wrap</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Minimap</MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Layout</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="grid">
                    <MenubarRadioItem value="grid">
                      <LayoutGrid className="mr-2 h-4 w-4" />
                      <span>Grid</span>
                    </MenubarRadioItem>
                    <MenubarRadioItem value="list">
                      <List className="mr-2 h-4 w-4" />
                      <span>List</span>
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Menubar with radio groups and checkbox items for selections
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">With Submenus</h2>
          <div>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Insert</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Text</MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Shape</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Rectangle</MenubarItem>
                      <MenubarItem>Circle</MenubarItem>
                      <MenubarItem>Triangle</MenubarItem>
                      <MenubarItem>Line</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>Media</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Image</MenubarItem>
                      <MenubarItem>Video</MenubarItem>
                      <MenubarSub>
                        <MenubarSubTrigger>Audio</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>From File</MenubarItem>
                          <MenubarItem>Record</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Comment</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <Settings className="h-4 w-4 mr-1" />
                  Settings
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarGroup>
                    <MenubarLabel>Preferences</MenubarLabel>
                    <MenubarItem>Profile</MenubarItem>
                    <MenubarItem>Notifications</MenubarItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarLabel>System</MenubarLabel>
                    <MenubarItem>Updates</MenubarItem>
                    <MenubarItem>About</MenubarItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Menubar with nested submenus for complex navigation
          </div>
        </div>

        <div className="border rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Custom Styled Menubar</h2>
          <div>
            <Menubar className="border-primary bg-primary/5">
              <MenubarMenu>
                <MenubarTrigger className="text-primary font-medium">
                  Actions
                </MenubarTrigger>
                <MenubarContent className="border-primary">
                  <MenubarItem className="focus:bg-primary/10 focus:text-primary">
                    <Check className="mr-2 h-4 w-4" />
                    Confirm
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="focus:bg-primary/10 focus:text-primary">
                    Cancel
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-primary font-medium">
                  Display
                </MenubarTrigger>
                <MenubarContent className="border-primary">
                  <MenubarItem className="focus:bg-primary/10 focus:text-primary">
                    Large
                  </MenubarItem>
                  <MenubarItem className="focus:bg-primary/10 focus:text-primary">
                    Small
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            A menubar with custom styling and icons
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/menubar"
              className="text-primary hover:underline"
            >
              Menubar documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
