import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "space-between",
        
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "rgba(207, 207, 207, 0.1)",
        borderBottomWidth: 2
    },
    textTitulo:{
        fontFamily: 'Montserrat-Bold',
        color: "#4F4F4F",
        fontSize: 18
    },
    textVer:{
        color: "#2ecc71",
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
    },
    boxIcone:{
        flexDirection: "row"
    },
    icone:{
        color: "#2ecc71",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 4
    }
});


export default styles;