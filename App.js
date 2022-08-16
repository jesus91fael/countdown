import { TextInput, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ModalInsert from './components/Modal';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  let valorInicial = ['Arroz', 'Feijão']

  let [listaCompras, definirListaCompras] = useState(valorInicial)
  return (
    <View style={styles.container}>
      <Text>Seus Eventos</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Adicionar novo Evento</Text>
      </Pressable>
      <ModalInsert status={modalVisible}/>
      <FlatList data={listaCompras} renderItem={({item})=> <Text>{item}</Text>}/>
      <TextInput placeholder={'Adicionar Novo Item'}
      onSubmitEditing={
        ({nativeEvent})=> definirListaCompras(listaCompras.concat(nativeEvent.text))
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
});
