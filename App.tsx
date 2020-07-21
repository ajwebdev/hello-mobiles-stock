import * as React from 'react';
import {StyleSheet,View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from  './Components/Drawer/Drawer';
import AppHeader from  './Components/Header/AppHeader';

const styles = StyleSheet.create({
  Container: { flex: 1, alignItems: 'center', justifyContent: 'center' },


})



export default function App() {

  return (
    <NavigationContainer>
    
    <CustomDrawer/>
    </NavigationContainer>
  );
}