import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Calendar} from "react-native-calendars"
const SimpleD = () => {
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};
  return (
    <View style={{height:500,width:400}}>
      <Calendar
      markingType={'multi-dot'}
      markedDates={{
        '2022-11-25': {dots: [vacation, massage, workout]},
        '2022-11-26': {dots: [massage, workout]}
      }}
  onDayPress={day => {
    console.log('selected day', day);
  }}
  />
    </View>
  )
}

export default SimpleD

const styles = StyleSheet.create({})