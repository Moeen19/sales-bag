import "swiper/css";
import "../swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, History } from "swiper/modules";
import "swiper/css/pagination";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import suit13w from "../images/Rectangle 11 (11).png";
import suit14w from "../images/Rectangle 11 (12).png";
import suit15w from "../images/Rectangle 11 (13).png";
import suit16w from "../images/Rectangle 11 (14).png";
import suit1m from "../images/Rectangle 11 (15).png";
import suit2m from "../images/Rectangle 11 (16).png";
import suit3m from "../images/Rectangle 11 (17).png";
import suit4m from "../images/Rectangle 11 (18).png";
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
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit14w,
    logo: JunaidLogo,
    title: "Junaid Jamshed",
    type: "Pret",
    price: "PKR 4999",
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit15w,
    logo: GulLogo,
    title: "Gul Ahmed",
    type: "Bridal Collection",
    price: "PKR 12600",
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit16w,
    logo: KhaadiLogo,
    title: "Khaadi",
    type: "Unstitched",
    price: "PKR 6600",
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit15w,
    logo: GulLogo,
    title: "Gul Ahmed",
    type: "Bridal Collection",
    price: "PKR 12600",
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit16w,
    logo: KhaadiLogo,
    title: "Khaadi",
    type: "Unstitched",
    price: "PKR 6600",
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit13w,
    logo: SapphireLogo,
    title: "Sapphire",
    type: "Unstitched",
    price: "PKR 3600",
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
    id: Math.floor(Math.random() * 1000),
  },
  {
    img: suit14w,
    logo: JunaidLogo,
    title: "Junaid Jamshed",
    type: "Pret",
    price: "PKR 4999",
    className:"sm:max-w-[369px] sm:px-[18.5px] sm:pt-[18.5px]",
    titleClassName: "sm:text-[17.36px] sm:leading-[24.6px]",
    typeClassName: "sm:leading-[19.84px] sm:text-[14.88px]",
    priceClassName: "sm:text-[17.36px] sm:leading-[24.8px]",
    logoClassName: "sm:max-w-[49.6px] sm:max-h-[49.6px]",
    className2: "sm:gap-[14.76px] sm:max-w-[202px] sm:w-full",
    classNamePb: "sm:pb-[24px]",
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
    <div className="sm:pl-[31px] md:pl-[84px] w-full">
      <div className="overflow-x-hidden pt-[84px] max-w-[1472px] w-full">
        <div className="max-w-[292px] sm:hidden md:flex md:flex-col w-full mt-[47px] mb-[50px]">
          <p className="text-[#808191] mb-[8px] text-[24px] font-normal leading-[24px] tracking-[-0.48px]">
            SalesBag
          </p>
          <h1 className="text-[#000] text-[48px] font-semibold leading-[56px] tracking-[-0.96px]">
            Market Place
          </h1>
        </div>

        <div className="max-w-[1430px] sm:ml-[5px] sm:mt-[36px] md:mt-0 md:ml-0 w-full ">
          <Swiper
            className="max-w-[1430px] w-full"
            modules={[Pagination, History]}
            slidesPerView={2.18}
            pagination={{ clickable: true }}
            breakpoints={{
              400: {
                width: 358.38,
                spaceBetween: 35.62,
                slidesPerView: 1,
              },
              768: {
                width: 1430,
                spaceBetween: 30,
                slidesPerView: 2.18,
              },
            }}
          >
            {slide1.map((s, index) => {
              return (
                <SwiperSlide className="max-w-[608px]" key={index}>
                  <div className="relative">
                    <img src={s.img} alt="sImg" />
                    <div className="absolute sm:hidden md:flex bg-cbg max-w-[535px] left-[36px] bottom-[-10px] -z-10 w-full rounded-[70px] min-h-[84px] blur-[25px]"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div>
          <h1 className="text-[#000] sm:mt-[83px] md:mt-[102px] sm:mb-[24px] md:mb-[50px] sm:text-[16px] md:text-[24px] sm:tracking-[-0.32px] md:tracking-[-0.48px] font-semibold leading-[24px]">
            Top Trending Woman
          </h1>
          <div className="grid sm:grid-cols-4cs md:grid-cols-4c sm:gap-[16px] md:gap-[30px]">
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

        <div className="sm:mt-[24px] md:mt-[50px] sm:mb-[24px] md:mb-[81px]">
          <h1 className="text-[#000] sm:mb-[24px] md:mb-[50px] md:text-[24px] sm:text-[16px] sm:tracking-[-0.32px] md:tracking-[-0.48px] font-semibold leading-[24px]">
            Top Trending Men
          </h1>
          <div className="grid sm:grid-cols-4cs md:grid-cols-4c sm:gap-[16px] md:gap-[30px]">
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

        <div className="flex sm:items-center md:items-start md:border-b-[1px] sm:mb-[24px] md:mb-[45px] md:border-[#E8E8E8] max-w-[1318px] w-full">
          <div className="sm:max-w-[141px] md:max-w-[165px] sm:bg-[#FFF] md:bg-none sm:rounded-[20px] md:rounded-none sm:pb-[15px] sm:px-[15px] md:px-0 md:pt-0 sm:pt-[15px] sm:mr-[81px] md:mr-[63px] md:pl-[32px] md:border-b-[1px] md:mb-[-1px] md:pb-[16px] md:border-[#6151FF] cursor-pointer items-center flex gap-[9px] w-full">
            <p className="text-[#000] text-[16px] font-semibold leading-[16px] tracking-[-0.32px]">
              Women
            </p>
            <p className="text-[#FFF] py-[4px] px-[10px] max-w-[44px] w-full text-center bg-[#7567FF] rounded-[16px] text-[14px] font-normal leading-[14px] tracking-[-0.28px]">
              128
            </p>
          </div>
          <div className="flex sm:gap-[81px] md:gap-[80px]">
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

        <div className="grid sm:mb-[171.2px] md:mb-0 sm:grid-cols-1c md:grid-cols-4c gap-[30px]">
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

        <div className="ml-[564px] sm:hidden md:flex mr-[563px] max-w-[163px] w-full mt-[55px] mb-[107px]">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Market;
