import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {

  const [name, setName] = useState('Rahat');
  const [age, setAge]    = useState('24');
 

  return (
    /**
     * view help use to display the content 
     * view can inherit the style property that we can customize
     * we can create view inside other view
     */
    <View style={styles.container}>

      <Text>Enter Name:</Text>
      <TextInput 
      multiline
      style = {styles.input}
      placeholder = 'Name'
      onChangeText = {(val) => setName(val)}/>

<Text>Enter Age:</Text>
      <TextInput 
      keyboardType='numeric'
      style = {styles.input}
      placeholder = 'Age'
      onChangeText = {(val) => setAge(val)}/>

      <Text> name: {name}, age: {age}</Text>
      
    </View>

  
  );
}

/**
 * style that we use to customize our views
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 10,
    width: 200,
  }
});
