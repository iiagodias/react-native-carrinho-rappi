import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import CardProduto from '../../components/CardProduto';
import Barra from '../../components/Barra';
import Header from '../../components/Header';
import CardMaisVendido from '../../components/CardMaisVendido';
import ModalCarrinho from '../../components/ModalCarrinho';
import BotaoVerCesta from '../../components/BotaoVerCesta';
import styles from './styles';
import { Provider } from 'react-redux';
import store from '../../store';
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  function compare(a, b) {
    return new Date(Date.parse(a.date)).getTime() < new Date(Date.parse(b.date)).getTime() ? 1 : -1;
  }

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => {
        setData(res.data.sort(compare));
      }).catch(err =>
        console.log(err))
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Barra texto="Ofertas" />
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrolProduto}>
            {data.map((item) =>
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

