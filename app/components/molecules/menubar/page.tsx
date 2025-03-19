import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
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
          <div className="flex items-center mt-6">
            <Link
              href="/examples/molecules/menubar"
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
              <h3 className="text-lg font-medium mb-3">Simple Menubar</h3>
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
                    <MenubarItem>
                      Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
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
