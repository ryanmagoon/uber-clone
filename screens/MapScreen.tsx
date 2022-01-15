import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

export type MapStackParamList = {
  NavigateCard: undefined
  RideOptionsCard: undefined
}

const MapScreen = () => {
  const Stack = createStackNavigator<MapStackParamList>()
  const { navigate } = useNavigation()

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" tvParallaxProperties={null} />
      </TouchableOpacity>

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
