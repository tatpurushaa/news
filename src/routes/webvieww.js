import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


const WebVieww=({route,navigation })=>{
    console.log( route);
 const item=route.params.params.item;
    return <WebView source={{ uri: item.link }} />;
  }
export default WebVieww;



// export class WebVieww extends Component {
//     render() {
//       return <WebView source={{ uri: this.props.link }} />;
//     }
//   }