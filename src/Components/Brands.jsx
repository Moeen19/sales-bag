import { useState, useMemo, useEffect } from "react";
import "../loader.css";
import Alkaram from "../images/Alkaram.svg";
import GulAhmed from "../images/GulAhmed.svg";
import Junaid from "../images/J.svg";
import Black from "../images/Black.svg";
import Almirah from "../images/Almirah.svg";
import Sapphire from "../images/Sapphire.svg";
import Gap from "../images/Gap.svg";
import Ego from "../images/Ego.svg";
import khaadi from "../images/Rectangle 2.png";
import GulBig from "../images/Rectangle 24.svg";
import MagnifyingGlass from "../images/MagnifyingGlass.svg";
import CaretDown from "../images/CaretDown.svg";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import suit1w from "../images/Frame.svg";
import suit2w from "../images/suit-2-w.svg";
import suit3w from "../images/suit-2-w.png";
import suit4w from "../images/suit-3-w.png";
import suit5w from "../images/suit-4-w.png";
import suit6w from "../images/suit-5-w.png";
import suit7w from "../images/suit-6-w.png";
import suit8w from "../images/suit-7-w.png";
import suit9w from "../images/suit-8-w.png";
import suit10w from "../images/suit-9-w.png";
import suit11w from "../images/suit-10-w.png";
import suit12w from "../images/suit-11-w.png";
import khaadiSmall from "../images/Rectangle 2 sm.svg";

