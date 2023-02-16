import Image from "next/image";
import React from "react";

function AlergyInfo(alergy: any) {
  return (
    <div>
      <div className="">
        <h2 className="px-2 text-sm">{alergy.alergy}</h2>
      </div>
    </div>
  );
}

export default AlergyInfo;
