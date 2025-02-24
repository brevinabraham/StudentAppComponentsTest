import React, { useState } from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import TextH1 from '../Components/CustomText/TextH1';
import ViewMain from '../Components/CustomView/ViewMain';
import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import colors from '../Utilities/colors';
import Button from '../Components/CustomButton/CustomButton';
import AngleLeft from '../Images/AngleLeft';
import AddQuestionComponent from '../Components/AddQuestion/AddQuestionComponent';
import SaveIcon from '../Images/SaveIcon';

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
                            HI [NAME],
                        </TextH1>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <ViewMain style={styles.mainSection}>
                <View style={{width: '100%', alignSelf: 'center'}}>
                    <Image 
                        source={{uri: 'https://picsum.photos/200'}}
                        resizeMode="contain"
                        style={{width: 200, height: 200, alignSelf: 'center', borderWidth: 10, borderRadius: 100}}/>
                    <TextH1>
                        Edit Picture
                    </TextH1>
                </View>
                <AddQuestionComponent title="Email"/>
                <AddQuestionComponent title="Change Password" />
                <Button label = 'Save' style = {styles.buttonStyle}/>
            </ViewMain>
            
            <View style={{width: "100%"}}>
                <TextH1 style={{textAlign: 'left'}}>
                    Questions
                </TextH1>
                <ViewMain style={styles.mainSection}>
                    <AddQuestionComponent title="Email"/>
                    <AddQuestionComponent title="Change Password" />
                </ViewMain>
            </View>
            
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