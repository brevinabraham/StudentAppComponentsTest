import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors, { DARK_COLORS } from '../../Utilities/colors';

function TextH1 (props){

    return(
        <Text style={[styles.h1, props.style]}>
            {props.children}
        </Text>
    )
}

export default TextH1

const styles = StyleSheet.create({
  h1: {
    fontSize: 26
  }
})