import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ViewMain from '../CustomView/ViewMain';
import TextH3 from '../CustomText/TextH3';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import colors, { DARK_COLORS } from '../../Utilities/colors';

function LoginForm(props) {
    const [loginCred, setLoginCred] = useState({ email: '', password: '' });
    const [err, setErr] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [showInfoErr, setShowInfoErr] = useState(false);

    const validationColor = props.inputStyle.borderColor;
    const validationFailColor = DARK_COLORS[Object.keys(colors).find(key => colors[key] === props.inputStyle.borderColor)];

    const handleInputs = (key, value) => {
        setLoginCred(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    useEffect(() => {
        validateForm();
    }, [loginCred]);

    const validateForm = () => {
        let errors = {};

        if (!loginCred.email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(loginCred.email)) {
            errors.email = 'Email is invalid.';
        }

        if (!loginCred.password) {
            errors.password = 'Password is required.';
        } else if (loginCred.password.length < 2) {
            errors.password = 'Password must be at least 2 characters.';
        }

        setErr(errors);
        const isValid = Object.keys(errors).length === 0;
        setIsFormValid(isValid);

        handleCheck(isValid);
    };

    const handleCheck = (isValid) => {
        if (isValid) {
            console.log('Form submitted successfully!');
            setShowInfoErr(false);
        } else {
            console.log('Form has errors. Please correct them.');
            setShowInfoErr(true);
        }
    };

    return (
        <View style={[styles.container, props.styles]}>
            <TextH3 style={[props?.textStyle]}>
                EMAIL
            </TextH3>
            <CustomTextInput
                style={{
                    ...props?.inputStyle,
                    borderColor: showInfoErr && err.email ? validationFailColor : validationColor,
                    color: showInfoErr && err.email ? validationFailColor : validationColor,
                }}
                placeholder={'example@email.com'}
                value={loginCred.email}
                onChangeText={(value) => handleInputs("email", value)}
            />
            {showInfoErr && err.email && (
                <TextH3 style={{color: showInfoErr && err.email ? validationFailColor : validationColor}}>
                    {err.email}
                </TextH3>
            )}
            <TextH3 style={[props?.textStyle]}>
                PASSWORD
            </TextH3>
            <CustomTextInput
                style={{
                    ...props?.inputStyle,
                    borderColor: showInfoErr && err.password ? validationFailColor : validationColor,
                    color: showInfoErr && err.password ? validationFailColor : validationColor,
                }}
                secureTextEntry={true}
                value={loginCred.password}
                onChangeText={(value) => handleInputs("password", value)}
            />
            {showInfoErr && err.password && (
                <TextH3 style={{color: showInfoErr && err.password ? validationFailColor : validationColor}}>
                    {err.password}
                </TextH3>
            )}
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
});
