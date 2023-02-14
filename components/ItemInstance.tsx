import Image from "next/image";
import React from "react";
import Icon from "../components/icons/icon";
import Prices from "../components/Prices";

//Utkunun attığı linke bak yeniden https://codesandbox.io/s/old-dust-3tpvve?file=/src/App.js

function ItemInstance(item: any) {
  return (
    <div className="grid grid-rows-1 gap-x-0">
      <div className="grid grid-cols-5 items-center gap-2 p-4 h-[138px] w-[595px] ">
        <div className="rounded bg-red-500 h-[96px] w-[96px]" />
        <div className=" col-span-3 h-[96px] ">
          <h2 className="pt-2 text-base font-Nunito font-bold">
            {item?.item?.name?.en}
          </h2>
          <h3 className=" text-sm font-Nunito text-ellipsis">
            {item?.item?.description?.en}
          </h3>
          <div className="text-sm flex items-center gap-4 font-Nunito">
            {item?.item?.ingredientWarnings?.map((op: string) => (
              <div
                key={op}
                className="grid grid-flow-col gap-x-0.5 space-x-0 items-center justify-center capitalize"
              >
                {op && <Icon name={op}></Icon>}
                <h3 className="col-span-2 px-1 text-xs">{op}</h3>
                {/*There is no 'new' icon I can add or a data piece that would define the existance of this new svg thus I did not made such loop*/}
              </div>
            ))}
          </div>
          <div>
            <h3 className="grid grid-flow-col pt-2 text-sm font-Nunito">
              {item?.item?.prices?.map((itemPriceInfo: any) => (
                <div className=" flex flex-grow items-center text-black text-sm gap-x-1 capitalize">
                  {itemPriceInfo.definition.en}
                  <div className="text-[#A874F2]">
                    {/*{itemPriceInfo.currencies?.map((localPricing: any) => (
                      <a>{localPricing.symbol}</a>
                    ))}*/}
                    {/*This piece of code is not reliably working due to data sometimes has different currencies and sometimes has no such thing as currencies
                    thus I have to take further assistance for this part, for now it has to be hard coded, but logically this works*/}
                    $
                  </div>
                  <div className="text-[#A874F2] text-base ">
                    {itemPriceInfo.value}
                  </div>
                </div>
              ))}
            </h3>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
    </div>
  );
}
{
  /*{i.ingredientWarnings?.map(
                          (
                            op: string //not working, the map function doesn't work because name.ingfirientWarnings is "undefined"
                          ) => (
                            <div className="flex">
                              <Image
                                src={`ico_${op}.svg`}
                                alt={""}
                                width={24}
                                height={24}
                              />
                              <h3 key={i._id}>{op}</h3>
                            </div>
                          )
                        )}*/
}

export default ItemInstance;
