import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

function EventCard() {
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={styles.dateDay}>Fri</Text>
        <Text style={styles.dateDate}>3</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.subject}>
          <Text style={styles.title}>Meeting For Business</Text>
          <Text style={styles.time}>7.35-8.30 P.M</Text>
        </View>
        <View style={styles.flex}>
          <Image
            style={styles.icon}
            source={require("../assets/user_icon.png")}
          />
          <Text style={{ fontSize: 20 }}>2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 10,
    gap: 20,
  },

  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },

  flex: {
    flexDirection: "row",
    alignItems: "center",
  },

  subject: {
    flexDirection: "column",
    gap: 5,
  },

  date: {
    flexDirection: "column",
    alignItems: "center",
  },

  dateDate: {
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "center",
    color: "white",
    backgroundColor: "blue",
    borderRadius: 20,
    width: 30,
    height: 30,
  },

  title: {
    fontSize: 16,
  },

  time: {
    fontSize: 12,
  },

  icon: {
    height: 20,
    width: 20,
    margin: 5,
  },
});

export default EventCard;
