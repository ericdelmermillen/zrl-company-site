"use client";

import { useState, useEffect } from "react";
import "./Hero.scss";

const solutions: string[] = ["Small Business", "Enterprise", "Startups"];

const Hero= () => {
  const [ solutionIdx, setSolutionIdx ] = useState<number>(0);

  // useEffect to setInterval for rotating solutionIdx
  useEffect(() => {
    const interval = setInterval(() => {
      setSolutionIdx(prev =>
        prev === solutions.length - 1 
          ? 0 
          : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
              <span className="hero__solution">
                {solutions[solutionIdx] === "Small Business" ? (
                  <>
                    <span className="hero__solution hero__solution--short">SMEs</span>
                    <span className="hero__solution hero__solution--full">Small Business</span>
                  </>
                ) : (
                  solutions[solutionIdx]
                )}
              </span>
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