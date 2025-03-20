"use client";

import React from "react";
import Link from "next/link";
import { useToast, ToastAction, Toaster } from "@/registry/molecules";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/molecules/card";
import { Button } from "@/registry/atoms";
import { Check, Download, RefreshCw, AlertTriangle, Info } from "lucide-react";

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
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Examples</h2>
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Toast</CardTitle>
                <CardDescription>
                  A simple toast notification with a title and description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BasicToastExample />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Variants</CardTitle>
                <CardDescription>
                  Different variants of toast notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <ToastVariantsExample />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast with Action</CardTitle>
                <CardDescription>
                  Toast notifications with actionable buttons
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <ToastWithActionExample />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast with Custom Duration</CardTitle>
                <CardDescription>
                  Control how long a toast appears on screen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToastWithDurationExample />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast with Icons</CardTitle>
                <CardDescription>
                  Adding visual context with icons
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <ToastWithIconsExample />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programmatic Dismissal</CardTitle>
                <CardDescription>
                  Controlling toasts programmatically
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProgrammaticDismissalExample />
              </CardContent>
            </Card>
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

      {/* This Toaster component is required for the examples to work */}
      <Toaster />
    </div>
  );
}

function BasicToastExample() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Notification",
          description: "This is a basic toast notification example",
        });
      }}
    >
      Show Basic Toast
    </Button>
  );
}

function ToastVariantsExample() {
  const { toast } = useToast();

  return (
    <>
      <Button
        variant="default"
        onClick={() => {
          toast({
            title: "Default Toast",
            description: "This is the default toast style",
          });
        }}
      >
        Default Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
        }}
      >
        Destructive Toast
      </Button>
    </>
  );
}

function ToastWithActionExample() {
  const { toast } = useToast();

  return (
    <>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Undo Action",
            description: "Your message has been deleted.",
            action: (
              <ToastAction altText="Undo message deletion">Undo</ToastAction>
            ),
          });
        }}
      >
        Undo Action
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to save changes.",
            action: <ToastAction altText="Try again">Try Again</ToastAction>,
          });
        }}
      >
        Error with Action
      </Button>
    </>
  );
}

function ToastWithDurationExample() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Quick Toast",
            description: "This toast will disappear in 2 seconds",
            duration: 2000,
          });
        }}
      >
        Short Duration (2s)
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Persistent Toast",
            description: "This toast will stay for 10 seconds",
            duration: 10000,
          });
        }}
      >
        Long Duration (10s)
      </Button>
    </div>
  );
}

function ToastWithIconsExample() {
  const { toast } = useToast();

  return (
    <>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Success",
            description: "Your changes have been saved successfully",
            action: (
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
            ),
          });
        }}
      >
        Success Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Information",
            description: "Your account will be updated shortly",
            action: (
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <Info className="h-4 w-4 text-white" />
              </div>
            ),
          });
        }}
      >
        Info Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Warning",
            description: "Your session is about to expire",
            action: (
              <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-white" />
              </div>
            ),
          });
        }}
      >
        Warning Toast
      </Button>
    </>
  );
}

function ProgrammaticDismissalExample() {
  const { toast } = useToast();
  const [downloadToastId, setDownloadToastId] = React.useState<string>("");

  const startDownload = () => {
    const toastObj = toast({
      title: "Download Started",
      description: "We're preparing your file for download...",
      duration: 100000,
    });

    setDownloadToastId(toastObj.id);

    setTimeout(() => {
      toastObj.update({
        title: "Download Complete",
        description: "Your file has been downloaded successfully",
        action: (
          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="h-4 w-4 text-white" />
          </div>
        ),
      });
    }, 3000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={startDownload} className="flex items-center gap-2">
        <Download className="h-4 w-4" />
        Start Download
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          const toastObj = toast({
            title: "Processing",
            description: "Your request is being processed...",
          });

          setTimeout(() => {
            toastObj.update({
              title: "Processing Complete",
              description: "Your request has been processed successfully",
            });
          }, 2000);
        }}
        className="flex items-center gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Process Request
      </Button>
    </div>
  );
}
