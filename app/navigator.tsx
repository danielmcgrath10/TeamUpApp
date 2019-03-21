import React, { Component } from 'react';
import HomeScreen from './controllers/homeScreen';
import AddGroup from './controllers/addGroupController';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" size={24} />      
      )
    }
  },
  AddGroup: {screen: AddGroup}
}, {
    initialRouteName: 'Home'
});
export default createAppContainer(TabNavigator);