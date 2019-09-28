import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background:{
        width: "100%",
        zIndex: 1
    },
    container:{
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(230, 126, 34,0.3)",
        zIndex: 2
    },
    boxIcone:{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "rgba(54,54,54,0.8)",
        borderRadius: 100,
    },
    boxBuscar:{
        width: "68%",
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#FFFF",
        borderRadius: 100,
        alignItems: "center"
    },
    iconeBuscar:{
        color: "#CFCFCF",
        fontSize: 25,
        marginRight: 10
    },
    input:{
        width: "80%",
        color: "#696969",
        fontFamily: 'Montserrat-Regular',
    },
    boxQuantidade:{
        position: "absolute",
        top: -3,
        left: 25,
        width: 25,
        height:25,
        backgroundColor: "#696969",
        borderRadius: 100,
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    textQuantidade:{
        color: "#ffff",
        fontSize: 12
    },
    iconeVoltar:{
        marginRight: 4
    }
});


export default styles;