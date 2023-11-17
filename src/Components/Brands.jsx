import { useState, useMemo } from "react";
import Alkaram from "../images/Alkaram.svg";
import GulAhmed from "../images/GulAhmed.svg";
import Junaid from "../images/J.svg";
import Black from "../images/Black.svg";
import Almirah from "../images/Almirah.svg";
import Sapphire from "../images/Sapphire.svg";
import Gap from "../images/Gap.svg";
import Ego from "../images/Ego.svg";
import khaadi from "../images/Rectangle 2.jpg";
import GulBig from "../images/Rectangle 24.svg";
import MagnifyingGlass from "../images/MagnifyingGlass.svg";
import CaretDown from "../images/CaretDown.svg";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import suit1w from "../images/Frame.svg";
import suit2w from "../images/Rectangle 11.svg";
import suit3w from "../images/Rectangle 11 (1).png";
import suit4w from "../images/Rectangle 11 (2).png";
import suit5w from "../images/Rectangle 11 (3).png";
import suit6w from "../images/Rectangle 11 (4).png";
import suit7w from "../images/Rectangle 11 (5).png";
import suit8w from "../images/Rectangle 11 (6).png";
import suit9w from "../images/Rectangle 11 (7).png";
import suit10w from "../images/Rectangle 11 (8).png";
import suit11w from "../images/Rectangle 11 (9).png";
import suit12w from "../images/Rectangle 11 (10).png";
import khaadiSmall from "../images/Rectangle 2 sm.svg";

function Brands() {
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

  const categoryText = [
    { text: "Unstitched" },
    { text: "Ideas Pret" },
    { text: "Kaaj" },
  ];

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

  const handleChangeSort = (e) => {
    let s = e.target.value;
    let sorted = sortedClothes(s);
    console.log(sorted , "sorted----");
    setSearch(s)
    filteredClothes = sorted;
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
    console.log(remArr);
    localStorage.setItem("my-clothes", JSON.stringify(remArr));
  };



  return (
    <div className="overflow-hidden max-w-[1472px] z-10 pt-[84px] w-full">
      <div className="flex justify-between sm:my-[24px] sm:pl-[26px] md:pl-[84px] w-full md:mb-[50px] md:mt-[47px] sm:pr-0 md:pr-[127px]">
        <div className="max-w-[159px] sm:hidden md:flex md:flex-col w-full">
          <p className="text-[#808191] mb-[8px] text-[24px] font-normal leading-[24px] tracking-[-0.48px]">
            SalesBag
          </p>
          <h1 className="text-[#000] text-[48px] font-semibold leading-[56px] tracking-[-0.96px]">
            Brands
          </h1>
        </div>
        <div className="flex items-end md:flex-wrap sm:gap-[14px] md:gap-[51px]">
          {brandIcons.map((icon, index) => {
            return (
              <img
                key={index}
                className="md:max-w-[80px] cursor-pointer sm:max-w-[44px] sm:max-h-[44px] md:max-h-[80px]"
                src={icon.img}
                alt="iconImg"
              />
            );
          })}
        </div>
      </div>

      <div className="relative sm:pl-[0] md:pl-[84px]">
        <div className="relative">
          <img className="sm:hidden md:flex" src={khaadi} alt="khaadiImg" />
          <img
            className="sm:visible md:hidden"
            src={khaadiSmall}
            alt="khaadiSm"
          />
          <div className="max-w-[1235px] md:flex sm:hidden w-full bottom-0 rounded-[70px] left-[44px] absolute min-h-[84px] blur-[25px] bg-cbg -z-10"></div>
        </div>

        <div className="flex sm:gap-[14px] md:gap-[41px] absolute sm:top-[95px] md:top-[256px] max-w-[1318px] w-full sm:items-start md:items-end sm:pt-0 md:pt-[40px] sm:pl-[29px] md:pl-[43px]">
          <img
            className="sm:max-w-[100px] md:max-w-[180px] md:max-h-[180px] w-full sm:max-h-[100px]"
            src={GulBig}
            alt="GulImg"
          />
          <div className="flex sm:mt-[31px] md:mt-0 gap-[199px] items-center">
            <div className="sm:max-w-[255px] md:max-w-[429px] w-full">
              <h1 className="text-[#000] sm:mb-[12px] md:mb-[19px] sm:text-[20px] md:text-[32px] font-bold leading-[24px] sm:tracking-[-0.4px] md:tracking-[-0.64px]">
                Gul Ahmed
              </h1>
              <p className="text-[#000] sm:text-[13px] md:text-[16px] font-normal sm:leading-[16px] sm:tracking-[-0.26px] md:leading-[24px] md:tracking-[-0.32px]">
                Lorem ipsum dolor sit amet consectetur. Consectetur in enim non
                duis pellentesque eget fermentum phasellus ut.
              </p>
            </div>

            <div className="max-w-[367px] sm:hidden md:flex max-h-[58px] w-full flex overflow-hidden gap-[80px]">
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

      <div className="max-w-[367px] mt-[134px] ml-[31px] md:hidden max-h-[58px] w-full flex overflow-hidden gap-[80px]">
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

      <div className="max-w-[1318px] sm:hidden md:flex gap-[32px] mt-[186px] items-center ml-[84px] flex pl-[44px] pr-[60px] w-full">
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
            onChange={handleChangeSort}
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

      <div className="flex md:border-b-[1px] sm:pl-[32px] gap-[21px] md:border-[#E8E8E8] max-w-[1318px] sm:mt-[44px] md:mt-[50px] md:ml-[84px] w-full">
        <div className="md:max-w-[165px] sm:max-w-[116px] md:mr-[63px] md:pl-[32px] md:border-b-[1px] md:mb-[-1px] md:pb-[16px] md:border-[#6151FF] cursor-pointer items-center flex gap-[9px] w-full">
          <p className="text-[#000] text-[16px] font-semibold leading-[16px] tracking-[-0.32px]">
            Stitched
          </p>
          <p className="text-[#FFF] py-[4px] px-[10px] max-w-[44px] w-full text-center bg-[#7567FF] rounded-[16px] text-[14px] font-normal leading-[14px] tracking-[-0.28px]">
            128
          </p>
        </div>
        <div className="flex md:gap-[80px] sm:gap-[21px]">
          {categoryText.map((text, index) => {
            return (
              <p
                key={index}
                className="text-[#808191] cursor-pointer text-[16px] font-normal leading-[24px] tracking-[-0.32px]"
              >
                {text.text}
              </p>
            );
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2c md:grid-cols-4c sm:ml-[28px] md:ml-[84px] sm:mb-[43px] md:mb-0 sm:mt-[44px] md:mt-[50px] max-w-[1380px] sm:gap-[18px] md:gap-[30px] w-full">
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

      <div className="ml-[648px] sm:hidden md:flex mr-[661px] max-w-[163px] w-full mt-[55px] mb-[107px]">
        <Button />
      </div>
    </div>
  );
}

export default Brands;
