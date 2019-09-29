import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin: 10,
        width: 150,
        alignItems: "center",
    },
    boxImagem:{
        width: 120,
        height: 120,
        alignItems: "center"
    },
    imagem:{
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    textValor:{
        fontSize: 18,
        color: "#4F4F4F",
        fontFamily: 'Montserrat-Bold',
    },
    textDescricao:{
        color: "#828282",
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
    }
});


export default styles;