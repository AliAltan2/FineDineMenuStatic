import React from "react";
import Image from "next/image";
import Icon from "../components/icons/icon";

function NoMenuItemInstance(item: any) {
  return (
    <div className="w-[595px]">
      <div className="flex flex-row items-start justify-start">
        {item?.item?.image ? (
          <Image
            src={`https://media.finedinemenu.com/96x96/${item?.item?.image}`}
            unoptimized={true}
            quality={100}
            alt={""}
            width="96"
            height="96"
            className="rounded-md items-center"
          />
        ) : (
          void 0
        )}
        <div className="flex flex-col items-start justify-start ">
          <div className="text-sm my-4 ml-3 w-[455px]">
            {item.item.description.en.replace(/(<([^>]+)>)/gi, "")}
          </div>
          <div className="flex flex-row items ml-3">
            {item?.item?.ingredientWarnings?.map((op: string) => (
              <div key={op} className="flex items-center space-x-1 ml-1">
                {op && <Icon name={op}></Icon>}
                <h3 className="px-1 text-xs">{op}</h3>
                {/*There is no 'new' icon I can add or a data piece that would define the existance of this new svg thus I did not made such loop*/}
              </div>
            ))}
          </div>
          <div className="ml-3 h-[96px] my-4 text-[#A874F2] text-base items-center">
            $ {item.item.price.toFixed(2)}
          </div>
        </div>
      </div>
      <hr className=" h-px bg-gray-200 border-0"></hr>
    </div>
  );
}

export default NoMenuItemInstance;
