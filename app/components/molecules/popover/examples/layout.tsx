import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popover Examples - AliveUI",
  description: "Examples of the Popover component from AliveUI",
};

export default function PopoverExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
