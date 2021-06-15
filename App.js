import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SScreen from './screens/SScreen';
import TScreen from './screens/TScreen';
import {createAppContainer} from  'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
    return(

      <AppContainer/> 
      
     
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  FaceBook:{screen:SScreen},
  Instagram:{screen:TScreen},
})
const AppContainer= createAppContainer(TabNavigator);