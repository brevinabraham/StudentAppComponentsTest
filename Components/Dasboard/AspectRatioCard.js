import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AudioSlider from '../AudioSlider/AudioSlider';
import TextH3 from '../CustomText/TextH3';
import TextH2 from '../CustomText/TextH2';

function AspectRatioCard(props) {
    const screenWidth = Dimensions.get('window').width;
    const calculatedHeight = screenWidth / props.ratio;

    return (
        <View style={[styles.container, { height: calculatedHeight }, props.containerStyle]}>
            <View style={styles.content}>
                <TextH2 style={styles.title}>{props.title}</TextH2>

                {props.content && <TextH3 style={styles.contentText}>{props.content}</TextH3>}

                {props.imageUrl && (
                    <Image 
                        source={{ uri: props.imageUrl }} 
                        style={styles.image} 
                        resizeMode="contain"
                    />
                )}

                {props.audio && (
                    <AudioSlider />
                )}
            </View>

            <View style={styles.footer}>
                <TextH3 style={styles.name}>{props.name}</TextH3>
                <TextH3 style={styles.dateTime}>{props.dateTime}</TextH3>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: '#eff',
        padding: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    contentText: {
        color: '#333333',
        marginBottom: 12,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 'auto',
        marginBottom: 12,
        borderRadius: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 8,
        marginTop: 8,
    },
    name: {
        fontWeight: 'bold',
        color: '#333',
    },
    dateTime: {
        color: '#777',
    },
});

export default AspectRatioCard;
