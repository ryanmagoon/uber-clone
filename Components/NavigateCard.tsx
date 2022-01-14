import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { MapStackParamList } from '../screens/MapScreen'
import { setDestination } from '../slices/navSlice'

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
