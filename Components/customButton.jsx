import { TouchableOpacity, Text } from 'react-native';
import React from 'react';


const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[tw`bg-secondary rounded-xl min-h-[62px] justify-center items-center`, containerStyles, isLoading && tw`opacity-50`]}
      disabled={isLoading}
    >
      <Text style={[tw`text-primary font-semibold text-lg`, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
