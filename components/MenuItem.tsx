import Image from "next/image";
import React from "react";
import AlergyInfo from "./AlergyInfo";

import Data from "../public-menu.json";

export default function MenuItem() {
  return (
    <div className="grid grid-cols-5 items-center gap-2 p-4 h-[138px] w-[595px] ">
      <div className="rounded bg-red-500 h-[96px] w-[96px]" />
      <div className=" col-span-4 ">
        <h2 className=" text-base font-Nunito font-bold">Gazpacho</h2>
        <h3 className=" text-sm font-Nunito ">
          Rich gazpacho with herbs and spices
        </h3>
        {/*I need to use .map function to the JSON to add as many AlergyInfo components as needed in here*/}
        {}
        <AlergyInfo />
        <div></div>
      </div>
    </div>
  );
}
