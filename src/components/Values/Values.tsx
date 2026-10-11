import { values } from "@/constants/values";
import BulletCheck from "../BulletCheck/BulletCheck";
import "./Values.scss";

// unlisted video on my youtube to embed: viewable and embeddable but not discoverable

const YOUTUBE_VIDEO_ID = process.env.VITE_YOUTUBE_VIDEO_ID;
const embedUrl = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?controls=1&mute=0&modestbranding=1&playsinline=1&rel=0`;

const Values = () => {
  return (
    <div className="values" id="values">
      <div className="values__inner">
        <h3 className="values__heading">Values</h3>

        <h2 className="values__lead">
          We have the best most valuable corporate values you guys -- you won't even believe it you guys.
        </h2>

        <div className="values__video-container">
          <iframe
            className="values__video"
            src={embedUrl}
            title="Zidgy Road Labs - Values"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <ul className="values__points">

          {values.map(({ headingShort, headingFull, blurb }, idx) => (

            <BulletCheck
              key={idx}
              headingShort={headingShort}
              headingFull={headingFull}
              blurb={blurb}
            />

          ))}

        </ul>

      </div>
    </div>
  );
};

export default Values;