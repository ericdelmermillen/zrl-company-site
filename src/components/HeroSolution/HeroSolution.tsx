"use client";

import { useState, useEffect } from "react";
import "./HeroSolution.scss";

const HERO_SOLUTION_INTERVAL = parseInt(process.env.NEXT_PUBLIC_HERO_SOLUTION_INTERVAL || "2000", 10);

const solutions: string[] = ["Small Business", "Enterprise", "Startups"];

const HeroSolution = () => {
  const [ solutionIdx, setSolutionIdx ] = useState<number>(0);

  // useEffect to setInterval for rotating solutionIdx
  useEffect(() => {
    const interval = setInterval(() => {
      setSolutionIdx(prev =>
        prev === solutions.length - 1 
          ? 0 
          : prev + 1
      );
    }, HERO_SOLUTION_INTERVAL);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <span className="heroSolution">
      {solutions[solutionIdx] === "Small Business" 
        ? (
            <>
              <span className="heroSolution__text heroSolution__text--short">SMEs</span>
              <span className="heroSolution__text heroSolution__text--full">Small Business</span>
            </>
          ) 
        : solutions[solutionIdx]
      }
    </span>
  );
};

export default HeroSolution;