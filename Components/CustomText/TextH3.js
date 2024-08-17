import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors, { DARK_COLORS } from '../../Utilities/colors';

function TextH3 (props){

    return(
        <Text style={[styles.h3, props.style]} onPress={props.onPress}>
            {props.children}
        </Text>
    )
}

export default TextH3

const styles = StyleSheet.create({
  h3: {
    fontSize: 14
  }
})