import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native'

function CustomTextInput(props) {
    return(
        <View style={[styles.input, props.style]}>
            <TextInput
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                multiline={props.multiline}
                focusable={true}
                secureTextEntry={props.secureTextEntry}
                props
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 20,
    padding: '1.5%',
    marginVertical: '1%',
  },
});