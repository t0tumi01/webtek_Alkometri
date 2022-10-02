import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';

/**
 * Radiobutton component
 * options - Array containing dispayed texts and values for radiobutton options
 * onPress - Used to forward selected value to the component using ths radiobutton component
 */

export default function Radiobutton({options, onPress, defaultValue}) {
    const [value, setValue] = useState(defaultValue);

    /** Relay function for handling radiobutton selection */
    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    return (
        <>
        {
            options.map((item) => (
                <SafeAreaView key={item.value} style={styles.buttonContainer}>
                    <Text style={styles.label}>{item.label}</Text>
                    <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
                        {value === item.value && <SafeAreaView style={styles.checkedCircle}/>}
                    </Pressable>
                </SafeAreaView>
            ))
        }
        </>
    )    
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30,
    },
    label: {
        marginRight: 10,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        boarderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000'
    }
})