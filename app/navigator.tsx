import React, { Component } from 'react';

import HomeScreen from './controllers/homeScreen/homeScreen';
import AddGroup from './controllers/addGroup/addGroupController';
import SearchScreen from './controllers/search/searchController';
import groupsController from './controllers/groups/groupsController';
import ProfileScreen from './controllers/profile/profileScreen';
import SettingsScreen from './controllers/settings/settingsScreen';

import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import GroupDetailScreen from './controllers/groupDetail/groupDetail';

const groupStack = createStackNavigator({
  groupsController: {
    screen: groupsController,
  },
  addGroup: {
    screen: AddGroup,
  },
  groupDetail: {
    screen: GroupDetailScreen
  }
}, {
  initialRouteName: 'groupsController',
  headerMode: 'none',
})

const profileStack = createStackNavigator({
  profileScreen: {
    screen: ProfileScreen
  },
  settings: {
    screen: SettingsScreen
  }
}, {
  initialRouteName: 'profileScreen',
  headerMode: 'none'
})

const homeStack = createStackNavigator({
  homeScreen: {
    screen: HomeScreen
  },
  profileScreen: {
    screen: profileStack
  },
  groupDetail: {
    screen: GroupDetailScreen
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
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        backgroundColor: '#f5f5f6'
      }
    }
});
export default createAppContainer(TabNavigator);