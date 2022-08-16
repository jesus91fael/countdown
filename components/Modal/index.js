import React from "react";
import { Alert, Modal, StyleSheet, Pressable, Text, TextInput, View } from "react-native";

const ModalInsert = ({status}) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={status}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Novo Evento</Text>
            <TextInput placeholder={'Título'}
              onSubmitEditing={
                ({nativeEvent})=> definirListaCompras(listaCompras.concat(nativeEvent.text))
              }
              />
            <TextInput placeholder={'Descrição'}
              onSubmitEditing={
                ({nativeEvent})=> definirListaCompras(listaCompras.concat(nativeEvent.text))
              }
              />
            <TextInput placeholder={'Quantidade de dias'}
              onSubmitEditing={
                ({nativeEvent})=> definirListaCompras(listaCompras.concat(nativeEvent.text))
              }
              />
            <TextInput placeholder={'Data'}
              onSubmitEditing={
                ({nativeEvent})=> definirListaCompras(listaCompras.concat(nativeEvent.text))
              }
              />
              <Pressable
                style={[styles.button, styles.buttonOpen]}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
              >
                <Text style={styles.textStyle}>Salvar</Text>
              </Pressable>
              
          </View>
        </View>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalInsert;