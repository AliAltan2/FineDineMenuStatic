import { useQuery } from "react-query";
import axios from "axios";
import RQMenu from "./RQMenu";
import React from "react";

export const RQToken = () => {
  let menu_id, tokenData;
  let payLoad = {
    shop_id: "Pl0Y-JJdN",
    menu_id: "63f76d7d2e52b60014670ba3",
  }; //This will be edited later obviously

  const { isLoading, data } = useQuery("token-info", () => {
    return axios.post(
      "https://api-staging.finedinemenu.com/v2/static-menu/auth",
      payLoad
    );
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <React.Fragment>
      {(menu_id = data.data.menu._id)}
      {(tokenData = data.data.token)}
      <RQMenu tokenData={tokenData} menu_id={menu_id} />
    </React.Fragment>
  );
};
export default RQToken;
