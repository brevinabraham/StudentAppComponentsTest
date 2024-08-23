import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

function AspectRatioCard({ title, content, imageUrl, name, dateTime, ratio = 16/9 }) {
    const screenWidth = Dimensions.get('window').width;
    const calculatedHeight = screenWidth / ratio;

    return (
        <View style={[styles.container, { height: calculatedHeight }]}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.dateTime}>{dateTime}</Text>
            </View>

            {imageUrl && (
                <Image 
                    source={{ uri: imageUrl }} 
                    style={styles.image} 
                    resizeMode="contain"
                />
            )}

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                {content && <Text style={styles.content}>{content}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        width: '100%',
    },
    header: {
        paddingBottom: 5,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateTime: {
        fontSize: 12,
        color: '#777',
    },
    image: {
        width: '100%',
        flex: 1,
        marginBottom: 10, // Added margin at the bottom of the image
    },
    contentContainer: {
        paddingTop: 10, // Added padding to separate content from the image
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    content: {
        fontSize: 14,
        color: '#333',
    },
});

export default AspectRatioCard;
