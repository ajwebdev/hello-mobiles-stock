import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet, Image } from "react-native";
import {
  useTheme,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function DrawerContent(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row"}}>
              <Image
                source={require( "../../assets/hello-mobiles.png" )}
                style={{ width:300, height: 100 }}
              />
            
            </View>
          </View>

          <DrawerItem
            // icon={({ color, size }) => (
            //   <Icon
            //     name="home-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Home" style={styles.label}
            onPress={() => {
              props.navigation.navigate("DashBoard");
            }}
          />
          <DrawerItem
            // icon={({ color, size }) => (
            //   <Icon
            //     name="account-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Add Accessories"
            onPress={() => {
              props.navigation.navigate("DashBoard");
            }}
          />
          <DrawerItem
            // icon={({ color, size }) => (
            //   <Icon
            //     name="bookmark-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Add Items"
            onPress={() => {
              props.navigation.navigate("DashBoard");
            }}
          />
          {/* <DrawerItem
            // icon={({ color, size }) => (
            //   <Icon
            //     name="List Items"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Settings"
            onPress={() => { props.navigation.navigate('DashBoard') }}
          /> */}
          <DrawerItem
            // icon={({ color, size }) => (
            //   <Icon
            //     name="account-check-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Report"
            onPress={() => {
              props.navigation.navigate("DashBoard");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

//Styles for  DrawerItems
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 0,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  label:{
    fontWeight: "bold",
    fontFamily:"Roboto"
  }
});
