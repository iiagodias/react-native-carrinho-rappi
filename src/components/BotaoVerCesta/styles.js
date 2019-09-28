import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: "100%",
        position: "absolute",
        bottom: 0,
        alignItems: "center"
    },
    botao:{
        width: "95%",
        backgroundColor: "#2ecc71",
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boxLeft:{
        width: "25%",
        alignItems: "flex-start"
    },
    boxCenter:{
        width: "50%",
        alignItems: "center"
    },
    boxRight:{
        width: "25%",
        alignItems: "flex-end"
    },
    boxQuantidade:{
        backgroundColor: "#27ae60",
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textQuantidade:{
        color: "#FFFF",
        fontSize: 20,
        fontFamily: 'Montserrat-Light',
    },
    txtVer:{
        fontSize: 18,
        color: "#fff",
        fontFamily: 'Montserrat-Bold',
    },
    txtValor:{
        fontSize: 18,
        color: "#fff",
        fontFamily: 'Montserrat-Light',
    }
});


export default styles;