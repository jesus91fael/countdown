import React, {useState} from "react";
import { Alert, Modal, StyleSheet, Pressable, Text, TextInput, View } from "react-native";

const ModalInsert = ({openModal, closeModal, valorInicial}) => {

  const [inputValue, setInputValue] = useState({'id': valorInicial.id, 'titulo': valorInicial.titulo, 'descricao':valorInicial.descricao, 'qtdDias': valorInicial.qtdDias, 'data':valorInicial.data});


  // let inputValue = {'titulo': '', 'descricao':'', 'qtdDias': '', 'data':'data'}
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Novo Evento</Text>
            <TextInput placeholder={'Título'}
              value={inputValue.titulo}
              onChangeText={text => setInputValue.titulo('titulo', text)}
              />
            <TextInput placeholder={'Descrição'}
              value={inputValue.Descricao}
              onChangeText={text => setInputValue.descricao('Descricao', text)}
              />
            <TextInput placeholder={'Quantidade de dias'}
              value={inputValue.qtdDias}
              onChangeText={text => setInputValue.qtdDias('qtdDias', text)}
              />
            <TextInput placeholder={'Data'}
              value={inputValue.data}
              onChangeText={text => setInputValue.data('data', text)}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={closeModal}
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