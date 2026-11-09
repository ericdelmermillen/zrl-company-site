import BulletCheck from "@/components/BulletCheck/BulletCheck";
import { values } from "@/textCopy/textCopyHome";
import "./Values.scss";

// unlisted video on my youtube to embed: viewable and embeddable but not discoverable
const YOUTUBE_VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || "";
const embedUrl = YOUTUBE_VIDEO_ID
  ? `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?controls=1&mute=0&modestbranding=1&playsinline=1&rel=0`
  : null;

// console.log(YOUTUBE_VIDEO_ID)

const Values = () => {
  return (
    <div id="values" className="values" >
      <div className="values__inner">
        <h2 className="values__heading">
          Values
        </h2>

        <h3 className="values__lead">
          We have the best most valuable corporate values you guys -- you won't even believe it you guys.
        </h3>

        {embedUrl && (
          <div className="values__video-container">
            <iframe
              className="values__video"
              src={embedUrl}
              title="Zidgy Road Labs - Values"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        )}

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