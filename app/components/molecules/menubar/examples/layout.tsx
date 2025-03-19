import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menubar Examples - AliveUI",
  description: "Examples of the Menubar component from AliveUI",
};

export default function MenubarExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
