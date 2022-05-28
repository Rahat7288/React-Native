import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItems';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandBox';

export default function App() {

  const [todos,setTodos] = useState ([
    {text: 'bye coffe',           key: '1'},
    {text: 'create an app',       key: '2'},
    {text: 'play on the switch',  key: '3'},


  ]);
  {/**this function is for removing an element from the list */}

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  {/**this function is for adding element into a list */}
   const submitHandler = (text) => {
    if (text.length >3){
      setTodos((prevTodos)=>{
        return [
          { text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      })

    }else{
      Alert.alert('OOps!', 'Todos must be over 3 chars long',[
        {text: 'understood', onPress: () => console.log('alart closed')}
      ]);
    }
}
  return (

    //<Sandbox/>



    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
      {/**header */}
      <Header />
      <View style = {styles.content}>
        {/**to form */}
        <AddTodo submitHandler = {submitHandler}/>
        <View style = {styles.list}>

          <FlatList
            data={todos}
            renderItem = {({item})=>(
              <TodoItem item = {item} pressHandler = {pressHandler}/>
            )}
          />

        </View>
      </View>
      
    </View>
  

    </TouchableWithoutFeedback>

);
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
   // backgroundColor: 'pink',
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
   // backgroundColor: 'yellow',
  },
});
