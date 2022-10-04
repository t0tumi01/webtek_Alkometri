import React, {useState} from 'react';
import {useFonts} from 'expo-font';
import { Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import {Picker} from '@react-native-picker/picker';
import Radiobutton from './components/Radiobutton'; 
import MyButton from './components/MyButton';

export default function App() {
  /** Load external fonts */
  const[fontsLoaded] = useFonts({
    Rubik: require('./assets/fonts/Rubik-Regular.ttf'), 
    RubikBold: require('./assets/fonts/Rubik-Bold.ttf'),
  });
 
  /** Hooks */
  const [gender, setGender] = useState(1);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [hours, setHours] = useState(1);
  const [result, setResult] = useState(0);
  
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
  /** Bottles and hours */
  const bottlesArr = [];
  const hoursArr = [];
  for (var i = 1; i <= 10; i++) {
    var p;
    i > 1 ? p = "s" : p = "";
    bottlesArr.push({
      label: i.toString() + " bottle" + p,
      value: i
    })
    hoursArr.push({
      label: i.toString() + " hour" + p,
      value: i
    })
  }

  /** Calculate result */
  const calculate = () => {
    setResult(result + 0.1);
    console.log(bottles);
    console.log(hours);
  };
  
  /** Return null if font loading failed */
  if(!fontsLoaded) { return null; }

  /** Return main view */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.heading}>Alcometer</Text>
      <Text style={styles.label}>Weight</Text>
      <TextInput style={styles.input} onChangeText={text => setWeight(text)} placeholder='Enter weight (kg)' keyboardType='numeric'></TextInput>
      <Text style={styles.label}>Bottles</Text>
      <Picker style={styles.input} mode="dropdown" selectedValue={bottles} onValueChange={(itemValue, itemIndex) => setBottles(itemValue)}>
        {bottlesArr.map((t) => {
          return (<Picker.Item label={t.label} value={t.value} key={t.value}/>)
        })}
      </Picker>
      <Text style={styles.label}>Time</Text>
      <Picker style={styles.input} mode="dropdown" selectedValue={hours} onValueChange={(itemValue, itemIndex) => setHours(itemValue)}>
        {hoursArr.map((t) => {
          return (<Picker.Item label={t.label} value={t.value} key={t.value}/>)
        })}
      </Picker>
      <Text style={styles.label}>Gender</Text>
      <Radiobutton options={radioGenderOptions} defaultValue={gender} onPress={(value) => {setGender(value)}} /> 
      <Text style={[result >= 1.00 ? styles.result_mad : result >= 0.1 ? styles.result_warning : styles.result_ok]}>{result.toFixed(2)}</Text>
      <MyButton text={'CALCULATE'} onPress={calculate}></MyButton>
      </ScrollView>
    </SafeAreaView>
  );
}
