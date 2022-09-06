import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '75%',
    borderBottomColor: '#4A306D',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121',
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
  },
  item: {
    fontSize: 16,
    color: '#000000',
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandleChangeText = (text) => {
    setTask(text);
  }

  const addItem = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task },
    ]);
    setTask('');
  }

  const onHandleDeleteItem = (id) => {
    console.warn(id);
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandleDeleteItem(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='new task'
          style={styles.input}
          selectionColor='#4A306D'
          placeholderTextColor='#4A306D' 
          onChangeText={onHandleChangeText}
          value={task}
        />
        <Button
         title='Add' 
         onPress={addItem} 
         color='#4A306D'/>
      </View>
      <FlatList
        style={styles.itemList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}