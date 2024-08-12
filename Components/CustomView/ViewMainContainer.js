import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import colors from '../../Utilities/colors';

function ViewMainContainer(props) {

    return(
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}
export default ViewMainContainer

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    backgroundColor: colors.DarkShade,
    paddingBottom: '8%',
    paddingTop: '12%',
    alignItems: 'center',
    paddingHorizontal: '3%'
  },
});
