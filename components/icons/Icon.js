import React from "react";

import Soybean from "./ico_soybean.svg";
import Vegan from "./ico_vegan.svg";
import TransFatFree from "./ico_transfat_free.svg";
import Additives from "./ico_additives.svg";
import AlcoholFree from "./ico_alcohol_free.svg";
import Alcohol from "./ico_alcohol.svg";
import AlmondFree from "./ico_almond_free.svg";
import Almond from "./ico_almond.svg";
import Barley from "./ico_barley.svg";
import BivalvesFree from "./ico_bivalves_free.svg";
import Bivalves from "./ico_bivalves.svg";
import BroadBean from "./ico_broad_bean.svg";
import Vegetarian from "./ico_vegeterian.svg";
import CaffeineFree from "./ico_caffeine-free.svg";
import Caffeine from "./ico_caffeine.svg";
import Cashew from "./ico_cashew.svg";
import Celery from "./ico_celety.svg";
import Cheese from "./ico_cheese.svg";
import Chilled from "./ico_chilled.svg";
import ChocolateFree from "./ico_chocolate-free.svg";
import Chocolate from "./ico_chocolate.svg";
import Crustaceous from "./ico_crustaceous.svg";
import DairyFree from "./ico_dairy_free.svg";
import Mustard from "./ico_mustard.svg";
import TransFat from "./ico_transfat.svg";
const iconTypes = {
  soybean: Soybean,
  vegan: Vegan,
  transfat: TransFat,
  additives: Additives,
  "transfat-free": TransFatFree,
  "alcohol-free": AlcoholFree,
  alchohol: Alcohol,
  "almond-free": AlmondFree,
  almond: Almond,
  barley: Barley,
  "bivalves-free": BivalvesFree,
  bivalves: Bivalves,
  "broad-bean": BroadBean,
  "caffeine-free": CaffeineFree,
  caffeine: Caffeine,
  vegetarian: Vegetarian,
  cashew: Cashew,
  celery: Celery,
  cheese: Cheese,
  chilled: Chilled,
  "chocolate-free": ChocolateFree,
  chocolate: Chocolate,
  crustaceous: Crustaceous,
  "dairy-free": DairyFree,
  mustard: Mustard,
};
// ilk 3'ü için çalıştı ama geri kalan hala calısmıyor (soybeans vegan ve tranfat-free)

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  if (Icon) return <Icon {...props} />;
  else {
    return <div></div>;
  }
};

export default IconComponent;
