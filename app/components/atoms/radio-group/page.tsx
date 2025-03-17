"use client";

import { useState } from "react";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { VariantDisplay } from "../../ui/component-display";

export default function RadioGroupPage() {
  const [selectedFruit, setSelectedFruit] = useState("apple");

  return (
    <VariantDisplay
      title="Radio Group"
      description="A set of checkable buttons where only one can be checked at a time."
      usage={`import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function MyRadioGroup() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
}`}
      variants={[
        {
          title: "Basic",
          description: "Basic radio group with simple options.",
          component: (
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="r1-option-one" />
                <Label htmlFor="r1-option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="r1-option-two" />
                <Label htmlFor="r1-option-two">Option Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="r1-option-three" />
                <Label htmlFor="r1-option-three">Option Three</Label>
              </div>
            </RadioGroup>
          ),
          code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>`,
        },
        {
          title: "With Descriptions",
          description: "Radio group with descriptions for each option.",
          component: (
            <RadioGroup defaultValue="comfortable" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r2-default" />
                  <Label htmlFor="r2-default">Default</Label>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  Use the default system preferences.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2-comfortable" />
                  <Label htmlFor="r2-comfortable">Comfortable</Label>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  More space between items for better readability.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r2-compact" />
                  <Label htmlFor="r2-compact">Compact</Label>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  Less space between items to show more content.
                </p>
              </div>
            </RadioGroup>
          ),
          code: `<RadioGroup defaultValue="comfortable" className="space-y-4">
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="default" id="default" />
      <Label htmlFor="default">Default</Label>
    </div>
    <p className="text-sm text-muted-foreground ml-6">
      Use the default system preferences.
    </p>
  </div>
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="comfortable" id="comfortable" />
      <Label htmlFor="comfortable">Comfortable</Label>
    </div>
    <p className="text-sm text-muted-foreground ml-6">
      More space between items for better readability.
    </p>
  </div>
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="compact" id="compact" />
      <Label htmlFor="compact">Compact</Label>
    </div>
    <p className="text-sm text-muted-foreground ml-6">
      Less space between items to show more content.
    </p>
  </div>
</RadioGroup>`,
        },
        {
          title: "Disabled",
          description: "Radio group with disabled options.",
          component: (
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="r3-option-one" />
                <Label htmlFor="r3-option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="r3-option-two"
                  disabled
                />
                <Label
                  htmlFor="r3-option-two"
                  className="text-muted-foreground"
                >
                  Option Two (Disabled)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="r3-option-three" />
                <Label htmlFor="r3-option-three">Option Three</Label>
              </div>
            </RadioGroup>
          ),
          code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" disabled />
    <Label
      htmlFor="option-two"
      className="text-muted-foreground"
    >
      Option Two (Disabled)
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>`,
        },
        {
          title: "Horizontal Layout",
          description: "Radio group with options arranged horizontally.",
          component: (
            <RadioGroup defaultValue="medium" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="r4-small" />
                <Label htmlFor="r4-small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="r4-medium" />
                <Label htmlFor="r4-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="r4-large" />
                <Label htmlFor="r4-large">Large</Label>
              </div>
            </RadioGroup>
          ),
          code: `<RadioGroup defaultValue="medium" className="flex space-x-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="small" id="small" />
    <Label htmlFor="small">Small</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="medium" id="medium" />
    <Label htmlFor="medium">Medium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="large" id="large" />
    <Label htmlFor="large">Large</Label>
  </div>
</RadioGroup>`,
        },
        {
          title: "Interactive",
          description: "Radio group with state management.",
          component: (
            <div className="space-y-4">
              <RadioGroup
                value={selectedFruit}
                onValueChange={setSelectedFruit}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="apple" id="r5-apple" />
                  <Label htmlFor="r5-apple">Apple</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="banana" id="r5-banana" />
                  <Label htmlFor="r5-banana">Banana</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="orange" id="r5-orange" />
                  <Label htmlFor="r5-orange">Orange</Label>
                </div>
              </RadioGroup>
              <div className="text-sm">
                Selected fruit:{" "}
                <span className="font-medium">{selectedFruit}</span>
              </div>
            </div>
          ),
          code: `const [selectedFruit, setSelectedFruit] = useState("apple");

<div className="space-y-4">
  <RadioGroup
    value={selectedFruit}
    onValueChange={setSelectedFruit}
    className="space-y-2"
  >
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="apple" id="apple" />
      <Label htmlFor="apple">Apple</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="banana" id="banana" />
      <Label htmlFor="banana">Banana</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="orange" id="orange" />
      <Label htmlFor="orange">Orange</Label>
    </div>
  </RadioGroup>
  <div className="text-sm">
    Selected fruit: <span className="font-medium">{selectedFruit}</span>
  </div>
</div>`,
        },
        {
          title: "Card Style",
          description: "Radio group with card-style options.",
          component: (
            <RadioGroup defaultValue="card1" className="grid grid-cols-3 gap-4">
              {["card1", "card2", "card3"].map((card) => (
                <label
                  key={card}
                  htmlFor={`r6-${card}`}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <RadioGroupItem
                    value={card}
                    id={`r6-${card}`}
                    className="sr-only"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                  <div className="text-center">
                    <div className="font-medium">{`Card ${card.slice(
                      -1
                    )}`}</div>
                    <div className="text-sm text-muted-foreground">
                      Option {card.slice(-1)}
                    </div>
                  </div>
                </label>
              ))}
            </RadioGroup>
          ),
          code: `<RadioGroup defaultValue="card1" className="grid grid-cols-3 gap-4">
  {["card1", "card2", "card3"].map((card) => (
    <label
      key={card}
      htmlFor={card}
      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
    >
      <RadioGroupItem
        value={card}
        id={card}
        className="sr-only"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-3 h-6 w-6"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
      <div className="text-center">
        <div className="font-medium">{\`Card \${card.slice(-1)}\`}</div>
        <div className="text-sm text-muted-foreground">
          Option {card.slice(-1)}
        </div>
      </div>
    </label>
  ))}
</RadioGroup>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Radio groups allow users to select a single option from a list of
            mutually exclusive options. They should be used when the user needs
            to see all available options at once.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">API Reference</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">value</code> -
                The controlled value of the radio item to check
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  defaultValue
                </code>{" "}
                - The default value for uncontrolled usage
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  onValueChange
                </code>{" "}
                - Callback when the value changes
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">disabled</code> -
                When true, prevents user from interacting with the radio items
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">required</code> -
                When true, indicates that the user must check a radio item
                before the form can be submitted
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">RadioGroupItem API</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">value</code> -
                The value for this radio item
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">disabled</code> -
                When true, prevents user from interacting with this radio item
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">required</code> -
                When true, indicates that the user must check this radio item
                before the form can be submitted
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Accessibility</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Uses native radio inputs under the hood</li>
              <li>Keyboard navigable using arrow keys</li>
              <li>
                Supports focus management and can be controlled with the
                keyboard
              </li>
              <li>Label association through id</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
