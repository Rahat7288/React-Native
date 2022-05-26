import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [name,setName] = useState('rahat');
  const [person, setPerson] = useState ({name: 'Himel', age: 24});
  const clickhandler = () => {
    setName ('akash');
    setPerson({name: 'Rakib', age: 28});
  }

  return (
    /**
     * view help use to display the content 
     * view can inherit the style property that we can customize
     * we can create view inside other view
     */
    <View style={styles.container}>
      <Text>My Name Is {name}</Text>
      <Text>His name is {person.name} nad his age is {person.age}</Text>
      <View style = {styles.buttonContainer}>
        <Button title = 'Update state' onPress = {clickhandler}/>
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
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    padding: 20,
  }
});
