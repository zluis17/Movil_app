import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet,Text, View } from "react-native"
import { Slot, Stack }  from "expo-router"
import { Header } from "react-native/Libraries/NewAppScreen"

const RootLayout = () =>{
  return (
    <Stack>
      <Stack.Screen name="Index" options={{ headerShown:false}}/>
    </Stack>
  )
}

export default RootLayout;