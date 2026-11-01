"use client";

import { useState, useEffect, memo } from "react";
import { useTheme } from "next-themes";
import { type WallPaperProps, type WallPaperRowProps } from "@/typing/interfaces";
import { type ColorMode } from "@/typing/types";
import { type IconType } from "react-icons";
import { 
  ADMIN_ICON_OPTIONS,
  DEFAULT_ICON_OPTIONS,
  LOGIN_ICON_OPTIONS,
  NOT_FOUND_ICON_OPTIONS,
} from "@/constants/icons";
import { getNumberOfColumnsByWindowWidth } from "@/utils/utils";
import "./WallPaper.scss";

const WALLPAPER_ICON_ROTATION_INTERVAL = parseInt(process.env.NEXT_PUBLIC_WALLPAPER_ICON_ROTATION_INTERVAL || "1000", 10);

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

const WallPaper = memo(({ variant }: WallPaperProps) => {
  const [ iconsMatrix, setIconsMatrix ] = useState<IconType[][]>([]);
  const [ mounted, setMounted ] = useState<boolean>(false);
  const [ columns, setColumns ] = useState<number>(getNumberOfColumnsByWindowWidth);

  const { resolvedTheme } = useTheme();

  const iconOptions = variant === "admin"
    ? ADMIN_ICON_OPTIONS
    : variant === "login"
    ? LOGIN_ICON_OPTIONS
    : variant === "not-found"
    ? NOT_FOUND_ICON_OPTIONS
    : DEFAULT_ICON_OPTIONS;

  const activeColorMode: ColorMode = mounted && resolvedTheme === "dark" ? "dark" : "light";

  // useEffect to attach the resize eventListener to update columns value
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      // Debounce to prevent thrashing matrix generation on every pixel drag
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setColumns(prev => {
          const next = getNumberOfColumnsByWindowWidth();
          return prev === next ? prev : next; // Prevent state update if column count didn't change
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect to set the 2d array of icons and to trigger the setInterval to update it
  useEffect(() => {
    setMounted(true);

    const buildMatrix = (): IconType[][] => {
      return Array.from({ length: NUMBER_OF_ROWS }, () => {
        return Array.from({ length: columns }, () => {
          const randomIdx = Math.floor(Math.random() * iconOptions.length);
          return iconOptions[randomIdx];
        });
      });
    };

    setIconsMatrix(buildMatrix());

    const interval = setInterval(() => {
      setIconsMatrix(buildMatrix());
    }, WALLPAPER_ICON_ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [iconOptions, columns]);

  return (
    <div className="wallpaper">
      <div className="wallpaper__inner">
        {iconsMatrix.map((rowIcons, idx) => (

          <WallPaperRow
            key={idx}
            className={(idx + 1) % 2 === 0
              ? "wallpaper__row wallpaper__row--even"
              : "wallpaper__row wallpaper__row--odd"
            }
            colorMode={activeColorMode}
            rowIcons={rowIcons}
          />
        ))}

      </div>
    </div>
  );
});

export default WallPaper;