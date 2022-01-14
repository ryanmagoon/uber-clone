import React from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice'

const Map = () => {
  const origin = useSelector(selectOrigin)

  return (
    <MapView
      mapType="mutedStandard"
      // showsPointsOfInterest={false}
      // showsBuildings={false}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location?.lat || 37.78825,
        longitude: origin?.location?.lng || -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
    </MapView>
  )
}

export default Map
