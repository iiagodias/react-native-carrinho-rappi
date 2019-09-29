import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import  styles from './styles';
import { useSelector } from 'react-redux';

export default function BotaoVerCesta(props) {

    const {onPress} = props;

    const valorTotal = useSelector(state => {
      return state.data.valorTotal;
    });

    const total = useSelector(state => {
      return state.data.total;
    });

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress} style={styles.botao}>
            <View style={styles.boxLeft}>
              <View style={styles.boxQuantidade}>
                <Text style={styles.textQuantidade}>{total}</Text>
              </View>
            </View>
            <View style={styles.boxCenter}>
              <Text style={styles.txtVer}>Ver cesta</Text>
            </View>
            <View style={styles.boxRight}>
              <Text style={styles.txtValor}>R$ {valorTotal}</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }

