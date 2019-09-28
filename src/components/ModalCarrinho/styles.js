import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxModal:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    topo:{
        height: "15%",
    },
    bntFechar:{
        padding: 10,
        alignItems: "flex-end",
        flex: 1
    },
    container:{
        width: "100%",
        backgroundColor: "#ffff",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    },
    box:{
        padding: 15  
    },
    boxTotal:{
        padding: 10
    },
    txtSubtitulo:{
        color: "#828282",
        fontFamily: 'Montserrat-Medium'
    },
    txtValor:{
        color: "#363636",
        fontSize: 30,
        fontFamily: 'Montserrat-Bold'
    },
    txtEndereco:{
        color: "#363636",
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        justifyContent: "space-between",
        paddingTop: 5,
        paddingBottom: 5
    },
    boxEndereco:{
        padding: 15,
        flexDirection: "row"
    },
    infoEndereco:{
        width: "70%",
        padding: 10
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
    dadosCarrinho:{
        borderBottomColor: "rgba(207, 207, 207, 0.2)",
        borderBottomWidth: 2,
        paddingBottom: 10
    },
    boxProdutos:{
        backgroundColor: "rgba(207, 207, 207, 0.1)",
        flex: 1
    }
});


export default styles;