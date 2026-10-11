import ExpertiseItem from "@/components/ExpertiseItem/ExpertiseItem";
import { expertise } from "@/constants/expertise";
import "./Expertise.scss";

const Expertise = () => {
  return (
    <section className="expertise" id="expertise">
      <div className="expertise__inner">
        <h2 className="expertise__heading">Expertise</h2>
        <p className="expertise__lead">
          We take pride in our expertise. With years of experience and a dedicated team, we deliver exceptional software solutions tailored to your needs. Our strong points include:
        </p>

        <ul className="expertise__items">

          {expertise.map(({ Icon, iconClassModifier, name, desc }, idx) => (

            <ExpertiseItem
              key={idx}
              Icon={Icon}
              iconClassModifier={iconClassModifier}
              name={name}
              desc={desc}
            />

          ))}

        </ul>
      </div>
    </section>
  );
};

export default Expertise;