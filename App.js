import {
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import ModalInsert from "./components/Modal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  let valorInicial = [
    { id: '1', titulo: "Arroz", descricao: "Produto", data: "07/12/2022", qtdDias: "" },
    { id: '2', titulo: "Feijão", descricao: "", data: "", qtdDias: "" },
  ];

  const closeModal = () => {
    setModalVisible(false);
  };

  let [listaCompras, definirListaCompras] = useState(valorInicial);
  return (
    <View style={styles.container}>
      <Text>Seus Eventos</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Adicionar novo Evento</Text>
      </Pressable>
      <ModalInsert
        openModal={modalVisible}
        closeModal={closeModal}
        valorInicial={valorInicial}
      />
      <View style={styles.containerLine}>
        <FlatList
          data={listaCompras}
          renderItem={({ item }) => <Text>{item.titulo}</Text>}
        />
        <FlatList
          data={listaCompras}
          renderItem={({ item }) => <Text>{item.descricao}</Text>}
        />
        <FlatList
          data={listaCompras}
          renderItem={({ item }) => <Text>{item.qtdDias}</Text>}
        />
        <FlatList
          data={listaCompras}
          renderItem={({ item }) => <Text>{item.data}</Text>}
        />
      </View>
      
      <TextInput
        placeholder={"Adicionar Novo Item"}
        onSubmitEditing={({ nativeEvent }) =>
          definirListaCompras(listaCompras.concat(nativeEvent.text))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex" ,
  },
  containerLine:{
    flex: 1,

    flexDirection: "row"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
});
