import React from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './controllers/homeScreen/homeScreen';
import AddGroup from './controllers/addGroup/addGroupController';

const RootNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    AddGroup: {screen: AddGroup}
},{
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;