import MoreInfoForm from "../MoreInfoForm/MoreInfoForm";
import MoreInfoText from "../MoreInfoText/MoreInfoText";
import "./MoreInfo.scss";

const MoreInfo = () => {
  return (
    <section id="moreInfo" className="moreInfo">
      <div className="moreInfo__inner">
        <MoreInfoText />
        <MoreInfoForm /> 
      </div>
    </section>
  );
};

export default MoreInfo;