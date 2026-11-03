import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  neutralColor?: string;
  accentPrimary?: string;
  accentSecondary?: string;
}

const Logo_2: React.FC<LogoProps> = ({
  neutralColor = "currentColor",
  accentPrimary = "#ef7e25",
  accentSecondary = "#ca5128",
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 985 893.172"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient
          id="logo-linear-gradient"
          y1="2.786"
          x2="1"
          y2="2.786"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor={accentPrimary} />
          <stop offset="1" stopColor={accentSecondary} />
        </linearGradient>
      </defs>
      <g
        id="first-logo-variation-01-icon-color"
        transform="translate(-390.86 -447)"
      >
        <g id="Layer_2" transform="translate(380.86 447)">
          <g id="Group_1" data-name="Group 1">
            <path
              id="top-cap"
              d="M402.026,447H1055.6c19.785,0,34.571,19.785,48.7,39.571l22.612,31.091c22.612,31.091,19.786,65.009-8.479,104.58l-138.5,141.325L962.978,735.3c-25.438-33.918-52.183-62.183-88.927-65.009-5.653-2.826-14.133-2.826-19.785-2.826h-288.3c-14.132,0-25.438-5.653-36.744-16.959L390.72,497.877C373.762,478.092,379.414,447,402.026,447Z"
              transform="translate(-370.86 -447)"
              fill={neutralColor}
            />
            <path
              id="upper-diagonal"
              d="M1316.432,663.789c28.265-25.439,60.009-16.959,85.448,5.653l37.4,42.4c25.438,25.438,25.438,59.356,2.826,84.795l-277,274.17c-28.265,22.612-48.051,22.612-98.927,22.612-33.918,0-49.356-16.959-63.489-39.571-14.132-16.959-14.132-42.4,5.653-62.183Z"
              transform="translate(-501.674 -485.72)"
              fill={accentPrimary}
            />
            <path
              id="lower-diagonal"
              d="M779.208,803.459C804.646,786.5,826.605,786.5,857.7,786.5h19.785c28.265,2.827,38.051,22.612,57.836,48.05,16.959,19.785,14.133,45.224-5.653,67.836L570.7,1283.963c-25.438,28.265-60.662,31.091-91.754,2.826L445.029,1255.7c-22.612-25.438-22.612-56.53,0-90.448L779.208,803.459Z"
              transform="translate(-379.944 -512.33)"
              fill={neutralColor}
            />
            <path
              id="bottom-cap"
              d="M891.3,1154c36.744,50.877,55.009,81.968,105.886,81.968h248.731c28.265,0,39.571,16.959,56.53,39.571l124.366,144.151c22.612,28.265,11.306,56.53-14.132,56.53H753.454c-36.744,0-60.009-28.265-60.009-65.009-2.826-25.438,5.653-53.7,28.265-79.142L891.3,1154Z"
              transform="translate(-443.985 -583.049)"
              fill="url(#logo-linear-gradient)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo_2;