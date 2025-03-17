import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

interface ComponentDisplayProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
  usage?: string;
  additionalInfo?: React.ReactNode;
}

interface VariantDisplayProps {
  title: string;
  description: string;
  variants: {
    title: string;
    description?: string;
    component: React.ReactNode;
    code: string;
  }[];
  installingCode?: string;
  usage?: string;
  additionalInfo?: React.ReactNode;
}

export function ComponentDisplay({
  title,
  description,
  component,
  code,
  usage,
  additionalInfo,
}: ComponentDisplayProps) {
  return (
    <div className="space-y-6 border rounded-lg p-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="p-6 border rounded-md bg-muted/10 flex items-center justify-center">
        {component}
      </div>

      {/* <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          {usage && <TabsTrigger value="usage">Usage</TabsTrigger>}
        </TabsList>
        <TabsContent value="preview" className="p-4 border rounded-md mt-2">
          <div className="flex justify-center">{component}</div>
        </TabsContent>
        <TabsContent value="code" className="mt-2">
          <div className="rounded-md bg-zinc-950 p-4 overflow-auto">
            <pre className="text-white font-mono text-sm">{code}</pre>
          </div>
        </TabsContent>
        {usage && (
          <TabsContent value="usage" className="mt-2">
            <div className="rounded-md bg-zinc-950 p-4 overflow-auto">
              <pre className="text-white font-mono text-sm">{usage}</pre>
            </div>
          </TabsContent>
        )}
      </Tabs> */}

      {additionalInfo && (
        <div className="mt-4">
          <h4 className="text-lg font-medium mb-2">Additional Information</h4>
          {additionalInfo}
        </div>
      )}
    </div>
  );
}

export function VariantDisplay({
  title,
  description,
  variants,
  installingCode,
  usage,
  additionalInfo,
}: VariantDisplayProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xl text-muted-foreground mt-2">{description}</p>
      </div>

      {/* {installingCode && (
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Installation</h3>
          <div className="rounded-md bg-zinc-950 p-4 overflow-auto">
            <pre className="text-white font-mono text-sm">{installingCode}</pre>
          </div>
        </div>
      )} */}
      {/* 
      {usage && (
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Usage</h3>
          <div className="rounded-md bg-zinc-950 p-4 overflow-auto">
            <pre className="text-white font-mono text-sm">{usage}</pre>
          </div>
        </div>
      )} */}

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Variants</h3>
        <div className="grid grid-cols-1 gap-8">
          {variants.map((variant, index) => (
            <ComponentDisplay
              key={index}
              title={variant.title}
              description={variant.description || ""}
              component={variant.component}
              code={variant.code}
            />
          ))}
        </div>
      </div>

      {additionalInfo && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
          {additionalInfo}
        </div>
      )}
    </div>
  );
}
