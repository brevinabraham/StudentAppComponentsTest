import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import ViewMainContainer from './Components/CustomView/ViewMainContainer';
import ViewMain from './Components/CustomView/ViewMain';
import colors from './Utilities/colors';
import TextH1 from './Components/CustomText/TextH1';
import TextH2 from './Components/CustomText/TextH2';
import TextH3 from './Components/CustomText/TextH3';
import Button from './Components/CustomButton/CustomButton';
import CustomTextInput from './Components/CustomTextInput/CustomTextInput';
import CustomDateTimePicker from './Components/DateTimePicker/DateTimePicker';


export default function App() {
  const [dtValue, setDTValue] = useState(new Date())
  return (
    <ViewMainContainer >
      <ViewMain style={{backgroundColor: colors.LightShade}}>
        <TextH1> Hi</TextH1>
        <TextH2> Hi</TextH2>
        <TextH3> Hi</TextH3>
        <Button label={'SUBMIT'} style={{backgroundColor: colors.DarkAccent}}/>
        <CustomTextInput placeholder={"test"}/>
        <CustomDateTimePicker value={dtValue} setValue={setDTValue}/>
        <TextH2>{String(dtValue.toLocaleDateString())}</TextH2>
      </ViewMain>
      <ViewMain style={{backgroundColor: colors.LightAccent}} />
      <ViewMain style={{backgroundColor: colors.MainColor}} />
      <ViewMain style={{backgroundColor: colors.DarkAccent}} />
      <ViewMain style={{backgroundColor: colors.DarkShade}} />
    </ViewMainContainer>
  );
}

