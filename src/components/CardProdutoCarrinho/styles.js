import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ffff",
        padding: 20,
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    boxImagem:{
        width: "30%",
        height: 100,
        padding: 10,
        alignItems: "center"
    },
    imagem:{
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    boxinfo:{
        width: "40%",
    },
    tituloProduto:{
        color: "#363636",
        fontSize: 17,
        fontFamily: 'Montserrat-Bold',
    },
    txtValor:{
        fontSize: 16,
        color: "#4F4F4F",
        fontFamily: 'Montserrat-Light',
    },
    boxBotao:{
        width: "40%",
        padding: 10
    },
});


export default styles;