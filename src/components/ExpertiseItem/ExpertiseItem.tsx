import { type ExpertiseItem } from "@/typing/interfaces";
import "./ExpertiseItem.scss";

const ExpertiseItem = ({ Icon, iconClassModifier, name, desc }: ExpertiseItem) => {
  return (
    <li className="expertiseItem">
      <Icon
        className={`expertiseItem__icon expertiseItem__icon--${iconClassModifier}`}
        aria-label={name}
      />
      <h3 className="expertiseItem__heading">{name}</h3>
      <div className="expertiseItem__desc">{desc}</div>
    </li>
  );
};

export default ExpertiseItem;