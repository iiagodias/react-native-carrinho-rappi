import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import  styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Barra extends Component {

  render() {
    const {texto} = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.textTitulo}>{texto}</Text>
          <TouchableOpacity style={styles.boxIcone}>
            <Text style={styles.textVer}>Ver mais</Text>
            <Icon style={styles.icone} name="angle-right" color="#999" />
          </TouchableOpacity>
        </View>
    );
  }

}
