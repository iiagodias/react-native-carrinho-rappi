import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: "80%",
        height: 45,
        padding: 5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffff",
        marginTop: 10,
        borderRadius: 5
    },
    box:{
        width: "100%",
        flexDirection: "row",
    },
    bntText:{
        color: "#2ecc71",
        fontFamily: "Montserrat-Light",
        fontSize: 35,
    },
    bnt:{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    textQuantidade:{
        color: "#4F4F4F",
        fontSize: 20
    },
    bntAdicionar:{
        color: "#2ecc71",
        fontFamily: "Montserrat-Light",
        fontSize: 18
    },
});


export default styles;