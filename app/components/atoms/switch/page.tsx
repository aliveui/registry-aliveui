"use client";

import { useState } from "react";
import { Switch } from "../../../../components/ui/switch";
import { Label } from "../../../../components/ui/label";
import { VariantDisplay } from "../../ui/component-display";

export default function SwitchPage() {
  const [checked, setChecked] = useState(false);

  return (
    <VariantDisplay
      title="Switch"
      description="A control that allows users to toggle between checked and not checked states."
      usage={`import { Switch } from "@/components/ui/switch";

export function MySwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`}
      variants={[
        {
          title: "Basic",
          description: "Basic switch with label.",
          component: (
            <div className="flex items-center space-x-2">
              <Switch id="basic" />
              <Label htmlFor="basic">Airplane Mode</Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Switch id="basic" />
  <Label htmlFor="basic">Airplane Mode</Label>
</div>`,
        },
        {
          title: "Checked",
          description: "Switch in checked state.",
          component: (
            <div className="flex items-center space-x-2">
              <Switch id="checked" checked />
              <Label htmlFor="checked">Bluetooth</Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Switch id="checked" checked />
  <Label htmlFor="checked">Bluetooth</Label>
</div>`,
        },
        {
          title: "Disabled",
          description: "Switch in disabled state.",
          component: (
            <div className="flex items-center space-x-2">
              <Switch id="disabled" disabled />
              <Label htmlFor="disabled" className="text-muted-foreground">
                Wi-Fi (Disabled)
              </Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Switch id="disabled" disabled />
  <Label htmlFor="disabled" className="text-muted-foreground">
    Wi-Fi (Disabled)
  </Label>
</div>`,
        },
        {
          title: "Disabled Checked",
          description: "Switch in disabled and checked state.",
          component: (
            <div className="flex items-center space-x-2">
              <Switch id="disabled-checked" disabled checked />
              <Label
                htmlFor="disabled-checked"
                className="text-muted-foreground"
              >
                Bluetooth (Disabled, On)
              </Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Switch id="disabled-checked" disabled checked />
  <Label htmlFor="disabled-checked" className="text-muted-foreground">
    Bluetooth (Disabled, On)
  </Label>
</div>`,
        },
        {
          title: "Interactive",
          description: "Interactive switch with state management.",
          component: (
            <div className="flex items-center space-x-2">
              <Switch
                id="interactive"
                checked={checked}
                onCheckedChange={setChecked}
              />
              <Label htmlFor="interactive">
                {checked ? "On" : "Off"} - click to toggle
              </Label>
            </div>
          ),
          code: `const [checked, setChecked] = useState(false);

<div className="flex items-center space-x-2">
  <Switch
    id="interactive"
    checked={checked}
    onCheckedChange={setChecked}
  />
  <Label htmlFor="interactive">
    {checked ? "On" : "Off"} - click to toggle
  </Label>
</div>`,
        },
        {
          title: "With Description",
          description: "Switch with additional description text.",
          component: (
            <div className="grid gap-1.5">
              <div className="flex items-center space-x-2">
                <Switch id="with-description" />
                <Label htmlFor="with-description">Automatic updates</Label>
              </div>
              <p className="text-sm text-muted-foreground pl-10">
                Automatically download and install updates when available.
              </p>
            </div>
          ),
          code: `<div className="grid gap-1.5">
  <div className="flex items-center space-x-2">
    <Switch id="with-description" />
    <Label htmlFor="with-description">Automatic updates</Label>
  </div>
  <p className="text-sm text-muted-foreground pl-10">
    Automatically download and install updates when available.
  </p>
</div>`,
        },
        {
          title: "Switch Group",
          description: "A group of related switches.",
          component: (
            <div className="grid gap-2">
              <h4 className="text-sm font-medium">Notifications</h4>
              <div className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <Switch id="option1" defaultChecked />
                  <Label htmlFor="option1">Email notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="option2" />
                  <Label htmlFor="option2">Push notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="option3" />
                  <Label htmlFor="option3">SMS notifications</Label>
                </div>
              </div>
            </div>
          ),
          code: `<div className="grid gap-2">
  <h4 className="text-sm font-medium">Notifications</h4>
  <div className="grid gap-2">
    <div className="flex items-center space-x-2">
      <Switch id="option1" defaultChecked />
      <Label htmlFor="option1">Email notifications</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Switch id="option2" />
      <Label htmlFor="option2">Push notifications</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Switch id="option3" />
      <Label htmlFor="option3">SMS notifications</Label>
    </div>
  </div>
</div>`,
        },
        {
          title: "Custom Size",
          description: "Switch with custom size.",
          component: (
            <div className="flex items-center space-x-2">
              <Switch id="custom-size" className="h-[30px] w-[54px]" />
              <Label htmlFor="custom-size">Custom size switch</Label>
            </div>
          ),
          code: `<div className="flex items-center space-x-2">
  <Switch id="custom-size" className="h-[30px] w-[54px]" />
  <Label htmlFor="custom-size">Custom size switch</Label>
</div>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Switches allow users to toggle between a checked and not checked
            state. They are commonly used for binary settings like on/off,
            enable/disable.
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
              <li>Uses the native checkbox element under the hood</li>
              <li>Supports keyboard navigation</li>
              <li>When focussed, can be toggled using the Space key</li>
              <li>Labeled using the provided ID</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
