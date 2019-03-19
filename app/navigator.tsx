import React, { Component } from 'react';
import HomeScreen from './controllers/homeScreen/homeScreen';
import AddGroup from './controllers/addGroup/addGroupController';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  AddGroup: {screen: AddGroup}
}, {
    initialRouteName: 'Home',
});
export default createAppContainer(TabNavigator);