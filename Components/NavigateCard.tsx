import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { MapStackParamList } from '../screens/MapScreen'
import { setDestination } from '../slices/navSlice'
import NavFavorites from './NavFavorites'

const NavigateCard = () => {
  const dispatch = useDispatch()

  const { navigate } = useNavigation<StackNavigationProp<MapStackParamList>>()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Ryan</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={toInputBoxStyles}
          fetchDetails={true}
          textInputProps={{
            returnKeyType: 'search',
          }}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details?.geometry.location,
                description: data.description,
              })
            )
            navigate('RideOptionsCard')
          }}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="car"
            type="font-awesome"
            color="white"
            size={16}
            tvParallaxProperties={null}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="fast-food"
            type="ionicon"
            color="black"
            size={16}
            tvParallaxProperties={null}
          />
          <Text style={tw`text-black text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})

export default NavigateCard
