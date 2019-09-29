import React from 'react';
import { View, Text, Image } from 'react-native';
import BotaoIncremento from '../BotaoIncremento';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import addProduto from '../../actions/addProduto';
import _ from "lodash";
import removerProduto from '../../actions/removerProduto'

export default function CardProduto(props) {
  const { produto } = props;

  const quantidade = useSelector(state => {
    const produtoEspecifico = _.find(state.data.produtos, { id: produto.id });
    if (!produtoEspecifico) {
      return 0
    }
    return produtoEspecifico.quantidade;
  });

  const dispatch = useDispatch();

  function add() {
    dispatch(addProduto(produto))
  }
  function remover() {
    dispatch(removerProduto(produto))
  }
  return (
    <View style={styles.container}>
      <View style={styles.boxImagem}>
        <Image style={styles.imagem} source={{ uri: produto.image }} />
      </View>
      <View style={styles.boxValor}>
        <Text style={styles.textValor}>R$ {produto.price}</Text>
      </View>
      <View style={styles.boxDescricao}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.textDescricao}>{produto.description}</Text>
      </View>
      <BotaoIncremento quantidade={quantidade} add={add} remover={remover} />
    </View>
  );
}

