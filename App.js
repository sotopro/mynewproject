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
  },
  input: {
    borderBottomColor: '#4A306D',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121',
  }
});


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='new task' style={styles.input} selectionColor='#4A306D' placeholderTextColor='#4A306D' />
        <Button title='Add' onPress={() => console.warn('Hola')} />
      </View>
    </View>
  );
}