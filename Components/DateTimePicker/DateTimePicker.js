import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import TextH2 from '../CustomText/TextH2';

function CustomDateTimePicker(props) {
    const [show, setShow] = useState(false)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const handleDateChange = (event, selectedDate) => {
        if (event.type === 'set'){
            props.setValue(new Date(selectedDate))
            Platform.OS === 'android' ? setShow(!show) : null
        } else {
            Platform.OS === 'android' ? setShow(!show) : null
        }   
    }
    const dateTimePicker = <DateTimePicker 
        value={props.value} 
        themeVariant="dark"
        onChange={handleDateChange}
        accentColor='dark'
        focusable={true}
    />

    return (
        <>
            {Platform.OS === 'ios' && (
                <View style={[styles.calendarView,props.style]}>
                    {dateTimePicker}
                </View>
                
                )
            }
            {Platform.OS === 'android' && 
            <View onTouchStart={()=>{setShow(!show)}} style={[styles.calendarView,props.style]}>
                <TextH2 style={styles.calendarViewText}>
                    {props.value.toLocaleDateString(options)}
                </TextH2>
            </View>}
            {show && (
                dateTimePicker
                )
            }
        </>
    )
}

export default CustomDateTimePicker

const styles = StyleSheet.create({
  calendarView: {
    width: '100%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    marginVertical: '1%',
    backgroundColor: 'rgba(0,0,0,0.7)',//should this me changed later for the color schemes?
    alignItems: 'center'
  },
  calendarViewText: {
    color: 'white'
  }
})