import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, Alert } from 'react-native';
import CardProduto from '../../components/CardProduto';
import Barra from '../../components/Barra';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CardMaisVendido from '../../components/CardMaisVendido';
import ModalCarrinho from '../../components/ModalCarrinho';
import BotaoVerCesta from '../../components/BotaoVerCesta';
import styles from './styles';
import { Provider } from 'react-redux';
import store from '../../store';
import axios from 'axios'
import _ from 'lodash';

export default function Home() {
  const [data, setData] = useState([]);
  const [texto, setTexto] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function compare(a, b) {
    return new Date(Date.parse(a.date)).getTime() < new Date(Date.parse(b.date)).getTime() ? 1 : -1;
  }

  function setSearch(texto){
    setTexto(texto);    
  }

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/products')
      .then(res => {
        setLoading(false);
        setData(res.data.sort(compare));
      }).catch(err => {
        Alert.alert("Erro ao conectar com o servidor.");
        setLoading(false)
      });
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#2ecc71" barStyle="light-content" />
      <Loading visible={loading} />
      <View style={styles.container}>
        <Header search={(text)=> setSearch(text)} />
        <Barra texto="Ofertas" />
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrolProduto}>
            {_.filter(data, function(o) {
               return o.description.toLowerCase().includes(texto.toLowerCase());
            }).map((item) =>
              <CardProduto produto={item} key={item.id} quantidade={0} />
            )}
          </ScrollView>
        </View>
        <Barra texto="Produtos Mais Vendidos" />
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrolProduto}>
            {data.map((item) =>
              <CardMaisVendido key={item.id} imagem={item.image} descricao={item.description} />
            )}
          </ScrollView>
        </View>
        <BotaoVerCesta onPress={() => setModal(true)} />
        <ModalCarrinho visible={modal} close={() => setModal(false)} />
      </View>
    </Provider>
  );
}

