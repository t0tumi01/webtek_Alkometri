import { TouchableOpacity, StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';

/**
 * Radiobutton component
 * options - Array containing dispayed texts and values for radiobutton options
 * onPress - Used to forward selected value to the component using ths radiobutton component
 * defaultValue - Default value
*/
export default function MyButton({textStyle, text, onPress}) {

    /** Relay function for handling Button press */
    function handlePress() {
        onPress();
    }

    /** Return Button view */
    return (
        <>
        {
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>
        }
        </>
    )    
}

/** Stylesheet */
const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        alignSelf: 'center',
        width: "90%",

        backgroundColor: "#6060EF",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 50,
        paddingVertical: 10,
      },    
})