import Image from "next/image";
import React from "react";

export default function MenuItem(names: any) {
  return (
    <div className="grid grid-rows-3 justify-items-center items-center p-4">
      <div className="pt-4  font-Nunito font-bold">{names.names.en}</div>
      <h3 className="pt-1 text-sm font-Nunito">{names.description.en}</h3>
    </div>
  );
}
