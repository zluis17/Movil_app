import React from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const TabIcon = ({ icon, color, name, focused }) => {
  const scale = useSharedValue(focused ? 1.2 : 1); 


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scale.value, { damping: 3, stiffness: 100, mass: 1 }) }],
    };
  });


  React.useEffect(() => {
    scale.value = focused ? 1.2 : 1;
  }, [focused]);

  return (
    <View className="items-center justify-center gap-2">
      <Animated.View style={animatedStyle}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{ tintColor: color, width: 24, height: 24 }} 
        />
      </Animated.View>
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}style={{color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6A0D91', 
        tabBarInactiveTintColor: '#D3D3D3', 
        tabBarStyle:{
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height:84,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="home"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="bookmark"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="create"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile} 
              color={color}
              name="profile"
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
