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
import AspectRatioCard from '../Components/AspectRatioCard/AspectRatioCard';

function AddQuestion ({navigation}) {
    const [saved, setSaved] = useState(false)
    const [isPreviewVisibile, setIsPreviewVisible] = useState(false)
    const [addQuestionForm,setAddQuestionForm] = useState({title: '', content: '', subject: '', tag: '', images: '', format: '', dateTime: {}})

    const handleSaveIconPressed = () => {
        console.log('saved');
        setSaved(!saved)
    }
    
    const handleEyePreviewPressed = () => {
        setIsPreviewVisible(!isPreviewVisibile);
    }
    const handleTitleText = (text) => {
        setAddQuestionForm(prevState => ({...prevState, title: text, dateTime: Date(Date.now())}));
        console.log(addQuestionForm)
    }
    const handleContentText = (text) => {
        setAddQuestionForm(prevState => ({...prevState, content: text, dateTime: Date(Date.now())}));
        console.log(addQuestionForm)
    }

    return(
        <ViewMainContainer style={styles.container}>
            {isPreviewVisibile && 
                <View style={{position:'absolute', width: '100%', height: '100%', top: 0, left: 0,zIndex: 9999,backgroundColor: 'transparent'}}>
                        
                        <ViewMainContainer style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <AspectRatioCard
                                title={addQuestionForm.title}
                                content={addQuestionForm.content}
                                imageUrl=""
                                name="Jane Smith"
                                dateTime={addQuestionForm.dateTime.toLocaleString()}
                                ratio={16/9}
                                containerStyle={{backgroundColor: 'lightgray'}}
                            />
                        <Button style={styles.buttonStyle} label={"Close Preview"} labelStyle={{color: colors.DarkShade}} onPress={()=>setIsPreviewVisible(!isPreviewVisibile)}/>
                        </ViewMainContainer>

                </View>
            }
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
                <AddQuestionComponent title={"Title"} valueText={addQuestionForm.title} onChangeTextText={(text)=>handleTitleText(text)}/>
                <AddQuestionComponent title="Content" multiline={true} inputStyles={{minHeight: 112}} numberOfLinesPass = {5} valueText={addQuestionForm.content} onChangeTextText={(text)=>handleContentText(text)}/>
                <AddQuestionComponent title="Subject"/>
                <AddQuestionComponent title="Tag"/>
                <AddQuestionComponent title="Images" inputType='imageUpload' />
                <AddQuestionComponent title="Choose format of the post" inputType='cardAspectRatio' aspectRatios={[16/9, 1, 4/3, 3]} handleEyePressed={handleEyePreviewPressed}/>
            </ViewMain>
            
            
            <Button style={styles.buttonStyle} label={"POST"} labelStyle={{color: colors.DarkShade}} onPress={()=>navigation.navigate('Dashboard' )}/>
        </ViewMainContainer>
    )
}

export default AddQuestion

const styles = StyleSheet.create({
    isPreviewContainer: {
        
    },
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