import React, { useState } from 'react';
import ViewMainContainer from '../Components/CustomView/ViewMainContainer';
import ViewMain from '../Components/CustomView/ViewMain';
import TextH1 from '../Components/CustomText/TextH1';
import SearchBar from '../Components/SearchBar/SearchBar';
import colors from '../Utilities/colors';

function Dashboard ({navigation}) {
    const [message, setMessage] = useState('message to be entered')
    return(
        <>
            <SearchBar onChangeText={setMessage}/>
            <ViewMainContainer scrollViewContentStyle={{justifyContent: 'flex-start'}}>
                <ViewMain style={{flex: 1, backgroundColor: colors.LightShade}}>
                    <TextH1 style={{color: 'black'}}>
                        {message}
                    </TextH1>
                </ViewMain>
            </ViewMainContainer>
        </>
    )
}

export default Dashboard