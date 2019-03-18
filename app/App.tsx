import React, { Component } from 'react';
import HomeScreen from './controllers/homeScreen/homeScreen';
import AddGroup from './controllers/addGroup/addGroupController';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  AddGroup: {
    screen: AddGroup
  }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
