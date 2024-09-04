import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Circle, Line } from 'react-native-svg';

const styles = StyleSheet.create({
  svg: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
});

const Add = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Svg height="32" width="32" viewBox="0 0 24 24" {...props} style={styles.svg}>
        {/* Outer Circle */}
        <Circle 
          cx="12" 
          cy="12" 
          r="9" 
          stroke="none" 
          fill={props.fill || 'black'} 
        />
        {/* Horizontal Line with Rounded Edges */}
        <Line 
          x1="8" 
          y1="12" 
          x2="16" 
          y2="12" 
          stroke="white" 
          strokeWidth="1.75" 
          strokeLinecap="round"  // Rounded edges
        />
        {/* Vertical Line with Rounded Edges */}
        <Line 
          x1="12" 
          y1="8" 
          x2="12" 
          y2="16" 
          stroke="white" 
          strokeWidth="1.75" 
          strokeLinecap="round"  // Rounded edges
        />
      </Svg>
    </View>
  );
};

export default Add;
