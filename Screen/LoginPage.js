import React from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH1 from '../Components/CustomText/TextH1'
import TextH2 from '../Components/CustomText/TextH2'
import Logo from '../Images/logo'


function LoginPage () {
    return(
        <ViewMainContainer>
            <ViewMain style = {{backgroundColor: 'rgba(255,255,255,0)', flex: '1'}}>
                <TextH1 style={{color:'white'}}>
                    CONNECT WITH EXPERTS, STUDENTS
                </TextH1>
            </ViewMain>
            <ViewMain style = {{backgroundColor: 'white', flex: '1'}}>
                <TextH2 style={{color:'black'}}>
                    LOGO/ NAME
                </TextH2>
                <ViewMain>
                    <Logo/>
                </ViewMain>
            </ViewMain>
            <ViewMain style = {{backgroundColor: 'white'}}>
                <TextH2 style={{color:'black'}}>
                    FORM
                </TextH2>
            </ViewMain>
            <ViewMain style = {{backgroundColor: 'white'}}>
                <TextH2 style={{color:'black'}}>
                    LOGIN BUTTON
                </TextH2>
            </ViewMain>
            <ViewMain style = {{backgroundColor: 'white'}}>
                <TextH2 style={{color:'black'}}>
                    --- OR ---
                </TextH2>
            </ViewMain>
            <ViewMain style = {{backgroundColor: 'white'}}>
                <TextH2 style={{color:'black'}}>
                    CREATE ACCOUNT
                </TextH2>
            </ViewMain>
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

