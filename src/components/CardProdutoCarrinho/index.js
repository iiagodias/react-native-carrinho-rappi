import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import BotaoIncremento from '../BotaoIncremento';
import  styles from './styles';


export default class CardProdutoCarrinho extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.boxImagem}>
            <Image style={styles.imagem} source={{uri: "https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg"}} />
          </View>
          <View style={styles.boxinfo}>
            <Text numberOfLines={2} style={styles.tituloProduto}>Presendo da sadia</Text>
            <Text style={styles.txtValor}>R$ 20,84</Text>
          </View>
          <View style={styles.boxBotao}>
            <BotaoIncremento />
          </View>
        </View>
    );
  }
}
