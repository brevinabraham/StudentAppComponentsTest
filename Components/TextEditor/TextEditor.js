import { RichText, Toolbar, useEditorBridge } from "@10play/tentap-editor";
import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View } from "react-native";


function TextEditor () {
    const initialContent = `<p>This is a basic example!</p>`;
    const editor = useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
        initialContent,
    })


    return (
        <SafeAreaView style={styles.fullScreen}>
            <RichText editor={editor} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <Toolbar editor={editor} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default TextEditor

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
    },
    keyboardAvoidingView: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingTop: 50,
        marginTop: 50
    },
})