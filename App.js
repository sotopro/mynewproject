import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
    marginHorizontal: 20,
  },
  itemContainer: {
    marginVertical: 5,
  },
  item: {
    fontSize: 16,
    color: '#212121',
  },
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
      <View style={styles.itemList}>
        {tasks.map((item) => (
          <View key={`item-${item.id}`} style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}