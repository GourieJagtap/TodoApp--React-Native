import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import ItemList from './Components/ItemList';

export default function App() {

  const [todo,settodo]=useState([
    {text:"Buy coffee",key:"1"},
    {text:"Boil Eggs",key:"2"},
    {text:"Go Live",key:"3"},
    {text:"Call Electrician",key:"4"},
  ])

  const pressHandler =(key)=>{
    settodo((prevtodo)=>{
      return prevtodo.filter(todo=>todo.key !=key);
    })
  }

  const onSubmitHandler =(text)=>{

    if (text.length >3){
      settodo((prevtodo)=>{
        return [
          {
            text:text,key:Math.random().toString()
          },
          ...prevtodo
        ]
      })
    }else{
      Alert.alert("Todo must have more than 3 char!");
    }
    
  }
 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo onSubmitHandler={onSubmitHandler}/>
        <View style={styles.list}>
          <FlatList data={todo} 
          renderItem={({item})=>(
            <ItemList item={item} pressHandler={pressHandler}/>
          )}/>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEAE5',
  },
  content:{
    padding:10,
  },
  list:{
    height:500,
  }
});


/* lunch with Sam
    get haircut done!
    check mail
    Make an app  */