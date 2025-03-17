"use client";

import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { VariantDisplay } from "../../ui/component-display";

export default function CardPage() {
  return (
    <VariantDisplay
      title="Card"
      description="A container component for displaying content in a card format."
      usage={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}`}
      variants={[
        {
          title: "Simple",
          description: "Basic card with minimal content.",
          component: (
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is a basic card with minimal content.</p>
              </CardContent>
            </Card>
          ),
          code: `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This is a basic card with minimal content.</p>
  </CardContent>
</Card>`,
        },
        {
          title: "Complete",
          description: "Card with header, content, and footer.",
          component: (
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Complete Card</CardTitle>
                <CardDescription>With all sections</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This card shows all the different parts of a card component
                  including header with title and description, content, and
                  footer.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          ),
          code: `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Complete Card</CardTitle>
    <CardDescription>With all sections</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card shows all the different parts of a card component including header with title and description, content, and footer.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Submit</Button>
  </CardFooter>
</Card>`,
        },
        {
          title: "Product Card",
          description: "Example of a product card with image.",
          component: (
            <Card className="w-full max-w-sm overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Product Image
              </div>
              <CardHeader>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>$99.99</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This is a high-quality product with amazing features that will
                  improve your life.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ),
          code: `<Card className="w-full max-w-sm overflow-hidden">
  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
    Product Image
  </div>
  <CardHeader>
    <CardTitle>Product Name</CardTitle>
    <CardDescription>$99.99</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm">This is a high-quality product with amazing features that will improve your life.</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Add to Cart</Button>
  </CardFooter>
</Card>`,
        },
        {
          title: "Interactive Card",
          description: "Card with hover effects and interactions.",
          component: (
            <Card className="w-full max-w-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover over me</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has hover effects to indicate interactivity.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="ml-auto">
                  Learn more →
                </Button>
              </CardFooter>
            </Card>
          ),
          code: `<Card className="w-full max-w-sm hover:shadow-lg transition-shadow cursor-pointer">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Hover over me</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has hover effects to indicate interactivity.</p>
  </CardContent>
  <CardFooter>
    <Button variant="ghost" className="ml-auto">Learn more →</Button>
  </CardFooter>
</Card>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Cards are flexible containers that help group and organize content
            in your interface. They can be combined with other components to
            create rich interactive elements.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">Card Subcomponents</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">Card</code> - The
                main container
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">CardHeader</code>{" "}
                - For the top section, typically contains title and description
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">CardTitle</code>{" "}
                - For the card's title
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  CardDescription
                </code>{" "}
                - For the card's description
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  CardContent
                </code>{" "}
                - For the main content area
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">CardFooter</code>{" "}
                - For the bottom section, typically contains actions
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
