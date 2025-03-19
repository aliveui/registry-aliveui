import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabs Examples - AliveUI",
  description: "Examples of the Tabs component from AliveUI",
};

export default function TabsExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
