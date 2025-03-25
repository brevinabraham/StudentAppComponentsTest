import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ChatBubble(props) {
    return (
        <View 
            style={props.styleOption === 1 ? styles.self : styles.other} 
            onTouchStart={props.onTouchStart}
        >
            <Text style={styles.text}>
                {props.children}
            </Text>
        </View>
    );
}

export default ChatBubble;

const styles = StyleSheet.create({
  other: {
    maxWidth: '75%', // Max width to prevent overly long bubbles
    paddingVertical: 8,
    paddingHorizontal: '2%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    marginVertical: 3,
    marginHorizontal: 5,
    alignSelf: 'flex-start',
    backgroundColor: '#ADD8E6',
  },
  self: {
    maxWidth: '75%', // Prevents long messages from taking full width
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    marginVertical: 3,
    marginHorizontal: 5,
    alignSelf: 'flex-end',
    backgroundColor: '#90EE90', 
    shadowColor: '#000'
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    flexWrap: 'wrap',
  },
});
