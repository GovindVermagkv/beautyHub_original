import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="ser-card border border-[#ededed] rounded-sm overflow-hidden cursor-pointer shadow hover:shadow-lg hover:shadow-[#2525253a] bg-white">
        <div className="picture w-full h-full">
          <img src={props.img} alt="makeup" className="w-full h-full" />
        </div>
        <div className="ser-content px-4 pt-3.5 pb-5 text-center">
          <h1 className="sm:text-lg text-base font-semibold mb-1">{props.title}</h1>
          <p className=" xl:text-base sm:text-sm text-xs line-clamp-3">
            {props.content}
          </p>
          <Link className="relative top-2 sm:py-3 py-2.5 block w-full rounded-sm border border-[#d87093] hover:bg-[#d87093] hover:text-white duration-300 ease-in-out font-med md:text-base text-sm">
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
