import React, { useEffect, useState } from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH1 from '../Components/CustomText/TextH1'
import TextH3 from '../Components/CustomText/TextH3'
import Logo from '../Images/logo'
import Button from '../Components/CustomButton/CustomButton';
import LoginForm from '../Components/LoginPage/LoginForm';
import colors from '../Utilities/colors';
import LoadingSpinner from '../Images/LoadingSpinner';

function LoginPage ({navigation}) {
    const [isLoading, setIsLoading] = useState(false)
    const [loginFormValidity, setLoginFormValidity] = useState(false)
    const [loginBtnText, setLoginBtnText] = useState('LOG IN')

    const handleLogIn = () => {
        setIsLoading(!isLoading)
        setLoginBtnText(isLoading ? 'LOG in' : 'BACK')
        setTimeout(() => {
            navigation.navigate('Dashboard')
        }, 2000);
    }

    return(
        <ViewMainContainer>
            <ViewMain style = {{backgroundColor: 'rgba(0,0,0,0)'}}>
                <TextH1 style={{color: colors.MainColor}}>
                    S T U D I
                </TextH1>
                <TextH3 style={{color: colors.MainColor}}>
                    CONNECT WITH EXPERTS, STUDENTS
                </TextH3>
            </ViewMain>

            <ViewMain style={{ backgroundColor: colors.MainColor,width: 'auto', borderRadius: 100}}>
                <Logo shade={colors.DarkShade}/>
            </ViewMain>
            
            <ViewMain style={{marginVertical: '3%', paddingVertical: '3%', backgroundColor: colors.MainColor, paddingHorizontal: '5%'}}>
                {isLoading ? <LoadingSpinner stroke={colors.DarkShade}/> : (
                    <LoginForm FormValid={setLoginFormValidity} textStyle={{color: colors.DarkShade}} inputStyle={{color: colors.DarkShade, borderColor: colors.DarkShade}}/>
                )}
            </ViewMain>

            <Button style={{marginVertical: '5%',backgroundColor: colors.LightAccent}} label={loginBtnText} labelStyle={{color: colors.DarkShade}} onPress={handleLogIn}/>

            <TextH3 style={{color: colors.LightAccent}}>
                -------- OR --------
            </TextH3>

            <Button style={{marginVertical: '5%', backgroundColor: colors.LightAccent }} label={"CREAT ACCOUNT"} labelStyle={{color: colors.DarkShade}} onPress={()=>navigation.navigate('SignUpPage' )}/>

        </ViewMainContainer>
    )
}

export default LoginPage

// import React, { useState } from 'react';
// import ViewMainContainer from './Components/CustomView/ViewMainContainer';
// import ViewMain from './Components/CustomView/ViewMain';
// import colors from './Utilities/colors';
// import TextH1 from './Components/CustomText/TextH1';
// import TextH2 from './Components/CustomText/TextH2';
// import TextH3 from './Components/CustomText/TextH3';
// import Button from './Components/CustomButton/CustomButton';
// import CustomTextInput from './Components/CustomTextInput/CustomTextInput';
// import CustomDateTimePicker from './Components/DateTimePicker/DateTimePicker';

// export default function App() {
//   const [dtValue, setDTValue] = useState(new Date())
//   return (
//     <ViewMainContainer >
//       <ViewMain style={{backgroundColor: colors.LightAccent}}>
//         <TextH1> Hi</TextH1>
//         <TextH2> Hi</TextH2>
//         <TextH3> Hi</TextH3>
//         <Button label={'SUBMIT'} style={{backgroundColor: colors.LightAccent}}/>
//         <CustomTextInput placeholder={"test"}/>
//         <CustomDateTimePicker value={dtValue} setValue={setDTValue}/>
//       </ViewMain>
//       <ViewMain style={{backgroundColor: colors.LightAccent}} />
//       <ViewMain style={{backgroundColor: colors.MainColor}} />
//       <ViewMain style={{backgroundColor: colors.LightAccent}} />
//       <ViewMain style={{backgroundColor: colors.DarkShade}} />
//     </ViewMainContainer>
//   );
// }

