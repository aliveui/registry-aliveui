import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sheet Examples - AliveUI",
  description: "Examples of the Sheet component from AliveUI",
};

export default function SheetExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
