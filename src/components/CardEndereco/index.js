import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardEndereco extends Component {

  render() {
    return (
      <View style={styles.boxEndereco}>
        <View style={styles.infoEndereco}>
          <Text style={styles.txtSubtitulo}>ENDEREÇO DE ENTREGA</Text>
          <Text numberOfLines={1} style={styles.txtEndereco}>Condominio do Edficio Tk Tower</Text>
          <View style={styles.tipoEndereco}>
            <Text style={styles.txtTipo}>Trabalho</Text>
            <Icon style={styles.iconeTipo} color="#828282" size={20} name="briefcase" />
          </View>
        </View>
        <View style={styles.infoMapa}>
          <Image style={styles.imagem} source={require("../../assets/image/mapa.png")} />
        </View>
      </View>
    );
  }

}
