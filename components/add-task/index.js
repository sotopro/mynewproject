import React from "react";
import { View, TextInput, Button} from "react-native";
import { styles } from "./styles";
const AddTask = ({ item, onChangeText, placeholder, addItem, selectionColor, placeholderTextColor, textButton, color }) => {
    return (
    <View style={styles.inputContainer}>
        <TextInput 
          placeholder={placeholder}
          style={styles.input}
          selectionColor={selectionColor}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          value={item}
        />
        <Button
            title={textButton}
            onPress={addItem} 
            color={color}
         />
      </View>
    )
}

export default AddTask;