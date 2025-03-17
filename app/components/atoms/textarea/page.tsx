"use client";

import { Label } from "@/registry/atoms/label";
import { Textarea } from "@/registry/atoms/textarea";
import { VariantDisplay } from "../../ui/component-display";
import { useState } from "react";

export default function TextareaPage() {
  const [value, setValue] = useState("");
  const maxLength = 100;

  return (
    <VariantDisplay
      title="Textarea"
      description="Displays a form textarea control that allows longer text input."
      usage={`import { Textarea } from "@/components/ui/textarea"`}
      variants={[
        {
          title: "Basic",
          description: "A basic textarea component with default styling.",
          component: <Textarea placeholder="Type your message here." />,
          code: `<Textarea placeholder="Type your message here." />`,
        },
        {
          title: "Disabled",
          description: "A textarea that cannot be interacted with.",
          component: (
            <Textarea disabled placeholder="This textarea is disabled." />
          ),
          code: `<Textarea disabled placeholder="This textarea is disabled." />`,
        },
        {
          title: "With Label",
          description: "A textarea with an associated label.",
          component: (
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea id="message" placeholder="Type your message here." />
            </div>
          ),
          code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`,
        },
        {
          title: "Required",
          description: "A required textarea with an asterisk in the label.",
          component: (
            <div className="grid w-full gap-1.5">
              <div className="flex items-center gap-1">
                <Label htmlFor="required-message">Your message</Label>
                <span className="text-red-500">*</span>
              </div>
              <Textarea
                id="required-message"
                placeholder="This field is required."
                required
              />
            </div>
          ),
          code: `<div className="grid w-full gap-1.5">
  <div className="flex items-center gap-1">
    <Label htmlFor="required-message">Your message</Label>
    <span className="text-red-500">*</span>
  </div>
  <Textarea 
    id="required-message" 
    placeholder="This field is required." 
    required 
  />
</div>`,
        },
        {
          title: "With Description",
          description: "A textarea with a helper text description.",
          component: (
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description-message">Your feedback</Label>
              <Textarea
                id="description-message"
                placeholder="Provide your feedback here."
              />
              <p className="text-sm text-muted-foreground">
                Your feedback helps us improve our service.
              </p>
            </div>
          ),
          code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="description-message">Your feedback</Label>
  <Textarea id="description-message" placeholder="Provide your feedback here." />
  <p className="text-sm text-muted-foreground">Your feedback helps us improve our service.</p>
</div>`,
        },
        {
          title: "Custom Size",
          description: "A textarea with custom rows and columns.",
          component: (
            <Textarea
              rows={8}
              placeholder="This textarea has 8 rows."
              className="min-h-[200px]"
            />
          ),
          code: `<Textarea rows={8} placeholder="This textarea has 8 rows." className="min-h-[200px]" />`,
        },
        {
          title: "Error State",
          description: "A textarea showing validation error styling.",
          component: (
            <div className="grid w-full gap-1.5">
              <Label htmlFor="error-message">Your message</Label>
              <Textarea
                id="error-message"
                placeholder="Type your message here."
                className="border-red-500 focus-visible:ring-red-500"
              />
              <p className="text-sm text-red-500">This field is required.</p>
            </div>
          ),
          code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="error-message">Your message</Label>
  <Textarea 
    id="error-message" 
    placeholder="Type your message here." 
    className="border-red-500 focus-visible:ring-red-500" 
  />
  <p className="text-sm text-red-500">This field is required.</p>
</div>`,
        },
        {
          title: "Interactive",
          description:
            "A textarea that manages state and displays the character count.",
          component: (
            <div className="grid w-full gap-1.5">
              <Label htmlFor="interactive-message">Your message</Label>
              <Textarea
                id="interactive-message"
                placeholder="Type your message here."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                maxLength={maxLength}
              />
              <div className="flex justify-end">
                <p className="text-sm text-muted-foreground">
                  {value.length}/{maxLength} characters
                </p>
              </div>
            </div>
          ),
          code: `import { useState } from "react"

function TextareaWithCounter() {
  const [value, setValue] = useState("")
  const maxLength = 100
  
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="interactive-message">Your message</Label>
      <Textarea 
        id="interactive-message" 
        placeholder="Type your message here." 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
      />
      <div className="flex justify-end">
        <p className="text-sm text-muted-foreground">
          {value.length}/{maxLength} characters
        </p>
      </div>
    </div>
  )
}`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Textareas allow users to input multi-line text content. They are
            commonly used in forms for comments, messages, or any text input
            that might require multiple lines.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">API Reference</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">className</code>{" "}
                - Additional CSS classes to apply
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">disabled</code> -
                Whether the textarea is disabled
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">required</code> -
                Whether the textarea is required
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  placeholder
                </code>{" "}
                - Placeholder text to display when empty
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">rows</code> -
                Number of visible text lines (default: 3)
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Accessibility</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Textareas support all standard HTML attributes for accessibility
              </li>
              <li>
                Ensure textareas have associated labels using the for/id pattern
              </li>
              <li>
                Consider using aria-describedby for error messages or
                descriptions
              </li>
              <li>
                Disabled textareas should include the disabled attribute for
                screen readers
              </li>
              <li>
                Required textareas should include the required attribute for
                validation
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
