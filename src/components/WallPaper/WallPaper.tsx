"use client";

import { useState, useEffect, memo } from "react";
import { type WallPaperProps, type WallPaperRowProps } from "@/typing/interfaces";
import { type ColorMode } from "@/typing/types";
import { type IconType } from "react-icons";
import { useTheme } from "next-themes";
import { DEFAULT_ICONS } from "@/constants/icons";
import "./WallPaper.scss";

const WALLPAPER_ROTATION_INTERVAL = parseInt(process.env.NEXT_PUBLIC_WALLPAPER_ROTATION_INTERVAL || "1000", 10);

const ITEMS_PER_ROW = 12;
const NUMBER_OF_ROWS = 15;


const WallPaperRow = ({ className, colorMode, rowIcons }: WallPaperRowProps) => {
  return (
    <div className={className}>
      {rowIcons.map((IconComponent, idx) => {
        return (
          <div
            key={idx}
            className={`wallpaper__item ${colorMode === "dark" ? "dark" : "light"}`}
          >
            <IconComponent className="wallpaper__icon" />
          </div>
        );
      })}
    </div>
  );
};

const WallPaper = memo(({ customIcons }: WallPaperProps) => {
  const [iconsMatrix, setIconsMatrix] = useState<IconType[][]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  const { resolvedTheme } = useTheme();

  const activeColorMode: ColorMode = mounted && resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);

    const iconOptions = customIcons || DEFAULT_ICONS;

    const buildMatrix = (): IconType[][] => {
      return Array.from({ length: NUMBER_OF_ROWS }, () => {
        return Array.from({ length: ITEMS_PER_ROW }, () => {
          const randomIdx = Math.floor(Math.random() * iconOptions.length);
          return iconOptions[randomIdx];
        });
      });
    };

    setIconsMatrix(buildMatrix());

    const interval = setInterval(() => {
      setIconsMatrix(buildMatrix());
    }, WALLPAPER_ROTATION_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [customIcons]);

  return (
    <div className="wallpaper">
      <div className="wallpaper__inner">
        {iconsMatrix.map((rowIcons, idx) => {
          return (
            <WallPaperRow
              key={idx}
              className={(idx + 1) % 2 === 0
                ? "wallpaper__row wallpaper__row--even"
                : "wallpaper__row wallpaper__row--odd"
              }
              colorMode={activeColorMode}
              rowIcons={rowIcons}
            />
          );
        })}
      </div>
    </div>
  );
});

export default WallPaper;