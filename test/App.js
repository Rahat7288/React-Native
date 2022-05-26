import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    /**
     * view help use to display the content 
     * view can inherit the style property that we can customize
     * we can create view inside other view
     */
    <View style={styles.container}>

      <View style = {styles.header}>
        <Text style = {styles.boldText}>hello World</Text>
      </View>

      <View style = {styles.body}>
        <Text>Rahat Islam Akash</Text>
        <Text>Rahat Islam Akash</Text>
        <Text>Rahat Islam Akash</Text>
        <Text>Rahat Islam Akash</Text>

      </View>
    </View>

  
  );
}

/**
 * style that we use to customize our views
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgoundColor: 'Red',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',

  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  }
});
