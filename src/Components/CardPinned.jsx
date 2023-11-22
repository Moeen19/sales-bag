import HeartPurp from "../images/HeartPurp.svg";
import CheckCircle from "../images/CheckCircle.svg";

function CardPinned({ title, logo, type, price, img, handleClickRemove }) {
  return (
    <div className="max-w-[178px] md:max-w-[300px] max-h-[420px] bg-[#FFF] rounded-[12px] px-[15px] flex flex-col gap-[20px] pt-[15px] pb-[25px] w-full">
      <div className="relative">
        <img src={img} alt="cardImg"/>
        <div className="absolute top-[16px] left-[2px] md:left-[16px] flex gap-[84px] md:gap-[180px] max-w-[238px] w-full">
            <img className="cursor-pointer max-h-[24px]" alt="checkCircle" src={CheckCircle}/>
            <img onClick={handleClickRemove} className="cursor-pointer" alt="HeartImg" src={HeartPurp}/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-[12px] items-center md:w-full md:max-w-[202px]">
          <img className="max-w-[21.3px] min-h-[21.3px] w-full md:max-w-[40px] md:min-h-[40px]" src={logo} alt="logo"/>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[#000] text-[8px] md:text-[14px] font-semibold leading-[10.667px] md:leading-[20px]">
              {title}
            </p>
            <p className="text-[#808191] font-normal md:leading-[16px] text-[8px] leading-[8.533px] md:text-[12px]">
              {type}
            </p>
          </div>
        </div>
        <p className="text-[8px] leading-[10.667px] md:text-[14px] font-semibold md:leading-[20px] text-[#000]">
          {price}
        </p>
      </div>
    </div>
  );
}

export default CardPinned;
