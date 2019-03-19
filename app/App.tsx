import React, { Component } from 'react';
import HomeScreen from './controllers/homeScreen/homeScreen';
import AddGroup from './controllers/addGroup/addGroupController';
import TabNavigator from './navigator';
class App extends React.Component {
  render() {
    return(
      <TabNavigator />
    );
  }
}
export default App;