"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { VariantDisplay } from "../../ui/component-display";

export default function AvatarPage() {
  return (
    <VariantDisplay
      title="Avatar"
      description="An image element with a fallback for representing users."
      usage={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`}
      variants={[
        {
          title: "With Image",
          description: "Avatar displaying a user image.",
          component: (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ),
          code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
        },
        {
          title: "With Fallback",
          description:
            "Avatar displaying initials as a fallback when no image is available.",
          component: (
            <Avatar>
              <AvatarImage src="/invalid-image.png" alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ),
          code: `<Avatar>
  <AvatarImage src="/invalid-image.png" alt="@johndoe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
        },
        {
          title: "Colored Fallback",
          description: "Avatar with a colored background in the fallback.",
          component: (
            <Avatar>
              <AvatarImage src="/invalid-image.png" alt="@alicesmith" />
              <AvatarFallback className="bg-blue-600 text-white">
                AS
              </AvatarFallback>
            </Avatar>
          ),
          code: `<Avatar>
  <AvatarImage src="/invalid-image.png" alt="@alicesmith" />
  <AvatarFallback className="bg-blue-600 text-white">AS</AvatarFallback>
</Avatar>`,
        },
        {
          title: "Custom Size",
          description: "Avatar with custom dimensions.",
          component: (
            <Avatar className="h-14 w-14">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-lg">CN</AvatarFallback>
            </Avatar>
          ),
          code: `<Avatar className="h-14 w-14">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback className="text-lg">CN</AvatarFallback>
</Avatar>`,
        },
        {
          title: "Group",
          description: "A group of avatars with overlap.",
          component: (
            <div className="flex -space-x-4">
              <Avatar className="border-2 border-background">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback className="bg-green-600 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback className="bg-blue-600 text-white">
                  AS
                </AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback className="bg-red-600 text-white">
                  +2
                </AvatarFallback>
              </Avatar>
            </div>
          ),
          code: `<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback className="bg-green-600 text-white">JD</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback className="bg-blue-600 text-white">AS</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback className="bg-red-600 text-white">+2</AvatarFallback>
  </Avatar>
</div>`,
        },
        {
          title: "With Icon",
          description: "Avatar with an icon instead of initials.",
          component: (
            <Avatar>
              <AvatarFallback>
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
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </AvatarFallback>
            </Avatar>
          ),
          code: `<Avatar>
  <AvatarFallback>
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
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </AvatarFallback>
</Avatar>`,
        },
      ]}
      additionalInfo={
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Avatars are used to represent users. They can display user images or
            fallback to initials or placeholder icons when no image is
            available.
          </p>
          <div className="space-y-2">
            <h4 className="font-medium">Avatar Subcomponents</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">Avatar</code> -
                The root component
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  AvatarImage
                </code>{" "}
                - The image element
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">
                  AvatarFallback
                </code>{" "}
                - Shown when the image fails to load
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
