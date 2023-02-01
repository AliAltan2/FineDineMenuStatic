import Image from "next/image";
import React from "react";

function AlergyInfo(alergy: any) {
  return (
    <div>
      <div>
        {/*This has to be replicatable*/}
        {/*<Image />*/}
        <div className="px-2 text-sm">{alergy.alergy}</div>
      </div>
    </div>
  );
}

export default AlergyInfo;
