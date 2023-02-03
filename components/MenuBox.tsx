import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Data from "../public-menu.json";
import ItemInstance from "./ItemInstance";

function MenuBox() {
  return (
    <div className="grid grid-row-4 justify-items-center items-center p-4 space-y-4">
      <div className="h-96 min-w-[120px]">
        <div className="text-4xl font-semibold font-Nunito text-center">
          {Data.map((post) => {
            return (
              <div className="" key={post._id}>
                {post.type === "menu" && post.name.en}
              </div>
            );
          })}
        </div>
        <h2 className="text-center ">
          {Data.map((post) => {
            return (
              <div className="text-2xl font-Nunito" key={post._id}>
                {post.type === "menu" && post.description.en}
              </div>
            );
          })}
        </h2>
        <h2 className="text-center text-xl font-Nunito text-gray-400">
          {Data.map((post) => {
            return (
              <div key={post._id}>{post.type === "menu" && post.note?.en}</div>
            );
          })}
        </h2>
        {Data.map((post) => {
          return (
            <div key={post._id}>
              {/*Ternary operator is used to conditionally set the src attribute, depending if the*/}
              {post.children.map((c) => (
                <div key={post._id}>
                  {/*c.image actually works, but I don't have access to it thus I am using dummy images here*, simply change src with c.image I can't because I don't have access to it !*/}
                  {c.type === "section" && c.parentId === post._id ? (
                    <Image
                      src={"https://picsum.photos/563/120"}
                      alt={""}
                      width={563}
                      height={120}
                      className="rounded-lg"
                    />
                  ) : (
                    void 0
                  )}

                  <MenuItem names={c.name} description={c.description} />
                  {c.children.map((i) => (
                    <div key={i._id} className="items-center gap-2">
                      <ItemInstance item={i} />

                      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/*The image component has to change, becase in it's current version this is not mobile friendly*/}
    </div>
  );
}

export default MenuBox;
