import React, { useEffect } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';


const styles = StyleSheet.create({
  svg: {
    width: '100',
    height: '100',
    alignItems: 'center', 
    justifyContent: 'center',
    aspectRatio: 1
  }
});

const LoadingSpinner = (props) => {
  const rotateValue = new Animated.Value(0);

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })).start()
    }, [rotateValue]);

    const rotation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Svg
            height="100"
            width="100"
            {...props}
            style={styles.svg}
            >
            <Circle
                cx="50"
                cy="50"
                r="40"
                stroke={props.stroke}
                strokeWidth="10"
                strokeDasharray="150"
                fill="none"
            />
            <Circle
                cx="50"
                cy="50"
                r="25"
                stroke={props.stroke}
                strokeWidth="10"
                strokeDasharray="70"
                fill="none"
            />

            <Circle
                cx="50"
                cy="50"
                r="10"
                stroke={props.stroke}
                strokeWidth="10"
                strokeDasharray="50"
                fill="none"
            />
            </Svg>
        </Animated.View>
        </View>
    );
    };

export default LoadingSpinner;
