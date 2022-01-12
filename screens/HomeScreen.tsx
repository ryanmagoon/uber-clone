import React from 'react'
import { Image, SafeAreaView, View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from '@env'

import NavOptions from '../Components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"
          styles={{
            container: { flex: 0 },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details)
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
