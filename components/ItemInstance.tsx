import React from "react";
import AlergyInfo from "./AlergyInfo";

function ItemInstance(name: any) {
  return (
    <div className="grid grid-cols-5 items-center gap-2 p-4 h-[138px] w-[595px] ">
      <div className="rounded bg-red-500 h-[96px] w-[96px]" />
      <div className=" col-span-3 h-[96px] ">
        <h2 className="pt-2 text-base font-Nunito font-bold">
          {name.name?.en}
        </h2>
        <h3 className=" text-sm font-Nunito ">{name.description?.en}</h3>
        <h3 className=" text-sm flex gap-4 font-Nunito">{name?.alergy}</h3>

        <h3 className="pt-2 text-base font-Nunito text-[#A874F2]">
          $ {name.price}
        </h3>
      </div>
    </div>
  );
}

export default ItemInstance;
