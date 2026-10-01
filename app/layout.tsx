import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "CPAN 144 Assignment 1",
  description: "Advanced Front-End Development Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Keeps the navigation menu visible on every page */}
        <Navbar />

        {/* Displays the content of the current page */}
        {children}
      </body>
    </html>
  );
}