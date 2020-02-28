import 'react-native-gesture-handler';
import * as React from 'react';
import HomeScreen from './screens/homeScreen/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/profile/profileScreen';
import groupsController from './screens/groups/groupsController';
import AddGroup from './screens/addGroup/addGroupController';
import GroupDetailScreen from './screens/groupDetail/groupDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';


const GroupStack = createStackNavigator();

function GroupFlow() {
  return(
    <GroupStack.Navigator headerMode={'screen'} initialRouteName={'GroupList'}>
      <GroupStack.Screen name={'Groups'} component={groupsController}/>
      <GroupStack.Screen name={'AddGroup'} component={AddGroup}/>
      <GroupStack.Screen name={'GroupDetail'} component={GroupDetailScreen} />
    </GroupStack.Navigator>
  );
}

const MainTab = createBottomTabNavigator();
function MainApp() {
  
  return(
    <MainTab.Navigator initialRouteName={'Home'} screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;
          if(route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Profile') {
            iconName = 'ios-person';
          } else if (route.name === 'Groups') {
            iconName = 'ios-contacts';
          }
          return <Ionicons name={iconName} size={25} color={focused ? 'blue' : null} />
        }
      })}
      tabBarOptions={{
        showLabel: false
      }}
    >
      <MainTab.Screen name={'Profile'} component={ProfileScreen}/>
      <MainTab.Screen name={'Home'} component={HomeScreen} />
      <MainTab.Screen name={'Groups'} component={GroupFlow}/>
    </MainTab.Navigator>
  );

}

const Stack = createStackNavigator();

export default function App(){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} >
            <Stack.Screen name={'MainApp'} component={MainApp}/>
        </Stack.Navigator>
      </NavigationContainer>
     </SafeAreaProvider>
  );
}



