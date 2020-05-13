import { StyleSheet } from 'react-native'
import { color } from './color'

export const globalStyles = StyleSheet.create({
  example: {
    backgroundColor: color.yellow,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30
  },
  exampleText: {
    color: 'white',
    fontSize: 40
  }
})
