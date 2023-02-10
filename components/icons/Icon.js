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
import Vegetarian from "./ico_vegetarian.svg";
import CaffeineFree from "./ico_caffeine-free.svg";
import Caffeine from "./ico_caffeine.svg";
import Cashew from "./ico_cashew.svg";
import Celery from "./ico_celery.svg";
import Cheese from "./ico_cheese.svg";
import Chilled from "./ico_chilled.svg";
import ChocolateFree from "./ico_chocolate_free.svg";
import Chocolate from "./ico_chocolate.svg";
import Crustaceous from "./ico_crustaceous.svg";
import DairyFree from "./ico_dairy_free.svg";
import Mustard from "./ico_mustard.svg";
import Dairy from "./ico_dairy.svg";
import Dried from "./ico_dried.svg";
import TransFat from "./ico_transfat.svg";
import EggFree from "./ico_egg_free.svg";
import Egg from "./ico_egg.svg";
import Fish from "./ico_fish.svg";
import Fresh from "./ico_fresh.svg";
import Frozen from "./ico_frozen.svg";
import Garlic from "./ico_garlic.svg";
import Gluten from "./ico_gluten.svg";
import GmoFree from "./ico_gmo_free.svg";
import Halal from "./ico_halal.svg";
import HazelnutFree from "./ico_hazelnut_free.svg";
import Hazelnut from "./ico_hazelnut.svg";
import Healthy from "./ico_healthy.svg";
import Honey from "./ico_honey.svg";
import HotChilliPepper from "./ico_hotchilipepper.svg";
import Keto from "./ico_keto.svg";
import LactoseFree from "./ico_lactose_free.svg";
import Lactose from "./ico_laktose.svg";
import Lupins from "./ico_lupins.svg";
import MilkFree from "./ico_milk_free.svg";
import Milk from "./ico_milk.svg";
import MolluscsFree from "./ico_molluscs_free.svg";
import Molluscs from "./ico_molluscs.svg";
import MushroomFree from "./ico_mushroom_free.svg";
import Mushroom from "./ico_mushroom.svg";
import NutFree from "./ico_nut_free.svg";
import Nuts from "./ico_nuts.svg";
import Onions from "./ico_onion.svg";
import Organics from "./ico_organic.svg";
import Peanuts from "./ico_peanuts.svg";
import Pepperoni from "./ico_pepperoni.svg";
import Pork from "./ico_pork.svg";
import Raw from "./ico_raw.svg";
import SeaFoodFree from "./ico_seafood_free.svg";
import SeaFood from "./ico_seafood.svg";
import Seed from "./ico_seed.svg";
import Sesame from "./ico_sesame.svg";
import Spicy from "./ico_spicy.svg";
import SugarFree from "./ico_sugar_free.svg";
import Sugar from "./ico_sugar.svg";
import Sulfites from "./ico_sulfites.svg";
import SulfurDioxide from "./ico_sulfur_dioxide.svg";
import Sustainability from "./ico_sustainability.svg";
import TruffleOilFree from "./ico_truffle_oil_free.svg";
import TruffleOil from "./ico_truffle_oil.svg";
import UnderCooked from "./ico_undercooked_raw.svg";
import Vegeterian from "./ico_vegetarian.svg";
import Vinegar from "./ico_vinegar.svg";
import Vitality from "./ico_vitality.svg";

const iconTypes = {
  sustainability: Sustainability,
  "truffle-oil-free": TruffleOilFree,
  "truffle-oil": TruffleOil,
  undercooked: UnderCooked,
  vegetarian: Vegeterian,
  vinegar: Vinegar,
  vitality: Vitality,
  spicy: Spicy,
  "sugar-free": SugarFree,
  sugar: Sugar,
  sulfites: Sulfites,
  "sulfur-dioxide": SulfurDioxide,
  pork: Pork,
  raw: Raw,
  "seafood-free": SeaFoodFree,
  seafood: SeaFood,
  seed: Seed,
  sesame: Sesame,
  "nut-free": NutFree,
  nuts: Nuts,
  onions: Onions,
  organic: Organics,
  peanuts: Peanuts,
  pepperoni: Pepperoni,
  milk: Milk,
  "molluscs-free": MolluscsFree,
  molluscs: Molluscs,
  "mushroom-free": MushroomFree,
  mushroom: Mushroom,
  keto: Keto,
  "laktose-free": LactoseFree,
  laktose: Lactose,
  lupins: Lupins,
  "milk-free": MilkFree,
  halal: Halal,
  "hazelnut-free": HazelnutFree,
  hazelnut: Hazelnut,
  healthy: Healthy,
  honey: Honey,
  chilipepper: HotChilliPepper,
  "gmo-free": GmoFree,
  frozen: Frozen,
  garlic: Garlic,
  gluten: Gluten,
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
  dairy: Dairy,
  dried: Dried,
  "egg-free": EggFree,
  egg: Egg,
  fish: Fish,
  fresh: Fresh,
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
