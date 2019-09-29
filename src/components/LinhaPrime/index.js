import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default class LinhaPrime extends Component {

  render() {
    return (
      <View style={styles.linePrime}>
        <Image style={styles.imagem} source={require("../../assets/image/prime.png")} />
        <View style={styles.infoPrime}>
          <Text style={styles.txtPrime}>Taxa de entrega com <Text style={styles.boldPrime}>RappiPrime R$ 0,00</Text></Text>
        </View>
        <Text style={styles.txtInscreva}>Inscreva-se aqui</Text>
      </View>
    );
  }

}
