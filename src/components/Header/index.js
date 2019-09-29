import React, { Component } from 'react';
import { View, TextInput, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

export default function Header() {

  const total =  useSelector(state => {
    return state.data.total;
  });

  return (
    <ImageBackground source={{ uri: "https://www.freewebheaders.com/wp-content/gallery/food/various-spices-and-herbs-website-header.jpg" }} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.boxIcone}>
          <Icon style={styles.iconeVoltar} size={30} color="#FFFF" name="angle-left" />
        </View>

        <View style={styles.boxBuscar}>
          <Icon style={styles.iconeBuscar} name="search" />
          <TextInput
            style={styles.input}
            placeholder="Buscar produtos"
            underlineColorAndroid="rgba(0,0,0,0.0)"
          />
        </View>

        <View style={styles.boxIcone}>
          <View style={styles.boxQuantidade}>
            <Text style={styles.textQuantidade}>{total}</Text>
          </View>
          <Icon size={22} color="#FFFF" name="shopping-basket" />
        </View>
      </View>
    </ImageBackground>
  );

}

