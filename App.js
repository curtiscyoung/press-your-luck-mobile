import React from 'react'
import { Text, View } from 'react-native'

import { globalStyles } from './src/common'

import LandingScreen from './src/scenes/Landing'

export default function App () {
  return (
    <View style={globalStyles.example}>
      <Text style={globalStyles.exampleText}>Open up App.js to start working on your app!</Text>
      <LandingScreen />
    </View>
  )
}
