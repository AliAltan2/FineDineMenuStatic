import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Data from "../public-menu.json";
import ItemInstance from "./ItemInstance";
import NoMenuItemInstance from "./NoMenuıItemInstance";

function MenuBox() {
  return (
    <div className="flex flex-row justify-center p-2">
      <div>
        <div className="font-Nunito items-center justify-center">
          {Data.map((post) => {
            return (
              <div className="font-Nunito">
                <div>
                  {post.type === "menu" ? (
                    <div
                      key={post._id}
                      className="flex flex-col items-center justify-center"
                    >
                      {post.children.map((c) => (
                        <div key={post._id}>
                          <Image
                            src={`https://media.finedinemenu.com/563x120/${c.image}`}
                            unoptimized={true}
                            quality={100}
                            alt={""}
                            width={563}
                            height={120}
                            className="rounded h-[120px] w-[563px] "
                          />

                          <MenuItem
                            names={c.name}
                            description={c.description}
                          />
                          {c.children.map((i) => (
                            <div key={i._id} className="items-center">
                              <ItemInstance item={i} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : post.type === "item" ? (
                    <div className="flex flex-col">
                      <MenuItem names={post.name} description={""}></MenuItem>

                      <NoMenuItemInstance item={post} />
                    </div>
                  ) : post.type === "anythingelse" ? (
                    <div></div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*The image component has to change, becase in it's current version this is not mobile friendly*/}
    </div>
  );
}

export default MenuBox;
