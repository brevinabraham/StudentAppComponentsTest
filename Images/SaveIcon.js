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

const SaveIcon = (props) => {
  return (
    <View style={[{ justifyContent: 'center', alignItems: 'center' }, props.style]}>
      <Svg
        height="24"
        width="24"
        style={styles.svg}
        fill="none"
        viewBox="0 0 30 30"
        stroke={props.stroke}
      >
        <Path
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth={1}
          d="M4 2C2.9 2 2 2.9 2 4v16c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2V6l-4-4H4zM16 3v4H8V3h8zM12 17c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"
        />
      
      </Svg>
    </View>
  );
};

export default SaveIcon;

