import { Bullet } from "@/typing/interfaces";
import { FaCheck } from "react-icons/fa6";
import "./BulletCheck.scss"

const BulletCheck = ({ headingShort, headingFull, blurb }: Bullet) => {

  return (
    <li className="bulletCheck">
      <i className="bulletCheck__check">
        <FaCheck />
      </i>

      <div className="bulletCheck__text">
        <h3 className="bulletCheck__heading bulletCheck__heading--short">
          {headingShort}
        </h3>
        <h3 className="bulletCheck__heading bulletCheck__heading--full">
          {headingFull}
        </h3>
        <p className="bulletCheck__blurb">
        {blurb}
        </p>
      </div> 

    </li>
  );
};

export default BulletCheck;