import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navigation Menu Examples - AliveUI",
  description: "Examples of the Navigation Menu component from AliveUI",
};

export default function NavigationMenuExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
