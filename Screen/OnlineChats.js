import React from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import { StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import colors from '../Utilities/colors';
import AngleLeft from '../Images/AngleLeft';
import TextH1 from '../Components/CustomText/TextH1';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH3 from '../Components/CustomText/TextH3';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';

function OnlineChats ({navigation}) {
    return(
        <ViewMainContainer style={styles.container}>
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

            <ViewMainContainer style={styles.mainContainer}>
                <TextH1>
                    main content
                </TextH1>
            </ViewMainContainer>
            <View style={{width:'100%'}}>
                <CustomTextInput />
            </View>
        </ViewMainContainer>
    )
}

export default OnlineChats

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.LightShade,
        paddingHorizontal: '2%',
        paddingTop: '6%',
        height: '98%'
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
        minHeight: '99%',
        backgroundColor: colors.LightShade,
        borderRadius: 20
    }
})