import React, { Component } from 'react';
import HomeScreen from './controllers/homeScreen/homeScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
