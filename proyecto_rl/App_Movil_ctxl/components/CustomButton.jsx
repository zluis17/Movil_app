import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({ title = 'Continúa con Email', handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles]}
      disabled={isLoading} // Disable button while loading
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8e44ad', // Purple color
    borderRadius: 12, // Rounded corners
    minHeight: 62, // Minimum height of the button
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    paddingHorizontal: 16, // Horizontal padding
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16, // Text size
    fontWeight: 'bold', // Bold text
  },
});

export default CustomButton;
