import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { MapStackParamList } from '../screens/MapScreen'

const NavigateCard = () => {
  const { navigate } = useNavigation<StackNavigationProp<MapStackParamList>>()

  return (
    <View>
      <Text>YOOOOOO</Text>
      <Button
        title="Go to Ride Options"
        onPress={() => navigate('RideOptionsCard')}
      />
    </View>
  )
}

export default NavigateCard
