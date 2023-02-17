import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Data from "../public-menu.json";
import ItemInstance from "./ItemInstance";

function MenuBox() {
  return (
    <div className="grid justify-items-center items-center p-2">
      <div className="h-96 min-w-[120px]">
        <div className="text-4xl font-semibold font-Nunito text-center">
          {Data.map((post) => {
            return (
              <div key={post._id}>{post.type === "menu" && post.name.en}</div>
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
              {post.children.map((c) => (
                <div key={post._id}>
                  {/*c.image actually works, but I don't have access to it thus I am using dummy images here*, simply change src with c.image I can't because I don't have access to it !*/}
                  {c.type === "section" && c.parentId === post._id ? (
                    <Image
                      src={`https://media.finedinemenu.com/1200x1200/${c.image}`}
                      unoptimized={true}
                      quality={100}
                      alt={""}
                      width={563}
                      height={120}
                      style={{}}
                      className="object-cover rounded-lg h-[120px] w-[563px] "
                    />
                  ) : (
                    void 0
                  )}
                  <MenuItem names={c.name} description={c.description} />
                  {c.children.map((i) => (
                    <div key={i._id} className="items-center">
                      <ItemInstance item={i} />
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
