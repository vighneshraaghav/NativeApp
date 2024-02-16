import { View, Text, Modal, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import EventCard from "./eventCard";
import MonthCalendar from "./calendar";
import { useNavigation } from "@react-navigation/native";
import AddEvent from "./addEvent";

const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headtext}>Upcomming</Text>
        <Pressable onPress={() => navigation.navigate("History")}>
        <Image
          style={styles.time}
          source={require("../assets/time_icon.jpg")}
        />
      </Pressable>
      </View>
      <EventCard/>
      <EventCard/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            <MonthCalendar />
            <Pressable
              onPress={() => setModalVisible(false)}>
              <Text>Hide Modal</Text>
            </Pressable>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
      <Pressable style={styles.add} onPress={()=>navigation.navigate('AddEvent')}>
      <Image style={styles.icon} source={require('../assets/Add_icon.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    gap:10,
    height:'100%'
  },
  heading: {
    margin: 8,
    borderLeftWidth: 5,
    paddingHorizontal: 6,
    borderColor: "blue",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

  headtext: {
    fontSize: 20,
  },

  add:{
    position:'absolute',
    right:10,
    bottom:50,
  },

  time:{
    width:20,
    height:20
  },

  icon:{
    borderRadius:60,
    width:100,
    height:100
  }
});

export default Home;
