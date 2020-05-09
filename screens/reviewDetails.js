import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {globalStyles} from "../styles/global";

export default function ReviewDetails({navigation}){
    const pressHandler = () =>{
        navigation.goBack()
    }
    return (
        <View style={globalStyles.container}>
            <Text>
                Review Details
            </Text>
            <Button title="Back to Home Screen" onPress={pressHandler}/>
        </View>
    )
}
