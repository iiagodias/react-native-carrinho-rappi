import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class BotaoContinuar extends Component {

  render() {
    return (
      <View style={styles.boxBntContinuar}>
        <TouchableOpacity style={styles.bntContinuar}>
          <Text style={styles.txtContinuar}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  }

}
