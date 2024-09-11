import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import  FormField from '../../Components/FormField'
import  CustomButton  from '../../Components/CustomButton'
import { Link } from 'expo-router';
import {createUser} from  '../../lib/appwrite'


const Signup = () => {
  const [form, setform] = useState({
    username: '',
    email: '',
    password: ''
  })  
  const [isSubmitting, setisSubmitting] = useState(false)
  
  const submit =() =>{
    createUser();

  }

  return (
    <SafeAreaView clasName="bg-primary h-full">
      <ScrollView>
        <View clasName="w-full justyfy-center min-h-[83vh]  px-4 my-6">
          <Image source={images.logo} resizeMode='contain' clasName="W-[115PX] h-[35px]"/>

          <Text clasName="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>
          <formField
          titlle="Username"
          value={form.username}
          handleChangetext={(e) => setform({...form, username: e })}
          otherStyles="mt-07"
          
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
              ¿Tienes Cuenta?
            </Text>
            <Link href="/Sing-up" className="text-lg font-psemibold text-secondary">Sing in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup