import profile from "../../assets/profilepic.webp";
const TestCard = (props) => {
  return (
    <>
      <div className="test-card border h-[350px] lg:w-[55%] md:w-[70%] sm:w-[85%] w-full mx-2 relative flex justify-center items-center flex-col rounded cursor-grab bg-white">
      <svg className="lg:h-16 sm:h-14 h-12 absolute top-8 text-[#25252560]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
        {/* <span className="text-9xl text-[#707070] text-center block">&#8220;</span> */}
        <p className="sm:px-10 px-5 text-center lg:text-lg sm:text-base text-sm font-med line-clamp-6">
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
        <div className="user flex justify-center items-center absolute bottom-5">
          <div className="pic lg:w-[40px] w-[30px] lg:h-[40px] h-[30px] rounded-full overflow-hidden mr-2">
            <img src={profile} alt="profile" className="w-full h-full" />
          </div>
          <p className="username font-med lg:text-base sm:text-sm text-xs">
            <span className="font-med">username@123</span>  |  <span className="font-normal">User</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TestCard;
