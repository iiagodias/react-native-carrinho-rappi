import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import CardProdutoCarrinho from "../CardProdutoCarrinho";
import CardEndereco from "../CardEndereco";
import LinhaPrime from '../LinhaPrime';
import BotaoContinuar from '../BotaoContinuar';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icone from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import esvaziarCarrinho from "../../actions/esvaziarCarrinho";


export default function ModalCarrinho(props) {

  const { visible, close } = props;

  const produtos = useSelector(state => {
    return state.data.produtos;
  });

  const valorTotal = useSelector(state => {
    return state.data.valorTotal;
  });

  const dispatch = useDispatch();

  function esvaziar() {
    dispatch(esvaziarCarrinho())
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible} >
      <View style={styles.boxModal}>
        <View style={styles.topo}>
          <TouchableOpacity onPress={close} style={styles.bntFechar}>
            <Icon color="#ffff" size={35} name="close" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.boxTotal}>
              <Text style={styles.txtSubtitulo}>SUBTOTAL</Text>
              <Text style={styles.txtValor}>R$ {valorTotal}</Text>
            </View>
          </View>
          <LinhaPrime />
          <ScrollView style={styles.scrollProduto} showsVerticalScrollIndicator={false}>

            {produtos.length ?
              <View>
                <CardEndereco />
                <View style={styles.boxProdutos}>
                  {produtos.map(item =>
                    <CardProdutoCarrinho key={item.id} produto={item} />
                  )}
                </View>
                <View style={styles.boxEsvaziar}>
                  <TouchableOpacity onPress={() => esvaziar()}>
                    <Text style={styles.textEsvaziar}>Esvaziar</Text>
                  </TouchableOpacity>
                </View>
              </View>
              :
              <View style={styles.boxNenhum}>
                <Icone color="#B5B5B5" size={60} name="shopping-basket" />
                <Text style={styles.txtCesta}>Sua cesta esta vazia</Text>
              </View>
            }
          </ScrollView>
          <BotaoContinuar />
        </View>
      </View>
    </Modal>
  );
}

