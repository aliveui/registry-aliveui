import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toast Examples - AliveUI",
  description: "Examples of the Toast component from AliveUI",
};

export default function ToastExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
