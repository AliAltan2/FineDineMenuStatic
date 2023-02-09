import React from "react";

import Soybean from "./ico_soybean.svg";
import Vegan from "./ico_vegan.svg";
import TransFatFree from "./ico_transfat_free.svg";

const iconTypes = {
  soybean: Soybean,
  vegan: Vegan,
  "transfat-free": TransFatFree,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
