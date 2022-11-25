import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleD from './components/SimpleD'

const App = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <SimpleD/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})