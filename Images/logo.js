import React from 'react';
import Svg, { Circle, Rect, Line } from "react-native-svg";
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  svg: {
    width: '170',
    height: '170',
    alignItems: 'center', 
    justifyContent: 'center',
    aspectRatio: 1
  }
});

function Logo(props) {

    return(
      <>      
          <Svg viewBox="0 0 100 100" style={[styles.svg, props?.style]}>
            {/* Central Circle */}
            <Circle
              cx="50"
              cy="50"
              r="14"
              stroke={props.shade}
              strokeWidth="2"
              fill="none"
            />
            {/* Rounded Square */}
            <Rect
              x="25"
              y="25"
              width="50"
              height="50"
              rx="10"
              ry="10"
              stroke={props.shade}
              strokeWidth="2"
              fill="none"
            />
            {/* Top Pin */}
            <Circle
              cx="50"
              cy="10"
              r="5"
              stroke={props.shade}
              strokeWidth="2"
              fill="none"
            />
            <Line
              x1="50"
              y1="25"
              x2="50"
              y2="15"
              stroke={props.shade}
              strokeWidth="2"
            />
            {/* Bottom Pin */}
            <Circle
              cx="50"
              cy="90"
              r="5"
              stroke={props.shade}
              strokeWidth="2"
              fill="none"
            />
            <Line
              x1="50"
              y1="75"
              x2="50"
              y2="85"
              stroke={props.shade}
              strokeWidth="2"
            />
            {/* Left Pin */}
            <Circle
              cx="10"
              cy="50"
              r="5"
              stroke={props.shade}
              strokeWidth="2"
              fill="none"
            />
            <Line
              x1="25"
              y1="50"
              x2="15"
              y2="50"
              stroke={props.shade}
              strokeWidth="2"
            />
            {/* Right Pin */}
            <Circle
              cx="90"
              cy="50"
              r="5"
              stroke={props.shade}
              strokeWidth="2"
              fill="none"
            />
            <Line
              x1="75"
              y1="50"
              x2="85"
              y2="50"
              stroke={props.shade}
              strokeWidth="2"
            />
          </Svg>
      </>
    );
}

export default Logo;
