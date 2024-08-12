import React from 'react';
import { StyleSheet } from 'react-native';
import ViewMain from '../CustomView/ViewMain';
import TextH3 from '../CustomText/TextH3'
import CustomTextInput from '../CustomTextInput/CustomTextInput';

function LoginForm () {

    return(
        <>
            <TextH3>
                EMAIL
            </TextH3>
            <CustomTextInput placeholder={'example@email.com'}/>

            <TextH3>
                PASSWORD
            </TextH3>
            <CustomTextInput secureTextEntry={true}/>

        </>
    )
}
export default LoginForm

const styles = StyleSheet.create({

})