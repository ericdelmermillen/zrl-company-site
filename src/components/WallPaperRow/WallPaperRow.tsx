import { WallPaperRowProps } from "@/typing/interfaces";

const WallPaperRow = ({ 
  rowClassName, 
  itemClassName,
  iconClassName,
  rowIcons 
}: WallPaperRowProps) => {
  return (
    <div className={rowClassName}>
      {rowIcons.map((IconComponent, idx) => {
        return (
          <div
            key={idx}
            className={itemClassName}
          >
            <IconComponent className={iconClassName} />
          </div>
        );
      })}
    </div>
  );
};

export default WallPaperRow;