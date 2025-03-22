import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import TextH3 from '../CustomText/TextH3';
import TextH2 from '../CustomText/TextH2';

function AspectRatioCardSummary(props) {
    const screenWidth = Dimensions.get('window').width;
    const calculatedHeight = screenWidth / props.ratio;
    const actionVisibility = typeof props.actionVisibility == 'undefined' ? true : props.actionVisibility
    const images = Array.isArray(props.imageUrl) ? props.imageUrl : props.imageUrl ? [props.imageUrl] : [];
    const content = Array.isArray(props.content) ? props.content : props.content ? [props.content] : [];
    const totalItems = images.length + content.length + (props.audio ? 1 : 0);
    const [activeIndex, setActiveIndex] = useState(0);
    const cardContentWidth = screenWidth*0.96

    return (
        <View style={[styles.container, props.containerStyle]}>
            <View style={styles.mainContainer}>
                <View style={{flexDirection: 'column'}}>
                    <TextH2 style={styles.title}>{props?.title.toUpperCase()}</TextH2>
                    <TextH3 style={styles.content}>{props?.content?.length < 100? props?.content : props?.content.slice(0,100) + "..."}</TextH3>
                </View>
            </View>
            {actionVisibility ? 
                <View style={styles.actions}>
                    <TextH3>likes </TextH3>
                    <TextH3>comms</TextH3>
                </View>
             : <></>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: '#eff',
        padding: 5,
        width: '100%',
        marginBottom: 5,
        marginTop: 5,
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '2%',
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        color: '#777',
    },
    actions: {
        flexDirection: 'column', 
        justifyContent: 'space-around',
        // flexShrink: 1,
        width: 50
    },
});

export default AspectRatioCardSummary;
