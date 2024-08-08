import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors, { DARK_COLORS } from '../../Utilities/colors';

function ViewMain(props) {

    return(
        <View style={[styles.container, props.style, {shadowColor: DARK_COLORS[Object.keys(colors).find(key => colors[key] === props.style.backgroundColor)]}]}>
            {props.children}
            <Text>{props.style.backgroundColor}</Text>
            <Text>{DARK_COLORS[Object.keys(colors).find(key => colors[key] === props.style.backgroundColor)]}</Text>
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
