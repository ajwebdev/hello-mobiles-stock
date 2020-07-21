import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//DrawerToggler contains Drawer Toggler
import DrawerToggler from '../Drawer/DrawerToggler';
//Drawer content contains Customized Drawer element
import DrawerContent from '../Drawer/DrawerContent'
import HomeScreen from '../Screens/Home/HomeScreen';


const CustomDrawer=createDrawerNavigator();


export default function Drawer(props: any) {
return(
  
   <CustomDrawer.Navigator initialRouteName="Home" drawerContentOptions={{
    activeTintColor: 'black',
    itemStyle: { marginVertical: 5,marginTop:10 },
  }} drawerContent={DrawerContent} >
   <CustomDrawer.Screen name="DashBoard"  component={HomeScreen} />

   </CustomDrawer.Navigator>

    
);

}