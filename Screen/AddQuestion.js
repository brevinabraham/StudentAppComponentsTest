import React from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import TextH1 from '../Components/CustomText/TextH1';
import ViewMain from '../Components/CustomView/ViewMain';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import colors from '../Utilities/colors';
import Button from '../Components/CustomButton/CustomButton';
import AngleLeft from '../Images/AngleLeft';
import AddQuestionComponent from '../Components/AddQuestion/AddQuestionComponent';

function AddQuestion ({navigation}) {
    return(
        <ViewMainContainer style={styles.container}>
            <View style={styles.header}>
                <TouchableNativeFeedback onPress={()=>navigation.goBack()}>
                    <View>
                        <AngleLeft stroke={colors.DarkShade}/>
                    </View>
                </TouchableNativeFeedback>
                <TextH1 style={{flex: 1, color: colors.DarkShade}} >
                    Add Questions
                </TextH1>
            </View>
            <ViewMain style={styles.mainSection}>
                <AddQuestionComponent title="Title" multiline={false} />
                <AddQuestionComponent title="Content" multiline={true} />
                <AddQuestionComponent title="Subject" multiline={false} />
                <AddQuestionComponent title="Tag" multiline={false} />
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
        marginVertical: '5%'
    }
})