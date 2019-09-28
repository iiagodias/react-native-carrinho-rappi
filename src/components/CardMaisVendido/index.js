import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import  styles from './styles';


export default class CardMaisVendido extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.boxImagem}>
            <Image style={styles.imagem} source={{uri: "https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg"}} />
          </View>
          <View style={styles.boxDescricao}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.textDescricao}>Presunto Sadia</Text>
          </View>
        </View>
    );
  }
}
