import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native';

const AddTodo = ({onSubmitHandler}) => {

    const [text,settext] = useState("");

    const changeHandler =(val)=>{
        settext(val);
    }

  return (

    <View style={styles.contain}>
      <TextInput value={text} style={styles.input} placeholder="Enter todo" onChangeText={changeHandler} />
      <Button color="coral" onPress={()=>{onSubmitHandler(text); settext("");}} title='ADD TODO'></Button>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    input:{
        backgroundColor:"white",
        marginHorizontal:10,
        marginVertical:10,
        padding:5,
    },
    contain:{
        padding:5,
    }
})