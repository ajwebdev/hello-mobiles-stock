import  React from 'react';
import { Button, View, Text} from 'react-native';
import { Appbar } from 'react-native-paper';

export default function AppHeader({ navigation ) {
  
    return (
        <Appbar.Header>
        <Appbar.Action icon="menu" onPress={()=>navigation.toggleDrawer()} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify"  />
        <Appbar.Action icon="dots-vertical"  />
      </Appbar.Header>
    );
  }