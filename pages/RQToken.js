import { useQuery } from "react-query";
import axios from "axios";
import RQMenu from "./RQMenu";
import React from "react";
import Header from "../components/Header";
export const RQToken = () => {
  let menu_id,
    tokenData,
    restautantName,
    restaurantDesc,
    restaurantLang,
    menuCurrency;
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
  {
    menu_id = data.data.shop._id;
    tokenData = data.data.token;
    restautantName = data.data.shop.name.en;
    restaurantDesc = data.data.shop.description.en;
    restaurantLang = data.data.default_language.code;
    menuCurrency = data.data.currency.symbol;
  }
  return (
    <React.Fragment>
      <RQMenu tokenData={tokenData} menu_id={menu_id} />
      {(restautantName, restaurantDesc, restaurantLang, menuCurrency)}
      {console.log("name of the place is " + data.data.shop.name.en)}
      {console.log("desc of the place is " + data.data.shop.description.en)}
      {console.log("lang of the place is " + data.data.default_language.code)}
      {console.log("note of the place is " + data.data.menu.note.en)}
      {console.log("currency of the place is " + data.data.currency.symbol)}
      {console.log("rest is about the menu itself")}
      {console.log("menu name is " + data.data.menu.name.en)}
      {console.log("menu desc is " + data.data.menu.description.en)}
      {console.log("menu note is " + data.data.menu.note.en)}
    </React.Fragment>
  );
};
export default RQToken;
