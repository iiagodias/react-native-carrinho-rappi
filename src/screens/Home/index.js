import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import CardProduto from '../../components/CardProduto';
import Barra from '../../components/Barra';
import Header from '../../components/Header';
import CardMaisVendido from '../../components/CardMaisVendido';
import BotaoVerCesta from '../../components/BotaoVerCesta';
import  styles from './styles';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Header />
          <Barra texto="Ofertas" />
          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrolProduto}>
              <CardProduto quantidade={0} />
              <CardProduto quantidade={1} />
              <CardProduto quantidade={0} />
              <CardProduto quantidade={1} />
              <CardProduto quantidade={0} />
              <CardProduto quantidade={1} />
            </ScrollView>
          </View>
          <Barra texto="Produtos Mais Vendidos" />
          <View>
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrolProduto}>
             <CardMaisVendido />
             <CardMaisVendido />
             <CardMaisVendido />
             <CardMaisVendido />
           </ScrollView>
          </View>
          <BotaoVerCesta />
        </View>
    );
  }
}
