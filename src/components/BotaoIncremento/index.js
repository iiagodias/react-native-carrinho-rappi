import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function BotaoIncremento(props) {

  const { quantidade, add, remover } = props;

  return (
    <View style={styles.container}>
      {quantidade != 0 ?
        <View style={[styles.box, { justifyContent: "space-between" }]}>
          <TouchableOpacity style={styles.bnt} onPress={remover}>
            <Text style={styles.bntText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textQuantidade}>{quantidade}</Text>
          <TouchableOpacity style={styles.bnt} onPress={add}>
            <Text style={styles.bntText}>+</Text>
          </TouchableOpacity>
        </View>
        :
        <TouchableOpacity onPress={add} style={[styles.box, { justifyContent: "center" }]}>
          <Text style={styles.bntAdicionar}>Adicionar</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

