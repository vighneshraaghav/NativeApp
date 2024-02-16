import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonthCalendar = ({ year, month }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const emptySlots = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <View style={styles.container}>
      {emptySlots.map((slot, index) => (
        <Text key={index} style={styles.emptySlot}>{""}</Text>
      ))}
      {daysArray.map((day, index) => (
        <Text key={index} style={styles.day}>{day}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  emptySlot: {
    width: 30,
    height: 30,
    textAlign: 'center',
    color: 'gray',
  },
  day: {
    width: 30,
    height: 30,
    textAlign: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    lineHeight: 30,
  },
});

export default MonthCalendar;
