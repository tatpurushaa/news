import React, { useEffect } from 'react'
import {  
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import Routes from '../routes'
const SplashScreen=({ navigation })=>{

  const back = require("./../assets/images/background.png")
    const logo = require("./../assets/images/logo.png")

    function gotoLogin() {
        setTimeout(() => {
            <Routes/>
        }, 5000);
    }

    useEffect(() => {
    //   fetchData();
      gotoLogin()
      }, [])

    return(
      <ImageBackground source={back} style={styles.container}>
       <TouchableOpacity >
        <Image source={logo} style={styles.logo}/>
        </TouchableOpacity>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    back:{
        resizeMode:'contain'
    },
    logo:{
        resizeMode:'contain',
        width:150,
        height:150
    }
})

export default SplashScreen