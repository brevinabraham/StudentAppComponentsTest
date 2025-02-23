import React, { useState } from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import TextH1 from '../Components/CustomText/TextH1';
import ViewMain from '../Components/CustomView/ViewMain';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import colors from '../Utilities/colors';
import Button from '../Components/CustomButton/CustomButton';
import AngleLeft from '../Images/AngleLeft';
import AddQuestionComponent from '../Components/AddQuestion/AddQuestionComponent';
import SaveIcon from '../Images/SaveIcon';
import UserIcon from '../Images/UserIcon';
import Logo from '../Images/logo';

function AccountProfile ({navigation}) {
    const [saved, setSaved] = useState(false)

    const handleSaveIconPressed = () => {
        console.log('saved');
        setSaved(!saved)
    }

    return(
        <ViewMainContainer style={styles.container}>
            <View style={styles.header}>
                <TouchableNativeFeedback onPress={()=>navigation.goBack()}>
                    <View style = {{flexDirection: 'row', display: 'flex', width: '100%'}}>
                        <AngleLeft style={{flex: 1}} stroke={colors.DarkShade}/>
                        <TextH1 style={{flex: 10, color: colors.DarkShade}} >
                            HI [NAME]
                        </TextH1>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <ViewMain style={styles.mainSection}>
                <TouchableNativeFeedback onPress={handleSaveIconPressed}>
                    <View style={{position: 'absolute', top: 5, left: '100%', zIndex: 1}}>
                        <SaveIcon fill = {saved ? colors.LightShade: colors.DarkShade} stroke={colors.LightShade}/>
                    </View>
                </TouchableNativeFeedback>
                <View style={{width: '100%', alignSelf: 'center'}}>
                    <Logo style = {{width: '100%'}} shade = {colors.DarkShade}/>
                    <TextH1>
                        Edit Picture
                    </TextH1>
                </View>
                <AddQuestionComponent title="Email"/>
                <AddQuestionComponent title="Change Password" />
            </ViewMain>
            
            <TextH1>
                Questions
            </TextH1>
            <ViewMain style={styles.mainSection}>
                <AddQuestionComponent title="Email"/>
                <AddQuestionComponent title="Change Password" />
            </ViewMain>
            
            <Button style={styles.buttonStyle} label={"POST"} labelStyle={{color: colors.DarkShade}} onPress={()=>navigation.navigate('Dashboard' )}/>
        </ViewMainContainer>
    )
}

export default AccountProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.LightShade,
        paddingHorizontal: '2%',
        paddingTop: '5%',
    },
    header: {
        flexDirection: 'col',
        justifyContent: 'flex-start',
        marginVertical: '5%'
    },
    buttonStyle: {
        marginVertical: '5%', 
        backgroundColor: colors.LightShade,
        borderWidth: 2,
        borderColor: colors.DarkShade
    },
    mainSection:{
        paddingVertical: '1%',
        paddingHorizontal: '5%',
        backgroundColor: colors.MainColor,
    }
})