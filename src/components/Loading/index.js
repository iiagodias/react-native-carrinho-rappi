import React, { Component } from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import styles from './styles';

export default function Loading(props){
  const {visible} = props;
  return (
    <Modal transparent={true} visible={visible}>
     <View style={styles.container}>
        <View style={styles.boxIndicator}>
          <ActivityIndicator size="small" color="#FA334A" />
        </View>
     </View>
    </Modal>
  );

}

