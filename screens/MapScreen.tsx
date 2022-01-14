import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

import Map from '../Components/Map'
import NavigateCard from '../Components/NavigateCard'
import RideOptionsCard from '../Components/RideOptionsCard'

export type MapStackParamList = {
  NavigateCard: undefined
  RideOptionsCard: undefined
}

const MapScreen = () => {
  const Stack = createStackNavigator<MapStackParamList>()

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
