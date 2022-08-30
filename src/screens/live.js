import React, { useState, useEffect } from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OnPresss from './onpress';


const marginBottomItem = 9;
const paddingItem = 5;
const imgHeight = 80;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const BASE_URL = 'https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=hi&country=IN&media=True';
const APP_ID = '46056f171bmshf1d9f15217f845dp1bf764jsnd5df1ceae420';
const backgroundImg = 'https://i.pinimg.com/originals/2a/24/74/2a24740658e1910bcfedbbdd83098c4e.jpg'


const LiveScreen = ({navigation}) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIsloading(true);
    getAllUsers();
    return () => {

    }
  }, []);


 const onPress = (id) => {
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



  const getAllUsers = () => {
    console.log('in function');
    console.log(BASE_URL);
    fetch(BASE_URL, { headers: { 'X-RapidAPI-Key': APP_ID } })
      .then((res) => res.json())
      .then((resJson) => {  setData(resJson.articles) })
      .catch(console.error)
      .finally(() => setIsloading(false));
  }

  const renderUser = ({ item, index }) => {
    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })

 const rowRendererr = (item) => {
  // console.log('row======================'+item);
      //We have only one view type so not checks are needed here
     navigation.navigate('OnPresss',{
      params: { item: item },
    });
    };


    return (
  
      <Animated.View style={
        [styles.item,
        {
          transform: [{ scale }]
        }
        ]
      }>
        
        <Image
          style={styles.image}
          source={{ uri: item.media }}
          resizeMode='contain'
          contentContainerStyle={{ padding: 5 }}
        />
        {/* {console.log('===========xxxxxxxxxxxx======='+item.title)} */}
        <View style={styles.wrapText}>
        <TouchableOpacity onPress={()=> rowRendererr(item)}>
          <Text style={styles.fontSize}>{`${item.title}`}</Text>
          <Text style={styles.fontSize1}>{`${item.rights} ${item.published_date}`}</Text>
          </TouchableOpacity>
        </View>
        
      </Animated.View>
    )

  }


  return (
    <SafeAreaView style={styles.container}>
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
  <View>
    <Text style={{width: 30, textAlign: 'center'}}>
    <Icon  name={this.state.icoo} size={25} color="#900" /></Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
</View>
      <Image
        source={{ uri: backgroundImg }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      {
        isLoading ? <ActivityIndicator /> : (
          <Animated.FlatList
            data={data}
            keyExtractor={item => `key-${item._id}`}
            renderItem={renderUser}
            contentContainerStyle={{
              padding: 20
            }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}
          />
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 18,
    fontWeight:'bold'
    
  },
  fontSize1: {
    fontSize: 15
  },
  image: {
    width: 100,
    height: imgHeight
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,

    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    marginBottom: marginBottomItem,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    shadowRadius: 30,
    padding: paddingItem
  },
  container: {
    flex: 1
  }

});

export default LiveScreen;