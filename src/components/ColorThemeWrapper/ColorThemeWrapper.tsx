"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ChildrenProps } from "@/typing/interfaces";

const ColorThemeWrapper = ({ children }: ChildrenProps) => {
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

export default ColorThemeWrapper;