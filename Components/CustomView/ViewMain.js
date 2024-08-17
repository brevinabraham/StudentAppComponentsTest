import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors, { DARK_COLORS } from '../../Utilities/colors';

function ViewMain(props) {

    return(
        <View style={[styles.container, {shadowColor: DARK_COLORS[Object.keys(colors).find(key => colors[key] === props.style?.backgroundColor)]}, props.style]} onTouchStart={props.onTouchStart}>
            {props.children}
        </View>
    )
}

export default ViewMain


const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    marginVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowColor: 'white',
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 28,
  },
});
