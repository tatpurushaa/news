import React from 'react';
import Routes from './src/routes/index';
import { View, StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,Text,Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBarNavigator from './src/routes/topbarnavigation';


const App=()=>{
  const logo = require("./src/assets/images/photoo.png")
  const logo1 = require("./src/assets/images/newsp.png")
  const logo2 = require("./src/assets/images/bell.png")
  const logo3 = require("./src/assets/images/new.png")
return (
  <SafeAreaProvider>
         <View style={{flex:0.08,flexDirection:'row',backgroundColor:'#FFFFFF'}}>
        <View>
             <Image source={logo} style={{width:300,height:40,margin:10}}/>
        </View>
        <View style={{flexDirection:'row', paddingHorizontal:20}}>
       
         <View >
               <Image source={logo3} style={{width:30,height:30,margin:5,marginTop:10}}/>
         </View>
         </View>
      </View>
  <Routes style={{flex:1}}/>
  </SafeAreaProvider>
)}
export default App;