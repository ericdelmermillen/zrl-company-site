import HeroSolution from "../HeroSolution/HeroSolution";
import "./Hero.scss";

const Hero= () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__overlay"></div>
        <div className="hero__accentBar"></div>
        <div className="hero__left">

          <div className="hero__text">
            <h1 className="hero__heading"><span className="hero__software">Software</span> Solutions</h1>
            <h2 className="hero__subheading">
              <span className="hero__for">
                For{" "}
              </span>
              <br className="hero__break"></br>
              <HeroSolution />
            </h2>
            <p className="hero__lead">
              Build better, faster, smarter with software solutions crafted for your unique needs.
            </p>
            <a href="#moreInfo" className="hero__button">
              LEARN MORE
            </a>
          </div>
          
        </div> 
        <div className="hero__right"></div>

      </div>
    </section>
  );
};

export default Hero;