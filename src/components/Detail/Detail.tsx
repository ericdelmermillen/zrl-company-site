import Image from "next/image";
import { DetailProps } from "@/typing/interfaces";
import BulletCheck from "@/components/BulletCheck/BulletCheck";

import "./Detail.scss";

const Detail = ({
  heading,
  lead,
  bullets,
  img,
  idx,
  imgDesc
}: DetailProps) => {

  const isEven = idx % 2 === 0;

  return (
    <div className={`detail ${!isEven && "detail--odd"}`} >

      <div className={`detail__text ${isEven ? "detail__text--even" : "detail__text--odd"}`}>
        <h3 className="detail__heading">{heading}</h3>
        <p className="detail__lead">{lead}</p>

        <ul className="detail__points">
          {bullets.map(({ headingShort, headingFull, blurb }, idx) => (
            <BulletCheck
              key={idx}
              headingShort={headingShort}
              headingFull={headingFull}
              blurb={blurb}
            />
          ))}
        </ul>
      </div>

      <div className="detail__cardImage">
        <div className="detail__imageBox">
          <Image
            className="detail__image"
            src={img}
            alt={imgDesc}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;