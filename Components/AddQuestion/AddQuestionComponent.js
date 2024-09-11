import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import colors from '../../Utilities/colors';
import ViewMain from '../CustomView/ViewMain';
import Add from '../../Images/Add';
import Eyes from '../../Images/Eyes';

function AddQuestionComponent({ title, inputType = 'default', multiline = false, inputStyles, numberOfLinesPass = 1, aspectRatios = []}) {
    const [uploadImages, setUploadImages] = useState(0)
    const [imagesArray, setImagesArray] = useState([])
    const [selectedAspectRatio, setSelectedAspectRatio] = useState(aspectRatios.map(() => false))
    const handleImagePressed = () => {
        setUploadImages(uploadImages + 1)
        setImagesArray([...imagesArray,(<ViewMain style={[styles.imageUpload]} key ={uploadImages} onTouchStart={handleImagePressed}>
                        <Text style={{color: colors.LightShade}}> {uploadImages} </Text>
                    </ViewMain>)])
    }
    const handleSelectedAspectRatio = (index) => {
        setSelectedAspectRatio(prevState => {
            const updatedState = prevState.map(()=> false);
            updatedState[index] = !updatedState[index];
            return updatedState;
        });
    }
    const handleEyePressed = () => {
        console.log('eye pressed')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {inputType == 'cardAspectRatio' && (
                <ViewMain style={{position: 'absolute', left: '47.5%'}} onTouchStart={handleEyePressed}>
                    <Eyes fill = {colors.LightShade}/>
                </ViewMain>
                )
            }
            
            {inputType == 'default' && (
                <CustomTextInput
                    style={[styles.input, inputStyles]}
                    keyboardType={inputType}
                    multiline={multiline}
                    placeholder={`Enter ${title}`}
                    numberOfLines = {numberOfLinesPass}
                />
            )}
            {inputType == 'imageUpload' && (
                <View style={styles.imageUploadContainer}>
                    <ViewMain style={[styles.imageUpload]} onTouchStart={handleImagePressed}>
                        <Add fill = {colors.DarkShade}/>
                    </ViewMain>
                    {imagesArray.map((imageBox, index)=> (
                        <View key={index}>
                            {imageBox}
                        </View>
                    ))}
                </View>
            )}
            {inputType == 'cardAspectRatio' && (
                <View style={styles.imageUploadContainer}>
                    {aspectRatios.map((aspect, index)=> (
                        <ViewMain style={[styles.imageUpload, { width: 'auto',aspectRatio: aspect, backgroundColor: selectedAspectRatio[index] ? colors.LightShade : colors.DarkShade}]} onTouchStart={() => handleSelectedAspectRatio(index)} key={index}>
                            <Text style={{color: selectedAspectRatio[index] ? colors.DarkShade : colors.LightShade}}>
                                {index}
                            </Text>
                        </ViewMain>
                    ))}
                </View>
            )}
        </View>
    );
}
export default AddQuestionComponent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 3,
        width: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
        color: colors.LightShade
    },
    input: {
        borderColor: colors.LightShade
    },
    imageUpload : {
        borderColor: colors.LightShade,
        borderWidth: 1,
        height: 44,
        width: 44,
        borderStyle: 'dotted',
        marginRight: 5
    },
    imageUploadContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        flexWrap: 'wrap'
    }
});
