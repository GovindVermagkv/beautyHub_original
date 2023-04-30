import React from "react";
import { Link } from "react-router-dom";
import serData from "../json/serData";
import Card from "./cards/Card";
import Flickity from "react-flickity-component";
import TestCard from "./cards/TestCard";
import { Banner } from "./Banner";
const Home = () => {
  const flickityOptions = {
    wrapAround: true,
    initialIndex: 1,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    selectedAttraction: 0.2,
    friction: 0.8,
    adaptiveHeight: true,
  };

  const slice =
    window.innerWidth >= 1280
      ? 4
      : window.innerWidth >= 1024 && window.innerWidth < 1280
      ? 6
      : window.innerWidth < 1024 && window.innerWidth > 640
      ? 4
      : 2;
  React.useEffect(() => {
    const parallaxBackground = document.querySelector(".parallax-background");
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      parallaxBackground.style.transform = `translateY(${
        scrollPosition * 0.55
      }px)`;
    });
  }, []);

  return (
    <>
<Banner/>
      <section className="service bg-[#fafafa]">
        <div className="ser-inner max-w-[1536px] 2xl:mx-auto pb-7 xs:px-12 px-3">
          <h1 className="hed font-semibold w-fit mx-auto xl:text-3xl text-xl">
            Services
          </h1>
          <div className="card-container grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:mt-12 mt-7 md:mb-12 mb-5">
            {serData.slice(0, slice).map((val) => {
              return (
                <div key={val.id}>
                  <Card img={val.img} title={val.title} content={val.content} />
                </div>
              );
            })}
          </div>
          <div className="servicelink flex justify-center items-center">
            <Link
              className="md:py-3.5 py-2 md:px-8 px-6 border md:text-base text-sm border-[#d87093] text-[#252525] hover:text-white    
              hover:bg-[#252525] hover:border-[#252525] rounded-sm ease-in-out duration-150"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="inner-test max-w-[1536px] 2xl:mx-auto py-7">
          <h1 className="hed font-semibold w-fit mx-auto xl:text-3xl text-xl">
            Testimonials
          </h1>
          <Flickity
            className=" overflow-hidden outline-none my-7 pt-5 h-full w-full"
            options={flickityOptions}
          >
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
          </Flickity>

          <div className="Testimoniallnk flex justify-center items-center">
            <Link
              className="md:py-3.5 py-2 md:px-8 px-6 border md:text-base text-sm border-[#d87093] text-[#252525] hover:text-white    
              hover:bg-[#252525] hover:border-[#252525] rounded-sm ease-in-out duration-150"
            >
              Submit Your Opinion
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
