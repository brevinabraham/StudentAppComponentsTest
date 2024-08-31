import React from 'react';
import { View, StyleSheet } from 'react-native';

function ViewMain(props) {

    return(
        <View style={[styles.container, props.style]} onTouchStart={props.onTouchStart}>
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
  },
});
