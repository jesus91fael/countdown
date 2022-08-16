import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import ModalInsert from "../Modal";

export default function List() {
  const [modalVisible, setModalVisible] = useState(false);
  let valorInicial = [
    {
      id: "1",
      titulo: "Arroz",
      descricao: "Produto",
      data: "07/12/2022",
      qtdDias: "1",
    },
    {
      id: "2",
      titulo: "Feijão",
      descricao: "Produto",
      data: "07/12/2022",
      qtdDias: "1",
    },
  ];

  let [listaEventos, setListaEventos] = useState(valorInicial);

  const closeModal = () => {
    setModalVisible(false);
  };

  const saveData = (data) => {
    setListaEventos(listaEventos.concat(data));
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Eventos</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Adicionar novo Evento</Text>
      </Pressable>
      <View style={styles.containerLine}>
        <FlatList
          data={listaEventos}
          renderItem={({ item }) => (
            <View style={styles.boxLine}>
              <View style={styles.containerLineContent}>
                <Text style={styles.containerLineLabel}>Título:</Text>
                <Text>{item.titulo}</Text>
              </View>
              <View style={styles.containerLineContent}>
                <Text style={styles.containerLineLabel}>Descrição:</Text>
                <Text>{item.descricao}</Text>
              </View>              
              <View style={styles.containerLineContent}>
                <Text style={styles.containerLineLabel}>Data do evento:</Text>
                <Text>{item.data}</Text>
              </View>
              <View style={styles.containerLineContent}>
                <Text style={styles.containerLineLabel}>
                  Quantidade de dias até o evento:
                </Text>
                <Text>{item.qtdDias}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <ModalInsert
        openModal={modalVisible}
        closeModal={closeModal}
        saveData={saveData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#B22222",
    margin: 10,
  },
  containerLineLabel: {
    fontWeight: "bold",
    fontSize: 14,
    margin: 10,
  },
  containerLineContent: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center'
  },
  boxLine: {
    borderColor: '#A9A9A9',
    borderLeftWidth: 1,
    marginTop: 40,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFE0",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerLine: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 30,
    flex: 1,
    flexDirection: "row",
  },
  button: {
    textAlign: "center",
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  buttonOpen: {
    backgroundColor: "#FA8072",
    shadowColor: 2,
    width: 200,
    borderRadius: 4,
  },
});
