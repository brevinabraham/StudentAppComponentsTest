import React from 'react';
import Svg, { Circle, Rect, Line } from "react-native-svg";
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  svg: {
    width: '100',
    height: '100',
    alignItems: 'center', 
    justifyContent: 'center',
    aspectRatio: 1
  }
});

function SearchIcon(props) {

    return(
      <>      
        <Svg viewBox="0 0 100 100" style={[styles.svg, props?.style]}>
            {/* Circle representing the lens */}
          <Circle 
            cx="40" 
            cy="40" 
            r="30" 
            stroke={props.stroke}
            strokeWidth="5" 
            fill="none" 
          />
          {/* Line representing the handle */}
          <Line 
            x1="65" 
            y1="65" 
            x2="95" 
            y2="95" 
            stroke={props.stroke}
            strokeWidth="5" 
          />
        </Svg>
      </>
    );
}

export default SearchIcon;
