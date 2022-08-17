import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { useState } from "react"
import ModalInsert from "../Modal"
import moment from "moment"

export default function List() {
  const [modalVisible, setModalVisible] = useState(false)
  let initialvalue = [
    {
      id: "id1",
      title: "Natal",
      description: "Natal em família",
      data: "Wed Dec 25 2022 13:57:22 GMT-0300 (GMT-03:00)",
    },
    {
      id: "id2",
      title: "Ano novo",
      description: "Ano novo com amigos",
      data: "Wed Dec 31 2022 13:57:22 GMT-0300 (GMT-03:00)",
    },
  ]

  let [eventList, setEventList] = useState(initialvalue)

  const closeModal = () => {
    setModalVisible(false)
  }

  const saveData = (data) => {
    setEventList(eventList.concat(data))
    closeModal()
  }

  let listGeneric = eventList
  let position = 0
  const deleteEvent = (idItem) => {
    position = eventList.findIndex((item) => idItem === item.id)
    listGeneric.splice(position, 1)
    setEventList(listGeneric)
  }

  const calcDias = (eventDate) => {
    let dayNow = new Date()
    var diffDays = moment(eventDate, "DD/MM/YYYY HH:mm:ss").diff(
      moment(dayNow, "DD/MM/YYYY HH:mm:ss")
    )
    var result = moment.duration(diffDays).asDays() + 1
    return result < 0 ? "Realizado!" : Math.floor(result)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Eventos</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Adicionar novo Evento</Text>
      </Pressable>
      <View style={styles.containerContent}>
        <FlatList
          data={eventList}
          renderItem={({ item }) => (
            <View style={styles.boxLine}>
              <View style={styles.containerContantLabel}>
                <Text style={styles.containerLineLabel}>Título:</Text>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.containerContantLabel}>
                <Text style={styles.containerLineLabel}>Descrição:</Text>
                <Text>{item.description}</Text>
              </View>
              <View style={styles.containerContantLabel}>
                <Text style={styles.containerLineLabel}>Data do evento:</Text>
                <Text>{new Date(item.data).toLocaleDateString()}</Text>
              </View>
              <View style={styles.containerContantLabel}>
                <Text style={styles.containerLineLabel}>
                  Quantidade de dias até o evento:
                </Text>
                <Text>
                  {calcDias(new Date(item.data).toLocaleDateString())}
                </Text>
              </View>
              <View style={styles.containerContantLabel}>
                <Pressable
                  style={[styles.button, styles.buttonDelete]}
                  onPress={() => deleteEvent(item.id)}
                >
                  <Text style={styles.textStyle}>Excluir</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
      <ModalInsert
        openModal={modalVisible}
        closeModal={closeModal}
        saveData={saveData}
        eventList={eventList.length}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#FFFFE0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#B22222",
    margin: 10,
  },
  button: {
    textAlign: "center",
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#FA8072",
    shadowColor: 2,
    width: 200,
    borderRadius: 4,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  containerContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 30,
    flexDirection: "row",
  },

  containerLineLabel: {
    fontWeight: "bold",
    fontSize: 14,
    margin: 10,
  },
  containerContantLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boxLine: {
    borderColor: "#A9A9A9",
    borderLeftWidth: 1,
    marginTop: 40,
  },
  buttonDelete: {
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 10,
    backgroundColor: "#B22222",
    borderRadius: 4,
  },
})
