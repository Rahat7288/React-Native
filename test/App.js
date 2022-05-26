import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';


export default function App() {

  const [people, setPeople] = useState([
    {name: 'rahat',   id: '1'},
    {name: 'islam',   id: '2'},
    {name: 'akash',   id: '3'},
    {name: 'himel',   id: '4'},
    {name: 'rakibul', id: '5'},
    {name: 'Kazi',    id: '6'},
    {name: 'Kazi',    id: '7'},
    {name: 'Kazi',    id: '8'},
    {name: 'Kazi',    id: '9'},
  ]);
  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id);
    })
  }
 

  return (
    /**
     * view help use to display the content 
     * view can inherit the style property that we can customize
     * we can create view inside other view
     */
    <View style={styles.container}>

      {/* 
      if we have too may items in a list its better jto use the FlateList
      */}

      <FlatList
      keyExtractor={(item)=> item.id}
        data={people}
        renderItem = {({item})=>(

          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style = {styles.item}>{item.name}</Text>
          </TouchableOpacity>
          


        )}
      />

      {/* <ScrollView>
      {people.map((item)=>{
        return (
          <View key={item.key}>
            <Text style = {styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
      
    
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
