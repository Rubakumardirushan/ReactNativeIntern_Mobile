import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './Login';
import About from './About';
import Sort from './Sort ';
import Search from './Search';
import Limit from './Limit';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login Page">
      <Stack.Screen name="Login Page" component={Login} />
      <Stack.Screen name="List all available products" component={About} />
      <Stack.Screen name="sortlist" component={Sort}/>
      <Stack.Screen name="SearchScreen" component={Search}/>
      <Stack.Screen name="LimitScreen" component={Limit}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
