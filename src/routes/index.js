import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PagerView from 'react-native-pager-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  TabActionHelpers,
  TabNavigationState,
  TabRouter,
  TabRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FavoriteScreen from '../screens/favorite';
import LiveScreen from '../screens/live';
import Home from '../screens/home';
import SettingScreen from '../screens/setting';
import homee from '../screens/homee';
import BottomTabNavigator from '../screens/combine';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnPresss from './../screens/onpress';
import OnClickk from './bottombarnavigation';
import TopBarNavigator from './topbarnavigation';
import WebVieww from './webvieww';
import LiveTv from '../screens/livetv';
import YouTubee from '../screens/youtubee';


const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stackk= createNativeStackNavigator();
const Routes = () => {

//  function TopTabFun() {
//   return (
//          <SafeAreaProvider>
//          <TopBarNavigator/>
         
//          </SafeAreaProvider>
//          );}

function FavoriteScreenn() {
    return (
      <NavigationContainer independent={true}>
        <Stackk.Navigator  screenOptions={{ headerShown:false,initialRouteName:'Favorite'}} >
        <Stackk.Screen name="Favorite" component={FavoriteScreen} />
        <Stackk.Screen name="OnPresss" component={OnPresss} />
      </Stackk.Navigator>
      </NavigationContainer>
      );}
     


function LiveTvv() {
        return (
          <NavigationContainer independent={true}>
            <Stackk.Navigator  screenOptions={{ headerShown:false,initialRouteName:'YouTubee'}} >
            <Stackk.Screen name="YouTubee" component={YouTubee} />
            <Stackk.Screen name="LiveTv" component={LiveTv} />
          </Stackk.Navigator>
          </NavigationContainer>
          );}



 function OutSide({navigation}) {
        return (
          <NavigationContainer independent={true}>
            <Stackk.Navigator  screenOptions={{ headerShown:false,initialRouteName:'TopBarNavigator'}} >
            <Stackk.Screen name="TopBarNavigator" component={TopBarNavigator} />
            {/* <Tab.Screen name="WebVieww" component={WebVieww} /> */}
          </Stackk.Navigator>
          </NavigationContainer>
          );}


    return (
      <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'All News') {
          iconName = focused ? 'md-layers' : 'md-layers-outline';
        }
        else if (route.name === 'Home') {
          iconName = focused ? 'md-home' : 'md-home-outline';
        }
        else if (route.name === 'Live') {
          iconName = focused ? 'md-easel' : 'md-easel-outline';
        }
        else if (route.name === 'Local') {
          iconName = focused ? 'ios-snow' : 'ios-snow-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },activeTintColor: 'black',
      inactiveTintColor: 'gray',
      headerShown:false
    })}
    > 
      <Tab.Screen name="All News" component={FavoriteScreenn}/>
      <Tab.Screen name="Home" component={OutSide} />
      <Tab.Screen name="Live" component={LiveTvv} />
      <Tab.Screen name="Local" component={SettingScreen} />
      
      
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Routes

 
