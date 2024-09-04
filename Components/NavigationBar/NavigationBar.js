import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Add from "../../Images/Add";
import UserIcon from "../../Images/UserIcon";
import Chats from "../../Images/Chats";
import { TouchableNativeFeedback } from "react-native";
import colors from "../../Utilities/colors";

function NavigationBar ({chatsOnPress, addOnPress, accountOnPress}) {
    const [selected, setSelected] = useState(null);
    const [selectedHighlight, setSelectedHighlight] = useState({
        chats: false,
        add: false,
        account: false,
    });

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 15,
            position: 'absolute',
            bottom: -15,
            backgroundColor: colors.LightShade,
            paddingBottom: 15
        },
        common: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 3
        },
        chats: {
            borderTopWidth: selectedHighlight.chats ? 2 : 0,
            paddingTop: selectedHighlight.chats ? 2: 0,
            borderTopColor: 'black',
            borderBottomColor: 'white',
        },
        add: {
            borderTopWidth: selectedHighlight.add ? 2 : 0,
            paddingTop: selectedHighlight.add ? 2 : 0,
            borderTopColor: 'black',
        },
        account: {
            borderTopWidth: selectedHighlight.account ? 2 : 0,
            paddingTop: selectedHighlight.account ? 2 : 0,
            borderTopColor: 'black',
            borderBottomColor: 'white',
        },
        text: {
            fontSize: 14,
            textAlign: 'center',
            textAlignVertical: 'center'
        },
    });

    const handleSelected = (selectedItem) => {
        setSelected(selectedItem);
        setSelectedHighlight({
            chats: selectedItem == "chats" ? !selectedHighlight["chats"]: false, 
            add: selectedItem == "add" ? !selectedHighlight["add"]: false, 
            account: selectedItem == "account"? !selectedHighlight["account"]: false
        })
    };

    return (
        <View style={styles.container}>
            <TouchableNativeFeedback onPress={() => {handleSelected("chats"); chatsOnPress()}}>
                <View style={[styles.common, styles.chats]}>
                    <Chats fill={colors.DarkShade}/>
                    <Text style={styles.text}>Chats</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => {handleSelected("add"); addOnPress()}}>
                <View style={[styles.common, styles.add]}>
                    <Add fill={colors.DarkShade}/>
                    <Text style={styles.text}>Add</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => {handleSelected("account"); accountOnPress()}}>
                <View style={[styles.common, styles.account]}>
                    <UserIcon fill={colors.DarkShade}/>
                    <Text style={styles.text}>Account</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

export default NavigationBar;
