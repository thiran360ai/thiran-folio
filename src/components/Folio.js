import React, { useEffect, useRef } from "react";
import "./Folio.css";
import Project from "./Project";
import Services from "./Services";
import Testimonials from "../testimonials";

const Folio = ({ cardRefs }) => {
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollRef = useRef(null);
  // const scrollToPosition = (position) => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollTo({
  //       top: position, // Scroll to a specific vertical position (in pixels)
  //       behavior: "smooth", // Smooth scrolling
  //     });
  //   }
  // };

  // const scrollToSection = (ref) => {
  //   const sectionPosition =
  //     ref.current.getBoundingClientRect().top + window.pageYOffset; // Get the section's Y position
  //   const offset = 10; // Add an offset to force scroll even if it's close to the top

  //   // Scroll the window to the section position with smooth scrolling behavior
  //   window.scrollTo({
  //     top: sectionPosition - offset, // Adding the offset to ensure it scrolls even if close
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    const handleResize = () => {
      const cards = document.querySelectorAll(".card");
      const isMobile = window.innerWidth <= 768;

      cards.forEach((card, index) => {
        if (isMobile) {
          // On mobile, remove sticky position and adjust animation duration
          card.style.position = "relative";
          card.style.animationDuration = "0.5s";
          card.style.animationName = "none";
        } else {
          // On desktop, reset to original settings
          card.style.position = "sticky";
          const topOffset = window.innerHeight * 0.15;
          card.style.top = `${topOffset}px`; // Adjust top offset
          card.style.animationDuration = `${0.4 * index}s`; // Animation duration based on index
          card.style.animationName = "scroll-animation-0";
        }
      });
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <main ref={scrollRef} style={{ backgroundColor: "" }}>
        <ul id="cards" style={{ paddingTop: "50px" }}>
          {/* Card 1 */}
          <li
            className="card"
            id="card_1"
            ref={cardRefs.card1}
            style={{ marginTop: "100vh" }}
          >
            <div className="card__content">
              <h2>Who is Thiran360AI</h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center align-items-center img-thumbnail">
                    <figure>
                      <img
                        src="thiran.avif"
                        alt="Thiran Solution"
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 d-flex align-items-start">
                    <div className="text-justify">
                      <p>
                        Welcome to Thiran360AI,{" "}
                        <b>
                          a global software powerhouse where innovation meets
                          excellence.
                        </b>{" "}
                        The name 'Thiran' symbolizes talent and
                        ability—qualities that define our team. The '360' in our
                        name represents our all-encompassing approach, covering
                        every possible aspect of software development, while
                        'AI' reflects our commitment to cutting-edge artificial
                        intelligence that turns your visions into reality. Our
                        team of experts is dedicated to crafting tailored
                        solutions that not only meet your needs but exceed your
                        expectations. With a relentless focus on quality and
                        innovation, we turn your business ideas into powerful
                        digital realities. From concept to completion, we ensure
                        that every project we undertake is a step towards making
                        your dreams come true.
                        <b>
                          Choose Thiran360AI as your trusted technology partner,
                          and together, let's shape the future of your business.
                        </b>
                        We look forward to celebrating this milestone with you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Card 2 */}
          <li
            className="card"
            ref={cardRefs.card2}
            id="card_2"
            style={{ marginTop: "70px" }}
          >
            <div className="card__content">
              <h2>Why Thiran</h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <figure>
                      <img
                        src="T360AI LOGO Style.png"
                        alt="Why Thiran"
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 d-flex align-items-start">
                    <div className="text-justify">
                      <p>
                        At Thiran360AI, we are more than just a software
                        company; we are your partner in success.{" "}
                        <b>
                          We specialize in automating businesses, solving
                          complex challenges, and providing solutions that drive
                          growth. Whether it's building robust mobile
                          applications for Android and iOS, creating dynamic web
                          apps, developing powerful desktop software, or
                          pioneering IoT control systems—if it can be done
                          through software, we do it.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Card 3 */}
          <li
            className="card"
            ref={cardRefs.card3}
            id="card_3"
            style={{ marginTop: "70px" }}
          >
            <div className="card__content">
              <h2>Thiran Solution</h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <figure>
                      <img
                        src="man-drawing-bulb-gears_1134-465.avif"
                        alt="Thiran Solution"
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="col-md-8 d-flex align-items-start">
                    <div className="text-justify">
                      <p>
                        At Thiran360AI, we are dedicated to being the ultimate
                        solution for your business needs. Our mission is to
                        automate your operations, allowing you to focus on
                        strategic growth. We understand the limitations
                        businesses face, and we provide intelligent software
                        solutions that help you overcome these challenges. By
                        streamlining processes, we enhance productivity and
                        reduce manual effort, paving the way for efficiency. Our
                        expertise enables you to visualize your goals and turn
                        your imagination into reality, helping you reach new
                        heights. We believe in empowering your business with the
                        tools and insights necessary for sustainable growth. Our
                        commitment is to support you at every stage of your
                        journey, ensuring that your business thrives in a
                        competitive landscape. Together, let’s unlock your
                        potential and transform your vision into success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Card 4 */}
          <li
            className="card"
            ref={cardRefs.card4}
            id="card_4"
            style={{ marginTop: "70px" }}
          >
            <div className="card__content">
              <h2>What Thiran can do</h2>
              <div className="card-body">
                <div className="text-content">
                  <Services />
                </div>
              </div>
            </div>
          </li>

          {/* Card 5 */}
          <li className="card mt-5" ref={cardRefs.card5} id="card_5">
            <div className="card__content">
              <h2>Thiran History</h2>
              <div className="card-body">
                <div
                  style={{ width: "100%", height: "500px", overflow: "hidden" }}
                >
                  <Project />
                </div>
              </div>
            </div>
          </li>

          {/* Card 6 */}
          <li
            className="card mb-5"
            ref={cardRefs.card6}
            id="card_6"
            style={{ marginTop: "70px" }}
          >
            <div className="card__content">
              <h2>Testimonials</h2>
              {/* <div className="testimonials-container"> */}
              <Testimonials />
              {/* </div> */}
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Folio;
