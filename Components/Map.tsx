import { GOOGLE_MAPS_APIKEY } from '@env'
import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin } from '../slices/navSlice'

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef<MapView | null>(null)

  useEffect(() => {
    if (!origin || !destination) return

    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    })
  }, [origin, destination])

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsBuildings={false}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location?.lat || 37.78825,
        longitude: origin?.location?.lng || -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
          mode="DRIVING"
        />
      )}
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
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
}

export default Map
