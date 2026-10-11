import { moreInfoPoints } from "@/textCopy/textCopyHome";
import BulletCheck from "../BulletCheck/BulletCheck";
import "./MoreInfoText.scss";

const MoreInfoText = () => {
  return (
    <article className="moreInfoText">
      <div className="moreInfoText__inner">
        <h2 className="moreInfoText__heading">Get More Information</h2>

        <p className="moreInfoText__lead">
          We provide innovative software solutions that empower businesses to thrive in the digital era.
        </p>

          <ul className="moreInfoText__bullets">

            {moreInfoPoints.map(({ titleShort, titleFull, description }, idx) => (

              <BulletCheck 
                key={idx}
                headingShort={titleShort}
                headingFull={titleFull}
                blurb={description}
              />

            ))}
          
          </ul>
      </div>
    </article>
  );
};

export default MoreInfoText;