"use client";

import * as React from "react";
import Link from "next/link";
import { Input } from "../registry/atoms/input";
import { cn } from "../registry/lib/utils";
import { atomicDesignCategories } from "./sidebar";

interface ComponentExplorerProps extends React.HTMLAttributes<HTMLDivElement> {
  activeHref?: string;
}

type ComponentItem = {
  href: string;
  title: string;
  category: string;
};

export function ComponentExplorer({
  className,
  activeHref,
  ...props
}: ComponentExplorerProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  // Flatten all components into a single array for easier searching
  const allComponents: ComponentItem[] = React.useMemo(() => {
    return atomicDesignCategories
      .flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: category.category,
        }))
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  // Filter components based on search query
  const filteredComponents = React.useMemo(() => {
    if (!searchQuery) return allComponents;

    const query = searchQuery.toLowerCase();
    return allComponents.filter(
      (component) =>
        component.title.toLowerCase().includes(query) ||
        component.category.toLowerCase().includes(query)
    );
  }, [allComponents, searchQuery]);

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="sticky top-0 pb-4 bg-background">
        <Input
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          className="w-full"
        />
      </div>

      <div className="grid grid-flow-row auto-rows-max space-y-2">
        {filteredComponents.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className={cn(
              "flex justify-between items-center rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground",
              component.href === activeHref
                ? "bg-accent text-accent-foreground"
                : "transparent"
            )}
          >
            <span className="font-medium">{component.title}</span>
            <span className="text-xs text-muted-foreground">
              {component.category}
            </span>
          </Link>
        ))}

        {filteredComponents.length === 0 && (
          <div className="p-4 text-sm text-muted-foreground text-center">
            No components found.
          </div>
        )}
      </div>
    </div>
  );
}
