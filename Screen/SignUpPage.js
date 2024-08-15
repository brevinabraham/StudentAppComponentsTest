import React, { useState } from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import Logo from '../Images/logo';
import colors from '../Utilities/colors';
import TextH1 from '../Components/CustomText/TextH1';
import SignUpForm from '../Components/SignUpPage/SignUpForm';
import TextH3 from '../Components/CustomText/TextH3';
import CheckBox from '@react-native-community/checkbox';

function SignUp () {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <ViewMainContainer>
            <ViewMain style={{ backgroundColor: colors.MainColor,width: 'auto', borderRadius: 100, marginVertical: '3%'}}>
                <Logo shade={colors.DarkShade}/>
            </ViewMain>
            <ViewMain style={{flex: 1, backgroundColor: 'rgba(0,0,0,0)'}}>
                <TextH1 style={{color: colors.MainColor}}>
                    Create your account
                </TextH1>
            </ViewMain>
            <ViewMain style={{marginVertical: '3%', paddingVertical: '3%', backgroundColor: colors.MainColor, paddingHorizontal: '5%'}}>
                <SignUpForm FormValid={null} textStyle={{color: colors.DarkShade}} inputStyle={{color: colors.DarkShade, borderColor: colors.DarkShade}}/>
            </ViewMain>
            <ViewMain style={{flex: 1, flexDirection: 'column'}}>
                <CheckBox disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                <TextH3 style={{color: colors.MainColor}}>
                    do you agree?
                </TextH3>
            </ViewMain>
            <ViewMain style={{flex: 1}}>
                
            </ViewMain>
        </ViewMainContainer>
    )
}

export default SignUp