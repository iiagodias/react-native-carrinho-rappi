import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native';
import CardProdutoCarrinho from "../CardProdutoCarrinho";
import Icon from 'react-native-vector-icons/EvilIcons';
import Icone from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import esvaziarCarrinho from "../../actions/esvaziarCarrinho";

export default function ModalCarrinho(props) {
  
  const { visible, close } = props;

  const produtos = useSelector(state =>{
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
          <View style={styles.linePrime}>
            <Image style={styles.imagem} source={require("../../assets/image/prime.png")} />
            <View style={styles.infoPrime}>
              <Text style={styles.txtPrime}>Taxa de entrega com <Text style={styles.boldPrime}>RappiPrime R$ 0,00</Text></Text>
            </View>
            <Text style={styles.txtInscreva}>Inscreva-se aqui</Text>
          </View>

          <ScrollView>
            <View style={styles.boxEndereco}>
              <View style={styles.infoEndereco}>
                <Text style={styles.txtSubtitulo}>ENDEREÇO DE ENTREGA</Text>
                <Text numberOfLines={1} style={styles.txtEndereco}>Condominio do Edficio Tk Tower</Text>
                <View style={styles.tipoEndereco}>
                  <Text style={styles.txtTipo}>Trabalho</Text>
                  <Icone style={styles.iconeTipo} color="#828282" size={20} name="briefcase" />
                </View>

              </View>
              <View style={styles.infoMapa}></View>
            </View>


            <View style={styles.boxProdutos}>
              {produtos.map(item=>
                <CardProdutoCarrinho key={item.id} produto={item} />
              )}
            </View>
              
            {produtos.length ?
              <View style={styles.boxEsvaziar}>
                <TouchableOpacity onPress={() =>esvaziar()}>
                  <Text style={styles.textEsvaziar}>Esvaziar</Text>
                </TouchableOpacity>
              </View>
            :
              <View style={styles.boxNenhum}>
                <Icone color="#B5B5B5" size={60} name="shopping-basket" />
                <Text style={styles.txtCesta}>Sua cesta esta vazia</Text>
              </View>
            }
          </ScrollView>

          <View style={styles.boxBntContinuar}>
            <TouchableOpacity style={styles.bntContinuar}>
              <Text style={styles.txtContinuar}>Continuar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

