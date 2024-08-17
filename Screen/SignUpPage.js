import React, { useState } from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import Logo from '../Images/logo';
import colors from '../Utilities/colors';
import TextH1 from '../Components/CustomText/TextH1';
import SignUpForm from '../Components/SignUpPage/SignUpForm';
import TextH3 from '../Components/CustomText/TextH3';
import { CheckBox } from "react-native-btr";
import Button from '../Components/CustomButton/CustomButton';


function SignUp ({navigation}) {
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
            <ViewMain style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}} onTouchStart={()=>setToggleCheckBox(!toggleCheckBox)}>
                <CheckBox checked={toggleCheckBox} color={colors.MainColor} />
                <TextH3 style={{color: colors.MainColor}}>
                    {'Do you agree to the terms and conditions?'}
                </TextH3>
            </ViewMain>
            <Button style={{marginVertical: '5%', backgroundColor: colors.MainColor }} label={"CREAT ACCOUNT"} labelStyle={{color: colors.DarkShade}} onPress={()=>navigation.navigate('LoginPage' )}/>
        </ViewMainContainer>
    )
}

export default SignUp