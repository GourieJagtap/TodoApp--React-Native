import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { Keyboard } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"

const ItemList = ({item,pressHandler}) => {
  return ( 
    <TouchableOpacity >
    <View style={styles.text}>
      <Text >{item.text}</Text>
      <Pressable onPress={()=>pressHandler(item.key)}>
        <MaterialIcons name="delete" size={20}></MaterialIcons>
      </Pressable>
    </View>
    </TouchableOpacity>
  )
}

export default ItemList

const styles = StyleSheet.create({
    text:{
        padding:12,
        borderWidth:1,
        margin:7,
        borderColor:"#78244c",
        borderRadius:3,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
    },
    cross:{
        backgroundColor:"white",
        padding:5,
        width:30,
        height:30,
        borderRadius:30,
        borderColor:"red",
        borderWidth:1
    },
    crosstxt:{
        fontWeight:"bold",
        color:"red",
        textAlign:"center"
    }
})