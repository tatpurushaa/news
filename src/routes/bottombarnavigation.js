import React, { useEffect } from 'react'
import {  
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity,ScrollView
} from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

const OnClickk=({route,navigation })=>{

  
 
 const item=route.params.params.item;
//  console.log(navigation) 
   return (
    <ScrollView>
        <View style={{
          flex: 1,
          margin: 5,
          backgroundColor: '#FFFFFF',
          flexDirection:'column'  }}>

          <View style={{ flex: 1, margin: 5,backgroundColor: '#FFFFFF' }}>
          <Image style={{width: '100%', height: 250, flex:1}} source={{uri: item.media }}/>
                   <View style={{ flex: 1,alignItems:'center' }}>
                     <Text style={{color: 'black',fontSize: 20,fontWeight:'bold'}}>{item.title}</Text>
                   </View>
                   </View>
                   
                   <View style={{ flex: 0.7,alignItems:'center' }} >

                   <Text style={{color: 'black',fontSize: 16}}>{item.summary}</Text>
                   <Text style={{color: 'black',fontSize: 14}}>{item.published_date}</Text>
                   </View>
                           
        </View>
        </ScrollView>  
    );
  }



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default OnClickk;