import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import  FormField from '../../Components/FormField'
import  CustomButton  from '../../Components/CustomButton'
import { Link } from 'expo-router';


const SignIN = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  
  const submit =() =>{

  }

  return (
    <SafeAreaView clasName="bg-primary h-full">
      <ScrollView>
        <View clasName="w-full justyfy-center min-h-[83avh]  px-4 my-6">
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

          <CustomButton
          title=" Sign In"
          handlePress={submit}
          containerStyle="mt-7"
          isLoading={isSubmitting}
          />
          <View className=" justify-center pt-5 flex-row gap-2">

            <Text clasName="text-lg text-gray-100 font-pregular">
              ¿No tienes cuenta?
            </Text>
            <Link href="/Sing-up" className="text-lg font-psemibold text-secondary">Sing Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIN