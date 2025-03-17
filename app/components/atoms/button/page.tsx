"use client";

import { Button } from "../../../../components/ui/button";
import { VariantDisplay } from "../../ui/component-display";

export default function ButtonPage() {
  return (
    <VariantDisplay
      title="Button"
      description="Interactive button element with multiple variants and sizes."
      usage={`import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  );
}`}
      variants={[
        {
          title: "Default",
          description: "The default button style.",
          component: <Button>Default Button</Button>,
          code: `<Button>Default Button</Button>`,
        },
        {
          title: "Secondary",
          description: "For secondary actions.",
          component: <Button variant="secondary">Secondary Button</Button>,
          code: `<Button variant="secondary">Secondary Button</Button>`,
        },
        {
          title: "Destructive",
          description:
            "For actions that destroy data or trigger dangerous operations.",
          component: <Button variant="destructive">Destructive Button</Button>,
          code: `<Button variant="destructive">Destructive Button</Button>`,
        },
        {
          title: "Outline",
          description: "With a thin border and transparent background.",
          component: <Button variant="outline">Outline Button</Button>,
          code: `<Button variant="outline">Outline Button</Button>`,
        },
        {
          title: "Ghost",
          description: "Minimal button with no background or border.",
          component: <Button variant="ghost">Ghost Button</Button>,
          code: `<Button variant="ghost">Ghost Button</Button>`,
        },
        {
          title: "Link",
          description: "Styled to look like a link.",
          component: <Button variant="link">Link Button</Button>,
          code: `<Button variant="link">Link Button</Button>`,
        },
        {
          title: "Small Size",
          description: "Compact button for tight spaces.",
          component: <Button size="sm">Small Button</Button>,
          code: `<Button size="sm">Small Button</Button>`,
        },
        {
          title: "Large Size",
          description: "Larger button for emphasis.",
          component: <Button size="lg">Large Button</Button>,
          code: `<Button size="lg">Large Button</Button>`,
        },
        {
          title: "Icon Button",
          description: "Button with an icon.",
          component: (
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16 12-4-4-4 4" />
                <path d="m16 12-4 4-4-4" />
              </svg>
              With Icon
            </Button>
          ),
          code: `<Button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m16 12-4-4-4 4" />
    <path d="m16 12-4 4-4-4" />
  </svg>
  With Icon
</Button>`,
        },
        {
          title: "Disabled",
          description: "Button in disabled state.",
          component: <Button disabled>Disabled Button</Button>,
          code: `<Button disabled>Disabled Button</Button>`,
        },
        {
          title: "Loading",
          description: "Button showing a loading state.",
          component: (
            <Button disabled>
              <svg
                className="mr-2 h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Loading
            </Button>
          ),
          code: `<Button disabled>
  <svg
    className="mr-2 h-4 w-4 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
  Loading
</Button>`,
        },
        {
          title: "Block",
          description: "Full-width button.",
          component: <Button className="w-full">Block Button</Button>,
          code: `<Button className="w-full">Block Button</Button>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Buttons can be customized with different variants, sizes, and can
            include icons. They support all standard button attributes like
            disabled, type, etc.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">API Reference</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">variant</code> -
                "default" | "destructive" | "outline" | "secondary" | "ghost" |
                "link"
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">size</code> -
                "default" | "sm" | "lg" | "icon"
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">asChild</code> -
                boolean (to render as child element)
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
