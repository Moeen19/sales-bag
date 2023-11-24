import "swiper/css";
import "../swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, History } from "swiper/modules";
import "swiper/css/pagination";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import suit13w from "../images/suit-13-w.png";
import suit14w from "../images/suit-14-w.png";
import suit15w from "../images/suit-15-w.png";
import suit16w from "../images/suit-16-w.png";
import suit1m from "../images/suit-1-m.png";
import suit2m from "../images/suit-2-m.png";
import suit3m from "../images/suit-3-m.png";
import suit4m from "../images/suit-4-m.png";
import SapphireLogo from "../images/logo.svg";
import JunaidLogo from "../images/logo2.svg";
import GulLogo from "../images/logo3.svg";
import KhaadiLogo from "../images/logo4.svg";
import slide from "../images/Rectangle 2.svg";
import slide2 from "../images/Rectangle 3.svg";
import slide3 from "../images/Rectangle 4.svg";

const cardInfo = true;

const categoryText = [{ text: "Men" }, { text: "Kids" }];

const categoryCards = [
  {
    img: suit13w,
    logo: SapphireLogo,
    title: "Sapphire",
    type: "Unstitched",
    price: "PKR 3600",
    className: "max-w-[369px] px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit14w,
    logo: JunaidLogo,
    title: "Junaid Jamshed",
    type: "Pret",
    price: "PKR 4999",
    className: "max-w-[369px] px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit15w,
    logo: GulLogo,
    title: "Gul Ahmed",
    type: "Bridal Collection",
    price: "PKR 12600",
    className: "max-w-[369px] w-full px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit16w,
    logo: KhaadiLogo,
    title: "Khaadi",
    type: "Unstitched",
    price: "PKR 6600",
    className: "max-w-[369px] px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit15w,
    logo: GulLogo,
    title: "Gul Ahmed",
    type: "Bridal Collection",
    price: "PKR 12600",
    className: "max-w-[369px] px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit16w,
    logo: KhaadiLogo,
    title: "Khaadi",
    type: "Unstitched",
    price: "PKR 6600",
    className: "max-w-[369px] px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit13w,
    logo: SapphireLogo,
    title: "Sapphire",
    type: "Unstitched",
    price: "PKR 3600",
    className: "max-w-[369px] px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit14w,
    logo: JunaidLogo,
    title: "Junaid Jamshed",
    type: "Pret",
    price: "PKR 4999",
    className: "max-w-[369px] px-[18.5px] pt-[18.5px]",
    titleClassName: "text-[17.36px] leading-[24.6px]",
    typeClassName: "leading-[19.84px] text-[14.88px]",
    priceClassName: "text-[17.36px] leading-[24.8px]",
    logoClassName: "max-w-[49.6px] max-h-[49.6px]",
    className2: "gap-[14.76px] max-w-[202px] w-full",
    classNamePb: "pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
];

const trendingWomen = [
  {
    img: suit13w,
    logo: SapphireLogo,
    title: "Sapphire",
    type: "Unstitched",
    price: "PKR 3600",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit14w,
    logo: JunaidLogo,
    title: "Junaid Jamshed",
    type: "Pret",
    price: "PKR 4999",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit15w,
    logo: GulLogo,
    title: "Gul Ahmed",
    type: "Bridal Collection",
    price: "PKR 12600",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit16w,
    logo: KhaadiLogo,
    title: "Khaadi",
    type: "Unstitched",
    price: "PKR 6600",
    id: Math.floor(Math.random() * 1000),
  },
];

const trendingMen = [
  {
    img: suit1m,
    logo: JunaidLogo,
    title: "Junaid Jamshed",
    type: "Stitched",
    price: "PKR 3600",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit2m,
    logo: JunaidLogo,
    title: "Junaid Jamshed",
    type: "Stitched",
    price: "PKR 4999",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit3m,
    logo: GulLogo,
    title: "Gul Ahmed",
    type: "Bridal Collection",
    price: "PKR 12600",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit4m,
    logo: KhaadiLogo,
    title: "Khaadi",
    type: "Bridal Collection",
    price: "PKR 12600",
    id: Math.floor(Math.random() * 1000),
  },
];

const slide1 = [
  { img: slide },
  { img: slide2 },
  { img: slide3 },
  { img: slide },
  { img: slide2 },
  { img: slide3 },
  { img: slide },
  { img: slide2 },
];

function Market() {
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
    <div className="px-6 lg:px-0 lg:pl-[84px] w-full">
      <div className="overflow-x-hidden pt-[84px] max-w-[1472px] w-full">
        <div className="max-w-[292px] hidden lg:flex lg:flex-col w-full mt-[47px] mb-[50px]">
          <p className="text-[#808191] mb-[8px] text-[24px] font-normal leading-[24px] tracking-[-0.48px]">
            SalesBag
          </p>
          <h1 className="text-[#000] text-[48px] font-semibold leading-[56px] tracking-[-0.96px]">
            Market Place
          </h1>
        </div>

        <div className="max-w-[1430px] ml-[5px] mt-[36px] lg:mt-0 lg:ml-0 w-full ">
          <Swiper
            modules={[Pagination, History]}
            pagination={{ clickable: true }}
            breakpoints={{
              400: {
                // width: 358.38,
                // spaceBetween: 35.62,
                slidesPerView: 1,
              },
              768: {
                // width: 1430,
                // spaceBetween: 30,
                slidesPerView: 1.8,
              },
              1600: {
                slidesPerView: 2.18,
              },
            }}
          >
            {slide1.map((s, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img
                      src={s.img}
                      alt="sImg"
                      className="max-w-[370px] lg:max-w-[608px] "
                    />
                    <div className="absolute hidden lg:flex bg-cbg max-w-[535px] left-[36px] bottom-[-10px] -z-10 w-full rounded-[70px] min-h-[84px] blur-[25px]"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div>
          <h1 className="text-[#000] mt-[83px] md:text-[26px] lg:mt-[102px] mb-[24px] lg:mb-[50px] text-[16px] lg:text-[24px] tracking-[-0.32px] lg:tracking-[-0.48px] font-semibold leading-[24px]">
            Top Trending Woman
          </h1>
          <div className="grid grid-cols-4cs overflow-x-scroll lg:overflow-x-hidden md:grid-cols-4c gap-[16px] lg:gap-[30px]">
            {trendingWomen.map((c, index) => {
              return (
                <Card
                  key={index}
                  handleClickRemove={() => handleClickRemove(c)}
                  handleClickLike={() => handleClickLike(c)}
                  cardInfo={cardInfo}
                  img={c.img}
                  title={c.title}
                  price={c.price}
                  type={c.type}
                  logo={c.logo}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-[24px] lg:mt-[50px]  mb-[24px] lg:mb-[81px]">
          <h1 className="text-[#000] mb-[24px] md:text-[26px] lg:mb-[50px] lg:text-[24px] text-[16px] tracking-[-0.32px] lg:tracking-[-0.48px] font-semibold leading-[24px]">
            Top Trending Men
          </h1>
          <div className="grid grid-cols-4cs overflow-x-scroll lg:overflow-x-hidden md:grid-cols-4c gap-[16px] lg:gap-[30px]">
            {trendingMen.map((c, index) => {
              return (
                <Card
                  key={index}
                  handleClickRemove={() => handleClickRemove(c)}
                  handleClickLike={() => handleClickLike(c)}
                  cardInfo={cardInfo}
                  img={c.img}
                  title={c.title}
                  price={c.price}
                  type={c.type}
                  logo={c.logo}
                />
              );
            })}
          </div>
        </div>

        <div className="flex items-center lg:items-start lg:border-b-[1px] mb-[24px] lg:mb-[45px] lg:border-[#E8E8E8] max-w-[1318px] w-full">
          <div className="max-w-[141px] lg:max-w-[165px] bg-[#FFF] lg:bg-none rounded-[20px] lg:rounded-none pb-[15px] px-[15px] lg:px-0 lg:pt-0 pt-[15px] mr-[81px] lg:mr-[63px] lg:pl-[32px] lg:border-b-[1px] lg:mb-[-1px] lg:pb-[16px] lg:border-[#6151FF] cursor-pointer items-center flex gap-[9px] w-full">
            <p className="text-[#000] md:text-[21px] lg:text-[16px]  text-[16px] font-semibold leading-[16px] tracking-[-0.32px]">
              Women
            </p>
            <p className="text-[#FFF] py-[4px] px-[10px] max-w-[44px] w-full text-center bg-[#7567FF] rounded-[16px] text-[14px] font-normal leading-[14px] tracking-[-0.28px]">
              128
            </p>
          </div>
          <div className="flex gap-[81px] lg:gap-[80px]">
            {categoryText.map((text, index) => {
              return (
                <p
                  key={index}
                  className="text-[#808191] md:text-[21px] lg:text-[16px] cursor-pointer text-[16px] font-normal leading-[24px] tracking-[-0.32px]"
                >
                  {text.text}
                </p>
              );
            })}
          </div>
        </div>

        <div className="grid mb-[171.2px] md:grid-cols-2  lg:max-w-[1320px] lg:mb-0 grid-cols-1c lg:grid-cols-4c gap-[30px]">
          {categoryCards.map((c, index) => {
            return (
              <Card
                key={index}
                handleClickRemove={() => handleClickRemove(c)}
                handleClickLike={() => handleClickLike(c)}
                cardInfo={cardInfo}
                img={c.img}
                title={c.title}
                price={c.price}
                type={c.type}
                logo={c.logo}
                className={c.className}
                titleClassName={c.titleClassName}
                typeClassName={c.typeClassName}
                priceClassName={c.priceClassName}
                logoClassName={c.logoClassName}
                className2={c.className2}
                classNamePb={c.classNamePb}
              />
            );
          })}
        </div>

        <div className="ml-[564px] hidden lg:flex mr-[563px] max-w-[163px] w-full mt-[55px] mb-[107px]">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Market;
