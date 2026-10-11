import Image from "next/image";
import { Solutions } from "@/typing/interfaces";
import "./Solution.scss";


const Solution = ({ img, shortTitle, fullTitle, text, tag, alt }: Solutions) => {
  return (
    <article className="solution">
      <div className="solution__inner">
        <div className="solution__imageBox">
          <Image 
            className="solution__image"
            src={img} 
            alt={alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <h3 className="solution__title solution__title--short">{shortTitle}</h3>
        <h3 className="solution__title solution__title--full">{fullTitle}</h3>
        <p className="solution__text">{text}</p>
        <span className="solution__tag">{tag}</span>
      </div>
    </article>
  );
};

export default Solution;