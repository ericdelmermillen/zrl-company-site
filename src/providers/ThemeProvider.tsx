"use client";

import { type ChildrenProps } from "@/typing/interfaces";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: ChildrenProps) => {
  return (
    <NextThemesProvider
      attribute="data-color-mode"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
};

export { ThemeProvider };