function Brands({ setItemsNo }) {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1500);
  }, []);

  const card = [
    {
      img: suit1w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "stitched",
    },
    {
      img: suit2w,
      title: "The Loom Foil Printed Shirt WGK-YDS-FP",
      price: "PKR 4990",
      id: Math.floor(Math.random() * 1000),
      category: "Kaaj",
    },
    {
      img: suit3w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "Ideas Pret",
    },
    {
      img: suit4w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "unstitched",
    },
    {
      img: suit5w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "stitched",
    },
    {
      img: suit6w,
      title: "The Loom Foil Printed Shirt WGK-YDS-FP",
      price: "PKR 4990",
      id: Math.floor(Math.random() * 1000),
      category: "stitched",
    },
    {
      img: suit7w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3980",
      id: Math.floor(Math.random() * 1000),
      category: "Ideas Pret",
    },
    {
      img: suit8w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "unstitched",
    },
    {
      img: suit9w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "Kaaj",
    },
    {
      img: suit10w,
      title: "The Loom Foil Printed Shirt WGK-YDS-FP",
      price: "PKR 4990",
      id: Math.floor(Math.random() * 1000),
      category: "Ideas Pret",
    },
    {
      img: suit11w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "unstitched",
    },
    {
      img: suit12w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "stitched",
    },
    {
      img: suit5w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "Kaaj",
    },
    {
      img: suit6w,
      title: "The Loom Foil Printed Shirt WGK-YDS-FP",
      price: "PKR 4990",
      id: Math.floor(Math.random() * 1000),
      category: "unstitched",
    },
    {
      img: suit7w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "stitched",
    },
    {
      img: suit8w,
      title: "Needle Craft Embroidered Shirt WGK-KDW",
      price: "PKR 3890",
      id: Math.floor(Math.random() * 1000),
      category: "unstitched",
    },
  ];

  const brandIcons = [
    { img: GulAhmed },
    { img: Junaid },
    { img: Black },
    { img: Sapphire },
    { img: Gap },
    { img: Alkaram },
    { img: Ego },
    { img: Almirah },
  ];

  const [categoryText, setCategoryText] = useState([
    { text: "Stitched", value: "stitched", active: true },
    { text: "Unstitched", value: "unstitched", active: false },
    { text: "Ideas Pret", value: "Ideas Pret", active: false },
    { text: "Kaaj", value: "kaaj", active: false },
  ]);

  const info = [
    { Number: "162", text: "Products" },
    { Number: "10+", text: "Categories" },
    { Number: "96k", text: "Reviews" },
  ];

  const [clothes, setClothes] = useState(card);
  const [search, setSearch] = useState("");

  let filteredClothes = useMemo(() => {
    return clothes.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, clothes]);

  const sortedClothes = (sort) => {
    if (sort === "stitched") {
      return (filteredClothes = clothes.filter((item) => {
        return item.category === "stitched";
      }));
    } else if (sort === "unstitched") {
      return (filteredClothes = clothes.filter((item) => {
        return item.category === "unstitched";
      }));
    } else if (sort === "Kaaj") {
      return (filteredClothes = clothes.filter((item) => {
        return item.category === "Kaaj";
      }));
    } else if (sort === "Ideas Pret") {
      return (filteredClothes = clothes.filter((item) => {
        return item.category === "Ideas Pret";
      }));
    } else {
      return filteredClothes;
    }
  };

  const handleChangeSort = (val) => {
    let s = val.value ?? val;
    // console.log(val);
    let sorted = sortedClothes(s);
    setSearch(s);
    filteredClothes = sorted;
    if (val.value) {
      const catToggle = categoryText.map((item) => {
        if (item.value === val.value) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });
      setCategoryText(catToggle);
    }
    // setClothes(sorted);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClickLike = (item) => {
    if (localStorage.getItem("my-clothes")) {
      const clothesArr = [
        ...JSON.parse(localStorage.getItem("my-clothes")),
        item,
      ];
      setItemsNo(clothesArr.length);
      localStorage.setItem("my-clothes", JSON.stringify(clothesArr));
    } else {
      localStorage.setItem("my-clothes", JSON.stringify([item]));
    }
  };

  const handleClickRemove = (item) => {
    const clothesArr = JSON.parse(localStorage.getItem("my-clothes"));
    let remArr = clothesArr.filter((cloth) => {
      return cloth.id !== item.id;
    });
    setItemsNo(remArr.length);
    console.log(remArr);
    localStorage.setItem("my-clothes", JSON.stringify(remArr));
  };

  return (
    <div className="overflow-hidden max-w-[1472px] z-10 w-full min-h-screen h-full">
      <span
        className={`loader h-[100%] flex inset-0 m-auto mt-[450px] ${
          loader ? "opacity-100" : "opacity-0 hidden"
        } transition-all duration-500 ease-in-out`}
      ></span>

      <div
        className={`${
          loader ? "opacity-0" : "opacity-100"
        } transition-all duration-700 ease-in-out`}
      >
        <div className="flex justify-between my-[24px] pl-[26px] lg:pl-[84px] w-full lg:mb-[50px] lg:mt-[47px] pr-0 lg:pr-[127px]">
          <div className="max-w-[159px] hidden lg:flex lg:flex-col w-full">
            <p className="text-[#808191] mb-[8px] text-[24px] font-normal leading-[24px] tracking-[-0.48px]">
              SalesBag
            </p>
            <h1 className="text-[#000] text-[48px] font-semibold leading-[56px] tracking-[-0.96px]">
              Brands
            </h1>
          </div>
          <div className="flex items-end md:justify-between md:overflow-hidden lg:overflow-x-scroll xl:overflow-x-hidden gap-[14px] lg:gap-[51px]">
            {brandIcons.map((icon, index) => {
              return (
                <img
                  key={index}
                  className="md:max-w-[80px] cursor-pointer max-w-[44px] max-h-[44px] md:max-h-[80px]"
                  src={icon.img}
                  alt="iconImg"
                />
              );
            })}
          </div>
        </div>

        <div className="relative pl-[0] lg:pl-[84px]">
          <div className="relative">
            <img className="hidden md:block" src={khaadi} alt="khaadiImg" />
            <img
              className="visible md:hidden"
              src={khaadiSmall}
              alt="khaadiSm"
            />
            <div className="max-w-[1235px] lg:flex hidden w-full bottom-0 rounded-[70px] left-[44px] absolute min-h-[84px] blur-[25px] bg-cbg -z-10"></div>
          </div>

          <div className="flex gap-[14px] lg:gap-[41px] relative top-[-18px] md:top-[-26px] lg:top-[-97px] max-w-[1318px] w-full items-start lg:items-end pt-0 lg:pt-[40px] pl-[29px] lg:pl-[43px]">
            <img
              className="max-w-[100px] lg:max-w-[180px] lg:max-h-[180px] w-full max-h-[100px]"
              src={GulBig}
              alt="GulImg"
            />
            <div className="flex mt-[31px] max-w-[996px] pr-[20px] w-full lg:mt-0 justify-between items-center">
              <div className="max-w-[255px] md:max-w-[400px] lg:max-w-[429px] w-full">
                <h1 className="text-[#000] mb-[12px] lg:mb-[19px] text-[20px] md:text-[24px] lg:text-[32px] font-bold leading-[24px] tracking-[-0.4px] lg:tracking-[-0.64px]">
                  Gul Ahmed
                </h1>
                <p className="text-[#000] text-[13px] md:max-w-[300px] lg:max-w-[100%]  md:text-[14px] lg:text-[16px] font-normal leading-[16px] tracking-[-0.26px] lg:leading-[24px] lg:tracking-[-0.32px]">
                  Lorem ipsum dolor sit amet consectetur. Consectetur in enim
                  non duis pellentesque eget fermentum phasellus ut.
                </p>
              </div>

              <div className="max-w-[367px] hidden max-h-[58px] w-full md:flex overflow-hidden md:gap-[30px] lg:gap-[80px]">
                {info.map((item, index) => {
                  return (
                    <div key={index} className="max-w-[80px] w-full">
                      <h1 className="text-[32px] mb-[10px] text-[#000] leading-[24px] tracking-[-0.64px] font-bold">
                        {item.Number}
                      </h1>
                      <p className="text-[#000] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[367px] md:max-w-[500px] lg:max-w-[367px] md:justify-between lg:justify-normal md:mx-auto lg:mx-0 mt-[30px] ml-[31px] md:hidden max-h-[58px] w-full flex overflow-hidden gap-[80px]">
          {info.map((item, index) => {
            return (
              <div key={index} className="max-w-[80px] w-full">
                <h1 className="text-[32px] mb-[10px] text-[#000] leading-[24px] tracking-[-0.64px] font-bold">
                  {item.Number}
                </h1>
                <p className="text-[#000] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-[1318px] hidden lg:flex gap-[32px] items-center pl-[84px] xl:flex pl-[44px] pr-[60px] w-full">
          <div className="max-w-[810px] w-full relative">
            <img
              className="absolute top-[10px] left-[20px]"
              src={MagnifyingGlass}
              alt="MagImg"
            />
            <input
              onChange={handleChangeSearch}
              placeholder="Search Everything"
              className="max-w-[810px] text-[#595959] placeholder-[#595959] text-[12px] font-normal leading-[20px] min-h-[44px] rounded-[12px] outline-none pl-[66px] w-full"
            />
          </div>
          <div className="relative max-w-[372px] w-full">
            <select
              onChange={(e) => handleChangeSort(e.target.value)}
              className="max-w-[372px] text-[#595959] text-[12px] leading-[20px] font-normal appearance-none px-[20px] w-full min-h-[40px] outline-none cursor-pointer rounded-[12px]"
            >
              <option value="categories">Categories</option>
              <option value="stitched">stitched</option>
              <option value="unstitched">unstitched</option>
              <option value="Ideas Pret">Ideas Pret</option>
              <option value="Kaaj">Kaaj</option>
            </select>

            <img
              className="absolute inset-0 ml-[338px] my-auto"
              src={CaretDown}
              alt="CaretImg"
            />
          </div>
        </div>
        <div className="flex lg:border-b-[1px] lg:gap-[21px] md:gap-[112px] gap-[21px] lg:border-[#E8E8E8] mt-[44px] lg:mt-[50px] lg:ml-[84px] max-w-[415px] md:max-w-[600px] w-full mx-auto ">
          <div className="lg:mr-[63px] justify-between flex gap-[10px] lg:ml-0 lg:max-w-[100%] md:max-w-[600px] max-w-[380px] w-full">
            {categoryText.map((text, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    text.active
                      ? "lg:pb-[16px] px-[13px] lg:border-b-[1px] justify-between lg:mb-[-1px] lg:border-[#6151FF] max-w-[165px] w-full"
                      : ""
                  } flex gap-[9px] `}
                >
                  <p
                    onClick={() => {
                      handleChangeSort(text);
                    }}
                    key={index}
                    className={`${
                      text.active
                        ? "text-[#000] font-semibold"
                        : "text-[#808191]"
                    } cursor-pointer text-[16px] md:text-[21px]  lg:text-[16px] font-normal leading-[24px] tracking-[-0.32px]`}
                  >
                    {text.text}
                  </p>
                  {text.active && (
                    <p className="text-[#FFF] py-[4px] px-[10px]  max-w-[44px] w-full text-center bg-[#7567FF] rounded-[16px] text-[14px] font-normal leading-[14px] tracking-[-0.28px]">
                      128
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex lg:gap-[80px] md:gap-[112px] gap-[21px]"></div>
        </div>

        <div className="grid grid-cols-2c md:grid-cols-3 lg:grid-cols-4 pl-[28px] md:pl-0 md:px-4 lg:pl-[84px] mb-[43px] lg:mb-0 mt-[44px] pr-[20px] lg:mt-[50px] max-w-[1380px] gap-[18px] lg:gap-[30px] w-full">
          {filteredClothes.map((c, index) => {
            return (
              <Card
                key={index}
                handleClickRemove={() => handleClickRemove(c)}
                handleClickLike={() => handleClickLike(c)}
                img={c.img}
                title={c.title}
                price={c.price}
              />
            );
          })}
        </div>

        <div className="ml-[648px] hidden lg:flex mr-[661px] max-w-[163px] w-full mt-[55px] mb-[107px]">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Brands;
