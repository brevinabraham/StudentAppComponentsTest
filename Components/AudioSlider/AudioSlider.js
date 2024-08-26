import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

const AudioSlider = () => {
    const [value, setValue] = useState(0)    

    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
            <Text style={{width: 20}}> {Math.round(value)}</Text>
            <Slider 
                style={{flex: 1}}
                minimumValue={0}
                maximumValue={10}    
                maximumTrackTintColor="#FFFFFF"
                minimumTrackTintColor="#000000"
                value={value}
                onValueChange={(val)=>setValue(val)}
            />
            <Text style={{width: 20}}> 10</Text>
        </View>
    )

}

export default AudioSlider