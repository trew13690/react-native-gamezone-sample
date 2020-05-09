import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {globalStyles} from "../styles/global";
import ReviewDetails from "./reviewDetails";


export default function Home({navigation}){
     const pressHandler = () =>
       {
           navigation.navigate('ReviewDetails');
       }


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                Home Screen
            </Text>
            <Button title='Go to review ' onPress={pressHandler}/>
        </View>
    )
}
