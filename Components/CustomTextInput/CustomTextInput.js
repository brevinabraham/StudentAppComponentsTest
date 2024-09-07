import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native'
import colors from '../../Utilities/colors';

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
            numberOfLines = {props.numberOfLines}
            style={[styles.input, props.style]}
            placeholderTextColor={colors.LightShade}
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
    minHeight: 'auto',
  },
});