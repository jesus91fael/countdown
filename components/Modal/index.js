import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ModalInsert = ({ openModal, closeModal, saveData, listaEventos }) => {

  const [inputValue, setInputValue] = useState({
    id: listaEventos + 1,
    titulo: "",
    descricao: "",
    qtdDias: "",
    data: new Date(),
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
            <DatePicker
              style={[styles.datePickerStyle, styles.inputStyle]}
              date={inputValue.data} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="Escolha as data"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              maxDate="01-12-3000"
              selected={inputValue.data}
              onChange={(date) =>{setInputValue({ ...inputValue, data: date.toLocaleDateString() })}}
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
    backgroundColor: "#FFFFF0",
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
  inputStyle: {
    padding: 10,
    margin: 5,
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: "#C0C0C0",
  },
  datePickerStyle: {
    padding: 10,
    width: '30px',
    margin: 30,
    fontSize: 14,
    display: 'flex',
    alignContent: 'center'
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: "#00008B",
  },
  buttonClose: {
    color: "#000000",
    fontWeight: "bold",
    backgroundColor: "#B22222",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#B22222",
    margin: 10,
  },
});

export default ModalInsert;
