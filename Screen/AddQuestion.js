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

function AddQuestion ({navigation}) {
    const [saved, setSaved] = useState(false)

    const handleSaveIconPressed = () => {
        console.log('saved');
        setSaved(!saved)
    }

    return(
        <ViewMainContainer style={styles.container}>
            <View style={styles.header}>
                <TouchableNativeFeedback onPress={()=>navigation.goBack()}>
                    <View>
                        <AngleLeft stroke={colors.DarkShade}/>
                    </View>
                </TouchableNativeFeedback>
                <TextH1 style={{flex: 1, color: colors.DarkShade}} >
                    ADD QUESTIONS
                </TextH1>
            </View>
            <ViewMain style={styles.mainSection}>
                <TouchableNativeFeedback onPress={handleSaveIconPressed}>
                    <View style={{position: 'absolute', top: 5, left: '100%', zIndex: 1}}>
                        <SaveIcon fill = {saved ? colors.LightShade: colors.DarkShade} stroke={colors.LightShade}/>
                    </View>
                </TouchableNativeFeedback>
                <AddQuestionComponent title="Title"/>
                <AddQuestionComponent title="Content" multiline={true} inputStyles={{minHeight: 112}} numberOfLinesPass = {5} />
                <AddQuestionComponent title="Subject"/>
                <AddQuestionComponent title="Tag"/>
                <AddQuestionComponent title="Images" inputType='imageUpload' />
                <AddQuestionComponent title="Choose format of the post" inputType='cardAspectRatio' aspectRatios={[16/9, 1, 4/3, 3]}/>
            </ViewMain>
            
            <Button style={styles.buttonStyle} label={"POST"} labelStyle={{color: colors.DarkShade}} onPress={()=>navigation.navigate('Dashboard' )}/>
        </ViewMainContainer>
    )
}

export default AddQuestion

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.LightShade,
        paddingHorizontal: '2%',
        paddingTop: '5%',
    },
    header: {
        flexDirection: 'row',
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
        backgroundColor: colors.DarkShade,
    }
})