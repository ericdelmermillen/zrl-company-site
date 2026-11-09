"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, memo } from "react";
import { type WallPaperProps } from "@/typing/interfaces";
import { type ColorMode } from "@/typing/types";
import { type IconType } from "react-icons";
import { 
  ADMIN_ICON_OPTIONS,
  DEFAULT_ICON_OPTIONS,
  LOGIN_ICON_OPTIONS,
  NOT_FOUND_ICON_OPTIONS,
} from "@/constants/icons";
import { getNumberOfColumnsByWindowWidth } from "@/utils/utils";
import WallPaperRow from "@/components/WallPaperRow/WallPaperRow";
import "./WallPaper.scss";

const WALLPAPER_ICON_ROTATION_INTERVAL = parseInt(process.env.NEXT_PUBLIC_WALLPAPER_ICON_ROTATION_INTERVAL || "1000", 10);

const NUMBER_OF_ROWS = 15;

const WallPaper = memo(({ variant }: WallPaperProps) => {
  const [ iconsMatrix, setIconsMatrix ] = useState<IconType[][]>([]);
  const [ mounted, setMounted ] = useState<boolean>(false);
  const [ columns, setColumns ] = useState<number>(0);

  const { resolvedTheme } = useTheme();

  const iconOptions = variant === "admin"
    ? ADMIN_ICON_OPTIONS
    : variant === "login"
    ? LOGIN_ICON_OPTIONS
    : variant === "not-found"
    ? NOT_FOUND_ICON_OPTIONS
    : DEFAULT_ICON_OPTIONS;

  const activeColorMode: ColorMode = mounted && resolvedTheme === "dark" ? "dark" : "light";

  // useEffect to set the initial number of columns on the client after hydration
  useEffect(() => {
    setMounted(true);
    setColumns(getNumberOfColumnsByWindowWidth());
  }, []);
  
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
    if (columns <= 0) {
      return;
    }

    const buildMatrix = (): IconType[][] => {
      return Array.from({ length: NUMBER_OF_ROWS }, () => {
        return Array.from({ length: columns }, () => {
          const randomIdx = Math.floor(Math.random() * iconOptions.length);
          return iconOptions[randomIdx];
        });
      });
    };

    setIconsMatrix(buildMatrix());

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      setIconsMatrix(buildMatrix());
    }, WALLPAPER_ICON_ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [variant, columns]);

  return (
    <div className="wallpaper">
      <div className="wallpaper__inner">
        {iconsMatrix.map((rowIcons, idx) => (

          <WallPaperRow
            key={idx}
            rowClassName={(idx + 1) % 2 === 0
              ? "wallpaper__row wallpaper__row--even"
              : "wallpaper__row wallpaper__row--odd"
            }
            itemClassName={`wallpaper__item ${activeColorMode === "dark" ? "dark" : "light"}`}
            iconClassName="wallpaper__icon"
            rowIcons={rowIcons}
          />
        ))}

      </div>
    </div>
  );
});

export default WallPaper;