import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hover Card Examples - AliveUI",
  description: "Examples of the Hover Card component from AliveUI",
};

export default function HoverCardExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
