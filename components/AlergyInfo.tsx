import Image from "next/image";
import React from "react";

function AlergyInfo() {
  return (
    <div className="grid ">
      <div className="flex">
        {/*This has to be replicatable*/}
        <Image />
        <div className="px-2 text-sm"></div>
      </div>
    </div>
  );
}

export default AlergyInfo;
