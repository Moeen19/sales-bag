import { useState, useEffect, useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MagnifyingGlass from "../images/MagnifyingGlass.svg";
import Heart from "../images/Heart.svg";
import Bell from "../images/BellSimple.svg";
import CaretDown from "../images/CaretDown.svg";
import People1 from "../images/People1.svg";
import Ellipse from "../images/Ellipse 33.svg";
import PlusW from "../images/PlusW.svg";
import HeartPinned from "../images/HeartPinned.svg";
import OrangeW from "../images/orangeW.svg";
import CircleOrange from "../images/EllipseO.svg";
import ShoppingBag from "../images/ShoppingBag.svg";
import List from "../images/List.svg";

function Header() {
  const location = useLocation();
  // const userContext = createContext();
  // console.log(userContext);
  // const [itemsNo, setItemsNo] = useState(0)
  // const items = JSON.parse(localStorage.getItem("my-clothes"));
  // console.log(items.length)

  // useEffect(() => {
  //   setItemsNo(items?.length)
  // }, [])

  return (
    <div className="flex pl-[26px] py-[24px] pr-[35px] lg:py-[20px] overflow-hidden max-w-[1472px] z-20 bg-[#F9FBFF] fixed w-full justify-between border-[#E8E8E8] border-b-[1px] items-center lg:pl-[84px] lg:pr-[70px]">
      <div className="hidden lg:flex max-w-[424px] mr-[115px] w-full relative">
        <img
          className="absolute top-[10px] left-[20px]"
          src={MagnifyingGlass}
        />
        <input
          placeholder="Search Everything"
          className="max-w-[424px] text-[#595959] placeholder-[#595959] text-[12px] font-normal leading-[20px] min-h-[44px] rounded-[12px] outline-none pl-[66px] w-full"
        />
      </div>

      <div className="visible lg:hidden items-center flex gap-[8px]">
        <img className="max-h-[32px]" src={List} />
        <img src={ShoppingBag} />
      </div>

      <div
        className={`flex max-h-[24px] hidden lg:flex ${
          location.pathname != "/pinnedItems" ? `mr-[291px]` : `mr-[111px]`
        } max-w-[262px] w-full gap-[47px] items-center text-[#808191] text-[14px] font-normal leading-[24px] tracking-[-0.28px]`}
      >
        <p className="hover:cursor-pointer">About Us</p>
        <p className="hover:cursor-pointer">Blogs</p>
        <p className="hover:cursor-pointer">Contact Us</p>
      </div>

      {location.pathname === "/pinnedItems" && (
        <div className="hidden lg:flex mr-[42px]">
          <button className="py-[10px] max-h-[39px] px-[30px] bg-[#6151FF] rounded-[5px] flex gap-[10px]">
            <img src={PlusW} />
            <p className="text-[#FFF] text-[16px] font-normal leading-[20px]">
              Invite
            </p>
          </button>
        </div>
      )}

      <div className="flex relative max-w-[166px] lg:max-w-[226px] w-full gap-[15px] lg:gap-[56px] items-center">
        <img className="lg:hidden" src={MagnifyingGlass} alt="magImg" />

        <Link to="/pinnedItems">
          {location.pathname != "/pinnedItems" ? (
            <svg
              className="cursor-pointer hover:fill-[#6151FF]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Heart">
                <path
                  className=""
                  id="Vector"
                  d="M12.0012 20.25C12.0012 20.25 2.62622 15 2.62622 8.62501C2.62641 7.49826 3.01683 6.40635 3.73111 5.53493C4.44538 4.66351 5.43942 4.06636 6.54421 3.84501C7.649 3.62367 8.79636 3.79179 9.79121 4.32079C10.7861 4.84979 11.567 5.70702 12.0012 6.74673L12.0012 6.74673C12.4355 5.70702 13.2164 4.84979 14.2112 4.32079C15.2061 3.79179 16.3534 3.62367 17.4582 3.84501C18.563 4.06636 19.5571 4.66351 20.2713 5.53493C20.9856 6.40635 21.376 7.49826 21.3762 8.62501C21.3762 15 12.0012 20.25 12.0012 20.25Z"
                  stroke="#808191"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ) : (
            <img
              className="cursor-pointer max-w-[44px] w-fit"
              src={HeartPinned}
            />
          )}
        </Link>

        {location.pathname != "/market" &&
          location.pathname != "/pinnedItems" && (
            <img
              className="absolute lg:flex hidden top-[2px] left-[22px]"
              src={Ellipse}
            />
          )}
        {location.pathname === "/pinnedItems" && (
          <img
            className="absolute top-[2px] lg:flex hidden left-[32px]"
            src={OrangeW}
          />
        )}
        {location.pathname != "/market" &&
          location.pathname != "/pinnedItems" && (
            <img
              className="absolute top-[2px] left-[100px] lg:flex hidden"
              src={Ellipse}
            />
          )}
        {location.pathname === "/pinnedItems" && (
          <img
            className="absolute top-[2px] left-[118px] lg:flex hidden"
            src={CircleOrange}
          />
        )}

        <svg
          className="cursor-pointer overflow-visible hover:fill-[#6151FF]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="BellSimple">
            <path
              id="Vector"
              d="M8.99292 21.002H14.9929"
              stroke="#808191"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M5.26904 9.74994C5.2678 8.86045 5.44262 7.97951 5.78343 7.1579C6.12424 6.33628 6.6243 5.59025 7.25477 4.9628C7.88525 4.33535 8.63368 3.83889 9.45693 3.50204C10.2802 3.16519 11.1619 2.99461 12.0514 3.00013C15.763 3.02772 18.7317 6.11275 18.7317 9.83468V10.4999C18.7317 13.8577 19.4342 15.8061 20.0529 16.871C20.1196 16.9848 20.1551 17.1142 20.1558 17.246C20.1565 17.3779 20.1224 17.5076 20.0569 17.6221C19.9915 17.7366 19.8971 17.8318 19.7831 17.8982C19.6691 17.9645 19.5397 17.9996 19.4078 17.9999H4.59222C4.46034 17.9996 4.33087 17.9645 4.21689 17.8981C4.1029 17.8318 4.00844 17.7366 3.94301 17.622C3.87759 17.5075 3.84352 17.3778 3.84425 17.2459C3.84498 17.114 3.88048 16.9846 3.94716 16.8709C4.56622 15.8059 5.26904 13.8575 5.26904 10.4999L5.26904 9.74994Z"
              stroke="#808191"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        <div className="flex gap-[4px] lg:gap-[12px] max-w-[66px] w-full items-center">
          <img className="max-w-[40px] w-full max-h-[40px]" src={People1} />
          <img src={CaretDown} />
        </div>
      </div>
    </div>
  );
}

export default Header;
