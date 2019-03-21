import React, { Component } from 'react';
import HomeScreen from './controllers/homeScreen';
import AddGroup from './controllers/addGroupController';
import SearchScreen from './controllers/searchController';
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
  AddGroup: {
    screen: AddGroup,
    navigationOptions: {
      tabBarLabel: 'Create Group',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-add' size={22} />
      )
    }
  }
}, {
    initialRouteName: 'Home'
});
export default createAppContainer(TabNavigator);