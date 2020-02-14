import React, { Component } from 'react';
import HomeScreen from './screens/homeScreen/homeScreen';
import AddGroup from './screens/addGroup/addGroupController';
import TabNavigator from './navigator';
import { SafeAreaView } from 'react-navigation';
class App extends React.Component {
  render() {
    return(
        <TabNavigator />
    );
  }
}
export default App;