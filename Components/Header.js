import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.Hcontainer}>
      <Text style={styles.txt}>TODO APP</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Hcontainer:{
        height:100,
        backgroundColor:"#2A1B3D",
        justifyContent:"center",
        paddingTop:20,
    },
    txt:{
        color: 'white',
        textAlign:"center",
        fontWeight:"bold",
        fontSize:30,
    }
})