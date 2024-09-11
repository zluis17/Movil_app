import { Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height : '110%'}}>
        
        <View className= "w-full  justify-center items-center min-h-[85vh] px-4"> 
          <Image
          
          source={images.logo}
          className="w-[130px]  h-[84px]"
          resizeMode="contain"
          />
          <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode="contain"
          />
          
          <View className="realitive mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with {' '}

            <Text className="text-secondary-200">Aora</Text>  
            </Text>
            <Image
            
            source={images.path}
            className="w-[136px] h-[15px] absolute-bottom-2 -right-8"
            resizeMode="contain"
            />
             
          </View>
          <Text  className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey  of
             limmitless exploration with aora.

             <custombutton
             title="continue-with Email"
             handlePress={()=>router.push('/sign-in')}
             ContainerStyle="w-full mt-7"
             />
             
            </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='Light'/>
    </SafeAreaView>
  );
}
