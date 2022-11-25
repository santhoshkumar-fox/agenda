import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleCalendar from './components/SimpleCalendar'

const App = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <SimpleCalendar/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})