import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Checkpt = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Sat,25 Dec 2023</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>12.30 pm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  box:{
    borderRadius:20,
    borderWidth:1,
    borderColor:'grey',
    padding:8,
    paddingHorizontal:16
  },
  text:{
    fontSize:18
  }
})

export default Checkpt