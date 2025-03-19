import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/registry/molecules";
import { Button } from "@/registry/atoms";

export const metadata: Metadata = {
  title: "Toast Component - AliveUI",
  description:
    "A brief, non-intrusive notification that appears at the edge of the screen",
};

export default function ToastPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Toast</h1>
        <p className="text-lg text-muted-foreground">
          A brief, non-intrusive notification that appears at the edge of the
          screen to provide feedback about an operation.
        </p>
      </div>

      <div className="grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            The Toast component is a molecule in the AliveUI component library.
            It provides a way to show brief, non-intrusive notifications to the
            user. Toasts are typically used to provide feedback about an
            operation, such as confirming that a message was sent, a file was
            uploaded, or a settings change was saved.
          </p>
          <p className="mb-4">
            Built on top of Radix UI's Toast primitive, it ensures accessibility
            with proper ARIA attributes and keyboard interactions. The component
            is highly customizable, with support for different variants, custom
            actions, and programmatic control.
          </p>
          <div className="flex items-center mt-6">
            <Link
              href="/examples/molecules/toast"
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
              <h3 className="text-lg font-medium mb-3">Simple Toast</h3>
              <p className="mb-4">
                Click the button below to show a simple toast notification.
              </p>
              <ToastDemo />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documentation</h2>
          <p>
            For detailed documentation, refer to the{" "}
            <Link
              href="/docs/component-docs/toast"
              className="text-primary hover:underline"
            >
              Toast documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Notification",
          description: "This is a toast notification example",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
