import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ViewMain from '../CustomView/ViewMain';
import TextH3 from '../CustomText/TextH3';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import colors, { DARK_COLORS } from '../../Utilities/colors';
import LoadingSpinner from '../../Images/LoadingSpinner';

import CustomDateTimePicker from '../DateTimePicker/DateTimePicker';

function SignUpForm(props) {
    return (
        <View style={[styles.container, props.styles]}>
            <TextH3 style={[props?.textStyle]}>
                FULL NAME
            </TextH3>
            <CustomTextInput
                style={{
                    ...props?.inputStyle,
                    borderColor: props?.inputStyle?.borderColor,
                    color: props?.inputStyle?.color,
                }}
                placeholder={'First Name'}
                value={false}
                onChangeText={false}
            />
            <TextH3 style={[props?.textStyle]}>
                DATE OF BIRTH
            </TextH3>
            <CustomDateTimePicker
                value={new Date()}
                style={{
                    ...props?.inputStyle,
                    color: props?.inputStyle?.borderColor,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: props?.inputStyle?.borderColor
                }}
            />
            <TextH3 style={[props?.textStyle]}>
                EMAIL
            </TextH3>
            <CustomTextInput
                style={{
                    ...props?.inputStyle,
                    borderColor: props?.inputStyle?.borderColor,
                    color: props?.inputStyle?.color,
                }}
                placeholder={'First Name'}
                value={false}
                onChangeText={false}
            />
            <TextH3 style={[props?.textStyle]}>
                PASSWORD
            </TextH3>
            <CustomTextInput
                style={{
                    ...props?.inputStyle,
                    borderColor: props?.inputStyle?.borderColor,
                    color: props?.inputStyle?.color,
                }}
                placeholder={'First Name'}
                value={false}
                onChangeText={false}
            />
            <TextH3 style={[props?.textStyle]}>
                CONFIRM PASSWORD
            </TextH3>
            <CustomTextInput
                style={{
                    ...props?.inputStyle,
                    borderColor: props?.inputStyle?.borderColor,
                    color: props?.inputStyle?.color,
                }}
                placeholder={'First Name'}
                value={false}
                onChangeText={false}
            />
        </View>
    );
}

export default SignUpForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
});
