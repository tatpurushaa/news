import React, { Component,useState } from 'react';
import { View, StyleSheet, ActivityIndicator,SafeAreaView,StatusBar,TouchableOpacity,Text } from 'react-native';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import { DataCall } from './../utils/DataCall';
import { LayoutUtil } from './../utils/LayoutUtil';
import { ImageRenderer } from './../components/ImageRenderer';
import { ViewSelector } from './../components/ViewSelector';
const get_random = (list) => {
    return list[Math.floor((Math.random()*list.length))];
  }
  
export default class App extends Component {
  
    constructor(props) { 
    super(props);
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      layoutProvider: LayoutUtil.getLayoutProvider(0),
      images: [],
      count: 0,
      viewType: 0,
    };
    this.inProgressNetworkReq = false;
  }
  componentWillMount() {
  
    this.fetchMoreData();
  }
  async fetchMoreData() {
    if (!this.inProgressNetworkReq) { 
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      this.inProgressNetworkReq = true;
      
      const images = await DataCall.getnewss(this.state.count, 20);
      this.inProgressNetworkReq = false;
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.state.images.concat(images)
        ),
        images: this.state.images.concat(images),
        count: this.state.count + 20,
      });
    }
  }

  


  async fetchMoreDatanew() {
    if (!this.inProgressNetworkReq) { 
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      this.inProgressNetworkReq = true;
      var list = [2,3,4,5,6,7,8,9,10];
       
      var page= get_random(list);
      const images = await DataCall.getmore(this.state.count, 20, page);
      this.inProgressNetworkReq = false;
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.state.images.concat(images)
        ),
        images: this.state.images.concat(images),
        count: this.state.count + 20,
      });
    }
  }
  
  rowRenderer = (type, data) => {
    //We have only one view type so not checks are needed here
    return <ImageRenderer imageUrl={data.media.thumbnail.url} title={data.title} description={data.description} link={data.link}/>;
  };
  viewChangeHandler = viewType => {
    //We will create a new layout provider which will trigger context preservation maintaining the first visible index
    this.setState({
      layoutProvider: LayoutUtil.getLayoutProvider(viewType),
      viewType: viewType,
    });
  };
  handleListEnd = () => {
    this.fetchMoreDatanew();

    //This is necessary to ensure that activity indicator inside footer gets rendered. This is required given the implementation I have done in this sample
    this.setState({});
  };
  renderFooter = () => {
    //Second view makes sure we don't unnecessarily change height of the list on this event. That might cause indicator to remain invisible
    //The empty view can be removed once you've fetched all the data
    return this.inProgressNetworkReq
      ? <ActivityIndicator
          style={{ margin: 10 }}
          size="large"
          color={'black'}
        />
      : <View style={{ height: 60 }} />;
  };

  render() {
    //Only render RLV once you have the data
   
    return (
      <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center',margin:10 }}>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
  <View>
    <Text style={{width: 40, textAlign: 'center',fontWeight:'bold', }}>|Local|  |News|</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
</View>

      
        <View style={styles.container1}>
          <View>
            <TouchableOpacity >
               <Text style={styles.text}>H</Text>
            </TouchableOpacity>
          </View>
          <View>
             <TouchableOpacity >
                 <Text style={styles.text} >I</Text>
              </TouchableOpacity></View>
          <View>
             <TouchableOpacity >
                 <Text style={styles.text} >M</Text>
            </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity >
                 <Text style={styles.text} >A</Text>
            </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity >
                 <Text style={styles.text} >C</Text>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity >
                 <Text style={styles.text} >H</Text>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity >
                 <Text style={styles.text} >A</Text>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity >
                 <Text style={styles.text} >L</Text>
              </TouchableOpacity>
          </View>
        <View style={styles.first}>
           
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',margin:10 }}>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center'}}></Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
</View>
        {/* <ViewSelector
          viewType={this.state.viewType}
          viewChange={this.viewChangeHandler}
        /> */}
        {this.state.count > 0
          ? <RecyclerListView
              style={{ flex: 1 }}
              contentContainerStyle={{ margin: 3 }}
              onEndReached={this.handleListEnd}
              dataProvider={this.state.dataProvider}
              layoutProvider={this.state.layoutProvider}
              rowRenderer={this.rowRenderer}
              renderFooter={this.renderFooter}
              onPress={() => navigation.navigate('webview')}
            />
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  container1: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginLeft:30

  },
  container2: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent:'space-between',
    marginLeft:50

  },
  contentContainer: {
    paddingVertical: 1

  },
  text: {
    color: 'black',
    fontSize: 18
  },
  Headline: {
    color: 'black',
    fontSize: 20,
    width:'100%'

  },
  subline: {
    color: 'black',
    fontSize: 15
  },
    image: {
      width: 250,
      height: 250,
      margin: 10,
      resizeMode: 'cover',
      
    },
    textCenter: {
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      borderColor:'gray',
      borderWidth:1,
      

    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '75%',
      justifyContent: 'center'
      
    },
    list:{
      flexDirection: 'row',
      justifyContent:'flex-start',
    
  }
});