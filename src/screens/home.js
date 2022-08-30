import React, { Component,useState,useRef } from 'react';
import { View, StyleSheet, ActivityIndicator,SafeAreaView,StatusBar,TouchableOpacity,Text,ScrollView } from 'react-native';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import { DataCalll } from './../utils/DataCalll';
import { LayoutUtil } from './../utils/LayoutUtil';
import { ImageRenderer } from './../components/ImageRenderer';
import { ViewSelector } from './../components/ViewSelector';
// import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
// import ScrollableTabView from 'react-native-scrollable-tab-view';
// import TabBar from "react-native-underline-tabbar";
import OnPresss from './onpress';


// const [counter, setCounter] = useState('');
import { useIsFocused } from '@react-navigation/native';








const get_random = (list) => {
    return list[Math.floor((Math.random()*list.length))];
  }
  
export default class Home extends Component {
  
     constructor(props) { 
     super(props);
     this.state = {
      colorId:1,
      icoo:'fitness-outline',
      bgColor: '',
      tab:'news',
      tabpress:false,
      entries: [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        }],
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

  onPress = (id) => {
    this.setState({colorId: id});
    var icoo;
    switch(id){
      case 1:  
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      }); 
       icoo ='fitness-outline'; 
                  this.setState({tab:'news'})
                  this.setState({tabpress:true})
                  this.fetchMoreData('news');
                 break; 
      case 2:   
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
       icoo ='ios-bicycle';
      this.setState({tab:'sport'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('sport');
                  break;
      case 3:    icoo ='ios-desktop-outline';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'tech'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('tech');
      break;
      case 4:    icoo ='earth-outline'; 
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'world'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('world');
      break;
      case 5:    icoo = 'trending-up-outline'; 
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'finace'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('finance');
      break;
      case 6:    icoo = 'ios-people-outline'; 
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'politics'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('politics');
      break;
      case 7:    icoo = 'business-outline';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'business'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('business');
      break;
      case 8:    icoo = 'md-bar-chart-outline'; 
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'economics'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('economics');
      break;
      case 9:    icoo = 'md-beer-outline';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'entertainment'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('entertainment');
      break;
      case 10:   icoo = 'md-flower-outline';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'beauty'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('beauty');
      break;
      case 11:   icoo = 'airplane-outline'; 
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'travel'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('travel');
      break;
      case 12:   icoo = 'musical-notes-outline';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'music'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('music');
      break;
      case 13:   icoo = 'fast-food-outline';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'food'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('food');
      break;
      case 14:   icoo = 'logo-electron';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'science'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('science');
      break;
      default:   icoo ='fitness-outline';
      this.setState({
        dataProvider: new DataProvider((r1, r2) => {
          return r1 !== r2;
        }),
        layoutProvider: LayoutUtil.getLayoutProvider(0),
        images: [],
        count: 0,
        viewType: 0,
      });
      this.setState({tab:'news'})
      
      this.setState({tabpress:true})
      this.fetchMoreData('news');
      break;
}
this.setState({icoo});
    
  };
  componentDidUpdate(){
    // this.setState({
    //   dataProvider: new DataProvider((r1, r2) => {
    //     return r1 !== r2;
    //   }),
    //   layoutProvider: LayoutUtil.getLayoutProvider(0),
    //   images: [],
    //   count: 0,
    //   viewType: 0,
    // });
    
    // this.fetchMoreData('tech');
  }
  componentWillMount() {
  
    this.fetchMoreData();
  }
  async fetchMoreData(tab='') {
    if (!this.inProgressNetworkReq) { 
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      this.inProgressNetworkReq = true;
      
      const images = await DataCalll.HomePage(this.state.count, 25,tab);
      this.inProgressNetworkReq = false;
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.state.images.concat(images)
        ),
        images: this.state.images.concat(images),
        count: this.state.count + 25,
      });
      
    }
  }

  


  async fetchMoreDatanew() {
    if (!this.inProgressNetworkReq) { 
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      this.inProgressNetworkReq = true;
       list = [2,3,4,5,6,7,8,9,10];
       
       page= get_random(list);
      const images = await DataCalll.getmore(this.state.count, 25, page);
      this.inProgressNetworkReq = false;
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.state.images.concat(images)
        ),
        images: this.state.images.concat(images),
        count: this.state.count + 25,
      });
    }
  }
  
  rowRenderer = (type, data) => {
    //We have only one view type so not checks are needed here
    return <ImageRenderer imageUrl={data.media} title={data.title} description={data.summary} link={data.link}/>;
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

  
  
  state={
    selectedButton: ''
};



  render() {
    //Only render RLV once you have the data
   if(this.state.tabpress===true){
    console.log(this.state.tab);
    //this.fetchMoreData();
   }
    return (
      <View style={styles.container}>
      {/* <View style={{flexDirection: 'row', alignItems: 'center',margin:10 }}>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
 
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
</View> */}

      
        <View style={styles.container1}>
      
        <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center',width: 1500 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={300}
        decelerationRate="fast"
        pagingEnabled >
          <View style={{paddingHorizontal:5}}>
               
            <TouchableOpacity style={{paddingHorizontal:10}}
          onPress={()=>this.onPress(1)}>
             <Text style={styles.text}><Icon  name="fitness-outline" size={25} color="#900" /> Top News</Text>
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View  style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 1? 'blue' : '#f2f2f2'}}/>
               </View>
            </TouchableOpacity>
          </View>
          <View>
          
             <TouchableOpacity style={{paddingHorizontal:10}} onPress={()=>this.onPress(2)}>
                 <Text style={styles.text} ><Icon  name="ios-bicycle" size={25} color="#900" /> Sports</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 2? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity></View>
          <View>
             <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(3)}>
                 <Text style={styles.text} ><Icon  name="ios-desktop-outline" size={25} color="#900" /> Tech</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 3? 'blue' : '#f2f2f2'}} /></View>
           
            </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(4)}>
                 <Text style={styles.text} ><Icon  name="earth-outline" size={25} color="#900" /> World</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 4? 'blue' : '#f2f2f2'}} /></View>
            </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(5)}>
                 <Text style={styles.text} ><Icon  name="trending-up-outline" size={25} color="#900" /> Finance</Text>
              
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 5? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(6)}>
                 <Text style={styles.text} ><Icon  name="ios-people-outline" size={25} color="#900" /> Politics</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 6? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(7)}>
                 <Text style={styles.text} ><Icon  name="business-outline" size={25} color="#900" /> Business</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 7? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(8)}>
                 <Text style={styles.text} ><Icon  name="md-bar-chart-outline" size={25} color="#900" /> Economics</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 8? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(9)}>
                 <Text style={styles.text} ><Icon  name="md-beer-outline" size={25} color="#900" /> Entertainment</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 9? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(10)}>
                 <Text style={styles.text} ><Icon  name="md-flower-outline" size={25} color="#900" /> Beauty</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 10? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(11)}>
                 <Text style={styles.text} ><Icon  name="airplane-outline" size={25} color="#900" /> Travel</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 11? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(12)}>
                 <Text style={styles.text} ><Icon  name="musical-notes-outline" size={25} color="#900" /> Music</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 12? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(13)}>
                 <Text style={styles.text} ><Icon  name="fast-food-outline" size={25} color="#900" /> Food</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 13? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>this.onPress(14)}>
                 <Text style={styles.text} ><Icon  name="logo-electron" size={25} color="#900" /> Science</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View style={{flex: 1, height: 2, backgroundColor: this.state.colorId === 14? 'blue' : '#f2f2f2'}} /></View>
              </TouchableOpacity>
          </View>
          
  </ScrollView>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
  <View>
    <Text style={{width: 30, textAlign: 'center'}}>
    <Icon  name={this.state.icoo} size={25} color="#900" /></Text>
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
    marginLeft:25,
    padding:10
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
    fontSize: 18,
  },
  Headline: {
    color: 'black',
    fontSize: 25,
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
    
  },
  red: {
    backgroundColor: 'blue',
  },
  button: {
    backgroundColor: '#DDDDDD',
  },
});