"use client";

import { useState } from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";
import { VariantDisplay } from "../../ui/component-display";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(true);

  return (
    <VariantDisplay
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      usage={`import { Checkbox } from "@/components/ui/checkbox";

export function MyCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}`}
      variants={[
        {
          title: "Basic",
          description: "Basic checkbox with label.",
          component: (
            <div className="flex items-center space-x-2">
              <Checkbox id="basic" />
              <Label htmlFor="basic">Accept terms and conditions</Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Checkbox id="basic" />
  <Label htmlFor="basic">Accept terms and conditions</Label>
</div>`,
        },
        {
          title: "Checked",
          description: "Checkbox in checked state.",
          component: (
            <div className="flex items-center space-x-2">
              <Checkbox id="checked" checked />
              <Label htmlFor="checked">Receive email notifications</Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Checkbox id="checked" checked />
  <Label htmlFor="checked">Receive email notifications</Label>
</div>`,
        },
        {
          title: "Disabled",
          description: "Checkbox in disabled state.",
          component: (
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="text-muted-foreground">
                Disabled option
              </Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled" className="text-muted-foreground">
    Disabled option
  </Label>
</div>`,
        },
        {
          title: "Disabled Checked",
          description: "Checkbox in disabled and checked state.",
          component: (
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" disabled checked />
              <Label
                htmlFor="disabled-checked"
                className="text-muted-foreground"
              >
                Disabled checked option
              </Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Checkbox id="disabled-checked" disabled checked />
  <Label htmlFor="disabled-checked" className="text-muted-foreground">
    Disabled checked option
  </Label>
</div>`,
        },
        {
          title: "Interactive",
          description: "Interactive checkbox with state management.",
          component: (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="interactive"
                checked={checked}
                onCheckedChange={(value) => setChecked(value === true)}
              />
              <Label htmlFor="interactive">
                {checked ? "Checked" : "Unchecked"} - click to toggle
              </Label>
            </div>
          ),
          code: `const [checked, setChecked] = useState(true);

<div className="flex items-center space-x-2">
  <Checkbox
    id="interactive"
    checked={checked}
    onCheckedChange={(value) => setChecked(value === true)}
  />
  <Label htmlFor="interactive">
    {checked ? "Checked" : "Unchecked"} - click to toggle
  </Label>
</div>`,
        },
        {
          title: "With Description",
          description: "Checkbox with an additional description text.",
          component: (
            <div className="grid gap-1.5">
              <div className="flex items-center space-x-2">
                <Checkbox id="with-description" />
                <Label htmlFor="with-description">Marketing emails</Label>
              </div>
              <p className="text-sm text-muted-foreground pl-6">
                Receive emails about new products, features, and more.
              </p>
            </div>
          ),
          code: `<div className="grid gap-1.5">
  <div className="flex items-center space-x-2">
    <Checkbox id="with-description" />
    <Label htmlFor="with-description">Marketing emails</Label>
  </div>
  <p className="text-sm text-muted-foreground pl-6">
    Receive emails about new products, features, and more.
  </p>
</div>`,
        },
        {
          title: "Checkbox Group",
          description: "A group of related checkboxes.",
          component: (
            <div className="grid gap-2">
              <h4 className="text-sm font-medium">Notify me about:</h4>
              <div className="grid gap-1.5">
                <div className="flex items-center space-x-2">
                  <Checkbox id="option1" />
                  <Label htmlFor="option1">New features</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option2" />
                  <Label htmlFor="option2">Product updates</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option3" />
                  <Label htmlFor="option3">Marketing emails</Label>
                </div>
              </div>
            </div>
          ),
          code: `<div className="grid gap-2">
  <h4 className="text-sm font-medium">Notify me about:</h4>
  <div className="grid gap-1.5">
    <div className="flex items-center space-x-2">
      <Checkbox id="option1" />
      <Label htmlFor="option1">New features</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="option2" />
      <Label htmlFor="option2">Product updates</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="option3" />
      <Label htmlFor="option3">Marketing emails</Label>
    </div>
  </div>
</div>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Checkboxes allow users to select multiple options from a set. They
            appear as checked when activated.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">API Reference</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">checked</code> -
                The controlled checked state
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  defaultChecked
                </code>{" "}
                - The default checked state when uncontrolled
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  onCheckedChange
                </code>{" "}
                - Event handler called when the checked state changes
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">disabled</code> -
                When true, prevents user interaction
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Accessibility</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Uses native checkbox element under the hood</li>
              <li>Supports keyboard navigation</li>
              <li>Labeled using the provided ID</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
