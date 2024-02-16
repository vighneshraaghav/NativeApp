import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const History = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text>Sat</Text>
          <Text>4</Text>
        </View>
        <View>
          <Text>Abhishek scheduled a meeting on 4 Saturday, 2023</Text>
          <Text>Click for Details</Text>
        </View>
      </View>
      <Text style={styles.time}>6.30 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },

  time:{
    position:'absolute',
    right:10,
    bottom:10,
  }
})

export default History