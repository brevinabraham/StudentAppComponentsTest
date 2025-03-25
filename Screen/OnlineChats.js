import React, { useState } from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import { KeyboardAvoidingView, Platform, StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import colors from '../Utilities/colors';
import AngleLeft from '../Images/AngleLeft';
import TextH1 from '../Components/CustomText/TextH1';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH3 from '../Components/CustomText/TextH3';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import ChatBubble from '../Components/CustomView/ChatBubble';

function OnlineChats ({navigation}) {
    const [ChatInformation, setChatInformation] = useState({chatStlye:'',message:''})
    const [Chats, setChats] = useState([])


    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
           <View style={styles.header}>
                <TouchableNativeFeedback onPress={()=>navigation.goBack()}>
                    <View>
                        <AngleLeft stroke={colors.DarkShade}/>
                    </View>
                </TouchableNativeFeedback>
                <TextH1 style={{flex: 1, color: colors.DarkShade}} >
                    ONLINE CHATS
                </TextH1>
                <ViewMain style={styles.onlineChatCounterContainer}>
                    <ViewMain style={styles.onlineChatCounterBuble}/>
                    <TextH3 style={styles.onlineChatCounter}>
                        2
                    </TextH3>
                </ViewMain>
            </View>
            {/* <View style = {{flex: 1, borderColor: 'black', borderWidth: 2, width: '100%', height: useWindowDimensions().height*0.70}}>
                <ScrollView style = {{flex:1}}>
                    <TextH1>
                        main content
                    </TextH1>
                </ScrollView>
            </View> */}
            
            <ViewMainContainer style={styles.mainContainer} scrollViewContentStyle={styles.scrollViewStyling} scrollToEndBool={true}>
                <ChatBubble styleOption = {1}>
                    empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </ChatBubble>
                <ChatBubble styleOption = {2}>
                    empor incidi
                </ChatBubble>
                <ChatBubble styleOption = {1}>
                    empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </ChatBubble>
                <ChatBubble styleOption = {2}>
                    empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </ChatBubble>
                <ChatBubble styleOption = {2}>
                    empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </ChatBubble>
                <ChatBubble styleOption = {1}>
                    empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitato consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </ChatBubble>
                <ChatBubble styleOption = {1}>
                    elore eu fugiat nulla pariatur.
                </ChatBubble>
                {Chats.map((chat, index) => (
                    <ChatBubble key={index} styleOption={chat.chatStlye} onTouchStart={()=>console.log(chat.message)}>
                        {chat.message}
                    </ChatBubble>
                ))}
            </ViewMainContainer>
            <View style={{width:'100%', maxHeight: 150}}>
                <CustomTextInput multiline = {true} sendPaperPlane={true} numberOfLines={2}
                value={ChatInformation.message}
                onChangeText={(text) => setChatInformation(prevState => ({ 
                    ...prevState, 
                    message: text, chatStlye: 2 
                }))}
                paperPlaneSendTouch={() => {
                    setChats(prevChats => [...prevChats, { message: ChatInformation.message, chatStlye: ChatInformation.chatStlye }]);
                    setChatInformation({ chatStlye: Chats.length % 2, message: '' });
                }}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default OnlineChats

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.LightShade,
        paddingHorizontal: '2%',
        paddingTop: '6%',
        height: '98%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: '5%',
    },
    onlineChatCounterContainer: {
        width: 50,
        borderColor: colors.DarkShade,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5
    },
    onlineChatCounter: {
        color: colors.DarkShade
    },
    onlineChatCounterBuble: {
        backgroundColor: 'green',
        width: 15,
        height: 15
    },
    mainContainer :{
        borderColor: colors.DarkShade,
        borderWidth: 1,
        backgroundColor: colors.LightShade,
        borderRadius: 20
    },
    scrollViewStyling:{
        justifyContent: 'flex-end'
    }
})