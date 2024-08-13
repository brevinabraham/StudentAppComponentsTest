import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native'

function CustomTextInput(props) {
    return(
        <TextInput
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            multiline={props.multiline}
            focusable={true}
            secureTextEntry={props.secureTextEntry}
            props
            style={[styles.input, props.style]}
            placeholderTextColor={props.style.color}
        />
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 20,
    padding: 12,
    marginVertical: '2%',
  },
});