import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    linePrime:{
        width: "100%",
        backgroundColor: "#FA334A",
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",  
    },
    imagem:{
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    infoPrime:{
        width: "50%",
        padding: 10,
    },
    txtPrime:{
        textAlign: "center",
        color: "#FFFF",
        fontFamily: 'Montserrat-Light'
    },
    boldPrime:{
        fontFamily: 'Montserrat-Bold'
    },
    txtInscreva:{
        textDecorationLine: 'underline',
        color: "#ffff",
        fontFamily: 'Montserrat-Bold',
    },
});


export default styles;