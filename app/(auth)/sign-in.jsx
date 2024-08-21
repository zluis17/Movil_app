import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';

const SignIN = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  })
  
  return (
    <SafeAreaView clasName="bg-primary h-full">
      <ScrollView>
        <View clasName="w-full justyfy-center h-full h-full  px-4 my-6">
          <Image source={images.logo} resizeMode='contain' clasName="W-[115PX] h-[35px]"/>

          <Text clasName="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
          <formField
          titlle="Email"
          value={form.email}
          handleChangetext={(e) => setform({...form, email: e })}
          otherStyles="mt-07"
          keyboardType="email-address"
          />

          <formField
          titlle="password"
          value={form.password}
          handleChangetext={(e) => setform({...form, password: e })}
          otherStyles="mt-07"
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIN