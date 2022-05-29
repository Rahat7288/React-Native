import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';


export default function App() {
 

  return (

    <View style={styles.container}>
      <Text>hello</Text>
    </View>
   
  );
}

/**
 * style that we use to customize our views
 */

const styles = StyleSheet.create({
  container: {
    flex:                1,
    backgroundColor:    'yellow',
    paddingTop:         40,
    paddingHorizontal:  20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'orange',
    fontSize: 24,

  }
 
});
