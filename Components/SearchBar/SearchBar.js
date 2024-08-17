import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View, Dimensions, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import Logo from "../../Images/logo";
import colors from "../../Utilities/colors";
import SearchIcon from "../../Images/SearchIcon";

function SearchBar (props) {
    const [expanded, setExpanded] = useState(true)
    const widthAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current

    const toggleSearchBar = () => {
        Animated.timing(widthAnim, {
            toValue: expanded ? Dimensions.get('window').width: 70,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: false
        }).start(() => {
            setExpanded(!expanded);
        });
    };

    return (
        <KeyboardAvoidingView 
            style={{ 
                width: '100%', 
                backgroundColor: colors.DarkShade, 
                paddingTop: Dimensions.get('window').height * 0.06,
                
            }} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height' } 
        >
            <Animated.View style={[styles.container, {width: widthAnim}, props.style]}>
                <TouchableWithoutFeedback onPress={toggleSearchBar}>
                    <View>
                        <Logo shade={colors.DarkShade} style={{ height: 50, width: 50 }} />
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
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: colors.MainColor,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 10, 
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10,
    },
    icon: {
        width: 15,
        height: 15,
        marginLeft: 10,
        position: 'absolute',
        zIndex: 1,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 30, // Added left padding to make space for the icon
        marginVertical: '2%',
        borderColor: colors.DarkShade
    },
});
