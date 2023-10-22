"use client";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme?: string;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}
