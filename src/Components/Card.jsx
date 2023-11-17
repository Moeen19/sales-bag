import { useState } from "react";
import HeartBtn from "../images/HeartBtn.svg";
import Share from "../images/Share.svg";
import Plus from "../images/Plus.svg";
import HeartPurp from "../images/HeartPurp.svg";

function Card({
  img,
  title,
  logo,
  type,
  price,
  cardInfo,
  handleClickLike,
  handleClickRemove,
  className,
  titleClassName,
  typeClassName,
  priceClassName,
  logoClassName,
  className2,
  classNamePb,
}) {

  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike(!like);
    if(like === false) {
      handleClickLike();
    } else {
      handleClickRemove();
    }
    console.log(like)
  };

  return (
    <div className={`${className ? className : "sm:px-[8.9px] sm:pt-[8.89px] sm:max-w-[178px]"} md:max-w-[300px] sm:max-w-[178px] bg-[#FFF] rounded-[12px] md:px-[15px] flex flex-col gap-[20px] md:pt-[15px] md:pb-[25px] w-full`}>
      <div className="relative">
        <img className="w-full" src={img} />
        <div className="absolute bottom-[18px] right-[12px] flex flex-col gap-[8px] max-w-[34px] w-full">
          {!like && (
            <svg
              onClick={likeHandler}
              className="cursor-pointer hover:fill-[6151FF]"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="hover:fill-[#6151FF]/50"
                cx="17"
                cy="17"
                r="17"
                fill="white"
              />
              <path
                d="M17.0007 22.5C17.0007 22.5 10.7507 19 10.7507 14.75C10.7509 13.9988 11.0111 13.2709 11.4873 12.69C11.9635 12.109 12.6262 11.7109 13.3627 11.5633C14.0993 11.4158 14.8642 11.5279 15.5274 11.8805C16.1906 12.2332 16.7112 12.8047 17.0007 13.4978L17.0007 13.4978C17.2902 12.8047 17.8108 12.2332 18.4741 11.8805C19.1373 11.5279 19.9022 11.4158 20.6387 11.5633C21.3753 11.7109 22.038 12.109 22.5141 12.69C22.9903 13.2709 23.2506 13.9988 23.2507 14.75C23.2507 19 17.0007 22.5 17.0007 22.5Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {like && (
            <svg
              onClick={likeHandler}
              className="cursor-pointer"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="#6151FF" />
              <path
                d="M17.0007 22.5C17.0007 22.5 10.7507 19 10.7507 14.75C10.7509 13.9988 11.0111 13.2709 11.4873 12.6899C11.9635 12.109 12.6262 11.7109 13.3627 11.5633C14.0993 11.4158 14.8642 11.5279 15.5274 11.8805C16.1906 12.2332 16.7112 12.8047 17.0007 13.4978L17.0007 13.4978C17.2902 12.8047 17.8108 12.2332 18.4741 11.8805C19.1373 11.5279 19.9022 11.4158 20.6387 11.5633C21.3753 11.7109 22.038 12.109 22.5141 12.6899C22.9903 13.2709 23.2506 13.9988 23.2507 14.75C23.2507 19 17.0007 22.5 17.0007 22.5Z"
                fill="white"
              />
            </svg>
          )}
          <svg
            className="cursor-pointer"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="hover:fill-[#6151FF]/50"
              cx="17"
              cy="17"
              r="17"
              fill="white"
            />
            <path
              d="M20 18.5L23 15.5L20 12.5"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 22.5H11.5C11.3674 22.5 11.2402 22.4473 11.1464 22.3536C11.0527 22.2598 11 22.1326 11 22V14.5"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.689 20C14.022 18.712 14.7734 17.5712 15.8252 16.7566C16.877 15.9421 18.1696 15.5001 19.4999 15.5H22.9999"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="cursor-pointer"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="hover:fill-[#6151FF]/50"
              cx="17"
              cy="17"
              r="17"
              fill="white"
            />
            <path
              d="M11.5 17H22.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 11.5V22.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {!cardInfo && (
        <div className="text-[#000] sm:flex sm:flex-col md:flex-row md:flex gap-[19px] md:items-center md:text-[14px] font-semibold leading-[20px]">
          <p className="max-w-[179px] sm:text-[12px] md:text-[14px] sm:leading-[16px] md:leading-[20px] w-full">{title}</p>
          <p className="sm:leading-[11.889px] sm:self-end md:self-auto sm:mb-[12px] md:mb-0 md:leading-[20px]">{price}</p>
        </div>
      )}

      {cardInfo && (
        <div className={`${classNamePb ? classNamePb : "sm:pb-[12.53px]"} flex md:pb-0 items-center justify-between`}>
          <div className={`${className2 ? className2 : "sm:gap-[6.4px]"} flex md:gap-[12px] items-center md:max-w-[163px] md:w-full`}>
            <img className={`${logoClassName ? logoClassName : "sm:max-w-[21.3px] sm:max-h-[21.3px]"} w-full md:max-w-[40px] md:max-h-[40px]`} src={logo} />
            <div className="flex flex-col gap-[2px]">
              <p className={`${titleClassName ? titleClassName : "sm:text-[8px] sm:leading-[10.667px]"} text-[#000] sm:leading-[10.667px] md:text-[14px] font-semibold md:leading-[20px]`}>
                {title}
              </p>
              <p className={`${typeClassName ? typeClassName : "sm:leading-[8.533px] sm:text-[8px]"} text-[#808191] font-normal  md:leading-[16px]  md:text-[12px]`}>
                {type}
              </p>
            </div>
          </div>
          <p className={`${priceClassName ? priceClassName : "sm:text-[8px] sm:leading-[10.667px]"} md:text-[14px] font-semibold md:leading-[20px] text-[#000]`}>
            {price}
          </p>
        </div>
      )}
    </div>
  );
}

export default Card;
