"use client";

import React from "react";
import { ThemeRegistry } from "./context/ThemeContext";
import Hotjar from "@/components/Hotjar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
        <Hotjar />
      </body>
    </html>
  );
}
