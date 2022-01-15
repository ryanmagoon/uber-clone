import React, { useState } from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MapStackParamList } from '../screens/MapScreen'
import { createSelectorCreator } from 'reselect'
import { selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const data = [
  {
    id: 'Uber-X-123',
    name: 'Uber X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    name: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-Black-789',
    name: 'Uber Black',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
]

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const { navigate } = useNavigation<StackNavigationProp<MapStackParamList>>()
  const [selected, setSelected] = useState<typeof data[0]>()
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <TouchableOpacity
        onPress={() => navigate('NavigateCard')}
        style={[tw`absolute top-3 left-5 rounded-full`, { zIndex: 1 }]}
      >
        <Icon
          name="chevron-left"
          type="fontawesome"
          tvParallaxProperties={null}
        />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride - {travelTimeInformation?.distance?.text}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, name, multiplier, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id ? 'bg-gray-200' : 'bg-white'
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{name}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected ? 'bg-gray-300' : ''}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.name}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard
