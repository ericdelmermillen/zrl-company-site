import Detail from "../Detail/Detail";
import { details } from "@/constants/details";
import "./Details.scss";

const Details = () => {
  return (
    <section className="details" id="details">
      <div className="details__inner">
        <h2 className="details__heading">Details</h2>

        {details.map(({ heading, lead, img, imgDesc, bullets }, idx) => (
          <Detail
            key={idx}
            idx={idx}
            heading={heading}
            lead={lead}
            bullets={bullets}
            img={img}
            imgDesc={imgDesc}
          />

        ))}
        
      </div>
    </section>
  );
};

export default Details;