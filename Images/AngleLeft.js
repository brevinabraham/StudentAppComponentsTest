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

const AngleLeft = (props) => {
  return (
    <View style={[{ justifyContent: 'center', alignItems: 'center' }, props.style]}>
      <Svg
        height="26"
        width="26"
        style={styles.svg}
        fill="none"
        viewBox="0 0 24 24"
        stroke={props.stroke}
      >
        <Path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={props.strokeWidth || 3} 
          d="M15 19L8 12l7-7" 
        />
      </Svg>
    </View>
  );
};

export default AngleLeft;
