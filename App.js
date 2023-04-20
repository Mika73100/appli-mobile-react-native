import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { useFonts } from 'expo-font';

//ici pouur la camera
export default function App() {

  //ici pour la font
  const fontsLoaded = useFonts({
    'Bombslide': require('./font/Bombslide.ttf')
  })

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../my-app/assets/img/bookbox.jpg')} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto"/>

        <Text style={tw`absolute left-ç top-10 h-70 w-90 w-100 text-8xl text-white tracking-tighter`}>Welcome to the <Text style={styles.spantext}> BookBox</Text></Text>
        <Text style={tw`absolute bottom-0 right-0 h-20 w-30 text-2xl text-white italic`}>Start</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spantext: {
    color: 'yellow',
    fontFamily: 'Bombslide',
    fontSize: 130,
  },

});
