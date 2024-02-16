import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Checkpt from "./checkpoint";
import { useNavigation } from "@react-navigation/native";

const AddEvent = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container0}>
        <Pressable onPress={()=> navigation.goBack()}>
          <Text style={{fontSize:25, fontWeight:'bold'}}>X</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.create}>Create</Text>
        </Pressable>
      </View>
      <TextInput style={styles.titleInput} placeholder="Add Title"/>
      <View style={styles.container1}>
        <Image
          style={styles.icon}
          source={require("../assets/time_icon.jpg")}
        />
        <Text style={styles.title1}>All Day</Text>
        <Pressable onPress={() => setChecked(!checked)}>
          {!checked ? (
            <View style={styles.empty}></View>
          ) : (
            <Image
              style={styles.icon}
              source={require("../assets/checked.png")}
            />
          )}
        </Pressable>
      </View>
      <View style={styles.container2}>
        <Checkpt />
        <View style={styles.foot}></View>
        <Checkpt />
      </View>
      <View style={styles.container1}>
        <Image
          style={styles.icon}
          source={require("../assets/note_icon.jpg")}
        />
        <Text>Add Note</Text>
      </View>
      <TextInput style={styles.textinput} multiline={true} numberOfLines={4} />
      <View style={styles.container1}>
        <Image style={styles.icon} source={require("../assets/people.jpg")} />
        <Text>Add People</Text>
      </View>
      <TextInput style={styles.textinput} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    gap:15,
    backgroundColor:'white',
    height:'100%'
  },

  icon: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },

  create:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'blue',
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:20
  },

  titleInput:{
    marginLeft:50,
    fontSize:25,
  },

  empty: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 50,
  },

  foot: {
    height: 40,
    marginLeft: 110,
    borderStyle: "dashed",
    borderLeftWidth: 1,
  },

  textinput:{
    marginHorizontal:10,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10
  },

  container0: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    gap: 10,
    margin: 10,
  },

  container1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },

  title1: {
    flexGrow: 1,
    fontSize: 18,
  },
});

export default AddEvent;
