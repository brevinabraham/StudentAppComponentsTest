import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Platform, ScrollView } from 'react-native';
import colors from '../../Utilities/colors';
import { useRef } from 'react';

function ViewMainContainer({scrollToEndBool=false, ...props}) {
    const scrollViewRef = useRef();
    return(
        <KeyboardAvoidingView 
            style={{ flex: 1, width: '100%' }} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height' } 
        >
          <ScrollView 
              ref={scrollViewRef}
              contentContainerStyle={[styles.scrollViewContent, props?.scrollViewContentStyle]} 
              style={[styles.container, props.style]}
              onScroll={props.onScroll}
              refreshControl={props.refreshControl}
              onContentSizeChange={ () =>  scrollToEndBool ? scrollViewRef.current.scrollToEnd({ animated: true }) : null}
          >
            <View style={styles.centeredContent}>
              {props.children}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ViewMainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.DarkShade,
  },
  scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'center',
    paddingBottom: '8%',
    paddingTop: '12%',
  },
  centeredContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
