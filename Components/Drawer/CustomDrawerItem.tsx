import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
const CustomDrawerItem = (props: any) => {
  return (
    <DrawerItem
      label={props.ItemLabel}
      style={props.ItemStyle}
      onPress={props.ItemEvent}
    />
  );
};

export default CustomDrawerItem;
