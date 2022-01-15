import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
]

const NavFavorites = () => (
  <FlatList
    data={data}
    keyExtractor={(item: typeof data[0]) => item.id}
    ItemSeparatorComponent={() => (
      <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
    )}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={tw`flex-row items-center p-5`}
        onPress={() => {}}
      >
        <Icon
          style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          name={item.icon}
          color="white"
          type="material-community"
          tvParallaxProperties={null}
        />
        <View>
          <Text style={tw`text-lg font-semibold`}>{item.location}</Text>
          <Text style={tw`text-gray-500`}>{item.destination}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
)

export default NavFavorites
