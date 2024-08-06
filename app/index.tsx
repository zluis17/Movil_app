import {  Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'


export default  function App(){
  return(
    <View className="flex-1 items-center justify-center
    bg-white">
    <text className="text-3xl">Aora ADSO!</text>
    <StatusBar style = 'auto'/>
    <link href= "/profile" style={{color: 'blueviolet'}}> Go to profile </link>
    </View>
  )
}




