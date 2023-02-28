import React from "react";
import Logo from "../public/Logo.png";
import Image from "next/image";

function Header(imageUrl: any, name: any, explanation: any) {
  return (
    <header>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"https://picsum.photos/200/300"}
          alt={""}
          width={132}
          height={105}
          style={{ objectFit: "contain" }}
          className="h-[105px] w-[132px] flex flex-wrap content-around"
        />
        <h2 className="pt-4  font-Nunito font-bold">{name}</h2>
        <p className="pt-1 text-sm font-Nunito w-1/4 text-center">
          {explanation}
        </p>
      </div>
    </header>
  );
}

export default Header;
