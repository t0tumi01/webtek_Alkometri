import React, {useState} from 'react';
import {useFonts} from 'expo-font';
import { StatusBar, Text, SafeAreaView, TextInput } from 'react-native';
import styles from './Styles';
import Radiobutton from './components/Radiobutton'; 

export default function App() {
  /** Load external fonts */
  const[fontsLoaded] = useFonts({
    Rubik: require('./assets/fonts/Rubik-Regular.ttf'), 
    RubikBold: require('./assets/fonts/Rubik-Bold.ttf'),
  });
 
  /** Hooks */
  const [gender, setGender] = useState(1);
  const [weight, setWeight] = useState(0);
  
  /** Constants */
  /** Genders */
  const radioGenderOptions = [
    {
      label: 'Male',
      value: 1
    },
    {
      label: 'Female',
      value: 2
    }
  ]; 
  
  /** Return null if font loading failed */
  if(!fontsLoaded) { return null; }

  /** Return main view */
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Alcometer</Text>
      <Text style={styles.label}>Weight</Text>
      <TextInput style={styles.input} onChangeText={text => setWeight(text)} placeholder='Enter weight (kg)' keyboardType='numeric'></TextInput>
      <Text style={styles.label}>Bottles</Text>
      <Text style={styles.label}>Time</Text>
      <Text style={styles.label}>Gender</Text>
      <Radiobutton options={radioGenderOptions} defaultValue={gender} onPress={(value) => {setGender(value)}} /> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
