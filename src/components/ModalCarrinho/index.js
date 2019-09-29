import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native';
import CardProdutoCarrinho from "../CardProdutoCarrinho";
import Icon from 'react-native-vector-icons/EvilIcons';
import Icone from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';


export default class ModalCarrinho extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true} >
        <View style={styles.boxModal}>
          <View style={styles.topo}>
            <TouchableOpacity style={styles.bntFechar}>
              <Icon color="#ffff" size={35} name="close" />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View style={styles.box}>
              <View style={styles.boxTotal}>
                <Text style={styles.txtSubtitulo}>SUBTOTAL</Text>
                <Text style={styles.txtValor}>R$ 20,84</Text>
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
                <CardProdutoCarrinho />
                <CardProdutoCarrinho />
                <CardProdutoCarrinho />
                <CardProdutoCarrinho />
              </View>

              <View style={styles.boxEsvaziar}>
                <TouchableOpacity>
                  <Text style={styles.textEsvaziar}>Esvaziar</Text>
                </TouchableOpacity>
              </View>
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
}
