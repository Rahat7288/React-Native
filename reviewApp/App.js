import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
//import {AppLoading} from 'expo';





export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
    return (
      <Home/>
    );
  
  
  }


