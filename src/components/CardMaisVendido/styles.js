import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin: 10,
        width: 150,
        alignItems: "center",
    },
    boxImagem:{
        width: 150,
        height: 150,
        alignItems: "center"
    },
    imagem:{
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    textDescricao:{
        color: "#828282",
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
    }
});


export default styles;