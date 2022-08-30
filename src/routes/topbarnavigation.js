import * as React from 'react';
import { Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PagerView from 'react-native-pager-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
// import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import {
           createNavigatorFactory,
           DefaultNavigatorOptions,
           ParamListBase,
           TabActionHelpers,
           TabNavigationState,
           TabRouter,
           TabRouterOptions,
           useNavigationBuilder,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BottomTabNavigator from '../screens/combine';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaProvider } from 'react-native-safe-area-context';



import TopNewsScreen from '../screens/tabscreens/TopNews';
import SportsScreen from '../screens/tabscreens/Sports';
import BeautyScreen from '../screens/tabscreens/Beauty';
import BusinessScreen from '../screens/tabscreens/Business';
import EconomicsScreen from '../screens/tabscreens/Economics';
import EnterScreen from '../screens/tabscreens/Entertainment';
import FinanceScreen from '../screens/tabscreens/Entertainment';
import FoodScreen from '../screens/tabscreens/Food';
import MusicScreen from '../screens/tabscreens/Music';
import PoliticsScreen from '../screens/tabscreens/Politics';
import ScienceScreen from '../screens/tabscreens/Science';
import TravelScreen from '../screens/tabscreens/Travel';
import OnClickk from './bottombarnavigation';
import WebVieww from './webvieww';

const Tab = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function LiveScreenn() {
       return (
         <NavigationContainer independent={true}>
           <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'TopNewsScreen'}} >
           <Tab.Screen name="TopNewsScreen" component={TopNewsScreen} />
           <Tab.Screen name="WebVieww" component={WebVieww} />
         </Tab.Navigator>
         </NavigationContainer>
         );}
         function SecondScreen() {
              return (
                <NavigationContainer independent={true}>
                  <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'SportsScreen'}} >
                  <Tab.Screen name="SportsScreen" component={SportsScreen} />
                  <Tab.Screen name="OnClickk" component={OnClickk} />
                </Tab.Navigator>
                </NavigationContainer>
                );}function ThirdScreen() {
                     return (
                       <NavigationContainer independent={true}>
                         <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'BeautyScreen'}} >
                         <Tab.Screen name="BeautyScreen" component={BeautyScreen} />
                         <Tab.Screen name="OnClickk" component={OnClickk} />
                       </Tab.Navigator>
                       </NavigationContainer>
                       );}function FourthScreenn() {
                            return (
                              <NavigationContainer independent={true}>
                                <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'BusinessScreen'}} >
                                <Tab.Screen name="BusinessScreen" component={BusinessScreen} />
                                <Tab.Screen name="OnClickk" component={OnClickk} />
                              </Tab.Navigator>
                              </NavigationContainer>
                              );}function FifthScreenn() {
                                   return (
                                     <NavigationContainer independent={true}>
                                       <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'EconomicsScreen'}} >
                                       <Tab.Screen name="EconomicsScreen" component={EconomicsScreen} />
                                       <Tab.Screen name="OnClickk" component={OnClickk} />
                                     </Tab.Navigator>
                                     </NavigationContainer>
                                     );}function SixthScreenn() {
                                          return (
                                            <NavigationContainer independent={true}>
                                              <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'EnterScreen'}} >
                                              <Tab.Screen name="EnterScreen" component={EnterScreen} />
                                              <Tab.Screen name="OnClickk" component={OnClickk} />
                                            </Tab.Navigator>
                                            </NavigationContainer>
                                            );}function SeaventhScreenn() {
                                                 return (
                                                   <NavigationContainer independent={true}>
                                                     <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'FinanceScreen'}} >
                                                     <Tab.Screen name="FinanceScreen" component={FinanceScreen} />
                                                     <Tab.Screen name="OnClickk" component={OnClickk} />
                                                   </Tab.Navigator>
                                                   </NavigationContainer>
                                                   );}function EighthScreenn() {
                                                        return (
                                                          <NavigationContainer independent={true}>
                                                            <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'FoodScreen'}} >
                                                            <Tab.Screen name="FoodScreen" component={FoodScreen} />
                                                            <Tab.Screen name="OnClickk" component={OnClickk} />
                                                          </Tab.Navigator>
                                                          </NavigationContainer>
                                                          );}function NinthScreenn() {
                                                               return (
                                                                 <NavigationContainer independent={true}>
                                                                   <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'MusicScreen'}} >
                                                                   <Tab.Screen name="MusicScreen" component={MusicScreen} />
                                                                   <Tab.Screen name="OnClickk" component={OnClickk} />
                                                                 </Tab.Navigator>
                                                                 </NavigationContainer>
                                                                 );}function TenthScreenn() {
                                                                      return (
                                                                        <NavigationContainer independent={true}>
                                                                          <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'TravelScreen'}} >
                                                                          <Tab.Screen name="TravelScreen" component={TravelScreen} />
                                                                          <Tab.Screen name="OnClickk" component={OnClickk} />
                                                                        </Tab.Navigator>
                                                                        </NavigationContainer>
                                                                        );}function OneOneScreenn() {
                                                                             return (
                                                                               <NavigationContainer independent={true}>
                                                                                 <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'PoliticsScreen'}} >
                                                                                 <Tab.Screen name="PoliticsScreen" component={PoliticsScreen} />
                                                                                 <Tab.Screen name="OnClickk" component={OnClickk} />
                                                                               </Tab.Navigator>
                                                                               </NavigationContainer>
                                                                               );}function OneTwoScreenn() {
                                                                                    return (
                                                                                      <NavigationContainer independent={true}>
                                                                                        <Tab.Navigator  screenOptions={{ headerShown:false,initialRouteName:'ScienceScreen'}} >
                                                                                        <Tab.Screen name="ScienceScreen" component={ScienceScreen} />
                                                                                        <Tab.Screen name="OnClickk" component={OnClickk} />
                                                                                      </Tab.Navigator>
                                                                                      </NavigationContainer>
                                                                                      );}


