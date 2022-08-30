import React, { Component } from 'react';
import { StyleSheet, Text, View , FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import VideoPlayer from 'react-native-video-player';
import { ScrollView } from 'react-native-gesture-handler';
import styles from 'react-native-password-eye/src/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const LiveTv=({route,navigation })=>{
   
 const item=route.params.params.item;
 return(
    //  console.log('================='+item)
    // <WebView source={{ uri: item}} />;
    <SafeAreaView>
    <FlatList renderItem={({item,index})=>{

        return(
            <ScrollView style={{marginTop:10}}>
            <Card header={()=>{
                <View>
                    <Text style={styles.title}> Video</Text>
                </View> }} 
                    footer={()=>(
                <View>
                    <Text>Time Duration: </Text>
                </View>

            )}>
                <VideoPlayer
                    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    videoWidth={1600}
                    videoHeight={900}
                    autoplay={false}
                    defaultMuted={true}
                    resizeMode='cover'
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                    />
                </Card>
                    </ScrollView>
                    );
                    }}
                    />
                    </SafeAreaView>);};
        export default LiveTv;



// export class WebVieww extends Component {
//     render() {
//       return <WebView source={{ uri: this.props.link }} />;
//     }
//   }