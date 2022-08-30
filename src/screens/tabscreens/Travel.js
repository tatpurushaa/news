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
  TouchableOpacity
} from 'react-native';
// import OnPresss from './onpress';


const marginBottomItem = 9;
const paddingItem = 5;
const imgHeight = 80;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const BASE_URL = 'https://newscatcher.p.rapidapi.com/v1/search?q=a&lang=hi&sort_by=relevancy&country=IN&topic=travel&page=1&media=True';
const APP_ID = '46056f171bmshf1d9f15217f845dp1bf764jsnd5df1ceae420';
const backgroundImg = 'https://wallpaperaccess.com/full/1754609.jpg'


const TravelScreen = ({navigation}) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIsloading(true);
    getAllUsers();
    return () => {

    }
  }, []);

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
  navigation.navigate('OnClickk',{
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
              padding: 5
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

export default TravelScreen;