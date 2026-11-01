"use client";

import { ChildrenProps } from "@/typing/interfaces";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: ChildrenProps) => {
  return (
    <NextThemesProvider
      attribute="data-color-mode"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
};

export { ThemeProvider };