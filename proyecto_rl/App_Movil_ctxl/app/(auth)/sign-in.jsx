import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Alert, Image } from 'react-native'; 
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants'; 
import FormField from '../../components/FormField'; 
import CustomButton from '../../components/CustomButton'; 
import { signIn } from '../../lib/appwrite'; 

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={images.logo} resizeMode='contain' style={styles.logo} />
        <Text style={styles.title}>Inicia Sesión</Text>

        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles={[styles.formField, styles.orangeStyle]}
          keyboardType="email-address"
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={[styles.formField, styles.orangeStyle]}
        />

        <CustomButton
          title="Ingresa"
          handlePress={submit}
          containerStyles={styles.buttonContainer}
          isLoading={isSubmitting}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>¿No tienes Cuenta?</Text>
          <Link href="/sign-up" style={styles.link}>Regístrate</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  formField: {
    marginVertical: 8,
  },
  orangeStyle: {
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF5E6', // Light orange background
  },
  buttonContainer: {
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SignIn;
