import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import colors from '../../Utilities/colors';

function AddQuestionComponent({ title, inputType = 'default', multiline = false }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {inputType == 'default' && (
                <CustomTextInput
                    style={styles.input}
                    keyboardType={inputType}
                    multiline={multiline}
                    placeholder={`Enter ${title}`}
                />
            )}
        </View>
    );
}
export default AddQuestionComponent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: colors.LightShade
    },
    input: {
        borderColor: colors.LightShade
    },
});
