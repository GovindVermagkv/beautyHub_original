import profile from "../../assets/photo.jpeg";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
const TeamCard = (props) => {
  return (
    <>
      <div className="team-card text-center flex justify-center items-center">
        <div className="inner-tcard w-full flex flex-col justify-center items-center">
          <div className="member-img lg:w-36 msm:w-28 w-24 lg:h-36 msm:h-28 h-24 rounded-full overflow-hidden border-[10px] border-white z-[1]">
            <img src={profile} alt="Member" className=" w-full h-full" />
          </div>
          <div className="mem-cont md:w-full sm:w-[70%] msm:w-[90%] w-full bg-white msm:pt-9 pt-7 msm:pb-5 pb-3 rounded-md -mb-8 relative -top-8">
            <p className="msm:text-lg text-base font-med">Nikhil Kumar Gupta</p>
            <p className="msm:text-sm text-xs font-normal text-[#777]">
              Full Stack Developer
            </p>
            <ul className="socio flex justify-center items-center mt-2 text-[#333]">
              <li>
                <a href="/" className="mx-1 cursor-pointer msm:p-2.5 p-1 msm:text-lg text-sm hover:text-[#1DA1F2] block duration-200 ease-in-out">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/" className="mx-1 cursor-pointer msm:p-2.5 p-1 msm:text-lg text-sm hover:text-[#0072b1] block duration-200 ease-in-out">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="/" className="mx-1 cursor-pointer msm:p-2.5 p-1 msm:text-lg text-sm hover:text-[#171515] block duration-200 ease-in-out">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="/" className="mx-1 cursor-pointer msm:p-2.5 p-1 msm:text-lg text-sm hover:text-[#e4405f] block duration-200 ease-in-out">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
