import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 5,
        backgroundColor: '#ECDDAF'
    },
    image: {
        marginTop: -20,
        width: 100,
        height: 100,
        borderRadius: 40
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    chatButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 50,
        backgroundColor: '#38C6BA',
        borderRadius: 50
    },
    backButtonTouchable: {
        marginTop: 20,
        alignSelf: 'flex-start'
    },
    backButtonContainer: {
        width: 90,
        height: 50,
        justifyContent: 'center'
    },
    backButton: {
        width: '60%',
        height: '60%'
    }
});