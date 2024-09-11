import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const styles = StyleSheet.create({
  svg: {
    width: '100%',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
    aspectRatio: 1,
  }
});

const Eyes = (props) => {
  return (
    <View style={[{ justifyContent: 'center', alignItems: 'center' }, props.style]}>
      <Svg
        height="24"
        width="24"
        style={styles.svg}
        fill="none"
        viewBox="0 7 36 36"
        stroke={props.stroke}
      >
        <Path fill={props.fill} d="M9.5 7A8.5 8.5 0 0 0 1 15.5v7a8.5 8.5 0 0 0 15 5.477A8.5 8.5 0 0 0 31 22.5v-7a8.5 8.5 0 0 0-15-5.477A8.482 8.482 0 0 0 9.5 7Zm5.345 4.8A8.466 8.466 0 0 0 14 15.5v7c0 1.326.304 2.581.845 3.7A6.5 6.5 0 0 1 3 22.5v-1a3.5 3.5 0 1 0 7 0v-5a3.5 3.5 0 1 0-7 0v-1a6.5 6.5 0 0 1 11.845-3.7ZM16 15.5a6.5 6.5 0 1 1 13 0v7a6.5 6.5 0 1 1-13 0v-1a3.5 3.5 0 1 0 7 0v-5a3.5 3.5 0 1 0-7 0v-1Zm-7.324 1.361c-.371.31-.99.177-1.383-.294c-.393-.472-.41-1.105-.039-1.414c.372-.31.991-.178 1.384.294c.392.472.41 1.105.038 1.414Zm13.02-1.414c.393.472.41 1.105.04 1.414c-.372.31-.992.177-1.384-.294c-.393-.472-.41-1.105-.039-1.414c.372-.31.991-.178 1.384.294Z"/>
      
      </Svg>
    </View>
  );
};

export default Eyes;
