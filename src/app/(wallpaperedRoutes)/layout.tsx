import { ChildrenProps } from "@/typing/interfaces";

const WallpaperLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="wallpaper-wrapper">
      <div className="wallpaper-wrapper__content">
        {children}
      </div>
    </div>
  );
};

export default WallpaperLayout;