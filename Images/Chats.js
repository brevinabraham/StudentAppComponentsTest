import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const styles = StyleSheet.create({
  svg: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
});

const Chats = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Svg
        height="32"
        width="32"
        viewBox="0 0 24 24"  // Adjust viewBox for proper scaling and centering
        {...props}
        style={styles.svg}
        fill={props.fill}
      >
        {/* First chat bubble */}
        <Path 
          fill-rule="evenodd" 
          d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" 
          clip-rule="evenodd" 
          transform="translate(1, 1)"  // Slight translation to center the first bubble
        />
        {/* Second chat bubble */}
        <Path 
          fill-rule="evenodd" 
          d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" 
          clip-rule="evenodd" 
          transform="translate(1, 1)"  // Slight translation to center the second bubble
        />
      </Svg>
    </View>
  );
};

export default Chats;
