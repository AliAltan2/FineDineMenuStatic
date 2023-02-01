import React from "react";
import AlergyInfo from "./AlergyInfo";

function ItemInstance(name: any, description: any) {
  return (
    <div className="grid grid-cols-5 items-center gap-2 p-4 h-[138px] w-[595px] ">
      <div className="rounded bg-red-500 h-[96px] w-[96px]" />
      <div className=" col-span-4 ">
        <h2 className=" text-base font-Nunito font-bold">{name.name.en}</h2>
        <h3 className=" text-sm font-Nunito ">{name.description.en}</h3>
        <h4>{name.price}</h4>

        {/*I need to use .map function to the JSON to add as many AlergyInfo components as needed in here*/}

        {/*There is a need for a new component to handle the coming portions, */}
      </div>
    </div>
  );
}

export default ItemInstance;
