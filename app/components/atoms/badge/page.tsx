"use client";

import { Badge } from "../../../../components/ui/badge";
import { VariantDisplay } from "../../ui/component-display";

export default function BadgePage() {
  return (
    <VariantDisplay
      title="Badge"
      description="Small status indicators for UI elements."
      usage={`import { Badge } from "@/components/ui/badge";

export function MyComponent() {
  return <Badge>Badge</Badge>;
}`}
      variants={[
        {
          title: "Default",
          description: "The default badge style.",
          component: <Badge>Default</Badge>,
          code: `<Badge>Default</Badge>`,
        },
        {
          title: "Secondary",
          description: "Secondary variation with muted styling.",
          component: <Badge variant="secondary">Secondary</Badge>,
          code: `<Badge variant="secondary">Secondary</Badge>`,
        },
        {
          title: "Destructive",
          description: "For errors or critical states.",
          component: <Badge variant="destructive">Destructive</Badge>,
          code: `<Badge variant="destructive">Destructive</Badge>`,
        },
        {
          title: "Outline",
          description: "Transparent background with outline.",
          component: <Badge variant="outline">Outline</Badge>,
          code: `<Badge variant="outline">Outline</Badge>`,
        },
        {
          title: "With Icon",
          description: "Badge with an icon for additional context.",
          component: (
            <Badge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              New
            </Badge>
          ),
          code: `<Badge>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-1"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
  New
</Badge>`,
        },
        {
          title: "Custom",
          description: "Custom styled badge with custom colors.",
          component: (
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
              Custom
            </Badge>
          ),
          code: `<Badge className="bg-blue-500 hover:bg-blue-600 text-white">
  Custom
</Badge>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Badges can be used to show a count, status or label. They have
            various styles and can be customized with your own classes.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">API Reference</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">variant</code> -
                "default" | "secondary" | "destructive" | "outline"
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
