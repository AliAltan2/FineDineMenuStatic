import React from "react";

import Soybean from "./ico_soybean.svg";
import Vegan from "./ico_vegan.svg";

const iconTypes = {
  soybean: Soybean,
  vegan: Vegan,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
