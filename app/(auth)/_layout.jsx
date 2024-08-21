import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Authlayout = () => {
  return (
    <View>
      <>
      <Stack>
        <Stack.Screen
        name="Sign-in"
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Sign-up"
        options={{
          headerShown: false
        }}
        />
      </Stack>
        
      <StatusBar backgroundColor="#161622" style="light"/>
      </>
    </View>
  )
}

export default Authlayout