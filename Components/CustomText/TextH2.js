import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors, { DARK_COLORS } from '../../Utilities/colors';

function TextH2 (props){

    return(
        <Text style={[styles.h2, props.style]}>
            {props.children}
        </Text>
    )
}

export default TextH2

const styles = StyleSheet.create({
  h2: {
    fontSize: 20
  }
})