function MyTabs ({navigation}) {
       return (
              <TopTab.Navigator screenOptions={({route}) => ({
                    tabBarLabel: ({color,size}) => {
                      let label;
                      switch (route.name) {
                        case 'Top News':
                          return label = <Text style={{ color }}><Ionicons name="fitness-outline" size={20} color={color} /> Top News</Text>
                        case 'Sports':
                          return label = <Text style={{ color }}><Ionicons  name="ios-bicycle" size={20} color={color} /> Sports</Text> 
                        case 'Beauty':
                          return label = <Text style={{ color }}><Ionicons name="md-flower-outline" size={20} color={color} /> Beauty</Text> 
                        case 'Business':
                          return label = <Text style={{ color }}><Ionicons  name="business-outline" size={20} color={color} /> Business</Text>
                        case 'Economics':
                          return label =  <Text style={{ color }}><Ionicons  name="md-bar-chart-outline" size={20} color={color} /> Economics</Text>
                          case 'Entertainment':
                          return label =  <Text style={{ color }}><Ionicons  name="md-beer-outline" size={20} color={color} /> Entertainment</Text>
                          case 'Finance':
                          return label =  <Text style={{ color }}><Ionicons  name="trending-up-outline" size={20} color={color} /> Finance</Text>
                          case 'Food':
                          return label = <Text style={{ color }}><Ionicons name="fast-food-outline" size={20} color={color} /> Food</Text>
                          case 'Music':
                          return label = <Text style={{ color }}><Ionicons  name="musical-notes-outline" size={20} color={color} /> Music</Text>
                          case 'Travel':
                          return label = <Text style={{ color }}><Ionicons  name="airplane-outline" size={20} color={color} /> Travel</Text>
                          case 'Politics':
                          return label = <Text style={{ color }}><Ionicons  name="ios-people-outline" size={20} color={color} /> Politics</Text>
                          case 'Science':
                          return label = <Text style={{ color }}><Ionicons name="logo-electron" size={20} color={color} /> Science</Text>
                      }
                      return label
                    },
                     showIcon: 'true',
                     tabBarScrollEnabled: true,tabBarStyle: { height: 37,}
                      })}> 
          <TopTab.Screen name="Top News"      component={LiveScreenn} />
         
          <TopTab.Screen name="Sports"        component={SecondScreen} />
          <TopTab.Screen name="Beauty"        component={ThirdScreen} />
          <TopTab.Screen name="Business"      component={FourthScreenn} />
          <TopTab.Screen name="Economics"     component={FifthScreenn} />
          <TopTab.Screen name="Entertainment" component={SixthScreenn} />
          <TopTab.Screen name="Finance"       component={SeaventhScreenn} />
          <TopTab.Screen name="Food"          component={EighthScreenn} />
          <TopTab.Screen name="Music"         component={NinthScreenn} />
          <TopTab.Screen name="Travel"        component={TenthScreenn} />
          <TopTab.Screen name="Politics"      component={OneOneScreenn} />
          <TopTab.Screen name="Science"       component={OneTwoScreenn} />
    
        
        
        </TopTab.Navigator>
            );
}


export default function TopBarNavigator({navigation}){
               return (
                      <NavigationContainer independent={true}>
                            
                      <MyTabs/>
                      </NavigationContainer>
                      )
                      }

 
