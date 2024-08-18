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
            <SearchBar onChangeText={setMessage} />
                {/* style={{position: 'absolute', top: 5, left: 0, marginLeft: '-3%'}} */}
            <ViewMainContainer scrollViewContentStyle={{justifyContent: 'flex-start'}}>
                <ViewMain style={{flex: 1, backgroundColor: colors.LightShade, marginTop: '-2%'}}>
                    <TextH1 style={{color: 'black'}}>
                        {message.length === 0 ? 'message to be entered' : message}
                    </TextH1>
                </ViewMain>
            </ViewMainContainer>
        </>
    )
}

export default Dashboard