import { TouchableOpacity, Text} from 'react-native'
import React from 'react'

const Custombutton = ({ title, handlePress, containerStyles, textStyles, isloading }) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    clasName= {`bg-secondary rounded-xl min-h-[62px justify-center items-center ${containerStyles} ${isloading ?  
        'opacity-500':''}`}> 
        disabled={isloading}
      <Text clasName={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Custombutton