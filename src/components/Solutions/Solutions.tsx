import { solutions } from "@/constants/solutions";
import "./Solutions.scss";
import Solution from "../Solution/Solution";

const Solutions = () => {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__inner">
        <h2 className="solutions__heading">
          Solutions
        </h2>
        <p className="solutions__lead">
          <span className="solutions__lead-stem">We Design and Build </span> Custom Software Tailored to Your Needs
        </p>

        <div className="solutions__container">

          {solutions.map(({ img, shortTitle, fullTitle, text, tag, alt }, idx) =>

            <Solution 
              key={idx}
              img={img}
              shortTitle={shortTitle}
              fullTitle={fullTitle}
              text={text}
              tag={tag}
              alt={alt}
            />
          )}

        </div>

      </div>
    </section>
  );
};

export default Solutions;