import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DrawerToggler = (props:any) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Icon
          name="bars"
          size={25}
          color="white"
          style={{ marginLeft: 10, marginTop: 8 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerToggler;
