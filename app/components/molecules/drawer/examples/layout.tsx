import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawer Examples - AliveUI",
  description: "Examples of the Drawer component from AliveUI",
};

export default function DrawerExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
