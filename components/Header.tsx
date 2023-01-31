import React from "react";
import Logo from "../public/Logo.png";
import Image from "next/image";

function Header() {
  return (
    <header className="grid grid-row-3 justify-items-center items-center p-4">
      <Image
        src={Logo}
        alt={""}
        style={{ objectFit: "contain" }}
        className="h-[105px] w-[132px] flex flex-wrap content-around"
      />
      <h2 className="pt-4  font-Nunito font-bold">Gastronome</h2>
      <p className="pt-1 text-sm font-Nunito">
        Lorem ipsum dolor sit amet, lorem iriure nominavi eu eos. Quo no duis
        commune.
      </p>
    </header>
  );
}

export default Header;
