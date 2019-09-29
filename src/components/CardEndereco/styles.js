import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxEndereco:{
        padding: 15,
        flexDirection: "row",
        borderBottomColor: "rgba(207, 207, 207, 0.2)",
        borderBottomWidth: 2,
        paddingBottom: 10
    },
    infoMapa:{
        width: "28%",
        height: "100%",
        backgroundColor: "#fff",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        borderRadius: 5
    },
    infoEndereco:{
        width: "70%",
        padding: 10
    },
    tipoEndereco:{
        flexDirection: "row"
    },
    iconeTipo:{
        marginLeft: 5
    },
    txtTipo:{
        color: "#828282",
        fontFamily: 'Montserrat-Medium',
        fontSize: 15
    },
    txtEndereco:{
        color: "#363636",
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        justifyContent: "space-between",
        paddingTop: 5,
        paddingBottom: 5
    }
});


export default styles;