import React from 'react';
import { View, Text, Image } from 'react-native';
import  styles from './styles';


export default function CardMaisVendido(props){
  const {imagem, descricao} = props;
  return (
      <View style={styles.container}>
        <View style={styles.boxImagem}>
          <Image style={styles.imagem} source={{uri: imagem}} />
        </View>
        <View style={styles.boxDescricao}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.textDescricao}>{descricao}</Text>
        </View>
      </View>
  );
}
