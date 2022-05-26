import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function App() {

  const [people, setPeople] = useState([
    {name: 'rahat',   key: '1'},
    {name: 'islam',   key: '2'},
    {name: 'akash',   key: '3'},
    {name: 'himel',   key: '4'},
    {name: 'rakibul', key: '5'},
    {name: 'Kazi',    key: '6'},
    {name: 'Kazi',    key: '7'},
    {name: 'Kazi',    key: '8'},
    {name: 'Kazi',    key: '9'},
  ]);
 

  return (
    /**
     * view help use to display the content 
     * view can inherit the style property that we can customize
     * we can create view inside other view
     */
    <View style={styles.container}>
      <ScrollView>
      {people.map((item)=>{
        return (
          <View key={item.key}>
            <Text style = {styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView>
      
    
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
