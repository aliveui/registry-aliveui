"use client";

import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { VariantDisplay } from "../../ui/component-display";

export default function InputPage() {
  return (
    <VariantDisplay
      title="Input"
      description="Form input element for collecting text-based data from users."
      usage={`import { Input } from "@/components/ui/input";

export function MyInput() {
  return <Input placeholder="Enter your name" />;
}`}
      variants={[
        {
          title: "Default",
          description: "Basic input with placeholder.",
          component: <Input placeholder="Email address" />,
          code: `<Input placeholder="Email address" />`,
        },
        {
          title: "With Label",
          description: "Input with associated label.",
          component: (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email address" />
            </div>
          ),
          code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email address" />
</div>`,
        },
        {
          title: "Disabled",
          description: "Input in disabled state.",
          component: <Input disabled placeholder="Disabled input" />,
          code: `<Input disabled placeholder="Disabled input" />`,
        },
        {
          title: "With Default Value",
          description: "Input with a pre-filled value.",
          component: <Input defaultValue="Default value" />,
          code: `<Input defaultValue="Default value" />`,
        },
        {
          title: "With Icon",
          description: "Input with an icon for additional context.",
          component: (
            <div className="relative w-full max-w-sm">
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
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input className="pl-10" placeholder="Search..." />
            </div>
          ),
          code: `<div className="relative w-full max-w-sm">
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
    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
  <Input className="pl-10" placeholder="Search..." />
</div>`,
        },
        {
          title: "With Description",
          description: "Input with label and description.",
          component: (
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Your username" />
              <p className="text-sm text-muted-foreground">
                This will be your public display name.
              </p>
            </div>
          ),
          code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Your username" />
  <p className="text-sm text-muted-foreground">
    This will be your public display name.
  </p>
</div>`,
        },
        {
          title: "File Input",
          description: "Input for file uploads.",
          component: (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="file">Upload file</Label>
              <Input id="file" type="file" />
            </div>
          ),
          code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="file">Upload file</Label>
  <Input id="file" type="file" />
</div>`,
        },
        {
          title: "With Error",
          description: "Input showing an error state.",
          component: (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="error-input">Email</Label>
              <Input
                id="error-input"
                placeholder="Email address"
                className="border-red-500"
              />
              <p className="text-sm text-red-500">
                Please enter a valid email address.
              </p>
            </div>
          ),
          code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="error-input">Email</Label>
  <Input
    id="error-input"
    placeholder="Email address"
    className="border-red-500"
  />
  <p className="text-sm text-red-500">Please enter a valid email address.</p>
</div>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The input component is built on top of the native HTML input element
            and supports all of its props. It provides a consistent styling and
            can be customized with additional classes.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">Input Types</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  type="text"
                </code>{" "}
                - Default input type for text
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  type="email"
                </code>{" "}
                - For email addresses
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  type="password"
                </code>{" "}
                - For password fields
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  type="number"
                </code>{" "}
                - For numeric inputs
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  type="date"
                </code>{" "}
                - For date selection
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  type="file"
                </code>{" "}
                - For file uploads
              </li>
              <li>And all other HTML input types</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
