import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import  styles from './styles';


export default class BotaoVerCesta extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.botao}>
            <View style={styles.boxLeft}>
              <View style={styles.boxQuantidade}>
                <Text style={styles.textQuantidade}>4</Text>
              </View>
            </View>
            <View style={styles.boxCenter}>
              <Text style={styles.txtVer}>Ver cesta</Text>
            </View>
            <View style={styles.boxRight}>
              <Text style={styles.txtValor}>R$ 25,85</Text>
            </View>
          </View>
        </View>
    );
  }
}
