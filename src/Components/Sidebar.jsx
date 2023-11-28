import Shopping from "../images/ShoppingBag.svg";
import userCircle from "../images/UserCircle.svg";
import CrownSimple from "../images/CrownSimple.svg";
import Handbag from "../images/Handbag.svg";
import HandbagGray from "../images/HandbagGray.svg";
import CrownSimpleHigh from "../images/CrownSimpleHigh.svg";
import Newspaper from "../images/Newspaper.svg";
import People1 from "../images/People1.svg";
import People2 from "../images/People2.svg";
import People3 from "../images/People3.svg";
import People4 from "../images/People4.svg";
import People5 from "../images/People5.svg";
import People6 from "../images/People6.svg";
import Group1 from "../images/group-1.svg";
import Group2 from "../images/group-2.svg";
import Group3 from "../images/group-3.svg";
import SmallG from "../images/Group 1.svg";
import SmallG2 from "../images/Group 2.svg";
import SmallG3 from "../images/Group 3.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NewFeed = [
  { img: Newspaper, title: "News Feed" },
  {
    img: HandbagGray,
    imgHighlighted: Handbag,
    title: "Market Place",
    link: "/market",
  },
  {
    img: CrownSimple,
    imgHighlighted: CrownSimpleHigh,
    title: "Brands",
    link: "/brands",
  },
  { img: userCircle, title: "People" },
];

const Online = [
  { img: People1, text: "Leslie Alexander" },
  { img: People2, text: "Michael Foster" },
  { img: People3, text: "Dries Vincent" },
  { img: People4, text: "Lindsay Walton" },
  { img: People5, text: "Courtney Henry" },
  { img: People6, text: "Tom Cook" },
];

const group = [
  { img: Group1, text: "Family Discussions", imgSmall: SmallG2 },
  { img: Group2, text: "Friends", imgSmall: SmallG3 },
  { img: Group3, text: "Business Chat", imgSmall: SmallG },
];

function Sidebar() {
  const location = useLocation();
  return (
    <div className="max-w-[256px] bg-[#F9FBFF] h-[100vh] pb-[50px] fixed w-full border-r-[1px] border-[#E8E8E8] overflow-y-auto overflow-x-hidden">
      <div className="max-w-[216px] w-full mx-[20px] mt-[20px]">
        <Link to="market">
          <div className="flex cursor-pointer max-w-[129px] w-full gap-[10px] ml-[40.92px] mr-[46.08px] items-center">
            <img src={Shopping} alt="shoppingimg" />
            <h1 className="font-Inter text-[20px] text-[#373737] leading-normal font-black">
              Sale
              <span className="text-[#949494] font-Inter text-[20px] font-light leading-normal">
                bag
              </span>
            </h1>
          </div>
        </Link>

        <p className="text-[#808191] text-[11px] font-normal leading-[20px] mt-[25px] mb-[26px]">
          New Feed
        </p>

        <div className="max-w-[216px] w-full flex flex-col gap-[18px]">
          {NewFeed.map((item, index) => {
            return (
              <Link key={index} to={item.link}>
                <div
                  className={`pt-[10px] hover:bg-[#6151FF]/10 hover:rounded-[8px] pb-[12px] pl-[20px] pr-[69px] items-center flex gap-[16px] ${
                    location.pathname === item.link &&
                    `bg-[#6151FF] hover:bg-[#6151FF]/100 rounded-[8px] flex`
                  }`}
                >
                  <img
                    src={
                      location.pathname === item.link
                        ? item.imgHighlighted
                        : item.img
                    }
                    alt="linkImg"
                  />

                  <p
                    className={`text-[#808191] text-[14px] font-normal leading-[20px] ${
                      location.pathname === item.link && `text-white`
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-[#808191] font-normal leading-[20px] text-[11px] mt-[32px] mb-[29px]">
          Online People
        </p>

        <div className="ml-[19px] mr-[18px] flex flex-col gap-[20px]">
          {Online.map((item, index) => {
            return (
              <div
                key={index}
                className="flex cursor-pointer gap-[16px] items-center"
              >
                <img src={item.img} alt="ItemImg" />
                <p className="text-[#111827] text-[14px] font-medium leading-[24px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-[#808191] font-normal leading-[20px] text-[11px] my-[36px]">
          Group Chat
        </p>

        <div className="flex flex-col max-w-[179px] w-full gap-[20px] ml-[19px] mr-[18px]">
          {group.map((item, index) => {
            return (
              <div key={index} className="flex cursor-pointer gap-[16px]">
                <img src={item.img} alt="itemImage" />
                <div>
                  <p className="text-[#111827] max-w-[133px] whitespace-nowrap w-full text-[14px] font-medium leading-[20px]">
                    {item.text}
                  </p>
                  <img src={item.imgSmall} alt="imgSmall" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
