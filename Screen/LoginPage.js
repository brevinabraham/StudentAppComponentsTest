import React from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH1 from '../Components/CustomText/TextH1'
import TextH3 from '../Components/CustomText/TextH3'
import Logo from '../Images/logo'
import Button from '../Components/CustomButton/CustomButton';
import LoginForm from '../Components/LoginPage/LoginForm';

function LoginPage () {
    return(
        <ViewMainContainer>
            <ViewMain style = {{backgroundColor: 'rgba(255,255,255,0)'}}>
                <TextH1 style={{color:'white'}}>
                    STUDI
                </TextH1>
                <TextH3 style={{color:'white'}}>
                    CONNECT WITH EXPERTS, STUDENTS
                </TextH3>
            </ViewMain>

            <ViewMain style={{flex: 1, backgroundColor: 'rgba(255,255,255,0)'}}>
                <ViewMain style={{backgroundColor: 'pink',width: 'auto', borderRadius: 100}}>
                    <Logo shade={'blue'}/>
                </ViewMain>
            </ViewMain>

            <ViewMain style={{flex: 2, backgroundColor:'white', paddingHorizontal: '5%'}}>
                <LoginForm/>
            </ViewMain>

            <Button style={{marginVertical: '5%',backgroundColor: 'lightblue'}} label={"LOG IN"} labelStyle={{color: 'blue'}} onPress={()=>{console.log("hi")}}/>

            <TextH3 style={{color: 'white'}}>
                -------- OR --------
            </TextH3>

            <Button style={{marginVertical: '5%', backgroundColor: 'lightblue'}} label={"CREAT ACCOUNT"} labelStyle={{color: 'blue'}} onPress={()=>{console.log("hi")}}/>
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
//       <ViewMain style={{backgroundColor: colors.LightShade}}>
//         <TextH1> Hi</TextH1>
//         <TextH2> Hi</TextH2>
//         <TextH3> Hi</TextH3>
//         <Button label={'SUBMIT'} style={{backgroundColor: colors.DarkAccent}}/>
//         <CustomTextInput placeholder={"test"}/>
//         <CustomDateTimePicker value={dtValue} setValue={setDTValue}/>
//       </ViewMain>
//       <ViewMain style={{backgroundColor: colors.LightAccent}} />
//       <ViewMain style={{backgroundColor: colors.MainColor}} />
//       <ViewMain style={{backgroundColor: colors.DarkAccent}} />
//       <ViewMain style={{backgroundColor: colors.DarkShade}} />
//     </ViewMainContainer>
//   );
// }

