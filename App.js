import React, {useState} from 'react';
import {useFonts} from 'expo-fonts';
import { StatusBar, Text, SafeAreaView } from 'react-native';
import styles from './Styles';
import Radiobutton from './components/Radiobutton'; 

export default function App() {
  const[loaded] = useFonts({
    Rubic: require('./assets/fonts/Rubik-Regular.ttf'), 
  });

  if(!loaded) { return null; }

  const [gender, setGender] = useState(1);
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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Alcometer</Text>
      <Radiobutton options={radioGenderOptions} default={gender} onPress={(value) => {setGender(value)}} /> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
