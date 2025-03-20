import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/registry/molecules";
import { Button } from "@/registry/atoms";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/registry/molecules";

export const metadata: Metadata = {
  title: "Command",
  description: "Command component for filtering and selecting items.",
};

export default function CommandPage() {
  return (
    <div className="space-y-6 py-8 md:py-12">
      <section className="w-full space-y-3">
        <h1 className="text-3xl font-bold">Command</h1>
        <p className="text-muted-foreground">
          A command menu for displaying command options with filtering
          capability.
        </p>
      </section>

      <section className="w-full space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <Card className="p-6">
          <p className="mb-4">
            The Command component offers a quick way to provide keyboard
            accessible commands and search functionality to your application.
            It's ideal for:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>Command palettes for quick navigation</li>
            <li>Searchable dropdown menus</li>
            <li>Advanced filtering interfaces</li>
            <li>Keyboard-first user experiences</li>
          </ul>
          <p>
            Based on{" "}
            <Link
              href="https://cmdk.paco.me/"
              className="text-primary hover:underline"
              target="_blank"
            >
              cmdk
            </Link>{" "}
            by Paco Coursey, this component provides a flexible foundation for
            building command interfaces.
          </p>
        </Card>
      </section>

      <section className="w-full space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium">Example Command Menu</h3>

          <div className="mb-8 flex flex-col gap-4">
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <span>Calendar</span>
                    <CommandShortcut>⌘C</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <span>Search</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <span>Settings</span>
                    <CommandShortcut>⌘,</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Recent">
                  <CommandItem>
                    <span>Profile</span>
                  </CommandItem>
                  <CommandItem>
                    <span>Billing</span>
                  </CommandItem>
                  <CommandItem>
                    <span>Support</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>

          <div className="mb-4">
            <h3 className="mb-3 text-lg font-medium">Implementation</h3>
            <pre className="rounded-lg bg-muted p-4">
              <code className="break-words text-sm">
                {`import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/registry/molecules";

export function CommandExample() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Search</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Recent">
          <CommandItem>
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <span>Billing</span>
          </CommandItem>
          <CommandItem>
            <span>Support</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`}
              </code>
            </pre>
          </div>
        </Card>
      </section>

      <section className="w-full space-y-4">
        <h2 className="text-2xl font-semibold">Documentation</h2>
        <Card className="p-6">
          <p className="mb-4">
            For detailed documentation on the Command component, including API
            reference, examples, and implementation details:
          </p>
          <div>
            <Link href="/docs/component-docs/command">
              <Button>
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
