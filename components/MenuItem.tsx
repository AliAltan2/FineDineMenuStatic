import Image from "next/image";
import React from "react";

export default function MenuItem(names: any) {
  return (
    <div className="grid justify-items-center items-center">
      <div className="pt-4 font-Nunito text-xl font-semibold">
        {names.names.en}
      </div>
      <h3 className="pt-1 text-base font-Nunito">{names.description.en}</h3>
      <h3 className="pt-1 text-sm font-Nunito">{names?.note?.en}</h3>
    </div>
  );
}
