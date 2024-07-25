import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import birthdayCakes from "../resources/eventsImageGallery/birthdayCakes.webp";
import tableEvents2 from "../resources/eventsImageGallery/tableEvents2.webp";
import weddingTents from "../resources/eventsImageGallery/weddingTents.webp";
import weddingPeople from "../resources/eventsImageGallery/weddingPeople.webp";
import conference from "../resources/eventsImageGallery/conference.webp";

export default function EventsPage() {
  // variables for scroll animations using useInView
  const [eventLandingRef, inLandingView] = useInView({
    initialInView: false,
  });

  const [downRef, inDownView] = useInView({
    initialInView: false,
  });

  const [eventRef, inEventRefView] = useInView({
    initialInView: false,
  });

  const [eventRef2, inEventRefView2] = useInView({
    initialInView: false,
  });

  return (
    <>
      <div className="events_landing">
        <div className="events_hero">
          <h1
            ref={eventLandingRef}
            className={inLandingView ? "elementShow" : "elementHide"}
          >
            "Life is an Event,&emsp;&emsp;&emsp;
            <br />
            &emsp;&emsp;&emsp;
            <span>
              make it{" "}
              <span className="text-[#c49464] underline underline-offset-8 decoration-white">
                Memorable
              </span>
              "
            </span>{" "}
          </h1>
          <button className="text-white mt-5 text-xs md:text-sm underline underline-offset-8">
            <div
              ref={downRef}
              className={inDownView ? "elementShowSlower" : "elementHide"}
            >
              <Link
                to="events_description"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                Scroll Down &nbsp;
                <SouthSharpIcon />
              </Link>
            </div>
          </button>
        </div>
      </div>
      <div className="events_description" id="events_description">
        <Container>
          <div
            ref={eventRef2}
            className={inEventRefView2 ? "elementShow" : "elementHide"}
          >
            <h2 className="text-center">Events</h2>

            <div className="event_row">
              <div className="events_cols">
                <img
                  src={weddingTents}
                  alt="Wedding events at Fred's Ranch and Resort"
                />
                <h3>Weddings</h3>
                <p>
                  Fred's Ranch & Resort is the perfect spot to tie the knot.
                  Come gather with your friends and relatives to celebrate your
                  big day.
                </p>
                <p>
                  We offer the perfect wedding spot that is within your budget
                  and the comfort zone of every invited guest. Fred's Ranch &
                  Resort comes through your day with linens, to flatware,
                  banquet chairs, and more.
                </p>
              </div>
              <div className="events_cols">
                <h3>Photo-Shoots</h3>
                <p>
                  Standing on a 16 acre farm, Fred's Ranch i& Resort is the
                  perfect picturesque photography location in Kajiado.
                </p>
                <p>
                  With pastures stretching out beneath the wide blue skies,
                  charming gazebos nested among trees, Fred's Ranch & Resort
                  creates the perfect photographers dream.
                </p>
                <p>
                  "A good snapshot keeps the moment that's gone from running
                  away..."
                </p>
                <img src={weddingPeople} alt="" />
              </div>
            </div>
          </div>
          <div
            ref={eventRef}
            className={inEventRefView ? "elementShow" : "elementHide"}
          >
            <div className="event_row">
              <div className="events_cols">
                <img
                  src={birthdayCakes}
                  alt="Celebrate Birthdays at Fred's Ranch and Resort"
                />
                <h3>Birthdays</h3>
                <p>
                  Fred's Ranch & Resort is the perfect destination to celebrate
                  your birthday's and special days. We are the best when it
                  comes to appreciating your special day with song and dance.
                </p>
                <p>
                  Do you want to have a surprise celebration for your loved
                  ones? We got you covered. We are just a call away from making
                  the most cherishing memories.
                </p>
              </div>
              <div className="events_cols">
                <h3>Conferencing & Meetings</h3>
                <p>
                  We take conferencing very seriously. Fred's Ranch & Resort has
                  a conferencing venue that grants a spacious avenue for
                  delegates to happily mingle and enthusiastically chat.
                </p>
                <p>
                  Among other offerings the conferencing halls have great
                  acoustics and video displays as well, boosting compelling
                  speakers that bring crowded sessions and engage delegates.
                </p>
                <p>"Engaging Minds, Empowering Success"</p>
                <img
                  src={conference}
                  alt="Fred's ranch and resort conference"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
