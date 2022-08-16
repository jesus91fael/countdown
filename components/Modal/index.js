import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

const ModalInsert = ({ openModal, closeModal, saveData }) => {
  const [inputValue, setInputValue] = useState({
    id: "",
    titulo: "",
    descricao: "",
    qtdDias: "",
    data: "",
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Novo Evento</Text>
            <TextInput
              placeholder={"Título"}
              name="titulo"
              onChangeText={(text) =>
                setInputValue({ ...inputValue, titulo: text })
              }
              style={styles.inputStyle}
            />
            <TextInput
              placeholder={"Descrição"}
              name="descricao"
              onChangeText={(text) =>
                setInputValue({ ...inputValue, descricao: text })
              }
              style={styles.inputStyle}

            />
            <TextInput
              placeholder={"Quantidade de dias"}
              name="qtdDias"
              onChangeText={(text) =>
                setInputValue({ ...inputValue, qtdDias: text })
              }
              style={styles.inputStyle}

            />
            <TextInput
              placeholder={"Data"}
              name="data"
              onChangeText={(text) =>
                setInputValue({ ...inputValue, data: text })
              }
              style={styles.inputStyle}

            />
            <View style={styles.buttons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={closeModal}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => saveData(inputValue)}
              >
                <Text style={styles.textStyle}>Salvar</Text>
              </Pressable>
            </View>
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
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputStyle:{
    padding: 10,
    margin: 5,
    borderBottomWidth: 1,
    borderColor: '#C0C0C0'

  },
  buttons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 100,
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    color: "#000000",
    fontWeight: 'bold',
    backgroundColor: "#D2691E" ,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalInsert;
