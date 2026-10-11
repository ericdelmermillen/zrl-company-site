import Details from "@/components/Details/Details";
import Expertise from "@/components/Expertise/Expertise";
import Header from "@/components/Header/Header";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import Solutions from "@/components/Solutions/Solutions";
import Subscribe from "@/components/Subscribe/Subscribe";
import Values from "@/components/Values/Values";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">

      <div className="homePage__inner">
        <Header />
        <main className="homePage__main">
            {/* <Partners /> */}
          
            <div className="homePage__content">
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