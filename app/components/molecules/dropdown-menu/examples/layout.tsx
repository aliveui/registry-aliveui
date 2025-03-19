import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropdown Menu Examples - AliveUI",
  description: "Examples of the Dropdown Menu component from AliveUI",
};

export default function DropdownMenuExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
