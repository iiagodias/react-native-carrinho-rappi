import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import  styles from './styles';

export default class BotaoIncremento extends Component {
  render() {

    const {quantidade} = this.props;

    return (
        <View style={styles.container}>
          {quantidade != 0 ?
            <View style={[styles.box, {justifyContent: "space-between"}]}>
              <TouchableOpacity style={styles.bnt}>
                <Text style={styles.bntText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textQuantidade}>4</Text>
              <TouchableOpacity style={styles.bnt}>
                <Text style={styles.bntText}>+</Text>
              </TouchableOpacity>
            </View>
          :
            <TouchableOpacity style={[styles.box, {justifyContent: "center"}]}>
              <Text style={styles.bntAdicionar}>Adicionar</Text>
            </TouchableOpacity>
          }
        </View>
    );
  }
}
