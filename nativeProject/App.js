import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login';
import Home from './components/home';
import AddEvent from './components/addEvent';
import Topbar from './components/topbar';
import History from './components/history';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{header:()=>null}}/>
        <Stack.Screen name='Home' component={Home} options={{ header: () => <Topbar />, headerLeft: null, }}/>
        <Stack.Screen name='AddEvent' component={AddEvent} options={{header:()=>null, gestureDirection: 'vertical'}}/>
      </Stack.Navigator>
      <Stack.Screen name='History' component={History}/>
    </NavigationContainer>
  );
}

export default App