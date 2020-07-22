import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerToggler from "../Drawer/DrawerToggler";
import DrawerContent from "../Drawer/DrawerContent";
import HomeScreen from "../Screens/Home/HomeScreen";

const CustomDrawer = createDrawerNavigator();
const Drawer = (props: any) => {
  return (
    <CustomDrawer.Navigator
      initialRouteName="dashboard"
      drawerContent={DrawerContent}
    >
      <CustomDrawer.Screen name="dashboard" component={HomeScreen} />
    </CustomDrawer.Navigator>
  );
};
export default Drawer;
