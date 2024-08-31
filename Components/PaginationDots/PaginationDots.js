import React from 'react';
import { View, StyleSheet } from 'react-native';

function PaginationDots({ totalDots, activeDotIndex }) {
    return (
        <View style={styles.dotContainer}>
            {Array.from({ length: totalDots }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        activeDotIndex === index && styles.activeDot,
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: '#aaa',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#000',
    },
});

export default PaginationDots;
