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
import Routes from '../routes'


const YouTubee=({navigation})=>{
 
const channel = [{
                    "name": "aajtak",
                    "link": "https://www.youtube.com/watch?v=OhhpYT4NprE",
                    "logo": "https://akm-img-a-in.tosshub.com/aajtak/resource/img/aajtak-logo-153X116-v2.png"
                  },
                  {
                    "name": "indiatv",
                    "link": "https://www.youtube.com/watch?v=Xmm3Kr5P1Uw",
                    "logo": "https://static.indiatvnews.com/ins-web/images/sitelogo.png"
                  },
                  {
                    "name": "ndtv",
                    "link": "https://www.youtube.com/watch?v=WB-y7_ymPJ4",
                    "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAvVBMVEX///8AAAD8/PwkJCSysrIEBASmpqb5+fk+Pj5+fn7KysrDw8NISEgABAA7Ozv09PTt7e3m5uZ0dHS5ublPT09XV1cXFxeGhoZlZWXoBgYqKioQEBAcHBzf39/V1dWQkJAlAACbm5s0NDTPsq7/5uCLcWsQAAA3AAB9BAvBLTPPNjynICZdAAC3tK+SERbZFRnkDRbBGRVsDAocAACADxW8GCBUBQefERTzAACmDxFBAALHAADNfYXumKGYU1j8aI4YAAAEGElEQVR4nO2Xa3fiNhCGJcVCXGKMIY4xBNjQlt3uLZe2WbZp+/9/VkcaSZaRzKabDz09neeQhOgyejUzGsuMEQRBEARBEARBEARBEARBEARBEMT/CaH8FxG0mg/8Al5lvTu936xuEAgTzHcaUcL88f3/mNPNMb+SirenwmHx17D7OzjdtdcTDby6uTCsqtsSVrUDiupat/MxG60vvhtedhaEf3bG2s2+jDY45Z59BjowX4pLbJqwOX8FoyDUWsZGYnsWe2ToJ8GYkQtcqEPy7kdGLaleNLht9613WEM/tO7VacC8Dok/FYt1cGc3oqc5oGrdD3bHEnUs4swJ/GHsDlhKxwtW7GHhF4KTs0QZlRIiyv+hW0caf65KZnXkPJegY6TnSj7KBp5d5UbXbZvdv2+Ycr15vvK1QrGtXWkSR8X7Y1mZMWDa6wD4Dz/+pHXk/FNn0naNWTBoW9BM7RvGZlHpHAw61BLdOk/JcDomyibCauN1HN6++/n9h49vZK51dCpUjYNHutV4eYJm9AFRStdENUeHTEuXC2Mb3m1CRauDFVPcQK3ngQ4p336+a473D4+/QIAytwmzMMtw7NymtQAdEnW4+sw2HLNhx7CmqgqHLBNVLNShbZuJM6uD/3p33zTN/W9PPNCBZDaavj63/vDUuO71RstSzvzN5ls6iivMkB0MNDq+gIrmeLx77NEhtY4wHawO+ygr91YsNChbMHUo08+KVgcY1+7gFyWe28PX41ELad4ZHR1afyR0IIrd2qNoPLDAEne9SWZpqEOwPQamZsKc2886LE3z8CT74+IaIh3COBUPs2KqGKKOXXQXiHRgCM2RQR1PDxCV5v7L73BuwzwVwo1sj2DsD+MDLDRQzAbYv54lndH1h9AZgjFUV2DgzePD8/Pz16dDnpu4+EuFPy+1z7lYh+4aYhG8LAq7zK4nKt24mA1o+6OxsXA4/PHnX6DL6gio0MuLczrA4Jij37IBbnA/e4EO7ZAKN8CvJZ4yXdehrkJZLGYt27ktSeUZHcZ5c9S7usDxg/SZPdFhzEn/SMuNDnv/WA2HU8twv7ZP+TZNE3lqPtu1VWzkTGfqhTpg+x49E+8fh9PHrRVbtmZScdFKdjy4jUxYPyc6ZsvOas4fuWz95M0O2Bl/oA5RBHeGqUg875M6wMps3sqwOuAGkMtAiLV8y9Q3ddhihhOyc68hKzSwcNUYHhXVjV9xIgL/hIHZ17Mg54R7vsxPb3xCXbo51blXIbHIDKVTCr/VxjZm2UaMsxTbsnOzE6wcmPZx94VFf996W71nNnybsyUKfB1ZSs/s/NMzTIhw4Bl/CNdpMwjLZZtNIj25HRypihNR+JC/6hX13+Q/K5wgCIIgCIIgCIIgCIIgCIIgCIIgCOKl/A24yDNLpa4agQAAAABJRU5ErkJggg=="
                  },
                  {
                    "name": "abpnews",
                    "link": "https://www.youtube.com/watch?v=nyd-xznCpJc",
                    "logo": "data:image/png;base64,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"
                  }];
    const livelink = (item) => {
           navigation.navigate('LiveTv',{
     params: { item: item },});};


       return(
                    
                     <View style={styles.container}>
                      <TouchableOpacity onPress={()=> livelink(channel[0].link)}>
                      <Image source={{uri: channel[0].logo}} style={styles.logo}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> livelink(channel[1].link)}>
                      <Image source={{uri: channel[1].logo}} style={styles.logo}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> livelink(channel[2].link)}>
                      <Image source={{uri: channel[2].logo}} style={styles.logo}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> livelink(channel[3].link)}>
                      <Image source={{uri: channel[3].logo}} style={styles.logo}/>
                      </TouchableOpacity>
                      </View>
                    
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
        height:150,
        margin: 10
    }
})

export default YouTubee