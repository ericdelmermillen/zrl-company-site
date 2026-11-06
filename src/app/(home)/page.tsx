import Details from "@/components/Details/Details";
import Expertise from "@/components/Expertise/Expertise";
import Hero from "@/components/Hero/Hero";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import Solutions from "@/components/Solutions/Solutions";
import Subscribe from "@/components/Subscribe/Subscribe";
import Values from "@/components/Values/Values";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__inner">
        <Hero />
        <main className="homePage__main">
          <div className="homePage__content">
            
            {/* -- Partners carousel requires logos from client comapnies 
              -- might rename to Clients or similar */}

            {/* <Partners /> */}
    
            <MoreInfo />
            <Solutions />
            <Details />
            <Expertise />
            <Values />
            <Subscribe />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;