import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView } from "react-native";
import Lottie from 'lottie-react-native'

import gif from './reactL.json'

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("O aviso foi encerrado");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Olá, mundo!</Text>
            <Lottie style={{ height: 250, width: 250 }} source={gif} autoPlay loop />
            <Pressable
              style={[styles.buttonModal]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{fontSize: 20, padding: 5, color: '#111111'}}>Fechar Janela</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.textMain}>Desenvolvimento para Dispositivos Móveis - FAESA</Text>
      <Text style={{fontSize: 20, color: '#FFFFFF', paddingTop: 20}}>TERCEIRO PERÍODO</Text>

      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{fontSize: 20, padding: 5, color: '#111111'}}>Clique Aqui</Text>
      </Pressable>
      <Text style={{fontSize: 20, color: '#FFFFFF', paddingTop: 20}}>Felipe Moreira Simões</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: '#21466c'
  },
  modalView: {
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "#bcfaff",
    padding: 35,
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  buttonModal: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    backgroundColor: "#1ff555",
    marginTop: 50
  },

  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    backgroundColor: "#1ff555",
    marginTop: 300
  },

  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  },

  textMain: {
    marginTop: 60,
    color: '#FFFFFF',
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20
  }

});

export default App;