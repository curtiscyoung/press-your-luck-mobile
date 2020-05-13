import React from 'react'
import { Text, View } from 'react-native'

import { globalStyles } from 'common'

import LandingScreen from 'scenes/Landing'

export default function App () {
  return (
    <View style={globalStyles.example}>
      <Text style={globalStyles.exampleText}>Open up App.js to start working on your app!</Text>
      <LandingScreen />
    </View>
  )
}
