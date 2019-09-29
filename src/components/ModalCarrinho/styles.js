import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxModal:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    topo:{
        height: "10%",
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
    txtInscreva:{
        textDecorationLine: 'underline',
        color: "#ffff",
        fontFamily: 'Montserrat-Bold',
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
    boxProdutos:{
        backgroundColor: "#f5f5f5",
        flex: 1
    },
    boxEsvaziar:{
        alignItems:"center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    textEsvaziar:{
        color: "#828282",
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    boxNenhum:{
        padding: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    txtCesta:{
        color: "#696969",
        fontFamily: 'Montserrat-Medium',
        fontSize: 15
    },
    scrollProduto:{
        backgroundColor: "#f5f5f5",
    }
});


export default styles;