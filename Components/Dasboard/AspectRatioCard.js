import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import AudioSlider from '../AudioSlider/AudioSlider';
import TextH3 from '../CustomText/TextH3';
import TextH2 from '../CustomText/TextH2';
import PaginationDots from '../PaginationDots/PaginationDots';

function AspectRatioCard(props) {
    const screenWidth = Dimensions.get('window').width;
    const calculatedHeight = screenWidth / props.ratio;
    
    const images = Array.isArray(props.imageUrl) ? props.imageUrl : props.imageUrl ? [props.imageUrl] : [];
    const content = Array.isArray(props.content) ? props.content : props.content ? [props.content] : [];
    const totalItems = images.length + content.length + (props.audio ? 1 : 0);
    const [activeIndex, setActiveIndex] = useState(0);
    const cardContentWidth = screenWidth*0.95

    return (
        <View style={[styles.container, props.containerStyle]}>

            <View style={styles.section}>
                <TextH2 style={styles.title}>{props.title}</TextH2>
            </View>

            <View style={{ height: calculatedHeight }}>
                <ScrollView
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToInterval={cardContentWidth}
                    decelerationRate="fast"
                    onScroll={(event) => {
                        const pageIndex = Math.round(event.nativeEvent.contentOffset.x / cardContentWidth);
                        setActiveIndex(pageIndex);
                    }}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.scrollViewContentContainer}
                >
                    {props.content && (
                        content.map((txtContent, index) => (
                            <View key={index} style={[styles.section, { width: cardContentWidth }]}>
                                <ScrollView 
                                    contentContainerStyle={styles.contentContainer} 
                                    style={styles.verticalScroll} 
                                    showsVerticalScrollIndicator={false}
                                >
                                    <TextH3 style={styles.contentText}>{txtContent}</TextH3>
                                </ScrollView>
                            </View>
                        ))
                    )}

                    {images.length > 0 && (
                        images.map((imgUrl, index) => (
                            <View
                                key={index}
                                style={[styles.imageContainer, { width: cardContentWidth }]}
                            >
                                <Image
                                    source={{ uri: imgUrl }}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </View>
                        ))
                    )}

                    {props.audio && (
                        <View style={[styles.section, { width: cardContentWidth }]}>
                            <AudioSlider />
                        </View>
                    )}
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <View>
                    <TextH3 style={styles.name}>{props.name}</TextH3>
                    <TextH3 style={styles.dateTime}>{props.dateTime}</TextH3>
                </View>
                <PaginationDots totalDots={totalItems} activeDotIndex={activeIndex} />
                <View style={styles.actions}>
                    <TextH3>likes </TextH3>
                    <TextH3>comments</TextH3>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: '#eff',
        padding: 10,
        width: '100%',
    },
    scrollView: {
        flexGrow: 1,
        width: '100%',
    },
    scrollViewContentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        overflow: 'hidden',
    },
    verticalScroll: {
        flexGrow: 1,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1, 
    },
    contentText: {
        color: '#333333',
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        overflow: 'hidden',
    },
    image: {
        width: '99%',
        height: '99%',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 8,
        marginTop: 4,
    },
    name: {
        fontWeight: 'bold',
        color: '#333',
    },
    dateTime: {
        color: '#777',
    },
    actions: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
});

export default AspectRatioCard;
