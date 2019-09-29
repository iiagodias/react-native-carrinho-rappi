import React from 'react';
import { View, Text, Image } from 'react-native';
import BotaoIncremento from '../BotaoIncremento';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import addProduto from '../../actions/addProduto';
import _ from "lodash";
import removerProduto from '../../actions/removerProduto'

export default function CardProdutoCarrinho(props) {

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
      <View style={styles.boxinfo}>
        <Text numberOfLines={2} style={styles.tituloProduto}>{produto.description}</Text>
        <Text style={styles.txtValor}>R$ {produto.price}</Text>
      </View>
      <View style={styles.boxBotao}>
        <BotaoIncremento quantidade={quantidade} add={add} remover={remover} />
      </View>
    </View>
  );
}

