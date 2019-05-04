import React, { Component } from 'react';

import HomeScreen from './controllers/homeScreen/homeScreen';
import AddGroup from './controllers/addGroup/addGroupController';
import SearchScreen from './controllers/search/searchController';
import groupsController from './controllers/groups/groupsController';
import ProfileScreen from './controllers/profile/profileScreen';

import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const groupStack = createStackNavigator({
  groupsController: {
    screen: groupsController,
  },
  addGroup: {
    screen: AddGroup,
  },
}, {
  initialRouteName: 'groupsController',
  headerMode: 'none',
})

const homeStack = createStackNavigator({
  homeScreen: {
    screen: HomeScreen
  },
  profileScreen: {
    screen: ProfileScreen
  }
}, {
  initialRouteName: 'homeScreen',
  headerMode: "none"
})


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
    screen: homeStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" size={22} />      
      )
    }
  },
  Groups: {
    screen: groupStack,
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