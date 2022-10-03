import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    heading: {
        fontSize: 40,
        fontFamily: 'RubikBold',
        color: '#6060EF',
        marginTop: 5,
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontFamily: 'RubikBold',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
    },
    input: {
        width: '85%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    }
});