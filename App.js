import React, {useState} from 'react';
import {useFonts} from 'expo-font';
import { Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import {Picker} from '@react-native-picker/picker';
import Radiobutton from './components/Radiobutton'; 
import MyButton from './components/MyButton';

const MIN_WEIGHT = 30;
const MAX_WEIGHT = 300;

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
  const [weightError, setWeightError] = useState(false);
  
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
  for (var i = 1; i <= 24; i++) {
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

  /** Check entered weight value and set it to the weight property */
  const checkSetWeight = (weight) => {
    var err = isNaN(+weight);
    err = !err && (weight < MIN_WEIGHT || weight > MAX_WEIGHT);
    setWeightError(err);
    if (!err) setWeight(weight); 
  }

  /** Calculate result */
  const calculate = () => {
    if (weight == 0 || weightError) {
      setResult(0);
      return;
    }

    var grams = bottles * 0.33 * 8 * 4.5;
    var gramsLeft = grams - (hours * (weight / 10));
    
    var fact = gender == 1 ? 0.7 : 0.6;
    var result = gramsLeft / (weight * fact);
    if (result < 0 ) result = 0;
    setResult(result);
  };
  
  /** Return null if font loading failed */
  if(!fontsLoaded) { return null; }

  /** Return main view */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Alcometer</Text>
        <Text style={styles.label}>Weight</Text>
        <TextInput style={styles.input} onChangeText={text => checkSetWeight(text)} placeholder='Enter weight (kg)' keyboardType='numeric' error={weightError}></TextInput>
        {weightError && <Text style={styles.errorText}>Enter proper weight value ({MIN_WEIGHT} - {MAX_WEIGHT} kg)!</Text> }
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
        <MyButton textStyle={styles.buttonText} text={'CALCULATE'} onPress={calculate}></MyButton>   
      </ScrollView>
    </SafeAreaView>
  );
}
