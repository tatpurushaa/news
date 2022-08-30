import React, { useState } from 'react';
import { Image, Platform, View ,TouchableOpacity,Text, Alert, Modal, StyleSheet, Pressable,ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { OnPresss } from './../screens/onpress';
const isIOS = Platform.OS === 'ios';
import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation(); 
// const [modalVisible, setModalVisible] = useState(false);

export class ImageRenderer extends React.Component {




  shouldComponentUpdate(newProps) {
    return this.props.imageUrl !== newProps.imageUrl;
  }
  componentWillUpdate() {
    //On iOS while recycling till the new image is loaded the old one remains visible. This forcefully hides the old image.
    //It is then made visible onLoad
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 0,
      });
    }
  }
  handleOnLoad = () => {
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 1,
      });
    }
  };

  render() {
    return (
      
      <View style={{
        flex: 1,
        margin: 5,
        backgroundColor: '#e5e5e5',
        flexDirection:'column'  }}>

        <View style={{ flex: 1, margin: 5,backgroundColor: '#e5e5e5', flexDirection:'row' }}>
         <Image ref={ref => { this.imageRef = ref; }}
              style={{flex: 1, }} onLoad={this.handleOnLoad} source={{ uri: this.props.imageUrl }} />
                 <TouchableOpacity style={{ flex: 1,alignItems:'center' }} >
                             <Text style={{color: 'black',fontSize: 18,fontWeight:'bold'}}>{this.props.title}</Text>
                 </TouchableOpacity>
                 </View>
                 <TouchableOpacity style={{ flex: 0.7,alignItems:'center' }}>
                 <Text style={{color: 'black',fontSize: 16}}>{this.props.description}</Text>
                 {/* <Text style={{color: 'black',fontSize: 14}}>{this.props.description}</Text> */}
                             </TouchableOpacity>
                            
      </View>
    );
  }
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


// export default withNavigation(ImageRenderer);