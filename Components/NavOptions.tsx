import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

// TODO figure out why the screen values are typed as strings instead of their own value
const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'HomeScreen',
  },
]

const NavOptions = () => {
  const { navigate } = useNavigation()
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigate(item.screen as 'MapScreen' | 'HomeScreen')}
          style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
              tvParallaxProperties={null}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
