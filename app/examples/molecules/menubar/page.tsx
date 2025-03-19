import React from "react";
import { Metadata } from "next";
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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/molecules/card";
import { Check, Grid, LayoutGrid, List, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Menubar Examples - AliveUI",
  description: "Examples of the Menubar component in different use cases",
};

export default function MenubarExamplesPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Menubar Examples</h1>
        <p className="text-lg text-muted-foreground">
          Examples of the Menubar component in different use cases
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Menubar</CardTitle>
            <CardDescription>
              A standard menubar with File, Edit, and View options
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Radio and Checkbox Items</CardTitle>
            <CardDescription>
              Menubar with radio groups and checkbox items for selections
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>With Submenus</CardTitle>
            <CardDescription>
              Menubar with nested submenus for complex navigation
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Styled Menubar</CardTitle>
            <CardDescription>
              A menubar with custom styling and icons
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  <MenubarRadioGroup value="grid">
                    <MenubarRadioItem
                      value="grid"
                      className="focus:bg-primary/10 focus:text-primary"
                    >
                      <Grid className="mr-2 h-4 w-4" />
                      Grid View
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="list"
                      className="focus:bg-primary/10 focus:text-primary"
                    >
                      <List className="mr-2 h-4 w-4" />
                      List View
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
