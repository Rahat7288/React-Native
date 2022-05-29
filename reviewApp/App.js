import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
//import {AppLoading} from 'expo';
import Navigator from './routes/homeStack';





export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
    return (
      <Navigator/>
    );
  
  
  }


