import { View, Text } from 'react-native'
import React from 'react'

const formField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  return (
    <View classname={`space-y-2 ${otherStyles}` }>
      <Text classname="text-base text-gray-100 font-pmedium">{title}</Text>


      <View classname="border-2 border-red--500w-full h-16 px-4 bg-black-100 rounded-2xl">

      </View>
    </View>
  )
}

export default formField