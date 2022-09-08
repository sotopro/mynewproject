import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { AddTask, CustomModal  } from './components/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#9F84BD',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    fontSize: 16,
    color: '#000000',
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16
  },
  modalMessageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 14,
  },
  selectedTask: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#4A306D',
    padding: 10,
    borderRadius: 10,
  }
});


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleChangeText = (text) => {
    console.warn('text', text);
    setTask(text);
  }

  const addItem = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task },
    ]);
    setTask('');
  }

  const onHandleModal = (id) => {
    setModalVisible(!modalVisible);
    setSelectedTask(tasks.find((item) => item.id === id))
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )

  const onHandleDeleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <AddTask 
        item={task}
        onChangeText={onHandleChangeText}
        placeholder='new task'
        addItem={addItem}
        selectionColor='#4A306D'
        placeholderTextColor='#4A306D'
        textButton='ADD'
        color='#4A306D'
      />
      <FlatList
        style={styles.itemList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal animationType='slide' visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.modalMessage}>¿Estas seguro de que quieres eliminar?</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='Eliminar'
            onPress={() => onHandleDeleteItem(selectedTask?.id)}
            color='#4A306D'
          />
          <Button 
            title='Cancelar'
            onPress={() => setModalVisible(!modalVisible)}
            color='#cccccc'
          />
        </View>
      </CustomModal>
    </View>
  );
}