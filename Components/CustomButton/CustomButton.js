import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import colors, { DARK_COLORS } from '../../Utilities/colors';
import TextH3 from '../CustomText/TextH3';

function Button (props){
    return(
        <TouchableHighlight style={[styles.button, props.style]} 
          underlayColor={DARK_COLORS[Object.keys(colors).find(key => colors[key] === props.style?.backgroundColor)]} 
          onPress={props.onPress}>
            <TextH3 style={[props.labelStyle]}>{props.label}</TextH3>
        </TouchableHighlight>
    )
}
export default Button

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: '3%',
    width: '100%',
    alignItems: 'center'
  }
})