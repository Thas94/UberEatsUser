import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 5/3,
        
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 18, 
        letterSpacing: 0.7,
    },
    imageIcon: {
        padding: 20,
        position: 'absolute', 
        top: 20,
        left: 5,
    },
    page: {
        flex: 1,
    },
    title: {
        fontSize: 35,
        fontWeight: '600'
    },
    subtitle: {
        color: 'grey',
        fontSize: 15
    },
    container: {
        margin: 10,
    },
    button: {
        marginTop: 'auto',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        margin: 10 
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
});