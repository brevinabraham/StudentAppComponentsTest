import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View, Dimensions, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import Logo from "../../Images/logo";
import colors from "../../Utilities/colors";
import SearchIcon from "../../Images/SearchIcon";

const SearchBar = forwardRef((props, ref)=> {
    const [expanded, setExpanded] = useState(true);
    const widthAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current; // Opacity animation state

    useImperativeHandle(ref, () => ({
        expandSearchBar: () => setExpandedState(false),
        collapseSearchBar: () => setExpandedState(true)
    }));

    const toggleSearchBar = () => {
        setExpandedState(expanded);
    };

    const setExpandedState = (shouldExpand) => {
        Animated.parallel([
            Animated.timing(widthAnim, {
                toValue: shouldExpand ? 50 : Dimensions.get('window').width,
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: false
            }),
            Animated.timing(opacityAnim, {
                toValue: shouldExpand ? 0.5 : 1, // Reduce opacity when collapsed
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: false
            })
        ]).start(() => {
            setExpanded(!shouldExpand);
        });
    };

    return (
        <KeyboardAvoidingView
            style={{
                position: 'absolute',
                flex: 1,
                width: '100%',
                alignItems: 'flex-end',
                paddingTop: Dimensions.get('window').height * 0.06,
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Animated.View style={[
                styles.container,
                {
                    width: widthAnim,
                    backgroundColor: expanded ? colors.LightShade : colors.DarkShade,
                    opacity: opacityAnim 
                },
                props.style
            ]}>
                <TouchableWithoutFeedback onPress={toggleSearchBar}>
                    <View>
                        <Logo shade={expanded ? colors.DarkShade : colors.LightShade} style={{ height: 50, width: 50 }} />
                    </View>
                </TouchableWithoutFeedback>
                {expanded && (
                    <View style={[styles.searchContainer, props?.searchContainer]}>
                        <SearchIcon style={styles.icon} stroke={colors.DarkShade} />
                        <TextInput
                            onChangeText={props.onChangeText}
                            value={props.value}
                            placeholder={'Search here ...'}
                            keyboardType={props.keyboardType}
                            multiline={props.multiline}
                            focusable={true}
                            secureTextEntry={props.secureTextEntry}
                            style={[styles.input, props.inputStyle]}
                            placeholderTextColor={props.style?.color}
                        />
                    </View>
                )}
            </Animated.View>
        </KeyboardAvoidingView>
    );
})

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        overflow: 'hidden'
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10,
        paddingRight: 2
    },
    icon: {
        width: 15,
        height: 15,
        marginLeft: 10,
        position: 'absolute',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 30,
        marginVertical: '2%',
        borderColor: colors.DarkShade
    },
});
