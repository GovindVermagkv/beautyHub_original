import React from "react";
import { Link } from "react-router-dom";
import serData from "../json/serData";
import Card from "./cards/Card";
import Flickity from "react-flickity-component";
import TestCard from "./cards/TestCard";
import TeamCard from "./cards/TeamCard";
import img1 from "../assets/bannernew.jpeg";
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
  // const slice = 4;
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
      <section className="banner">
        <div className="parallax-container relative md:h-[41rem] h-[35rem]">
          <div className="p-bg-container flex items-center">
            <div className="parallax-background"></div>
          </div>
          <div
            className="parallax-content hero text-white md:top-1/2 top-[40%] md:px-24 px-10 mx-auto max-w-[1536px] relative"
            id="hero"
          >
            <h1 className="flex items-center text-5xl text-white">
              <span className="text-[#d87093]">Beauty</span>Hub
            </h1>
            <p className="mt-2">The Best is yet to come!!</p>
            <Link
              to="/"
              className="border border-[#d87093] px-8 py-2.5 relative top-4
               hover:bg-[#d87093] duration-300 ease-in-out sm:text-base text-sm"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      <section className="about bg-[#fafafa]">
        <div className="inner max-w-[1536px] 2xl:mx-auto md:py-16 py-10 md:px-12">
          <h1 className="hed font-semibold w-fit mx-auto xl:text-3xl text-xl">
            About Us
          </h1>
          <div className="abt-cont flex justify-center items-center md:mt-8 mt-5">
            <p className="text-center xs:px-8 px-4 text-[#252525] xl:w-[55%] w-full xl:text-base sm:text-sm text-xs">
              Step back from your busy life and chill out in{" "}
              <span className=" font-semibold">BeautyHub</span>, our vibe is
              kind and informal. We’re always up for a chat or if you want to
              just relax while we work on your hair, that’s possible too. Enjoy
              our wide selection of premium products and hair gels. Our barber
              brings the technical expertise to the table, all you need to bring
              is yourself. Get in touch now – our team will be happy to talk you
              through the variety of treatments and grooming services that we
              offer. Whatever it is that has forced customers to find our
              services, our professional barbers don’t disappoint.
            </p>
            <div className="abt-img rounded-sm overflow-hidden w-[45%] xl:block hidden">
              <img src={img1} alt="about_img" />
            </div>
          </div>
        </div>
      </section>

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

      <section className="team bg-[#fafafa]">
        <div className="inner-team max-w-[1536px] 2xl:mx-auto py-7 sm:px-12 msm:px-8 px-5">
          <h1 className="hed font-semibold w-fit mx-auto xl:text-3xl text-xl">
            Our Team
          </h1>
          <div className="team-card-cont grid md:grid-cols-2 grid-cols-1 gap-4 my-5 mx-auto max-w-[950px] sm:py-5">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
