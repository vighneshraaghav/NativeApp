import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Topbar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../assets/filter.png')}/>
      <Text style={styles.title}>Home</Text>
      <Image style={styles.icon} source={require('../assets/notify_icon.png')}/>
      <Image style={styles.icon} source={require('../assets/menu_icon.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: 'center'
  },

  icon: {
    height: 25,
    width: 25,
    margin: 10
  }
});

export default Topbar