import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    appTitle: {
        fontSize: 40,
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        color: '#6060EF',
        paddingTop: 5,
        paddingBottom: 10,
    }
});