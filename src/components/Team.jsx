import React from 'react'
import TeamCard from "./cards/TeamCard";
export  function Team() {
  return (
    <>
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
  )
}
