import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './component/Home';
import Detail from './component/Detail';
import Comments from './component/Comments';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{title: 'Detail'}}
          />
          <Stack.Screen
            name="Comments"
            component={Comments}
            options={{title: 'Comments'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
