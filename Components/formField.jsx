import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const formField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setshowPassword] = useState(false)

  return (  
    <View classname={`space-y-2 ${otherStyles}` }>
      <Text classname="text-base text-gray-100 font-pmedium">{title}</Text>


      <View classname="border-2 border-black--200 w-full h-16 px-4 bg-black-100 rounded-2xl 
      focus:border-secondary items-center flex-row">

         <TextInput
         classname="flex-1 text-white font-psemibold text-base"
         value={value}
         placeholder={placeholder}
         placeholderTextColor="#7b7b8b"
         onChangeText={handleChangeText}
         secureTextEntry={title === 'Password' && !showPassword }
         />

         {title === 'Password' && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>

            <Image source={!showPassword ? icons.eye : icons.eyehide} classname="w-6 w-6" 
            resizeMode= 'contain'/>

          </TouchableOpacity>
         )}
      </View>
    </View>
  )
}

export default formField