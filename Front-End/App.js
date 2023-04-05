import React from 'react';
import { useFonts } from 'expo-font';
import Navigation from './src/navigations/Navigation';


const App = () => {
  // console.error = function() {};
  
  const [loaded] = useFonts({
    'Bold': require('./src/fonts/Montserrat-ExtraBold.otf'),
    'Medium': require('./src/fonts/Montserrat-Medium.otf'),
    'Regular': require('./src/fonts/Montserrat-Regular.otf'),
    'arabicFont':  require('./src/fonts/VIP-Rawy-Regular.otf'),
    'arabicFont1':  require('./src/fonts/A-Mosalas.ttf'),
    'arabicFont2':  require('./src/fonts/Omar-Font.ttf'),



  })
  if(!loaded){
    return null;
}

  return  <Navigation/>
}
export default App;