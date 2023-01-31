import React from "react";
import Image from "next/image";

import Data from "../public-menu.json";
function MenuBox() {
  return (
    <div className="grid grid-row-4 justify-items-center items-center p-4 space-y-4">
      <div className="text-4xl font-semibold font-Nunito">
        {Data.map((post) => {
          return (
            <div key={post._id}>{post.type === "menu" && post.name.en}</div>
          );
        })}
      </div>
      <h2 className="text-2xl font-Nunito ">
        {Data.map((post) => {
          return (
            <div key={post._id}>
              {post.type === "menu" && post.description.en}
            </div>
          );
        })}
      </h2>
      <h2 className="text-xl font-Nunito text-gray-400">
        {Data.map((post) => {
          return (
            <div key={post._id}>{post.type === "menu" && post.note?.en}</div>
          );
        })}
      </h2>
      {/*The image component has to change, becase in it's current version this is not mobile friendly*/}
      <div className="relative h-96 min-w-[120px]">
        const image
        <Image
          src={"https://picsum.photos/563/120"}
          alt={""}
          width={563}
          height={120}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default MenuBox;
