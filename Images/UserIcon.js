import React, { useEffect } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';


const styles = StyleSheet.create({
  svg: {
    width: '100',
    height: '100',
    alignItems: 'center', 
    justifyContent: 'center',
    aspectRatio: 1
  }
});

const UserIcon = (props) => {

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Svg
            height="32"
            width="32"
            {...props}
            style={styles.svg}
            fill={props.fill}
            viewBox='0 0 24 24'
            >
                  <Path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
            </Svg>
        </View>
    );
    };

export default UserIcon;

