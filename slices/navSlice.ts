import { createSlice } from '@reduxjs/toolkit'
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete'
import { RootState } from '../store'

type state = {
  origin: {
    location: GooglePlaceDetail['geometry']['location']
    description?: string
  } | null
  destination: number | null
  travelTimeInformation: string | null
}

const initialState: state = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload
    },
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions

// Selectors
export const selectOrigin = (state: RootState) => state.nav.origin
export const selectDestination = (state: RootState) => state.nav.destination
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation

export default navSlice.reducer
