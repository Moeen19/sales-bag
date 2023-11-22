import { useState, useEffect } from "react";
import CardPinned from "./CardPinned.jsx";

function PinnedItems() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const cloth = JSON.parse(localStorage.getItem("my-clothes"));
    if (cloth) {
      setClothes(cloth);
    }
  }, []);

  const handleClickRemove = (item) => {
    let remArr = clothes.filter((cloth) => {
      return cloth.id !== item.id;
    });
    setClothes(remArr)
    localStorage.setItem("my-clothes", JSON.stringify(remArr));
  };

  const renderPinned = clothes.map((card, index) => {
    return (
      <CardPinned
        handleClickRemove={() => handleClickRemove(card)}
        key={index}
        title={card.title}
        price={card.price}
        img={card.img}
        logo={card.logo}
        type={card.type}
      />
    );
  });

  return (
    <div className="overflow-x-hidden h-screen max-w-[1472px] pt-[90px] lg:pt-[84px] px-6 lg:pl-[84px] w-full">
      <div className="gap-[719px] mt-[47px] mb-[50px] hidden lg:flex">
        <div className="max-w-[292px] w-full">
          <p className="text-[#808191] mb-[8px] text-[24px] font-normal leading-[24px] tracking-[-0.48px]">
            SalesBag
          </p>
          <h1 className="text-[#000] text-[48px] font-semibold leading-[56px] tracking-[-0.96px]">
            Pinned Items
          </h1>
        </div>
        <div className="text-[#6151FF] mt-[68px] flex gap-[23px] font-normal leading-[20px] tracking-[-0.32px] text-[16px]">
          <p className="cursor-pointer underline-offset-[4px] underline">
            Select pinned items
          </p>
          <p className="cursor-pointer underline-offset-[4px] underline">
            Start New Chat
          </p>
        </div>
      </div>
      
      <h1 className="visible lg:hidden my-[32px] text-[20px] leading-[24px] font-semibold tracking-[-0.32px]">Pinned Items</h1>

      <div className="grid grid-cols-2c md:grid-cols-2 lg:grid-cols-4c gap-[30px]">
        {renderPinned}
      </div>
    </div>
  );
}

export default PinnedItems;
