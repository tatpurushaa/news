import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import home from './home';
import OnPresss from './onpress';

const StackNavigation = createNativeStackNavigator()

function Routess() {
    
   return(
          <NavigationContainer>
            <StackNavigation.Navigator screenOptions={{ headerShown:true,initialRouteName:'First'}}>
              <StackNavigation.Screen name='First' component={home} independent={true}/>
              <StackNavigation.Screen name='OnPresss' component={OnPresss} independent={true}/>
             </StackNavigation.Navigator>  
          </NavigationContainer>
      )
  }
  
  export default Routess;