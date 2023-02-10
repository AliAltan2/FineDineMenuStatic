import Image from "next/image";
import React from "react";
import Icon from "../components/icons/icon";

//Utkunun attığı linke bak yeniden https://codesandbox.io/s/old-dust-3tpvve?file=/src/App.js

function ItemInstance(item: any) {
  return (
    <div className="grid grid-cols-5 items-center gap-2 p-4 h-[138px] w-[595px] ">
      <div className="rounded bg-red-500 h-[96px] w-[96px]" />
      <div className=" col-span-3 h-[96px] ">
        <h2 className="pt-2 text-base font-Nunito font-bold">
          {item?.item?.name?.en}
        </h2>
        <h3 className=" text-sm font-Nunito ">{item?.item?.description?.en}</h3>
        <div className="text-sm flex items-center gap-4 font-Nunito">
          {item?.item?.ingredientWarnings?.map(
            (
              op: string //not working, the map function doesn't work because name.ingfirientWarnings is "undefined"
            ) => (
              // svgler bu div'e giricek
              <div key={op} className="flex">
                {op && <Icon name={op}></Icon>}
                <h3 className="px-1">{op}</h3>
              </div>
            )
          )}
        </div>

        <h3 className="pt-2 text-base font-Nunito text-[#A874F2]">
          $ {item?.item?.price}
        </h3>
      </div>
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
