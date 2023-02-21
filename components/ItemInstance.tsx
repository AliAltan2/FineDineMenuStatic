import Image from "next/image";
import React from "react";
import Icon from "../components/icons/icon";

//Utkunun attığı linke bak yeniden https://codesandbox.io/s/old-dust-3tpvve?file=/src/App.js

{
  /*const myLoader = ({ src, width }) => {
  return `https://media.finedinemenu.com/${width}x${width}/${src}`;
};*/
}

function ItemInstance(item: any) {
  return (
    <div className="flex flex-col gap-y-5">
      {" "}
      {/*Row gap nedense dinamik olarak uzatmıyor*/}
      <div className="flex flex-row items-center h-auto w-[595px] ">
        {/*The issue here is due to thıs containner being hardcoded, ıt must be iteractable*/}

        <Image
          src={`https://media.finedinemenu.com/96x96/${item?.item?.image}`}
          alt={""}
          unoptimized={true}
          quality={100}
          width="96"
          height="96"
          className="rounded-md items-center"
        />
        <div className="ml-3 h-[96px] my-4 ">
          <h2 className="text-base font-Nunito font-bold">
            {item?.item?.name?.en}
          </h2>
          <h3 className="mb-2 text-sm font-Nunito text-ellipsis ">
            {item?.item?.description?.en}
          </h3>
          <div className="mb-[8px] text-sm flex items-center gap-4 font-Nunito">
            {item?.item?.ingredientWarnings?.map((op: string) => (
              <div key={op} className="flex flex-row items-center ">
                {op && <Icon name={op}></Icon>}
                <h3 className="px-1 text-xs">{op}</h3>
                {/*There is no 'new' icon I can add or a data piece that would define the existance of this new svg thus I did not made such loop*/}
              </div>
            ))}
          </div>
          <div>
            <h3 className="flex text-sm font-Nunito">
              {item?.item?.prices?.map((itemPriceInfo: any) => (
                <div className=" flex mr-4 flex-row items-center text-black text-sm gap-x-2 capitalize">
                  {itemPriceInfo.definition.en}
                  <div className="text-[#A874F2] text-base items-center">
                    {/*{itemPriceInfo.currencies?.map((localPricing: any) => (
                      <a>{localPricing.symbol}</a>
                    ))}*/}
                    {/*This piece of code is not reliably working due to data sometimes has different currencies and sometimes has no such thing as currencies
                    thus I have to take further assistance for this part, for now it has to be hard coded, but logically this works*/}
                    ${itemPriceInfo.value.toFixed(2)}
                  </div>
                </div>
              ))}
            </h3>
          </div>
        </div>
      </div>
      <hr className=" h-px bg-gray-200 border-0"></hr>
    </div>
  );
}

export default ItemInstance;
