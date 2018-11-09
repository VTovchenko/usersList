import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#DAE2E4',
        borderRadius: 5,
    },
    textLayout: {
        flex: 1,
        flexDirection: 'column'
    },
    nameText: {
        fontSize: 15
    },
    companyText: {
        color: '#A6AFB0'
    },
    joinedText: {
        color: '#A6AFB0',
        fontSize: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 45,
        marginRight: 10
    },
    title: {
        color: '#FEFFFF',
        fontWeight: 'bold'
    }
});