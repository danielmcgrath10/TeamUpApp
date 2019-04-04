import React, { Component } from 'react';

import HomeScreen from './controllers/homeScreen';
import AddGroup from './controllers/addGroupController';
import SearchScreen from './controllers/searchController';
import groupsController from './controllers/groupsController';

import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" size={22} />      
      )
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" size={22} />      
      )
    }
  },
  Groups: {
    screen: groupsController,
    navigationOptions: {
      tabBarLabel: 'Your Groups',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-contacts' size={24}/>
      )
    }
  }
}, {
    initialRouteName: 'Home'
});
export default createAppContainer(TabNavigator);