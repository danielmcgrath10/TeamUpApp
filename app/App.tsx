import React, { Component } from 'react';
import HomeScreen from './controllers/homeScreen';
import AddGroup from './controllers/addGroupController';
import TabNavigator from './navigator';
class App extends React.Component {
  render() {
    return(
      <TabNavigator />
    );
  }
}
export default App;