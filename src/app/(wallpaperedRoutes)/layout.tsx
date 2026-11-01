import { ChildrenProps } from "@/typing/interfaces";
import WallPaper from "@/components/WallPaper/WallPaper";

const WallpaperLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="wallpaper-wrapper">
      <div className="wallpaper-wrapper__content">
        {children}
        <WallPaper />
      </div>
    </div>
  );
};

export default WallpaperLayout;